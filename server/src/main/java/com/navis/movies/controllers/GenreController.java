/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.navis.movies.controllers;

import static com.navis.movies.Application.MOVIE_URL;
import com.navis.movies.dao.GenreDAO;
import com.navis.movies.dto.GenreResultDTO;
import io.swagger.v3.oas.annotations.Operation;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static com.navis.movies.Application.GENRE_URL;


@RestController
@RequestMapping(GENRE_URL)
public class GenreController {
    
    @Autowired
    GenreDAO genresDAO;

    @Operation(description = "Get Genre List")
    @GetMapping("/")
    public List<GenreResultDTO> getGenres()  {
        return genresDAO.getGenres();
    }
}