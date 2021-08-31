import React, { useState, useEffect } from "react";
import { Card, makeStyles, Typography, Box } from "@material-ui/core";
import CounterDesc from "./Components/counterDesc";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100vh",
    padding: "2rem ",
  },

  cardContainer: {
    width: "40%",
    margin: "10rem auto",
    padding: "2rem",
    background:
      "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
  },

  mainHeading: {
    fontWeight: "bold",
    textAlign: "center",
  },

  counterContainer: {
    padding: "2rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
export default function Counter() {
  const classes = useStyles();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const countdown = () => {
    const diwali2021 = "4 Nov 2021";
    const diwaliDate = new Date(diwali2021);
    const currentDate = new Date();

    const totalTime = (diwaliDate - currentDate) / 1000;

    setDays(formatTime(Math.floor(totalTime / 3600 / 24)));
    setHours(formatTime(Math.floor(totalTime / 3600) % 24));
    setMinutes(formatTime(Math.floor(totalTime / 60) % 60));
    setSeconds(formatTime(Math.floor(totalTime) % 60));

    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
  };

  useEffect(() => {
    setInterval(() => {
      countdown();
    }, 1000);
  }, []);

  return (
    <Box className={classes.mainContainer}>
      <Card className={classes.cardContainer}>
        <Typography variant="h2" className={classes.mainHeading}>
          {"Diwali 2021"}
        </Typography>
        <Box className={classes.counterContainer}>
          <CounterDesc value={days} heading={"Days"} />
          <CounterDesc value={hours} heading={"Hours"} />
          <CounterDesc value={minutes} heading={"Minutes"} />
          <CounterDesc value={seconds} heading={"Seconds"} />
        </Box>
      </Card>
    </Box>
  );
}
