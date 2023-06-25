import styles from './VideoCard.module.css'

export  const VideoCard = ({video})=>{
    return(
        <section className={styles.videoCard}>
            <iframe width="410" height="315" src={video.url} title={video.nome} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2>{video.nome}</h2>
        </section>
    )                                          
}