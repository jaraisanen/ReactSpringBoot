package com.example.bookstore.repository;

import com.example.bookstore.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends CrudRepository<Book, Long> {
    List<Book> findByTitle(@Param("title") String title);
}
