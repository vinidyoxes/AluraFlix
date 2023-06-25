import React from "react";
import { Input } from "../Input/Input";
import { SelectInput } from "../Input/Select";

export const Formulario = ()=>{
    return(
        <>
        <Input label='Titulo'></Input>
        <Input label='URL do Video'></Input>
        <Input label='Link da imagem do vídeo'></Input>
        <SelectInput label='Categoria'></SelectInput>
        </>

    )
}