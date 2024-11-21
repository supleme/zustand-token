import { create } from 'zustand'

type State = {
  token: string
}

type Actions = {
  setToken: (e: string) => void;
  clearToken: () => void;
}

const useToken = create<State & Actions>()( (set) => ({
  token: '',
  setToken: (e) => {
    set((state) => ({
      token: e
    }))
  },
  clearToken: () => {
    set((state) => ({
      token: ''
    }))
  }
}))

export default useToken;