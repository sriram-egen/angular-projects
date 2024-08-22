import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-component-basics',
  standalone: true,
  imports: [],
  templateUrl: './component-basics.component.html',
  styleUrl: './component-basics.component.css'
})
export class ComponentBasicsComponent {
  @Input() value = 0
  @Input({ required: true }) message = ''
  @Input({ transform: trimString }) label = ''
  @Input({transform: booleanAttribute}) disabled = false
  @Input({transform: numberAttribute}) number = 0
}
function trimString(value: string | undefined) {
  return value?.trim() ?? ''
}