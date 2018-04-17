package com.example.bookstore.controller;

import com.example.bookstore.model.AppUser;
import com.example.bookstore.model.Book;
import com.example.bookstore.repository.BookRepository;
import com.example.bookstore.service.UserService;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.ManyToOne;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class StoreController {
    @Autowired
    @ManyToOne
    @JsonIgnore
    private BookRepository repository;

    @Autowired
    private UserService userService;

    // Rest Api provider methods

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public void saveUser(@RequestBody AppUser user) {
        userService.save(user);
    }
}

