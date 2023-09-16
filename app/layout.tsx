import '@/styles/globals.css'

export const metadata = {
  title: 'Scenthaya',
  description: 'The essence of Thai fragrance',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
