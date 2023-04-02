package com.library.LibraryManager.dao;

import com.library.LibraryManager.models.Book;

import java.util.List;

public interface BookDao {
    public List<Book> getAllBooks();
    public int addBook(Book book);
    public Book getBookById(String title);

    int deleteBookById(String title);


    int updateBookById(String title, Book book);
}
