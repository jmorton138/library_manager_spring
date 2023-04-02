package com.library.LibraryManager.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Book {
    private final String title;
    private final String category;

    public Book(@JsonProperty("title") String title, @JsonProperty("category") String category) {
        this.title = title;
        this.category = category;
    }

    public String getCategory() {
        return category;
    }

    public String getTitle() {
        return title;
    }
}
