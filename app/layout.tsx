import '@/styles/globals.css';
import Footer from '@/app/Footer';
import SiteHeader from '@/app/SiteHeader';
import 'rc-slider/assets/index.css';

export const metadata = {
  title: 'Scenthaya',
  description: 'The essence of Thai fragrance',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        {/* <SiteHeader /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
