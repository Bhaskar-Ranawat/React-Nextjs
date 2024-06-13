import "./globals.css";
import Headings from './components/Heading'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Headings/>
        {children}
      </body>
    </html>
  );
}