import React from "react";
import { Typography, Breadcrumbs, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  breadcrumbFont: {
    fontFamily: "Arial",
  },
});

const Header = function (props) {
  const classes = useStyles();

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div>
      <Typography
        variant="h1"
        gutterBottom="true"
        display="block"
        color="secondary"
        align="center"
      >
        5-Day Forecast
      </Typography>

      <Breadcrumbs aria-label="breadcrumb">
        <Typography className={classes.breadcrumbFont} color="textPrimary">
          5-day forecast
        </Typography>
        <Link color="inherit" href="/" onClick={handleClick}>
          7-day forecast
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          10-day forecast
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default Header;
