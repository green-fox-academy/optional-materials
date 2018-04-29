# Software architecture

## Design principles

- [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- [KISS](https://en.wikipedia.org/wiki/KISS_principle)
- [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)
- [Occam's razor](https://en.wikipedia.org/wiki/Occam%27s_razor)
- [Worse is better](https://en.wikipedia.org/wiki/Worse_is_better)
- [convention over configuration](https://en.wikipedia.org/wiki/Convention_over_configuration)- [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)
- [Law of Demeter (principle of least knowledge)](https://en.wikipedia.org/wiki/Law_of_Demeter)- boy scout rule- [single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth)
- [single version of truth](https://en.wikipedia.org/wiki/Single_version_of_the_truth)- [principle of least astonishment](https://en.wikipedia.org/wiki/Principle_of_least_astonishment)
- [let it crash principle](https://en.wikipedia.org/wiki/Crash-only_software)
- [inversion of control](https://en.wikipedia.org/wiki/Inversion_of_control)

## Design patterns

- Creational 
    - [Builder](https://refactoring.guru/design-patterns/builder)
    - [Object Pool](https://en.wikipedia.org/wiki/Object_pool_pattern)
    - [Factory Method](https://refactoring.guru/design-patterns/factory-method)
    - [Signleton](https://refactoring.guru/design-patterns/singleton)
    - [Multiton](https://en.wikipedia.org/wiki/Multiton_pattern)
    - [Prototype](https://refactoring.guru/design-patterns/prototype)
    - [Abstract Factory](https://refactoring.guru/design-patterns/abstract-factory)
- Structural
    - [Adapter](https://refactoring.guru/design-patterns/adapter)
    - [Bridge](https://refactoring.guru/design-patterns/bridge)
    - [Composite](https://refactoring.guru/design-patterns/composite)
    - [Decorator](https://refactoring.guru/design-patterns/decorator)
    - [Facade](https://refactoring.guru/design-patterns/facade)
    - [Flyweight](https://refactoring.guru/design-patterns/flyweight)
    - [Proxy](https://refactoring.guru/design-patterns/proxy)
- Behaviora
    - [Chain of Responsibility](https://refactoring.guru/design-patterns/chain-of-responsibility)
    - [Command](https://refactoring.guru/design-patterns/command)
    - [Interpreter](https://en.wikipedia.org/wiki/Interpreter_pattern)
    - [Iterator](https://refactoring.guru/design-patterns/iterator)
    - [Mediator](https://refactoring.guru/design-patterns/mediator)
    - [Memento](https://refactoring.guru/design-patterns/memento)
    - [Observer](https://refactoring.guru/design-patterns/observer)
    - [State](https://refactoring.guru/design-patterns/state)
    - [Strategy](https://refactoring.guru/design-patterns/strategy)
    - [Template Method](https://refactoring.guru/design-patterns/template-method)
    - [Visitor](https://refactoring.guru/design-patterns/visitor)

## [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design))

|Rule|Description|
|:--|:--|
|[**S**ingle responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)|A module should be responsible to one, and only one, actor.|
|[**O**pen/closed principle](https://en.wikipedia.org/wiki/Open/closed_principle)|A software artifact should be open for extension but closed for modification.|
|[**L**iskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle)|It should be possible to substitute the derived class with base class.|
|[**I**nterface segregation principle](https://en.wikipedia.org/wiki/Interface_segregation_principle)|Many client-specific interfaces are better than one general-purpose interface.|
|[**D**ependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)|Depend upon Abstractions but not on concretions. This means that each module should be separated from other using an abstract layer which binds them together. Source code dependency points in the opposite direction compared to the flow of control.|