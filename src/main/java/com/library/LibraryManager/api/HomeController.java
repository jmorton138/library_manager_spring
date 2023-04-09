package com.library.LibraryManager.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping(value = {"/", "/create", "/read", "/update", "/delete"})
    public String index() {
        return "index";
    }
}
