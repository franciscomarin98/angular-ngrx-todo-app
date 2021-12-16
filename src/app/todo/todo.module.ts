import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoPageComponent} from "./pages/todo-page/todo-page.component";
import {TodoAddComponent} from "./components/todo-add/todo-add.component";
import {TodoFooterComponent} from "./components/todo-footer/todo-footer.component";
import {TodoItemComponent} from "./components/todo-item/todo-item.component";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";
import {_todoReducer} from './store/todo.reducer';
import {ReactiveFormsModule} from "@angular/forms";
import {TodoListComponent} from "./components/todo-list/todo-list.component";

@NgModule({
    declarations: [
        TodoAddComponent,
        TodoFooterComponent,
        TodoItemComponent,
        TodoPageComponent,
        TodoPageComponent,
        TodoListComponent,
    ],
    exports: [
        TodoAddComponent,
        TodoFooterComponent,
        TodoItemComponent,
        TodoPageComponent,
        TodoPageComponent,
        TodoListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forRoot({todos: _todoReducer}, {}),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
    ]
})
export class TodoModule {
}
