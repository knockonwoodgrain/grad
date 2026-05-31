import './App.css'
import Experience from './Experience/Experience' 
import Music from "./Music";
import Journal from './Journal'
import FilmMonitor from './FilmMonitor'
import { useEffect, useRef, useState } from "react"
import { usePDF, useFilm } from './UIStore'
import SidePanel from './SidePanel';

function App() {
  const {isPDFOpen} = usePDF(); 
  const {isFilmOpen} = useFilm(); 
  const [style, setStyle] = useState({visibility:"hidden", backgroundColor: "rgba(0,0,0,0)", backdropFilter: "blur(0px)"});
  const mainUI = useRef();
  useEffect(() => {
    if (isPDFOpen | isFilmOpen) {
      setStyle({visibility: "visible",backdropFilter: "blur(20px)"})
    } else if (!isPDFOpen | !isFilmOpen) {
      setStyle({visibility:"hidden", backgroundColor: "rgba(0,0,0,0)", backdropFilter: "blur(0px)"})
    };
  },[isPDFOpen, isFilmOpen])
  return (
    <>
    <div ref={mainUI} style={style} className='UI'>
    <Journal />
    <FilmMonitor />
    </div>
    <SidePanel />
    <Experience />
    <Music />
    </>
  )
}

export default App
