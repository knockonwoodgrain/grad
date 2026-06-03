import { useEffect, useRef, useState } from "react"
import { useMusic, useThreeDLoad, useChapter, useEnterWebsite } from './UIStore'
import narratives from "./narratives.json"

export default function Music() {

  const {isThreeDLoaded} = useThreeDLoad();
  const {selectedChapter} = useChapter();
  const {enterWebsite, setEnterWebsite} = useEnterWebsite();
  const [song, setSong] = useState(`Tracks/${narratives[selectedChapter-1].songs.file}`);
  const audioPlayer = useRef();
  const {isPlaying, playMusic, pauseMusic } = useMusic();

  async function safePlay(audioPlayer) {
    try {
      // if (isThreeDLoaded) {
        await audioPlayer.current.play();
      // }
    } catch (error) {
      console.error("Playback failed or was prevented:", error);
    }
  }
  async function safePause(audioPlayer) {
    try {
      await audioPlayer.current.pause();
    } catch (error) {
      console.error("Playback failed or was prevented:", error);
    }
  }
  async function loadMusic(audioPlayer) {
    try {
      await audioPlayer.current.load();
    } catch(error) {
      console.log(error)
    }
  }
  useEffect(() => {
    safePause(audioPlayer)
    pauseMusic()
    audioPlayer.currentTime = 0;

    setSong(`Tracks/${narratives[selectedChapter-1].songs.file}`)
    loadMusic(audioPlayer)
    if (enterWebsite) {
      playMusic()
    }
    
    if (isPlaying && enterWebsite) {
      safePlay(audioPlayer)
    } 
    return () => {
      if (!isPlaying && enterWebsite) {
        safePause(audioPlayer)
      }
    };

  }, [selectedChapter])
  useEffect(() => {
    if (enterWebsite) {
      playMusic()
    }
  },[enterWebsite])
  const handlePlayPause = () => {
    if (!isPlaying) {
      playMusic()
    } else if (isPlaying) {
      pauseMusic()
    } 
  }
  // MAIN PLAYER
  useEffect(() => {
    if (isPlaying) {
      safePlay(audioPlayer)
    } else if (!isPlaying) {
      safePause(audioPlayer)
    } 
  },[isPlaying])


  return (
    <>
      <audio ref={audioPlayer} loop>
        <source src={song} type="audio/ogg" />
      </audio>
      <div className={isThreeDLoaded ? 'info' : 'infoLoad info'}></div>
      <div className={isThreeDLoaded ? 'musicBox' : 'musicBoxLoad musicBox'}>
        <div className="coverReal" >
          <img src={`Covers/${narratives[selectedChapter-1].songs.cover}`} key={narratives[selectedChapter-1].songs.cover} className="coverRealImg" /> 
        </div>
        <div className="songTitle" key={narratives[selectedChapter-1].songs.track}  >{narratives[selectedChapter-1].songs.track}</div>
        <div className="songAuthor" key={narratives[selectedChapter-1].songs.author}>{narratives[selectedChapter-1].songs.author}</div>
        <div className="audioControls" onClick={() => handlePlayPause()} >
          {!isPlaying ? 
          <svg className="audioSvg" key={`Play ${narratives[selectedChapter-1].songs.file}`} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M320-263v-438q0-15 10-24.17 10-9.16 23.33-9.16 4.34 0 8.84 1.16 4.5 1.17 8.83 3.5L715.67-510q7.66 5.33 11.5 12.33 3.83 7 3.83 15.67t-3.83 15.67q-3.84 7-11.5 12.33L371-234.33q-4.33 2.33-8.83 3.5-4.5 1.16-8.84 1.16-13.33 0-23.33-9.16Q320-248 320-263Z"/></svg> :
          <svg className="audioSvg" key={`Pause ${narratives[selectedChapter-1].songs.file}`}xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M623.33-200q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09v-426.66q0-27.5 19.58-47.09Q595.83-760 623.33-760H660q27.5 0 47.08 19.58 19.59 19.59 19.59 47.09v426.66q0 27.5-19.59 47.09Q687.5-200 660-200h-36.67ZM300-200q-27.5 0-47.08-19.58-19.59-19.59-19.59-47.09v-426.66q0-27.5 19.59-47.09Q272.5-760 300-760h36.67q27.5 0 47.08 19.58 19.58 19.59 19.58 47.09v426.66q0 27.5-19.58 47.09Q364.17-200 336.67-200H300Z"/></svg> }
        </div>
      </div>
    </>
  )
};

