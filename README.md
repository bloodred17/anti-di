# TS DI

Tiny, easy to use IoC DI made for Typescript

No container declaration. <br>
No Reflect Metadata. <br>
No unnecessary decorators. <br>
No over the top features. <br>
Simple Static Singleton Pattern. <br>


```Typescript
// Extend Base to make a class Injectable
export class InjectableService extends Base {
    ...
}

// Use Injectable class
export class UserService {
    private readonly injectableService = InjectableService.getInstance<InjectableService>(InjectableService);
}

```

Done. 