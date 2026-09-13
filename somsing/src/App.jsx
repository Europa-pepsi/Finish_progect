import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

          <header>
            <h1 className='name_shop'>Somsing</h1>
            <h2 className='about_shop'>Online store Somsing.ua</h2>
          </header>
          <main>
            <img className='main_photo' src="https://images.unsplash.com/photo-1751301586011-256d527bc8aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFzc2V0dG8lMjBjb3JzYXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </main>
       
    </>
  )
}

export default App
