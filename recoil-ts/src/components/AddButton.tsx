import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { todoListState, todoTittleFormState } from '../recoils/atoms'
import Todo from '../types/Todo'

export const AddButton: React.VFC = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const [todoTitleFormValue, setTitleFormValue] =
    useRecoilState(todoTittleFormState)

  const onClick = useCallback(() => {
    setTodoList([...todoList, { title: todoTitleFormValue }])
    setTitleFormValue('')
  }, [todoList, todoTitleFormValue, setTodoList, setTitleFormValue])
  return <button onClick={onClick}>追加</button>
}
