import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: {};
};

export default function RootLayout(props: Props) {
  return (
    <html lang='en'>
      <body className={`${inter.className} `}>
        <NavBar />
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
