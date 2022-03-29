import { atom, selector } from 'recoil'
import Todo from '../types/Todo'

//todo app
export const todoListState = atom<Todo[]>({
  key: 'todoList',
  default: [{ title: 'one' }, { title: 'two' }, { title: 'three' }],
})

export const todoTittleFormState = atom<string>({
  key: 'todoTitleForm',
  default: '',
})

export const searchTextFormState = atom<string>({
  key: 'serchTextForm',
  default: '',
})

export const searchTodoListSelector = selector<Todo[]>({
  key: 'searchTodoListSelector',

  get: ({ get }) => {
    const todoList: Todo[] = get(todoListState)
    const searchText: string = get(searchTextFormState)

    //検索フィールドに入力がある時は、その条件に合致したもタスクのみを返却する
    return searchText
      ? todoList.filter((t) => t.title.includes(searchText))
      : todoList
  },
})
