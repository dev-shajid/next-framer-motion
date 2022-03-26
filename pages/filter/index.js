import {useState} from 'react'
import styles from '../../styles/Filter.module.css';
import Data from '../../components/FilterData'
import { motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { gridAnimation, productAnimation, h3Animation, cardAnimation } from "../../components/Animations";

function Filter() {
  
  // TODO: Handle Top Loading Bar
  useEffect(() => {
    NProgress.done()
  }, [])
 
  const [product, setProduct] = useState(Data)
  const [item, setItem] = useState('all')
  const [image, setImage] = useState()

  const filter = (item) => {
    item==='all'?setProduct(Data):setProduct(Data.filter(e => e.title === item))
    setItem(item)
    console.log({product, item, image})
  }
  return (
    <>
      <AnimatePresence>
        <motion.div className={`container ${styles.filter_container}`}>
          <motion.div className="row">
            <motion.div
              variants={h3Animation}
              animate="show"
              exit="hide"
              className="col-lg-12 text-center">
                <ul>
                    <li onClick={()=>filter('all')} className={item==='all'?styles.active:null}>all</li>
                    <li onClick={()=>filter('phone')} className={item==='phone'?styles.active:null}>phone</li>
                    <li onClick={()=>filter('leptop')} className={item==='leptop'?styles.active:null}>leptop</li>
                    <li onClick={()=>filter('watch')} className={item==='watch'?styles.active:null}>watch</li>
                </ul>
              </motion.div>
          </motion.div>
          <motion.div
            variants={gridAnimation}
            animate="show"
            exit="hide"
            className={`row box-list`}
          >
              {
                product.map((e,i)=>(
                  <motion.div
                    key={i}
                    className={`col-lg-4 ${styles["box-item"]} ${image?.id === e.id ? styles.image_active : null}`}
                  >
                    <motion.div
                      variants={cardAnimation}
                      animate="show"
                      exit="hide"
                    >
                      <motion.img
                        onClick={() => {
                          image == null ? setImage(e) : setImage(null)
                        }}
                        layout
                        src={e.image} alt="Img"
                      />
                    </motion.div>
                  </motion.div>
                ))
              }
          </motion.div>
      </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Filter;