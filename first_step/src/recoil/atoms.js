import { atom, selector } from 'recoil'

export const messageState = atom({
  key: 'messageState',
  default: {
    morning: 'おはようございます',
    afternoon: 'こんにちは',
  },
})

export const foodsState = atom({
  key: 'foodsState',
  default: ['neko'],
})

export const foodsLengthState = selector({
  key: 'foodsLengthState',
  get: ({ get }) => get(foodsState).length,
})

export const sortedFoodsState = selector({
  key: 'sortedFoodsState',
  get: ({ get }) => get(foodsState),
})
