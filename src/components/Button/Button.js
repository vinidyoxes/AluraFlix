import React from "react";
import styles from './Button.module.css'

export default function Button(props){
    return(

    <button className={styles.button} style={{color: props.corTexto, backgroundColor: props.corBotao}}>
        {props.children}
</button>
    )
}