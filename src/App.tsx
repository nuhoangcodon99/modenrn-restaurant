
import './App.css'
import { Menu } from './container/Menu/Menu'
import { Navbar } from './components/Navbar/Navbar'
import { AboutUs } from './container/AboutUs/AboutUs'
import { Header } from './container/Header/Header'
import { Chef } from './container/Chef/Chef'
import { Intro } from './container/Intro/Intro'
import { Laurels } from './container/Laurels/Laurels'
import { Gallery } from './container/Gallery/Gallery'
import { Findus } from './container/Findus/Findus'
import { Footer } from './container/Footer/Footer'

export default function App() {
  return (
    <div className='overlay__bg'>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Findus />
      <Footer />
    </div>
  )
}