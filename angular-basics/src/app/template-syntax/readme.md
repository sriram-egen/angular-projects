# Template Syntax

An Angular HTML template renders a view, or user interface, in the browser, just like regular HTML, but with a lot more functionality.

When you generate an Angular application with the Angular CLI, the app.component.html file is the default template containing placeholder HTML.

## Interpolation [Source](https://angular.dev/guide/templates/interpolation)

* Interpolation refers to embedding expressions into marked up text.
* By default, interpolation uses the double curly braces {{ and }} as delimiters.

## Template Statements [Source](https://angular.dev/guide/templates/template-statements)

* Template statements are methods or properties that you can use in your HTML to respond to user events.
* Use template statements with elements, components, or directives in response to events.
* The template statements parser specifically supports both basic assignment (=) and chaining expressions with semicolons (\;).
* The following JavaScript and template expression syntax is not allowed:
  * new
  * Increment and decrement operators, ++ and --
  * Operator assignment, such as += and -=
  * The bitwise operators, such as | and &
  * The pipe operator
* Statements have a context —a particular part of the application to which the statement belongs.
  * refer only to what's in the statement context, which is typically the component instance
  * refer to properties of the template's own context

## Binding Syntax [Source](https://angular.dev/guide/templates/binding)

* A binding creates a live connection between a part of the UI created from a template (a DOM element, directive, or component) and the model (the component instance to which the template belongs)
* Angular's [Change Detection](https://angular.dev/best-practices/runtime-performance) algorithm is responsible for keeping the view and the model in sync.
* Binding includes text interpolations, property binding, event binding, and two-way binding.
* Many JavaScript expressions are legal template expressions, with the following exceptions. You can't use JavaScript expressions that have or promote side effects, including:
  * Assignments (=, +=, -=, ...)
  * Operators such as new, typeof, or instanceof
  * Chaining expressions with ; or ,
  * The increment and decrement operators ++ and --
  * Some of the ES2015+ operators
  * No support for the bitwise operators such as | and &
* Interpolated expressions have a context—a particular part of the application to which the expression belongs.
* An expression can also refer to properties of the template's context such as a [template input variable](https://angular.dev/guide/directives/structural-directives#shorthand) or a [template reference variable](https://angular.dev/guide/templates/reference-variables)

## Property binding [Source](https://angular.dev/guide/templates/property-binding)

* Property binding in Angular helps you set values for properties of HTML elements or directives.
* Use property binding to do things such as toggle button features, set paths programmatically, and share values between components.
* Property binding moves a value in one direction, from a component's property into a target element property.
* To bind to an element's property, enclose it in square brackets, `[]`, which identifies the property as a target property.

## Attibute [Source](https://angular.dev/guide/templates/attribute-binding)

* Attribute binding in Angular helps you set values for attributes directly.
* With attribute binding, you can improve accessibility, style your application dynamically, and manage multiple CSS classes or styles simultaneously.

    ```
    <p [attr.attribute-you-are-targeting]="expression"></p>
    ```

* Common use cases:
  * binding ARIA attributes
  * Binding to colspan

## Class and style bindings [Source](https://angular.dev/guide/templates/class-binding)

* Use class and style bindings to add and remove CSS class names from an element's class attribute and to set styles dynamically.
* Angular adds the class when the bound expression, onSale is truthy, and it removes the class when the expression is falsy—with the exception of `undefined`

#### Binding to a single CSS class

```
[class.sale]="onSale"
```

#### Binding to a multiple CSS class

```
[class]="classExpression"
```

The expression can be one of:

* A space-delimited string of class names.
* An object with class names as the keys and truthy or falsy expressions as the values.
* An array of class names.

<table>
      <thead>
        <tr>
        <th align="left">Binding Type</th>
        <th align="left">Syntax</th>
        <th align="left">Input Type</th>
        <th align="left">Example Input Values</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td align="left">Single class binding</td>
        <td align="left"><code>[class.sale]="onSale"</code></td>
        <td align="left"><code>boolean</code></td>
        <td align="left">undefined</td>
        </tr>
        <tr>
        <td align="left">Multi-class binding</td>
        <td align="left"><code>[class]="classExpression"</code></td>
        <td align="left"><code>string</code></td>
        <td align="left"><code>"my-class-1 my-class-2 my-class-3"</code></td>
        </tr>
        <tr>
        <td align="left">Multi-class binding</td>
        <td align="left"><code>[class]="classExpression"</code></td>
        <td align="left"><code>Record<string, boolean<="" td="">
        </string,></code></td><td align="left">undefined</td>
        </tr>
        <tr>
        <td align="left">Multi-class binding</td>
        <td align="left"><code>[class]="classExpression"</code></td>
        <td align="left"><code>Array<string></string></code></td>
        <td align="left"><code>['foo', 'bar']</code></td>
        </tr>
      </tbody>
    </table>

#### Binding to a single style

```
<nav [style.background-color]="expression"></nav>
```

```
<nav [style.backgroundColor]="expression"></nav>
```
#### Binding to a multiple style
* A string list of styles such as `"width: 100px; height: 100px; background-color: cornflowerblue;"`.
* An object with style names as the keys and style values as the values, such as `{width: '100px', height: '100px', backgroundColor: 'cornflowerblue'}`.

<table>
      <thead>
        <tr>
            <th align="left">Binding Type</th>
            <th align="left">Syntax</th>
            <th align="left">Input Type</th>
            <th align="left">Example Input Values</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td align="left">Single style binding</td>
        <td align="left"><code>[style.width]="width"</code></td>
        <td align="left"><code>string</code></td>
        <td align="left">undefined</td>
        </tr>
        <tr>
        <td align="left">Single style binding with units</td>
        <td align="left"><code>[style.width.px]="width"</code></td>
        <td align="left"><code>number</code></td>
        <td align="left">undefined</td>
        </tr>
        <tr>
        <td align="left">Multi-style binding</td>
        <td align="left"><code>[style]="styleExpression"</code></td>
        <td align="left"><code>string</code></td>
        <td align="left"><code>"width: 100px; height: 100px"</code></td>
        </tr>
        <tr>
        <td align="left">Multi-style binding</td>
        <td align="left"><code>[style]="styleExpression"</code></td>
        <td align="left"><code>Record<string, string<="" td="">
        </string,></code></td><td align="left">undefined</td>
        </tr>
      </tbody>
    </table>

## Event binding [Source](https://angular.dev/guide/templates/event-binding)

* Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.

```javascript
<button (click)="onSave()">Save</button>
```

## Two-way binding [Source](https://angular.dev/guide/templates/two-way-binding)

* Two-way binding gives components in your application a way to share data.
* Use two-way binding to listen for events and update values simultaneously between parent and child components.

```javascript
<app-sizer [(size)]="fontSizePx"></app-sizer>
```

* The [()] syntax combines the brackets of property binding, [], with the parentheses of event binding
* How two-way binding works
  * The `@Output()` property must use the pattern, `inputChange`
  * `input` is the name of the `@Input()` property.
* Two-way binding with form elements requires NgModel.

## Control flow [Source](https://angular.dev/guide/templates/control-flow)

## Local template variables [Source](https://angular.dev/guide/templates/let-template-variables)

## Build-in directives [Source](https://angular.dev/guide/directives)

## Template reference variables [Source](https://angular.dev/guide/templates/reference-variables)

## Inputs [Source](https://angular.dev/guide/components/inputs)

## Outputs [Source](https://angular.dev/guide/components/outputs)

## SVG in templates [Source](https://angular.dev/guide/templates/svg-in-templates)
