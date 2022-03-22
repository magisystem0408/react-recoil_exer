import { useRecoilValue } from 'recoil'
import {
  foodsLengthState,
  foodsState,
  messageState,
  sortedFoodsState,
} from '../recoil/atoms'

export const View = () => {
  const message = useRecoilValue(messageState)
  const foods = useRecoilValue(foodsState)
  const foodsLength = useRecoilValue(foodsLengthState)
  const sortedFoods = useRecoilValue(sortedFoodsState)

  return (
    <>
      <div>{message.afternoon}</div>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
      <p>食べ物の合計:{foodsLength}</p>
    </>
  )
}
