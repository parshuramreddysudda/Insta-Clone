import { SessionProvider } from 'next-auth/react'
import '../styles/global.css'



function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <h3>{console.log(pageProps)}</h3>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
