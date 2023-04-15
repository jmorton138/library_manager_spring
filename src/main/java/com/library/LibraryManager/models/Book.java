package com.library.LibraryManager.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Book {
    private final Integer id;
    private final String title;
    private final String category;

    public Book(@JsonProperty("id") Integer id, @JsonProperty("title") String title, @JsonProperty("category") String category) {
        this.id = id;
        this.title = title;
        this.category = category;
    }

    public String getCategory() {
        return category;
    }

    public String getTitle() {
        return title;
    }

    public Integer getID() {
        return id;
    }

}
