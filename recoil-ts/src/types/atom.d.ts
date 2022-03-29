import { RecoilValue } from 'recoil'

export interface AtomOptions<T> {
  key: NodeKey
  default: RecoilValue<T> | Promise<T> | T
}
