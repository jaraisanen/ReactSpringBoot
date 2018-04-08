package com.example.bookstore.service;

import com.example.bookstore.model.AppUser;
import com.example.bookstore.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService, UserService {

    @Autowired
    private BCryptPasswordEncoder bcryptEncoder;

    @Autowired
    private AppUserRepository uRepository;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = uRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                AuthorityUtils.createAuthorityList(user.getRole()));
    }

    @Override
    public AppUser findOne(String username) {
        return uRepository.findByUsername(username);
    }

    @Override
    public AppUser findById(Long id) {
        return uRepository.findOne(id);
    }

    @Override
    public void delete(long id) {
        uRepository.delete(id);
    }

    @Override
    public void save(AppUser user) {
        if (uRepository.findByUsername(user.getUsername()) == null) {
            AppUser newUser = new AppUser();
            newUser.setUsername(user.getUsername());
            newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
            newUser.setRole("User");
            uRepository.save(newUser);
            System.out.print("User " + user.getUsername() + user.getPassword() + " created");
        } else {
            System.out.print("User already exists");
        }
    }

        private List<SimpleGrantedAuthority> getAuthority() {
        return Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"));
    }

}