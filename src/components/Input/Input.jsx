import { TextField } from "@mui/material";
import React from "react";

export const Input = ({label,type})=>{
    return(
        <TextField id="outlined-basic" label={label} variant="outlined" />

    )

}