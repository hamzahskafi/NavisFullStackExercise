package com.navis.movies.dao;

import com.navis.movies.dto.GenreResultDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Types;
import java.util.List;

@Repository
public class GenreDAO {

    @Autowired
    NamedParameterJdbcTemplate jdbcTemplate;

    public List<GenreResultDTO> getGenres() {
        final List<GenreResultDTO> movies = jdbcTemplate.query(
                "SELECT id, description from genres",
                (rs, rowNum) -> {
                    GenreResultDTO dto = new GenreResultDTO();
                    dto.setId(rs.getInt("id"));
                    dto.setDescription(rs.getString("description"));
                    return dto;
                }
        );
        return movies;
    }
}
