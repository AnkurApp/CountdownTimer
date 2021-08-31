import React from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles({
  counterBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },

  counter: {
    fontSize: "4rem",
    fontWeight: "bold",
  },

  counterHeading: {
    fontSize: "1.3rem",
  },
});

export default function CounterDesc(props) {
  const classes = useStyles();
  return (
    <Box className={classes.counterBox}>
      <Typography variant="h4" className={classes.counter}>
        {props.value}
      </Typography>
      <span className={classes.counterHeading}>{props.heading}</span>
    </Box>
  );
}
