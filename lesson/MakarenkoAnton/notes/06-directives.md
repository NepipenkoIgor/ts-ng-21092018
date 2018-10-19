## Homework Review
angular-cli-ghpages
distinctUntilChanged() - to prevent pipe when the value is the same

## Class Work

BrowserModule in Angular also includes CommonModule (directives, pipes, etc).

Todo read about pipes and "async".

Directive and pipe examples:
```
<div *ngIf="products$ | async as products; else loadingTemplate">
    <div *ngFor="let product of products; index as i">
    ...
    </div>
</div>
<ng-template #loadingTemplate>
    loading...
</ng-template>
```

- `products$` is an observable - `| async` applies and transforms them into an array
- `... as products`, `... as i` assigns a local variable


Async pipe unsubscribes from the observable as soon as it obtained result (end of the pipe), thus freeing memory.

### Custom Pipe

```typescript
export class ProductsFilterPipe implements PipeTransform {
    public transform(products: IProduct[], searchText: string): IProduct[] {
        if (searchText) {
            return products;
        }
        return products.filter((product: IProduct) => {
            return product.author.toLowerCase().includes(searchText.toLowerCase());
        });
    }
}
```

Assuming "text" is a variable in the component:
```
<div *ngIf="products$ | async as products | productsFilter:text; else loadingTemplate">
```

## Homework

Break down an initial template into several widgets (~3 components) that interact with each other.
- One widget has a menu. When menu item is selected, other widgets reflect changes


### Read

isOdd directive/pipe?
