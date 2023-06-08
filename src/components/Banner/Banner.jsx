import React from "react";
import styles from '../Banner/Banner.module.css'


export default function Banner(props){
    return(
    <section className={styles.banner}>
        <div className="coluna1">
            <span>FRONT END</span>
            <h2 className={styles.titulo}>SEO com React</h2>
            <p className={styles.paragrafo}>Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React.
</p>
        </div>
        <div className="coluna2">
            <video></video>
        </div>
    </section>
    )
}
