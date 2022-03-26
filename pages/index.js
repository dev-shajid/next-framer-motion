import React, { useEffect } from "react";
import Data from "./car/Data";
import styles from '../styles/Cars.module.css'
import { motion } from "framer-motion";
import { gridAnimation, cardAnimation, h3Animation } from "../components/Animations";
import NProgress from 'nprogress'
import { useRouter } from "next/router";
import Link from "next/link";

const Cars = () => {
  const router = useRouter();
  
  // TODO: Handle Top Loading Bar
  useEffect(() => {
    handleStop()
  }, [])

  const DelayAndGo = (e, to) => {
    NProgress.start()
    e.preventDefault();
    setTimeout(() => router.push(`/car/${to}`), 600);
  }

  const handleStop = () => {
    NProgress.done()
  }

  return (
    <div className={styles.carsContainer}>
      <motion.h3
        variants={h3Animation}
        animate="show"
        exit='hide'
      >
        Choose Your Car
      </motion.h3>
      <motion.div
        variants={gridAnimation}
        animate="show"
        exit="hide"
        className={styles.cars}>
        {Data.map((item, index) => {
          return (
            <div onClick={(e) => DelayAndGo(e, item.id)} key={index}>
              <motion.div
                variants={cardAnimation}
                className={styles.card}
              >
                <img src={`../images/products/${item.image}`} alt="Car" />
              </motion.div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Cars