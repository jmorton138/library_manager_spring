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

    @GetMapping("book/{title}")
    public Book getBookById(@PathVariable("title") String title) {
        return bookService.getBookById(title);
    }
    @PostMapping("/book")
    public int addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }

    @PutMapping("book/{title}")
    public int updateBookById(@PathVariable("title") String title, @RequestBody Book book) {
        return bookService.updateBookById(title, book);
    }

    @DeleteMapping("/book/{title}")
    public int deleteBookById(@PathVariable("title") String title) {
        return bookService.deleteBookById(title);
    }

}
