import _ from "lodash";
import React from 'react';
import {useRecoilValue} from "recoil";
import {hogeLengthSelector, hogeState, searchTodoListSelector} from "./recoils/atoms";
import Todo from "./types/Todo";
import {TitleForm} from "./components/TitleForm";
import {AddButton} from "./components/AddButton";
import {SearchForm} from "./components/SearchForm";

const App = () => {
    const list: Todo[] = useRecoilValue(searchTodoListSelector)
    return (
        <>
            <TitleForm  />
            <AddButton />
            <SearchForm />

            <ul>
                {
                    _.map(list, (todo: Todo, i: number) => (
                            <li key={i}>{todo.title}</li>
                        )
                    )
                }
            </ul>
        </>
    );
}

export default App;
