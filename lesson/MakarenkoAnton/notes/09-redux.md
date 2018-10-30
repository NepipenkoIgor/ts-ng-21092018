## Homework Review

1. Со стилями и картинками не разобрался, скинул все в корень.
2. Во время сборки с ключом "--prod", компилятор сломался на приватной проперти, которую я (по ошибке объявил) использовал в шаблоне. В дев режиме это не поймалось.
3. widget.component.ts - посмотрите this._sub.unsubscribe(); - не понял, как правильно unsubscribe сделать, пришлось вручную

Пересмотреть, почитать про директиву appInit
takeUntil() - почитать про оператор, пересмотреть про контролируемые потоки
Посмотреть реализацию пайпа с selectedItem
отделять продюсер от пайпа - см source$ как параметр входящей функции - так получится более тестируемо
почитать mdn destructing assignment

## 09 - Redux

Service-based architecture is considered a downside in SPA/Angular apps.


Redux is a state management system for SPA.

```
npm add @ngrx/store
npm add @ngrx/store-devtools
npm add @ngrx/effects
npm add @ngrx/entity // stuff for entities and CRUD
```

```typescript
module ... imports [
    EffectsModule.forRoot([ProductsEffects]),
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevToolsModule.instrument() : [] // note it is important to be after StoreModule declaration
]
```

Read about Redux DevTools


### Homework

Refactor widget app with some redux architecture - for example, use it for fetching products
