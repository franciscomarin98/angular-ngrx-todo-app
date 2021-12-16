import {createReducer, on} from "@ngrx/store";
import * as actions from "./todo.actions";
import {Todo} from "../models/todo.model";

const initialState: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Ver Spider-man No Way Home'),
    new Todo('Comprar traje de Ironman'),
];

export const _todoReducer = createReducer(
    initialState,
    on(actions.createTODO, (state, {texto}) => {
        return [...state, new Todo(texto)]
    }),
    on(actions.toggleTODO, (state, {id}) => {
        return state.map((todo) => (todo.id === id) ? ({...todo, completed: !todo.completed}) : todo)
    })
)
