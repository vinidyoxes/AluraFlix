import Slider from "react-slick"
import Categorias from '../../../dados/videos.json'
import Videos from '../../../dados/videos.json'
import { VideoCard } from "../videoCard/VideoCard"
import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import { MultipleItems } from "../slider/Slider"


const ListaVideos = Videos.videos
const CategoriasVideos = Categorias.categorias
export const Carrousel = ()=>{
    return(
    <>
    {CategoriasVideos.map((categoria)=>{
        return (
            <section className={categoria}>
                <Typography variant="h2" >{categoria.nome}</Typography>
                 <MultipleItems categoria={categoria} videos={ListaVideos.filter(video => categoria.id === video.categoria_id)}/>           
               </section>
        
        )
    })}

    
    </>

    )
}

