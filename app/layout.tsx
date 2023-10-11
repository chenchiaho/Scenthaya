import '@/styles/globals.css'
import Footer from '@/shared/Footer'
// import SiteHeader from '@/shared/SiteHeader'

export const metadata = {
  title: 'Scenthaya',
  description: 'The essence of Thai fragrance',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {/* <SiteHeader /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
