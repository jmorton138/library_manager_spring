package com.library.LibraryManager.service;

import com.library.LibraryManager.dao.BookDao;
import com.library.LibraryManager.dao.BookDataAccessService;
import com.library.LibraryManager.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BookService {
    private final BookDao bookDao;
    @Autowired
    public BookService(@Qualifier("postgres") BookDao  bookDao) {
        this.bookDao = bookDao;
    }

    public List<Book> getAllBooks() {
        return bookDao.getAllBooks();
    }

    public int addBook(Book book) {
        return bookDao.addBook(book);
    }

    public Book getBookById(String title) {
        return bookDao.getBookById(title);
    }

    public int updateBookById(String title, Book book) {
        return bookDao.updateBookById(title, book);
    }

    public int deleteBookById(String title) {
        return bookDao.deleteBookById(title);
    }
}
