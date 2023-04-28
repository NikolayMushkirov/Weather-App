import React from 'react'

import animSunnyIcon from "../../../assets/icons/animated/clear-day.svg";

import styles from './SmallWeatherCard.module.scss'
type Props = {}

const SmallWeatherCard = (props: Props) => {
  return (
    <div className={`${styles['small-card']} `}>
        <img src={animSunnyIcon} alt="" className={styles["small-card-icon"]} />
        <span className={styles["small-card-day"]}>Monday</span>
        <span className={styles["small-card-degree"]}>29&deg;</span>
    </div>
  )
}
// ${styles['small-card-active']}
export default SmallWeatherCard