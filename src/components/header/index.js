
import React from "react"
import Button from '@mui/material/Button';
import styles from "./Header.module.css"
import {Logo}  from "../Logo";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
            <Logo></Logo>
            <Link to="/adicionar-novo"> <Button variant="outlined" corBotao='none' corTexto="">Novo Vídeo</Button></Link>
            </nav>
        </header>
    )
}