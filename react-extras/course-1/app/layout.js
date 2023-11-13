import Header from '@/Components/Header'
import './globals.css'
import page from './page'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
      <Header/>   
      {children}
      </>
    </html>
  )
}
