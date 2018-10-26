## Routing and Application State

Routing is part of the application state.

What constitutes routing:
- A map of possible states

```typescript
// routes.ts
import { Route } from '@angular/router'

// gets evaluated in the order of appearance
export const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
    },
    {
        path: 'prodcuts',
        component: ProductsComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    },

    // to catch everything else - for example, redirect everything to "products". Or for example create a "not found" page
    {
        path: '**',
        redirectTo: 'products'
    }
];
```

Generate header/footer, content, signin and products components:
```
npm run ng g c header
npm run ng g c footer
npm run ng g c content
npm run ng g c content/signin
npm run ng g c content/products
```

Export router module in the app.module.ts

```
modules: {
    Route(?).forRoot()
}
```

In the markup, add component:
<router-outlet></router-outlet> - this is the target "place" in the markup where content will be replaced into
In page head: <base href="/">

Navigation in the markup - can be controlled using routerLink directive. For example:
```
<a [routerLink]="['signin']">Sign In</a>
```

Another way - event driven:
```
<a (click)="goToProducts()">Products</a>
```
```typescript
// inject router
public constructor(
    private _router: Router
) {

}

public goToProducts() {
    this._router.navigate(['products']);
}
```

Tools for debugging routes: "Augry" (Chrome extension?). Also Redux framework has built-in tools.

### Nested Routes

Use case: products/123 - product view page
In the routes configuration:
```typescript
{
    path: 'products',
    children: [
        {
            path: '',
            component: ProductsComponent // product list
        },
        {
            path: ':id',
            component: ProductViewComponent
        }
    ]
}
```

```
<img src="product picture..." [routerLink]="['/products', product._id]">
Note usage of the absolute path "/products". Can also use a relative path to navigate relatively to the current state (in the hierarchy of routes)
```

Injecting route parameters to the ProductViewComponent:
```typescript

public constructor(
    private _activatedRoute: ActivatedRoute
) {

}

public ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params) => console.log(params))
    this._activatedRoute.queryParamMap.subscribe((q) => console.log(q))
}
```

### Resolver

Generate service that actually fetches products:
```
npm run ng g s content/products/one-product-resolver
```

```typescript

@Injectable()
export class OneProductResolverService implements Resolve<IProduct> {

    public constructor(
        private _http: HttpClient,
        private _router: Router
    ) {}

    public resolve(route: ActiveatedRouteSnapshot, state: RouterStateSnapshot): Onservable<> | Promise<> {
        return this._http.get(`${this._baseUrl}/products/${route.params.id}`)
            pipe(
                map((res: {data: IProduct}) => res.data),
                catchError((err) => {
                    this._router.navigate(['/products']);
                    return of(null);
                })
            )
        ;
    }
}
```

Then register this resolver in the routes:
```
{
    path: ':id',
    component: OneProductComponent
    resolve: {
        product: OneProductResolverService

        // for passing static stuff:
        data: {
            foo: 'bar'
        }
    }
}
```

In the component, once resolved:
```typescript
this._activatedRoute.data.subscribe((data: {product: IProduct}) => {
    console.log(data);
})
```

CanActivate interface -- will not load the route component until resolver is resolved.

### Modules

Components can be declared as separate modules with their own routing -- this is useful for lazy loading (kinda emulate loading between pages)

```
{
    path: 'signin',
    loadChildren: './content/signin/signin.module#SigninModule'
}
```

### PreloadAllModules Interface

A service can implement PreloadAllModules, for example, prefetch the rest of modules with delay after main page loaded.
```typescript
return of(route)
    .pipe(
        delay(500),
        mergeMap()
    );
```
