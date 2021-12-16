import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html'
})
export class TodoPageComponent implements OnInit {

    darkTheme: boolean = true;
    toggleTheme = () => (this.darkTheme = !this.darkTheme);

    constructor() {
    }

    ngOnInit(): void {
    }

}
