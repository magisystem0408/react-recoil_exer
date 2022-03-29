import { useRecoilState } from 'recoil'
import { searchTextFormState } from '../recoils/atoms'
import { useCallback } from 'react'

export const SearchForm: React.FC = () => {
  const [searchTextFormValue, setSearchTextFormValue] =
    useRecoilState(searchTextFormState)

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTextFormValue(e.target.value)
    },
    [setSearchTextFormValue]
  )

  return (
    <label>
      検索：
      <input
        type='text'
        value={searchTextFormValue}
        onChange={onChange}
        name='title'
        style={{ margin: 12 }}
      />
    </label>
  )
}
