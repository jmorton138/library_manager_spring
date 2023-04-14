package com.library.LibraryManager.api;

import com.library.LibraryManager.models.Book;
import com.library.LibraryManager.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {
    private final BookService bookService;
    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("books/{id}")
    public Book getBookById(@PathVariable("id") Integer id) {
        return bookService.getBookById(id);
    }
    @PostMapping("/book")
    public int addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }

    @PutMapping("books/{id}")
    public int updateBookById(@PathVariable("id") Integer id, @RequestBody Book book) {
        return bookService.updateBookById(id, book);
    }

    @DeleteMapping("/books/{id}")
    public int deleteBookById(@PathVariable("id") Integer id) {
        return bookService.deleteBookById(id);
    }

}
