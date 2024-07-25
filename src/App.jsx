import './App.css'
import Home from './components/Home'
import About from './components/About'
import Academics from './components/Academics'
import Admission from './components/Admission'
import Faculty from './components/Faculty'
import Students from './components/Students'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
function App() {

  return (
    <div className='h-screen w-screen'>
      <Home/>
      <About/>
      <Academics/>
      <Admission/>
      <Faculty/>
      <Students/>
      <Gallery/>
      <Contact/>
    </div>
  )
}

export default App
