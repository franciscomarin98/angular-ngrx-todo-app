import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoPageComponent} from "./pages/todo-page/todo-page.component";
import {TodoAddComponent} from "./components/todo-add/todo-add.component";
import {TodoFooterComponent} from "./components/todo-footer/todo-footer.component";
import {TodoItemComponent} from "./components/todo-item/todo-item.component";

@NgModule({
    declarations: [
        TodoAddComponent,
        TodoFooterComponent,
        TodoItemComponent,
        TodoPageComponent,
        TodoPageComponent
    ],
    exports: [
        TodoAddComponent,
        TodoFooterComponent,
        TodoItemComponent,
        TodoPageComponent,
        TodoPageComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TodoModule { }
