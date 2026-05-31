import { useEffect, useRef, useState } from "react"
import { useFilm, usePDF } from './UIStore'

export default function FilmMonitor() {
  const {closeFilm, isFilmOpen} = useFilm(); 
  const {isPDFOpen} = usePDF();
  const [style, setStyle] = useState({opacity: "0%", visible: "hidden"});
  const pdfUI = useRef(HTMLDocument);
  useEffect(() => {
    if (isFilmOpen) {
      setStyle({opacity: "100%", display: "grid", visible: "visible"})
    } else if (!isFilmOpen) {
      setStyle({opacity: "0%", visible: "hidden"})
    }
    if (isPDFOpen) {
      setStyle({display: "none"})
    }
  },[isFilmOpen, isPDFOpen])
  
  return (
    <>
    <div ref={pdfUI} style={style} className="Film">
      <div onClick={()=>closeFilm()} className="closeButton" />
      <h1 style={{color: "white"}}>Film</h1>
    </div>
    </>
  )
}

