import {Component, Input } from  '@angular/core';
import{ TodoItem } from './todo-item.components'

@Component({
    selector: 'todo-list',
    template: `    
    
    <div class="ui raised segment" *ngIf="todos.length > 0">
        <div id="todos" class="ui middle alinged divided selection list">
            <todo-item *ngFor="let todo of todos" [todo]="todo"></todo-item>
        </div>
    </div>`,
    styleUrls: ['./app/todo/todo-list.component.css'],
    directives: [TodoItem]

})





export class TodoListComponent{
    @Input() todos:string[];
}