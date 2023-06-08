
import React from "react"
import Button from '@mui/material/Button';
import styles from "./Header.module.css"
import {Logo}  from "../Logo";

export default function Header(){
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
            <Logo></Logo>
            <Button variant="outlined" corBotao='none' corTexto="">Novo Vídeo</Button>
            </nav>
        </header>
    )
}