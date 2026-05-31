import { useEffect } from 'react';
import { useChapter } from './UIStore'

function SidePanel() {
  const {selectedChapter, selectChapter} = useChapter();
  const chapters = [1,2,3,4,5,6,7,8];
  const chapterNames = [
    "Before Mumbai", 
    "My First Commercial", 
    "A Dream Come True",
    "The Space Between Us",
    "Break Over",
    "Meeting your hero",
    "My Last Commercial",
    "Fin." 
  ] 
  useEffect(()=>{
    console.log(selectedChapter)
  },[selectedChapter])
return (
    <>
    <div className='sidePanel'>
    <div className='info'></div>
      <div className="sidePanelContent">
        <h1 className='websiteTitle'>Collection of Time</h1>
        <h2 className='chapterTitle' key={selectedChapter}>{chapterNames[selectedChapter-1]}</h2>
      </div>
      <div className='chapterBox'>
        {chapters.map((chapter, index) => (
            <div key={index} className={(index+1)==selectedChapter? "chapterSelected" : "chapter"} onClick={() => selectChapter(index+1)}>0{chapter}</div>
        ))}
        </div>
    </div>
    </>
  )
}

export default SidePanel
