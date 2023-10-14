import styles from "./SellItemDiv.module.scss"
export default function SellItemDiv(props){
    // console.log(props)
    return(
        <div className={styles.sellItemDiv}>
            <div className={styles.sellItemFirstDiv}>
                <img src={props.imgUrl} alt={props.imgAlt} />
                <span>{props.name}</span>
            </div>
            <div className={styles.arrowForw}><img src={props.arrowForwImg} alt={props.logoAlt} /></div>
        </div>
    )
}