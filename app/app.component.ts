import { Component } from '@angular/core'; //импортируем Component из библиотеки ангуляра. расширение  файла бибилиотеки не указываем
import { TodoListComponent} from './todo/Todo-list.component'; // импортируем TodoListComponent из самодельного комопнента. расширение так же не указываем
import { Todo } from './todo/todo'; //импортируем класс Todo из файла с классом. с расширением та же беда

//декоратор класса AppComponent
@Component({
    selector: 'todo-app', //в какой тег index.html внедряемся (там указано)
    //что внедряем в коде html. для многострочного кода использовать обратную кавычку которая в клавише ё
    template: `
<nav class="ui attached menu">
    <div class="ui container">
        <div class="header item">
            <h1><i class="checkmark box icon"></i> {{ title }}</h1>
        </div>
    </div>
</nav>

<div class="ui text container">
    <div class="ui segment form">
        <div class="ui fluid action input">
            <input type="text" name="title" placeholder="Что нужно сделать?" (keyup.enter)="addTodo(titleInput.value); titleInput.value=''" #titleInput>
            <button type="button" class="ui primary button" (click)="addTodo(titleInput.value); titleInput.value='' ">Добавить</button>
        </div>
    </div>

    <todo-list [todos]="todos"></todo-list>
</div>
    `,


    styleUrls: ['./app/app.component.css'],
    directives: [TodoListComponent]
})
export class AppComponent {
    title: string;
    todos: Todo[];

    constructor() {
        this.title = 'Ангуляр2Ду';
        this.todos = [];
    }

    addTodo(title: string) {
        this.todos.push(new Todo (title));
    }



}


}
