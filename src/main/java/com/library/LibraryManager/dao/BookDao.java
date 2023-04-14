package com.library.LibraryManager.dao;

import com.library.LibraryManager.models.Book;

import java.util.List;

public interface BookDao {
    public List<Book> getAllBooks();
    public int addBook(Book book);
    public Book getBookById(Integer id);

    int deleteBookById(Integer id);


    int updateBookById(Integer id, Book book);
}
