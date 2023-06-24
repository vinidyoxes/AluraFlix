import React from "react";
import styles from './Banner.module.css'



export default function Banner(props){
    return(
    <section className={styles.banner}>
        <div className={styles.colunas}>
            <span className={styles.tag}>FRONT END</span>
            <h2 className={styles.titulo}>SEO com React</h2>
            <p className={styles.paragrafo}>Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React.
</p>
        </div>
        <div className={styles.colunas}>
        <iframe width="750" height="422" src="https://www.youtube.com/embed/-wrsG0IGc-M" title="Curso React: Criando componentes no React - #04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </section>
    )
}
//<iframe width="750" height="422" src="https://www.youtube.com/embed/-wrsG0IGc-M" title="Curso React: Criando componentes no React - #04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>