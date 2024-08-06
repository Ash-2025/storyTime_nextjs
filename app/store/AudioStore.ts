// src/store/useAudioStore.js
import { create, createStore } from 'zustand';

type state = {
    currentSrc : string
}
type action = {
    setsrc : (src:string) => void
}
// Create the store
export const useAudioStore = create<state & action>((set) => ({
    currentSrc:'',
    setsrc : (src:string) => set({currentSrc:src})
}))