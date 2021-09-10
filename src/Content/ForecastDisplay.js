import React from "react";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  gridBackground: {
    background: "grey",
  },
});

const ForecastDisplay = function () {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={8}>
          Text
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ForecastDisplay;
