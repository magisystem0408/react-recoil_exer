import {atom} from "recoil";
import {User} from "../types/userTypes";
import {recoilPersist} from "recoil-persist";

const {persistAtom }=recoilPersist()

export const userState =()=>
    atom<User>({
        key:"user",
        default:{
            id:'ここにid',
            email:'email'
        },
        // global Stateの永続化
        effects_UNSTABLE:[persistAtom]
    })
