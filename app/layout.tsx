import '@/styles/bootstrap.scss'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import type { Metadata } from 'next'
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import TopBar from '@/components/topbar/Topbar';


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
    <html lang="en">
      <body>
        <TopBar/>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
