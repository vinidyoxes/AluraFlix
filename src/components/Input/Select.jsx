import { MenuItem, Select } from "@mui/material"
import React,{ useState } from "react"

export const SelectInput = ({label})=>{
    let [opcao, setOpcao] = useState('');
    const handleChange = (event) => {
        setOpcao(event.target.value);
      }
    return (

<Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={opcao}
    label={label}
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
    )
}