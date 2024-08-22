# Component Basics

## Importing and using components

* Standalone
* NgModule

#### Standalone
Standalone components directly import other components, directives, and pipes used in their templates.

#### NgModule
Angular code that predates standalone components uses NgModule as a mechanism for importing and using other components.

## Selectors
* Every component defines a CSS selector that determines how the component is used.
* This is selector is used in parent component as element tags.
* Angular matches selectors statically at compile-time.
* An element can match exactly one component selector and raised error if duplicate selector names are found.
* Component selectors are case-sensitive.

#### Types of Selectors
* Type selector: Matches elements based on their HTML tag name, or node name. (profile-photo)
* Class selector: Matches elements based on the presence of a CSS class. (.menu-item)
* Attribute selector: Matches elements based on the presence of an HTML attribute and, optionally, an exact value for that attribute. ([dropzone] [type="reset"])

> **Note**
>  * All custom element names should include a hyphen.
> * It is recommended to use short, consistent prefix for all the custom components defined inside the project.
> * Never use `ng` as a selector prefix as it is used by Angular.

## Styling

* When Angular compiles your component, these styles are emitted with your component's JavaScript output. This means that component styles participate in the JavaScript module system. 
* When you render an Angular component, the framework automatically includes its associated styles, even when lazy-loading a component.
* Every component has a view encapsulation setting that determines how the framework scopes a component's styles
* There are three view encapsulation modes: Emulated(default)(global, scoped), ShadowDom(scoped) and None(global).
* Component templates can use the `<link>` element to reference CSS files. 
* Your CSS may use the `@importat-rule` to reference CSS files. 
* Angular treats these references as external styles. External styles are not affected by emulated view encapsulation.

## Input Properties (Props in Vue)
[Source](https://angular.dev/guide/components/inputs)

When creating a component, you can mark specific class properties as bindable by adding the @Input decorator on the property.

syntax: 
```
@Component({...})
export class CustomSlider {
  @Input() value = 0;
}
```
usage:
```
<custom-slider [value]="50" />
```

* When extending a component class, inputs are inherited by the child class.
* Input names are case-sensitive
* In angular input properties has multiple options for customization
    * Required Inputs
    * Input transforms
    * Type Checking
    * Build in tranformations
    * Input alias
    * Setters and getters
    * Specifying the inputs in `@Components` decorator from extended component

## Custom Events (Emits in Vue)
[Source](https://angular.dev/guide/components/outputs)

Angular components can define custom events by assigning a property to a new EventEmitter and adding the @Output decorator.

syntax:
```
@Component({...})
export class ExpandablePanel {
  @Output() panelClosed = new EventEmitter<void>();
}
```
usage:
```
<expandable-panel (panelClosed)="savePanelState()" />
```
Emitting the event inside component:
```
this.panelClosed.emit();
```

* Angular custom events do not bubble up the DOM.
* When extending a component class, outputs are inherited by the child class.
* You can pass data when calling `emit()`
* You can access the data when defining the event listener as `$event` as variable.

## Content projection with ng-content (Slots in Vue)
[Source](https://angular.dev/guide/components/content-projection)

You often need to create components that act as containers for different types of content.

syntax:
```
@Component({
  selector: 'custom-card',
  template: `
    <div class="card-shadow">
      <ng-content />
    </div>
  `,
})
export class CustomCard {/* ... */}
```
usage:
```
<!-- Using the component -->
<custom-card>
  <p>This is the projected content</p>
</custom-card>
```

* The `<ng-content>` element is neither a component nor DOM element. Instead, it is a special placeholder that tells Angular where to render content.
* You should not conditionally include `<ng-content>` with `@if`, `@for`, or `@switch`. 
* Angular always instantiates and creates DOM nodes for content rendered to a `<ng-content>` placeholder, even if that `<ng-content>` placeholder is hidden. 
* For conditional rendering of component content, see Template fragments.
* Angular supports projecting multiple different elements into different <ng-content> placeholders based on CSS selector. (Like named slots in Vue)
* `select` attribute used for naming the `ng-content`. If not `select` is given the it will be defined as default content-projection
* Angular support aliasing of content projectors using special attribute, `ngProjectAs`. ngProjectAs supports only static values and cannot be bound to dynamic expressions.

## Host elements
[Source](https://angular.dev/guide/components/host-elements)

## Lifecycles
[Source](https://angular.dev/guide/components/lifecycle)

<table>
    <tbody><tr>
      <td><strong>Phase</strong></td>
      <td><strong>Method</strong></td>
      <td><strong>Summary</strong></td>
    </tr>
    <tr>
      <td>Creation</td>
      <td><code>constructor</code></td>
      <td>
        <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes/constructor" target="_blank">
          Standard JavaScript class constructor
        </a>. Runs when Angular instantiates the component.
      </td>
    </tr>
    <tr>
      <td rowspan="7">Change<p>Detection</p></td>
      <td><code>ngOnInit</code>
      </td>
      <td>Runs once after Angular has initialized all the component's inputs.</td>
    </tr>
    <tr>
      <td><code>ngOnChanges</code></td>
      <td>Runs every time the component's inputs have changed.</td>
    </tr>
    <tr>
      <td><code>ngDoCheck</code></td>
      <td>Runs every time this component is checked for changes.</td>
    </tr>
    <tr>
      <td><code>ngAfterContentInit</code></td>
      <td>Runs once after the component's <em>content</em> has been initialized.</td>
    </tr>
    <tr>
      <td><code>ngAfterContentChecked</code></td>
      <td>Runs every time this component content has been checked for changes.</td>
    </tr>
    <tr>
      <td><code>ngAfterViewInit</code></td>
      <td>Runs once after the component's <em>view</em> has been initialized.</td>
    </tr>
    <tr>
      <td><code>ngAfterViewChecked</code></td>
      <td>Runs every time the component's view has been checked for changes.</td>
    </tr>
    <tr>
      <td rowspan="2">Rendering</td>
      <td><code>afterNextRender</code></td>
      <td>Runs once the next time that <strong>all</strong> components have been rendered to the DOM.</td>
    </tr>
    <tr>
      <td><code>afterRender</code></td>
      <td>Runs every time <strong>all</strong> components have been rendered to the DOM.</td>
    </tr>
    <tr>
      <td>Destruction</td>
      <td><code>ngOnDestroy</code></td>
      <td>Runs once before the component is destroyed.</td>
    </tr>
  </tbody></table>