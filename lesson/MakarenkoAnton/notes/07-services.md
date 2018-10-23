## Class 7 - Services and Dependency Injection

```typescript
@Directive({
    selector: '[someTooltip]',
    exportAs: 'tooltip' // will be available in markup as "tooltip" alias ("as") - needed to be able to refer to this instance as a variable in markup
})
export class SomeTooltipDirective implements OnInit {

    @HostBinding('class.tooltip-container') // навешать на родительский элемент что-то

    @Input()
    public set someTooltip(text: string) {
        if (!text) {
            return;
        }
    }

    private _tooltipContext: HTMLSpanElement = this._renderer.createElement('span');

    constructor(
        private _renderer: Renderer2, // injectable service
        private _elementRef: ElementRef // injectable original element (where this directive is instantiated)
    ) {

    }

    public ngOnInit() {
        this._tooltipContext.className = 'tooltip';
        this._renderer.appendChild(this._elementRef.nativeElement, this._tooltipContext);
    }

    public hide(): void {
        this._tooltipContext.classList.remove('open');
    }

    public show(): void {
        thos._tooltipContext.classList.add('open');
    }

    @HostListener('click', ['$event'])
    public cancelOn(): void {
        debugger;
        this.hide();
    }
}
```

Usage:

```html
<div
    class="prices"
    [someTooltip]="toUAH(product.price) | number:'1.0-0'"
    #t="tooltip"
    >
    Цена:
    <strong (mouseenter)="t.show()" (mouseleave)="t.hide()">{{ product.price }}</strong>
</div>
```


Code-generate a service:
```
npm run ng g s products
```

```
@Inject('key') // a decorator for injecting any registered injectable by specified key
```
