import {Component} from '@angular/core';

@Component({
    selector: 'todo-app',
    //templateUrl: './app/app.component.html',
    template:`
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
            <input type="text" name="title" placeholder="Что нужно сделать?">
            <button type="button" class="ui primary button">Добавить</button>
        </div>
    </div>


    <div class="ui raised segment">
        <div id="todos" class="ui middle alinged divided selection list">
            <div class="todo item" *ngFor="let todo of todos">
                <div class="ui checkbox">
                    <input type="checkbox">
                    <label>{{ todo }}</label>
                </div>

                <button class="ui red icon button"><i class="trash outline icon"></i></button>
            </div>
        </div>
    </div>
</div>
    `,


    styleUrls:['./app/app.component.css']
})
export class AppComponent { 
    title: string;
    todos: string[];

    constructor (){
        this.title = 'Ангуляр2Ду';
        this.todos = ['первая задача','вторая задача','третья задача'];
    }

}
