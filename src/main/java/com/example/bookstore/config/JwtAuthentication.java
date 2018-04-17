package com.example.bookstore.config;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.SignatureException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;

import static com.example.bookstore.model.Constants.HEADER_STRING;
import static com.example.bookstore.model.Constants.TOKEN_PREFIX;

public class JwtAuthentication extends OncePerRequestFilter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtTokenUtil jwtToken;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filtering) throws IOException, ServletException {
        String header = request.getHeader(HEADER_STRING);
        String username = null;
        String authToken = null;

        /*
         * Checks the authentication header from the token.
         * --> authentication / rejection for requests
         */

        if (header != null && header.startsWith(TOKEN_PREFIX)) {
            authToken = header.replace(TOKEN_PREFIX, "");
            try {
                username = jwtToken.getUsernameFromToken(authToken);
            } catch (IllegalArgumentException error) {
                logger.error("Unable to retrieve username from token", error);
            } catch (ExpiredJwtException error) {
                logger.warn("Token expired", error);
            } catch (SignatureException error) {
                logger.error(" Username or Password invalid.");
            }
        } else {
            logger.warn("Couldn't find bearer string, will ignore the header");
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails details = userDetailsService.loadUserByUsername(username);

            if (jwtToken.validateToken(authToken, details)) {
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(details, null, Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN")));
                auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                logger.info("User authenticated " + username);

                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        filtering.doFilter(request, response);
    }
}


