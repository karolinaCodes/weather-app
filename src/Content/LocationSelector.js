import React from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LocationCityIcon from "@mui/icons-material/LocationCity";

const LocationSelector = function (props) {
  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LocationCityIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="City" variant="standard" />
        </Box>
      </Box>
    </div>
  );
};

export default LocationSelector;

//when arrive, search bar
//when click location, change page,
