// libs
import React, { useEffect, useState } from "react";

// components
import { withStyles } from "@material-ui/core";
import { Modal } from '@material-ui/core';

// modules

// util

const MovieDetailsModal = ({ selectedMovie, closeModal }) => {
  return (
    <>
      {JSON.stringify(selectedMovie)}
      <button style={{ cursor: "pointer" }} onClick={() => closeModal()}>
        x
      </button>
    </>
  );
};

export default MovieDetailsModal;



