package com.example.bookstore.web;

import com.example.bookstore.domain.Book;
import com.example.bookstore.domain.BookRepository;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.persistence.ManyToOne;
import java.util.List;

@Controller
public class StoreController {
    @Autowired
    @ManyToOne
    @JsonIgnore
    private BookRepository repository;

    // Rest Api provider methods

    @RequestMapping("/books")
    public @ResponseBody
    List<Book> bookListRest() {
        return (List<Book>) repository.findAll();
    }

    @RequestMapping(value = "/books/{id}", method = RequestMethod.GET)
    public @ResponseBody
    Book findBookRest(@PathVariable("id") Long bookId) {
        return repository.findOne(bookId);
    }
}

