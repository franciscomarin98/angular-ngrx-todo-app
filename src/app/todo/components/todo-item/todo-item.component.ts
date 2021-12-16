import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../models/todo.model";
import {AppState} from '../../store/app.state';
import {Store} from "@ngrx/store";
import {toggleTODO} from "../../store/todo.actions";

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html'
})
export class TodoItemComponent implements OnInit {

    @Input() item!: Todo;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit(): void {
    }

    toggleTodo(id: number) {
        this.store.dispatch(toggleTODO({id}));
    }
}
