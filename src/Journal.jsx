import { useEffect, useRef, useState } from "react"
import { usePDF, useFilm } from './UIStore'


export default function Journal() {
  const {closePDF, isPDFOpen} = usePDF(); 
  const {isFilmOpen} = useFilm()
  const [style, setStyle] = useState({opacity: "0%", visible: "hidden"});
  const pdfUI = useRef(HTMLDocument);
  useEffect(() => {
    if (isPDFOpen) {
      setStyle({opacity: "100%", display: "grid", visible: "visible"})
    } else if (!isPDFOpen) {
      setStyle({opacity: "0%", visible: "visible"})
    }
    if (isFilmOpen) {
      setStyle({display: "none"})
    }
  },[isPDFOpen, isFilmOpen])
  
  return (
    <>
    <div className="JournalUI" ref={pdfUI} style={style}>
      <div className="buttonGrid">
        <div onClick={()=>closePDF()} className="closeButton" />
        <div onClick={()=>previousPage()} className="previousButton" >
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" className="buttonSVG" fill="#000000"><path d="m297.92-442.12 235.7 235.69L480-153.3 153.3-480 480-806.86l53.62 53.29-235.7 235.69h508.94v75.76H297.92Z"/></svg>
        </div>
      </div>
      <div className="PDF">
        <div className="PDFFile">
          <img className="JournalPage" src="Before Mumbai 2-4.svg" type="image/svg+xml"  />
          <img className="JournalPage" src="Before Mumbai 2-4.svg" type="image/svg+xml"  />
        </div>
      </div>
      <div onClick={()=>nextPage()} className="nextButton" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="buttonSVG" fill="#000000"><path d="M662.08-442.12H153.3v-75.76h508.78l-235.7-235.69L480-806.86 806.86-480 480-153.3l-53.62-53.13 235.7-235.69Z"/></svg>
      </div>
    </div>
    </>
  )
}
        {/* <object data="pdf01.pdf" type="application/pdf" style={{alignSelf: "center", width: "100%", height: "100%"}} > */}
        {/*   <p>Your browser does not support PDFs.  */}
        {/*      <a href="your-document.pdf">Download the PDF</a> to view it. */}
        {/*   </p> */}
        {/* </object> */}

