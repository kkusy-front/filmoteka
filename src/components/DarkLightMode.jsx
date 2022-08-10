import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const DarkLightMode = (colorChangeSetter) => {
  console.log(colorChangeSetter.colorChangeSetter);
  const theme = useTheme();

  const onChange = (e) => {
    //pass slider's event value to child's state
    colorChangeSetter.colorChangeSetter.colorChangeSetter(theme.palette.mode === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <IconButton sx={{ ml: 1 }} onClick={onChange} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </div>
  );
};

export default DarkLightMode;
