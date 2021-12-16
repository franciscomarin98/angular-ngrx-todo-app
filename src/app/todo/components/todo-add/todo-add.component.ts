import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from '../../store/app.state';
import {createTODO} from "../../store/todo.actions";

@Component({
    selector: 'app-todo-add',
    templateUrl: './todo-add.component.html',
})
export class TodoAddComponent implements OnInit {


    todoForm = this.formBuilder.group({
        'txtInput': new FormControl('Hola', [Validators.required, Validators.minLength(1)]),
    });


    constructor(
        private formBuilder: FormBuilder,
        private store: Store<AppState>,
    ) {
    }

    ngOnInit(): void {
    }

    addTodo() {
        if (this.todoForm.invalid) {
            alert('Error!');
            return;
        }

        this.store.dispatch(createTODO({texto: this.todoForm.get('txtInput')?.value}));
    }
}
