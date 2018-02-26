package com.example.bookstore;

import com.example.bookstore.domain.Book;
import com.example.bookstore.domain.BookRepository;
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

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder
														 application) {
		return application.sources(BookStoreApplication.class);
	}

	public static void main(String[] args) {

		SpringApplication.run(BookStoreApplication.class, args);
	}

	@Bean
	public CommandLineRunner studentDemo(BookRepository brepository) {
		return (args) -> {
			log.info("Inserting dummy data");
			brepository.save(new Book("Harry Potter", "J.K.Rowling", "2014", "12345-21", "12,23"));
			brepository.save(new Book("Da Vinci Code", "Robert Langdon", "2001", "1232-23", "11,23"));

			log.info("Showing all books");
			for (Book book : brepository.findAll()) {
				log.info(book.toString());
			}

		};
	}

}
