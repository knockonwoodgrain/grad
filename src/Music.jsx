import { useEffect, useRef, useState } from "react"
import { useMusic, useThreeDLoad, useChapter, useEnterWebsite } from './UIStore'
import narratives from "./narratives.json"

export default function Music() {

  const {isThreeDLoaded} = useThreeDLoad();
  const {selectedChapter} = useChapter();
  const {enterWebsite} = useEnterWebsite();
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
          <svg className="audioSvg" key={`Play ${narratives[selectedChapter-1].songs.file}`} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="M320-202v-560l440 280-440 280Z"/></svg> :
          <svg className="audioSvg" key={`Pause ${narratives[selectedChapter-1].songs.file}`}xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="M556.67-200v-560h170v560h-170Zm-323.34 0v-560h170v560h-170Z"/></svg> }
        </div>
      </div>
    </>
  )
};

