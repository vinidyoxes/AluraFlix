import Slider from "react-slick"
import MultipleItems from "../slider/Slider"
import Categorias from '../../../dados/videos.json'
import Videos from '../../../dados/videos.json'
import { VideoCard } from "../videoCard/VideoCard"
import styled from "@emotion/styled"
import { Typography } from "@mui/material"


const ListaVideos = Videos.videos
const CategoriasVideos = Categorias.categorias
export const Carrousel = ()=>{
    return(
    <>
    {CategoriasVideos.map((categoria)=>{
        let filter = ListaVideos.filter((video)=> video.categoria_id === categoria.id)
        console.log(categoria.nome)
        console.log(filter)
        return (
            <section className={categoria}>
                <Typography variant="h2" >{categoria.nome}</Typography>
            <MultipleItems>
                   {filter.map((video)=>{
                    return(
                        <>
                        <VideoCard  src={video.url} title={video.nome}></VideoCard>
                        </>
                    )
                   })}
                        </MultipleItems>
                        
               </section>
        
        )
    })}

    
    </>

    )
}

