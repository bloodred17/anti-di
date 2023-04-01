# TS DI

Tiny, easy to use IoC DI made for Typescript

No container declaration. <br>
No Reflect Metadata. <br>
No unnecessary decorators. <br>
No over the top features. <br>
Simple Static Singleton Pattern. <br> 

## Usage

```Typescript
// Extend Injectable to make a class Injectable
export class MyClass extends Injectable {
    ...
}

// Use Injectable class
export class UserService {
    private readonly myClass = MyClass.getInstance<MyClass>(MyClass);
}

```

Done. 
