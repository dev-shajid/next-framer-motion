import React, {useEffect} from "react";
import styles from '../styles/Cars.module.css'
import NProgress from 'nprogress'
import { useRouter } from "next/router";
import Link from "next/link";

const Navigation = () => {
  const router = useRouter();
  
  // TODO: Handle Top Loading Bar
  useEffect(() => {
    handleStop()
  }, [])

  const DelayAndGo = (e, to) => {
    if (router.pathname !== to) {
      NProgress.start()
      e.preventDefault();
      setTimeout(() => router.push(`${to}`), 600);
    }
  }

  const handleStop = () => {
    NProgress.done()
  }

  return (
    <div className={styles.navigationBar}>
      <Link href="/" className={styles.logo}>
        <img
          className={styles.logoImage}
          src="/images/logos/logocoloured.png"
          alt="image"
        />
      </Link>
      <div className={styles.nav_menu}>
        <a onClick={(e) => DelayAndGo(e, '/')}>Home</a>
        <a onClick={(e) => DelayAndGo(e, '/filter')}>Filter</a>
      </div>
    </div>
  );
};

export default Navigation;
