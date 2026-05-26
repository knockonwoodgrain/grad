import './App.css'
import Experience from './Experience/Experience' 
import Music from "./Music";
import Journal from './Journal'
import { useEffect, useRef, useState } from "react"
import { usePDF } from './UIStore'

function App() {
  const { isPDFOpen} = usePDF(); 
  const [style, setStyle] = useState({visibility:"hidden"});
  const mainUI = useRef();
  useEffect(() => {
    if (isPDFOpen) {
      setStyle({visibility: "visible"})
    } else if (!isPDFOpen) {
      setStyle({visibility: "hidden"})
    }
  },[isPDFOpen])
  return (
    <>
    <div className='sidePanel'>
      
    </div>
    <div ref={mainUI} style={style} className='UI'>
    <Journal />
    </div>
    <Experience />
    <Music />
    </>
  )
}

export default App
