import { useEffect } from 'react';
import { useChapter, useThreeDLoad } from './UIStore'
import narratives from './narratives.json'

function SidePanel() {
  const {isThreeDLoaded} = useThreeDLoad();
  const {selectedChapter, selectChapter} = useChapter();
  // const setLoading = () => {
  //   if (isThreeDLoaded) {
  //     setThreeDLoadedFalse()
  //   } else {
  //     setThreeDLoadedTrue()
  //   }
  // }
  useEffect(()=>{
    console.log(selectedChapter)
  },[selectedChapter])
return (
    <>
    <div className={isThreeDLoaded ? 'sidePanel' : 'sidePanelLoad sidePanel'} >
    <div className={isThreeDLoaded ? 'info' : 'infoLoad info'}></div>
      <div className={isThreeDLoaded ? 'sidePanelContent' : 'sidePanelContentLoad sidePanelContent'}>
        <h1 className={isThreeDLoaded ? 'websiteTitle' : 'websiteTitleLoad websiteTitle'}>Collection of Time</h1>
        <h2 className={isThreeDLoaded ? 'chapterTitle' : 'chapterTitleLoad chapterTitle'} key={selectedChapter}>{narratives[selectedChapter-1].title}</h2> 
      </div>
      <div className={isThreeDLoaded ? 'chapterBox' : 'chapterBoxLoad chapterBox'}>
        {narratives.map((narrative, index) => (
            <div key={index} className={(index+1)==selectedChapter? isThreeDLoaded ? 'chapterSelected' : 'chapterSelected chapterLoad' : isThreeDLoaded ? "chapter" : "chapterLoad chapter" } onClick={() => selectChapter(index+1)}>{narrative.id}</div>
        ))}
        </div>
    </div>
    </>
  )
}

export default SidePanel
