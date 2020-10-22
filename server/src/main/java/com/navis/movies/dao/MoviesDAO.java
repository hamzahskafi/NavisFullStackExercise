package com.navis.movies.dao;

import com.navis.movies.dto.MovieDetailsDTO;
import com.navis.movies.dto.MovieResultDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Types;
import java.util.List;

@Repository
public class MoviesDAO {
    
    @Autowired
    NamedParameterJdbcTemplate jdbcTemplate;
    
    public List<MovieResultDTO> getFeaturedMovies() {
        final List<MovieResultDTO> movies = jdbcTemplate.query(
                "SELECT m.id, m.title, m.year, m.rating, m.poster, f.sort from movies m inner join featured_movies f on f.movie_id = m.id order by sort",
                (rs, rowNum) -> {
                    MovieResultDTO dto = new MovieResultDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setTitle(rs.getString("title"));
                    dto.setYear(rs.getString("year"));
                    dto.setRating(rs.getString("rating"));
                    dto.setPoster(rs.getString("poster"));
                    dto.setSort(rs.getInt("sort"));
                    return dto;
                }
        );
        return movies;
    }
    
    public List<MovieResultDTO> getMoviesByTitle(String title) {
        final List<MovieResultDTO> movies = jdbcTemplate.query(
                "SELECT distinct m.id, m.title, m.year, m.rating, m.poster "
                + "from movies m "
                + "where lower(m.title)  like lower('%" + title + "%') ",
                (rs, rowNum) -> {
                    MovieResultDTO dto = new MovieResultDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setTitle(rs.getString("title"));
                    dto.setYear(rs.getString("year"));
                    dto.setRating(rs.getString("rating"));
                    dto.setPoster(rs.getString("poster"));
                    return dto;
                }
        );
        return movies;
    }
    
    public List<MovieResultDTO> getMoviesByActor(String actor) {
        final List<MovieResultDTO> movies = jdbcTemplate.query(
                "SELECT distinct m.id, m.title, m.year, m.rating, m.poster "
                + "from movies m, actors a, movie_to_actor ma "
                + "where lower(a.name)  like lower('%" + actor + "%') and "
                + "m.id = ma.movie_id and a.id=ma.actor_id",
                (rs, rowNum) -> {
                    MovieResultDTO dto = new MovieResultDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setTitle(rs.getString("title"));
                    dto.setYear(rs.getString("year"));
                    dto.setRating(rs.getString("rating"));
                    dto.setPoster(rs.getString("poster"));
                    return dto;
                }
        );
        return movies;
    }
    
    public List<MovieResultDTO> getMoviesByGenre(String genre_id) {
        final List<MovieResultDTO> movies = jdbcTemplate.query(
                "SELECT distinct m.id, m.title, m.year, m.rating, m.poster "
                + "from movies m, movie_to_genre mg "
                + "where m.id = mg.movie_id and mg.genre_id=" + genre_id,
                (rs, rowNum) -> {
                    MovieResultDTO dto = new MovieResultDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setTitle(rs.getString("title"));
                    dto.setYear(rs.getString("year"));
                    dto.setRating(rs.getString("rating"));
                    dto.setPoster(rs.getString("poster"));
                    return dto;
                }
        );
        return movies;
    }
    
    public List<MovieResultDTO> getMoviesByTitleActor(String title, String actor) {
        final List<MovieResultDTO> movies = jdbcTemplate.query(
                "SELECT distinct m.id, m.title, m.year, m.rating, m.poster "
                + "from movies m, actors a, movie_to_actor ma "
                + "where lower(a.name)  like lower('%" + actor + "%') and "
                + "lower(m.title)  like lower('%" + title + "%') and "
                + "m.id = ma.movie_id and a.id=ma.actor_id",
                (rs, rowNum) -> {
                    MovieResultDTO dto = new MovieResultDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setTitle(rs.getString("title"));
                    dto.setYear(rs.getString("year"));
                    dto.setRating(rs.getString("rating"));
                    dto.setPoster(rs.getString("poster"));
                    return dto;
                }
        );
        return movies;
    }
    
    public List<MovieResultDTO> getMoviesByTitleGenre(String title, String genre_id) {
        final List<MovieResultDTO> movies = jdbcTemplate.query(
                "SELECT distinct m.id, m.title, m.year, m.rating, m.poster "
                + "from movies m, movie_to_genre mg "
                + "where lower(m.title)  like lower('%" + title + "%') and "
                + "m.id = mg.movie_id and mg.genre_id=" + genre_id,
                (rs, rowNum) -> {
                    MovieResultDTO dto = new MovieResultDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setTitle(rs.getString("title"));
                    dto.setYear(rs.getString("year"));
                    dto.setRating(rs.getString("rating"));
                    dto.setPoster(rs.getString("poster"));
                    return dto;
                }
        );
        return movies;
    }
    
    public List<MovieResultDTO> getMoviesByActorGenre(String actor, String genre_id) {
        final List<MovieResultDTO> movies = jdbcTemplate.query(
                "SELECT distinct m.id, m.title, m.year, m.rating, m.poster "
                + "from movies m, movie_to_genre mg, actors a, movie_to_actor ma "
                + "where lower(a.name)  like lower('%" + actor + "%') and "
                + "a.id=ma.actor_id and m.id=ma.movie_id and m.id=mg.movie_id and mg.genre_id=" + genre_id,
                (rs, rowNum) -> {
                    MovieResultDTO dto = new MovieResultDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setTitle(rs.getString("title"));
                    dto.setYear(rs.getString("year"));
                    dto.setRating(rs.getString("rating"));
                    dto.setPoster(rs.getString("poster"));
                    return dto;
                }
        );
        return movies;
    }
    
    public List<MovieResultDTO> getMoviesByTitleActorGenre(String title, String actor, String genre_id) {
        final List<MovieResultDTO> movies = jdbcTemplate.query(
                "SELECT distinct m.id, m.title, m.year, m.rating, m.poster "
                + "from movies m, movie_to_genre mg, actors a, movie_to_actor ma "
                + "where lower(a.name)  like lower('%" + actor + "%') and "
                + "lower(m.title)  like lower('%" + title + "%') and "
                + "a.id=ma.actor_id and m.id=ma.movie_id and m.id=mg.movie_id and mg.genre_id=" + genre_id,
                (rs, rowNum) -> {
                    MovieResultDTO dto = new MovieResultDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setTitle(rs.getString("title"));
                    dto.setYear(rs.getString("year"));
                    dto.setRating(rs.getString("rating"));
                    dto.setPoster(rs.getString("poster"));
                    return dto;
                }
        );
        return movies;
    }
    
    public MovieDetailsDTO getMovieDetails(String id) {
        final List<MovieDetailsDTO> movie = jdbcTemplate.query(
                "SELECT id, title, year, rating, poster, plot, studio from movies where id=" + id,
                (rs, rowNum) -> {
                    MovieDetailsDTO dto = new MovieDetailsDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setTitle(rs.getString("title"));
                    dto.setYear(rs.getString("year"));
                    dto.setRating(rs.getString("rating"));
                    dto.setPoster(rs.getString("poster"));
                    dto.setPlot(rs.getString("plot"));
                    dto.setStudio(rs.getString("studio"));
                    
                    return dto;
                }
        );
        return movie.get(0);
    }
    
}
