import { Carrousel } from "../../components/Carrousel/Carrousel"
import MultipleItems from "../../components/Carrousel/slider/Slider"
import PaginaPadrao from "../../components/PaginaPadrao/Padrao"
import styles from './Inicio.module.css'

export const Inicio = ()=>{
    return(
        <main className={styles.inicio}>
        <PaginaPadrao/>
        <h1>Inicio</h1>
        <Carrousel></Carrousel> 
        </main>
    )
}