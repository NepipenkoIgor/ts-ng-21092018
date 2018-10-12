### Read

- Native promises in ES6
- Macro- and micro- task definitions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

## Angular

### CLI

Command line interface provides proper environment context (in general). Angular has its own CLI. On the contrary, React has a "starter" (a quasi cli)

Install angular cli
```
npm add @angular/cli -g
```
Read angular cli documentation for commands reference.

Generates a new project with lots of stuff - directory structure, libraries, webpack, git repo...
```
ng new angular-ng-21092018 -p course

```
All install settings are defined in angular.json

Lots of scripts defined in package.json. For example, builds the application and enables server:
```
npm run start
```
go to http://localhost:4200/

### App

main.ts
```typescript
// ensures cross-platform compatibility (browsers, server, mobile...)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
```

Modularity in Angular is similar to ES6 modularity concept. See `src/app/app.module.ts`

```typescript
@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng21092018';
}
```
@Component - a decorator. There is an implicit relation with AppComponent class. TODO read and understand

### Interpolation

Basic interpolation refers to properties/methods of the component:
```
<h1>{{title + total() + '$'}}</h1>
```

Interpolation with undefined objects:
```
<p>{{user?.account?.firstName}}</p>
```

### Binding

Targets possible for binding: html tag, component, directive, attribute, property.

Best practice is to use one-way binding and avoid 2-way.

```
<!-- Example of interpolation -->
<h1>{{title + total() + '$'}}</h1>

<p>{{user?.account?.firstName}}</p>

<!-- example of binding from component to an attribute -->
<img [src]="logo" width="50px" height="50px">

<!-- example of binding to a dom property -->
<h3 [innerHtml]="user?.account?.firstName"></h3>

<!-- reverse 1-way binding -->
<img src="{{logo}}" (click)="log($event)" width="50px" height="50px">
<img src="{{logo}}" (click)="title = $event" width="50px" height="50px">
```


```
<!-- element is set to local variable #someLocalVar -->
<input type="text" #someLocalVar (input)="search(someLocalVar.value)">
  // public search(value) {
  //   console.log(value);
  // }
```

```
Or more strict
<input type="text" (input)="search($event)">
    public search(event: KeyboardEvent) {
        const input: HTMLInputElement = event.target as HTMLInputElement;
        console.log(input.value);
    }
```

### Creating Components

Generates a component with all stuff:
```
npm run ng g c header
```

### Encapsulation of Component CSS

By default automatically applies CSS rule [_ngcontent-c1] to all of the elements within this component.
Can be configured in different ways.
