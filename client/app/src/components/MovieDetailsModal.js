import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { withStyles, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import buildAction from "@app/util/buildAction";

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
    backgroundColor: theme.palette.app.gray,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MovieDetailsModal = ({ selectedMovie, closeModal, isModalVisible }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img
        src={`/images/${selectedMovie.poster}`}
        alt={`${selectedMovie.title} Poster`}
      />
      <Typography>{selectedMovie.title}</Typography>
      <Typography>
      {selectedMovie.studio}
      </Typography>
      <Typography>
        {selectedMovie.year} ({selectedMovie.rating})
      </Typography>
      <Typography>{selectedMovie.plot}</Typography>
    </div>
  );

  return (
    <div>
      <Modal open={isModalVisible} onClose={closeModal}>
        {body}
      </Modal>
    </div>
  );
};
export default MovieDetailsModal;
