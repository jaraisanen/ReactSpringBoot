package com.example.bookstore.service;

import com.example.bookstore.model.AppUser;

public interface UserService {
    void save(AppUser newUser);
    AppUser findById(Long id);
    AppUser findOne(String username);
    void delete(long id);
}
