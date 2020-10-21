package com.navis.movies.controllers;

import com.navis.movies.dao.MoviesDAO;
import com.navis.movies.dto.MovieResultDTO;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static com.navis.movies.Application.MOVIE_URL;
import javax.ws.rs.QueryParam;

@RestController
@RequestMapping(MOVIE_URL)
public class MovieController {

    @Autowired
    MoviesDAO moviesDAO;

    @Operation(description = "Get featured Movies")
    @GetMapping("/featured")
    public List<MovieResultDTO> getFeaturedMovies()  {
        return moviesDAO.getFeaturedMovies();
    }
    
    @Operation(description = "Search Movies")
    @GetMapping("/search")
    public List<MovieResultDTO> getMovies(
        @QueryParam("title") String title,
        @QueryParam("actor") String actor,
        @QueryParam("genre") String genre_id
    )  {
        if(title != null && !title.isEmpty()){
            if(actor!=null && !actor.isEmpty()){
                if(genre_id != null && !genre_id.isEmpty())
                    return moviesDAO.getMoviesByTitleActorGenre(title, actor, genre_id);
                else return moviesDAO.getMoviesByTitleActor(title, actor);
            }
            if(genre_id != null && !genre_id.isEmpty())
                return moviesDAO.getMoviesByTitleGenre(title, genre_id);
            else return moviesDAO.getMoviesByTitle(title);
        }
        if(actor != null && !actor.isEmpty()){
            if(genre_id != null && !genre_id.isEmpty())
                return moviesDAO.getMoviesByActorGenre(actor, genre_id);
        return moviesDAO.getMoviesByActor(actor);
        }
        return moviesDAO.getMoviesByGenre(genre_id);
    }
}
