import { useEffect, useRef, useState } from "react"
import { usePDF } from './UIStore'

export default function Journal() {
  const {closePDF, isPDFOpen} = usePDF(); 
  const [style, setStyle] = useState({opacity: "0%"});
  const pdfUI = useRef(HTMLDocument);
  useEffect(() => {
    if (isPDFOpen) {
      setStyle({opacity: "100%"})
    } else if (!isPDFOpen) {
      setStyle({opacity: "0%"})
    }
  },[isPDFOpen])
  
  return (
    <>
    <div ref={pdfUI} style={style} className="PDF">
      <div onClick={()=>closePDF()} className="closeButton">
        
      </div>
    </div>
    </>
  )
}

