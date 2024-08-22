import { Component } from '@angular/core';
import { SizerComponent } from '../sizer/sizer.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-template-syntax',
  standalone: true,
  imports: [SizerComponent, NgFor],
  templateUrl: './template-syntax.component.html',
  styleUrl: './template-syntax.component.css'
})
export class TemplateSyntaxComponent {
  fontSizePx = 16;
  phoneNumber ='';
  callPhone(value:string){
    this.phoneNumber = value 
  }
  heros=[
    {
      name: 'Sriram',
      id: 1
    },
    {
      name: 'Kumar',
      id: 2
    },
    {
      name: 'Pothuraju',
      id: 3
    },
  ]
}
