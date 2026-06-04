// import { useEffect, useState } from 'react';
import { useChapter, useThreeDLoad, useEnterWebsite } from './UIStore'
import narratives from './narratives.json'

function SidePanel() {
  const {isThreeDLoaded} = useThreeDLoad();
  const {selectedChapter, selectChapter} = useChapter();
  const {enterWebsite, setEnterWebsite} = useEnterWebsite();
  // const setLoading = () => {
  //   if (isThreeDLoaded) {
  //     setEnterWebsite(false)
  //     setThreeDLoadedFalse()
  //   } else {
  //     setEnterWebsite(true)
  //     setThreeDLoadedTrue()
  //   }
  // }
return (
    <>
    <div className={enterWebsite ? 'sidePanel' : 'sidePanelLoad sidePanel'}  >
      <div className={enterWebsite ? 'sidePanelContent' : 'sidePanelContentLoad sidePanelContent'}>
        <h1 className={enterWebsite ? 'websiteTitle' : isThreeDLoaded ?  'websiteTitleLoaded websiteTitle' : 'websiteTitleLoad websiteTitle'} 
          onClick={isThreeDLoaded ? () => setEnterWebsite(true) : () => setEnterWebsite(false)}>
          Collection of Time
        </h1>
        <h2 className={enterWebsite ? 'chapterTitle' : 'chapterTitleLoad chapterTitle'} key={`${selectedChapter},${enterWebsite}`}>{narratives[selectedChapter-1].title}</h2> 
      </div>
      <div className={enterWebsite ? 'chapterBox' : 'chapterBoxLoad chapterBox'}>
        {narratives.map((narrative, index) => (
            <div key={`${index},${enterWebsite}`} className={(index+1)==selectedChapter? enterWebsite ? 'chapterSelected' : 'chapterSelected chapterLoad' : enterWebsite ? "chapter" : "chapterLoad chapter" } onClick={() => selectChapter(index+1)}>{narrative.id}</div>
        ))}
        </div>
    </div>
    </>
  )
}

export default SidePanel
