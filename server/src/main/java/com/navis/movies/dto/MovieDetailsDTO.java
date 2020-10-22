package com.navis.movies.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MovieDetailsDTO {

    private int id;
    private String title;
    private String year;
    private String rating;
    private String plot;
    private String studio;
    private String poster;
}
