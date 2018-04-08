package com.example.bookstore;

import com.example.bookstore.model.Book;
import com.example.bookstore.repository.BookRepository;
import com.example.bookstore.model.AppUser;
import com.example.bookstore.repository.AppUserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BookStoreApplication extends SpringBootServletInitializer {

    private static final Logger log = LoggerFactory.getLogger(BookStoreApplication.class);

    public static void main(String[] args) {

        SpringApplication.run(BookStoreApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder
                                                         application) {
        return application.sources(BookStoreApplication.class);
    }

    @Bean
    public CommandLineRunner studentDemo(BookRepository brepository, AppUserRepository urepository) {
        return (args) -> {

            AppUser appUser1 = new AppUser("user", "$2a$10$Ol2a8RXrE/Nymj0qGbO.4ekvOUlgPeqor.F5cPhi2NfGMTVNLPrnW", "USER");
            AppUser appUser2 = new AppUser("admin", "$2a$10$JYZAiDD5ggi8nkNE7MBLBONxF81Feiv7KMZMdRe9ej0v3WMcYzM/C", "ADMIN");
            urepository.save(appUser1);
            urepository.save(appUser2);

            log.info("Inserting test data");
            brepository.save(new Book("Harry Potter", "J.K.Rowling", "2014", "12345-21", "12,23"));
            brepository.save(new Book("Da Vinci Code", "Robert Langdon", "2001", "1232-23", "11,23"));
            brepository.save(new Book("Serato", "Sano Hato", "1989", "22242-21", "14,23"));
            brepository.save(new Book("The Hobbit", "J.R.R. Tolkien", "2001", "1232-23", "15,23"));


            log.info("Showing all books");
            for (Book book : brepository.findAll()) {
                log.info(book.toString());
            }

        };
    }

}
