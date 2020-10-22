// libs
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

// components
import { withStyles, Typography } from '@material-ui/core';

// modules

// util

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MovieDetailsModal = ({ selectedMovie, closeModal, isModalVisible }) => {
//   console.log("selectedMovie2: ", selectedMovie);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img
        src={`/images/${selectedMovie.poster}`}
        alt={`${selectedMovie.title} Poster`}
        // style={{ width, height }}
      />
      <Typography >
          {selectedMovie.title}
        </Typography>
        <Typography>
          {selectedMovie.year} ({selectedMovie.rating})
        </Typography>
    </div>
  );

  return (
    <div>
      <Modal
        open={isModalVisible}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};
export default MovieDetailsModal;
