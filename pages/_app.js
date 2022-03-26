import '../styles/globals.css'
import '../public/nprogress.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from '../components/Navigation'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navigation />
      <AnimatePresence exitBeforeEnter >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )}

export default MyApp
