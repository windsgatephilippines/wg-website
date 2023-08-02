import './globals.css'
import '@/styles/bootstrap.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import TopBar from '@/components/topbar/Topbar';
import Carousel from '@/components/carousel/Carousel';
import Head from 'next/head';
import Script from 'next/script';





export const metadata: Metadata = {
  title: 'Winds Gate Philippines',
  description: 'Software Development Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />

      <Script src="https://code.jquery.com/jquery-3.4.1.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
      <Script src="lib/wow/wow.min.js" /> 
      <Script src="@/public/lib/wow/wow.min.js" /> 
      <Script src="lib/easing/easing.min.js" />
      <Script src="lib/waypoints/waypoints.min.js" />
      <Script src="lib/owlcarousel/owl.carousel.min.js" />
      <Script src="lib/counterup/counterup.min.js" />
    
      <html lang="en">
        <body>
          <TopBar/>
          <Navbar/>
            {children}
          <Footer/>
        </body>
    </html>
    </>
    
  )
}
