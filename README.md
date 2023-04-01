# Anti DI

Tiny, easy to use IoC Dependency Injection container made for Typescript/Javascript

No container declaration. <br>
No Reflect Metadata. <br>
No unnecessary decorators. <br>
No over the top features. <br>
Simple Static Singleton Pattern. <br>

## Setup

```shell
npm install anti-di
```

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

> It only supports property injection which is enough for most use cases. For constructor based injection checkout tsyringe, inversify, typedi.

> It uses inheritance to maintain references inside the object so you don't have to maintain containers separately.
