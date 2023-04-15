package com.library.LibraryManager.dao;

import com.library.LibraryManager.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository("postgres")
public class BookDataAccessService implements BookDao {
    // TODO: now that successful fake post request, READ and CREATE from actual DB
    private JdbcTemplate jdbcTemplate;
    public static List<Book> DB = new ArrayList<>();
    @Autowired
    public BookDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public List<Book> getAllBooks() {
        String sql = "SELECT * FROM book";
        return jdbcTemplate.query(sql, new RowMapper<Book>() {
            @Override
            public Book mapRow(ResultSet resultSet, int rowNum) throws SQLException {
                Book book = new Book(resultSet.getInt(1), resultSet.getString(2), resultSet.getString(3));
                return book;
            }
        });
    }
    @Override
    public int addBook(Book book) {
        return jdbcTemplate.update("INSERT INTO book (title, category) VALUES (?, ?)", book.getTitle(), book.getCategory());
    }

    @Override
    public Book getBookById(Integer id) {
        String sql = "SELECT * FROM book WHERE id=?";
        return jdbcTemplate.queryForObject(
                sql,
                new Object[]{id},
                new RowMapper<Book>() {
                    @Override
                    public Book mapRow(ResultSet resultSet, int rowNum) throws SQLException {
                        Book book = new Book(resultSet.getInt(1), resultSet.getString(2), resultSet.getString(3));
                        return book;                    }
                }

        );
    }
    @Override
    public int deleteBookById(Integer id) {
        String sql = "DELETE FROM book WHERE id=?";
        return jdbcTemplate.update(sql, id);
    }

    @Override
    public int updateBookById(Integer id, Book book) {
        String sql = "UPDATE book SET category = ? WHERE id = ?";
        return jdbcTemplate.update(sql, book.getCategory(), id);
    }


}
