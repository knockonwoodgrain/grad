import { useRef, useState } from "react"
import { useMusic } from './UIStore'

export default function Music() {
  const song = "PortraitOfATime.ogg"
  const audioPlayer = useRef();
  const {isPlaying } = useMusic();

  async function safePlay(audioPlayer) {
    try {
      await audioPlayer.current.play();
    } catch (error) {
      // console.error("Playback failed or was prevented:", error);
    }
  }
  async function safePause(audioPlayer) {
    try {
      await audioPlayer.current.pause();
    } catch (error) {
      // console.error("Playback failed or was prevented:", error);
    }
  }
  if (isPlaying) {
    safePlay(audioPlayer)
  } else if (!isPlaying) {
    safePause(audioPlayer)
  } 

  return (
    <>
      <audio ref={audioPlayer} loop>
      <source src={song} type="audio/ogg" />
      </audio>
    </>
  )
};

