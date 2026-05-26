import { create } from 'zustand'

export const useMusic = create((set) => ({
  isPlaying: false,
  songTitle: "PortraitOfATime.ogg",
  playMusic: () => set({isPlaying: true}),
  pauseMusic: () => set({isPlaying: false}),
  setSong: (title) => set({songTitle: title})
}))

export const usePDF = create((set) => ({
  isPDFOpen: false,
  openPDF: () => set({isPDFOpen: true}),
  closePDF: () => set({isPDFOpen: false}),
}))



