/* eslint-disable react/prop-types */
import React from "react"
import styles from "./Card.module.scss";
function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false)

    const onClickAddItem = () => {
        setIsAdded(!isAdded)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onAddFavorite}>
                <img src="/img/heart.svg" alt="heart" height={32} width={32}/>
            </div>
            <img width={112} height={112} src={props.imageUrl} alt="sneakers" className="ml-20"/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>${props.price}</b>
                </div>
                <img className={styles.plus} onClick={onClickAddItem} src={isAdded ? "/img/check.svg" : "/img/plus.svg"} alt="plus"/>
            </div>
        </div>
    )
}

export default Card;