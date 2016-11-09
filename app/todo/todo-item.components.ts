import { Component, Input } from '@angular/core';


@Component({
    selector: 'todo-item',
    template: `
                <div class="ui checkbox">
                    <input type="checkbox">
                    <label>{{ todo.title }}</label>
                </div>
                <button class="ui red icon button"><i class="trash outline icon"></i></button>
    `,
    styleUrls: ['./app/todo/todo-item.component.css']
})

export class TodoItem {
    @Input() todo: string;
}