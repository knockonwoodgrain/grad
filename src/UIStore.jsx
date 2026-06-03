import { create } from 'zustand'

export const useMusic = create((set) => ({
  isPlaying: false,
  playMusic: () => set({isPlaying: true}),
  pauseMusic: () => set({isPlaying: false}),
}))

export const usePDF = create((set) => ({
  isPDFOpen: false,
  openPDF: () => set({isPDFOpen: true}),
  closePDF: () => set({isPDFOpen: false}),
}))

export const useFilm = create((set) => ({
  isFilmOpen: false,
  openFilm: () => set({isFilmOpen: true}),
  closeFilm: () => set({isFilmOpen: false}),
}))

export const useChapter = create((set) => ({
  selectedChapter: 1,
  selectChapter: (num) => set({selectedChapter: num}),
}))

export const useThreeDLoad = create((set) => ({
  isThreeDLoaded: false,
  setThreeDLoadedTrue: () => set({isThreeDLoaded: true}),
  setThreeDLoadedFalse: () => set({isThreeDLoaded: false}),
}))

export const useEnterWebsite = create((set) => ({
  enterWebsite: false,
  setEnterWebsite: (bol) => set({enterWebsite: bol}),
}))



