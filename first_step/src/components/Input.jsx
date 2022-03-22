import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { foodsState, messageState } from '../recoil/atoms'

const Input = () => {
  const [text, setText] = useState('')
  const [message, setMessage] = useRecoilState(messageState)
  const [food, setFood] = useState('')
  const [foods, setFoods] = useRecoilState(foodsState)

  const submit = () => {
    message.added = text
    setMessage(message)
    setText('')
  }
  const addFood = () => {
    setFoods([...foods, food])
    setFood('')
  }

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={submit}>Stateを更新</button>
      <div>テスト</div>
      <input
        type='text'
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <button onClick={addFood}>Stateを更新</button>
    </div>
  )
}

export default Input
