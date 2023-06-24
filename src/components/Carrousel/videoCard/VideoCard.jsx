import styles from './VideoCard.module.css'

export  const VideoCard = (props)=>{
    return(
        <section className={styles.videoCard}>
            <iframe width="410" height="315" src={props.src} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2>{props.title}</h2>
        </section>
    )                                          
}