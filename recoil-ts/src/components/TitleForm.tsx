import React, { useCallback } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { todoTittleFormState } from '../recoils/atoms'

export const TitleForm: React.FC = () => {
  const [todoTitleFormValue, setTodoTitleFormValue] =
    useRecoilState(todoTittleFormState)
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitleFormValue(e.target.value)
  }, [])
  return (
    <label>
      タスク名：
      <input
        type='text'
        value={todoTitleFormValue}
        onChange={onChange}
        name='title'
        style={{ margin: 12 }}
      />
    </label>
  )
}
