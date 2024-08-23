import { Component } from '@angular/core';

interface Image {
  id: string;
  url: string;
  widht: number;
  height: number;
}

@Component({
  selector: 'page-dogs',
  standalone: true,
  imports: [],
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.css'
})
export class DogsPage {
  images: Image[] = []
  fetchImages = async () => {
    const data = await fetch('https://dogapi.dog/api/v2/breeds',{
      headers:{
        "application-type": "application/json; charset=utf-8"
      }
    })
    this.images = (await data.json())?.data as any[] ?? []
  }
  constructor(){
    this.fetchImages()
  }
}
