import {atom, selector} from "recoil";


export const messageState = atom({
    key: "messageState",
    default: {
        morning: "おはようございます",
        afternoon: "こんにちは"
    }
})

export const foodsState = atom({
    key: "foodsState",
    default: []
})

export const foodsenthState = selector({
    key: "foodsLengthState",
    get: ({get}) => get(foodsState).length
})

