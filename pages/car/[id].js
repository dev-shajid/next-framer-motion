import React, {useEffect} from "react";
import Data from "../../components/CarData";
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { carAnimation } from "../../components/Animations";
import NProgress from 'nprogress'
import { useRouter } from "next/router";
import styles from '../../styles/Cars.module.css'

const Car = () => {
  const router = useRouter()
  const { id } = router.query
  const singleCar = Data.find((item) => item.id === parseInt(id))
  
  // TODO: Handle Top Loading Bar
  useEffect(() => {
    handleStop()
  }, [])

  const DelayAndGo = (e, to) => {
    NProgress.start()
    e.preventDefault();
    setTimeout(() => router.push('/'), 600);
  }

  const handleStop = () => {
    NProgress.done()
  }

  return (
    <div className={styles.carcontainer}>
      <motion.div
        variants={carAnimation}
        animate="show"
        exit="hide"
        className={styles.car}
      >
        <div className={styles.navigateBack} onClick={DelayAndGo}>
          <MdKeyboardBackspace/>
        </div>
        <div className={styles.imageAndText}>
          <motion.img src={`../images/products/${singleCar?.image}`} alt="" />
          <div className={styles.carText}>
            <h3>{singleCar?.car}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              delectus ea dolore suscipit. Facilis harum dolorem, pariatur ipsa
              in adipisci!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Car