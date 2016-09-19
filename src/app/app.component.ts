import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './src/app/app.component.html',
    styleUrls: ['./src/app/app.component.css']
})

export class AppComponent {
    greeting: string = 'foobar';
    
    constructor() {}

    greet(): void {
        alert(this.greeting);
    }
}