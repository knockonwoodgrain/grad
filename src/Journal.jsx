import { useEffect, useRef, useState } from "react"
import { usePDF, useFilm } from './UIStore'


export default function Journal() {
  const {closePDF, isPDFOpen} = usePDF(); 
  const {isFilmOpen} = useFilm()
  const [style, setStyle] = useState({opacity: "0%", visible: "hidden"});
  const [UIWidth, setUIWidth] = useState(100);
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
  const setSize = () => {
    console.log("document loaded")
    setUIWidth(pdfUI.current.getBoundingClientRect().width)
    console.log(pdfUI.current.getBoundingClientRect().width)
    console.log(UIWidth)
  }
  
  return (
    <>
    <div ref={pdfUI} style={style} className="PDF">
      <div onClick={()=>closePDF()} className="closeButton" />
      <div className="PDFFile">
      <object data="pdf01.pdf" type="application/pdf" style={{alignSelf: "center", width: "100%", height: "100%"}} >
        <p>Your browser does not support PDFs. 
           <a href="your-document.pdf">Download the PDF</a> to view it.
        </p>
      </object>
        {/* <Document file={pdf01} className="PDFDocument" onLoadSuccess={()=>setSize()}> */}
        {/*   <Page pageNumber={12} className="PDFPage" width={UIWidth}/> */}
        {/* </Document> */}
      </div>
    </div>
    </>
  )
}

