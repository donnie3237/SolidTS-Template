import create from 'solid-zustand'

interface BearState {
  bears: number
  increase: () => void
}

export const useStore = create<BearState>(set => ({
  bears: 0,
}))