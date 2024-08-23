import { Component } from '@angular/core';

interface Image {
  id: string;
  url: string;
  widht: number;
  height: number;
}

@Component({
  selector: 'page-foxes',
  standalone: true,
  imports: [],
  templateUrl: './foxes.component.html',
  styleUrl: './foxes.component.css'
})
export class FoxesPage {
  images: Image[] = []
  fetchImages = async () => {
    const data = await fetch('https://api.thecatapi.com/v1/images/search?limit=10',{
      headers:{
        "application-type": "application/json; charset=utf-8"
      }
    })
    this.images = (await data.json()) as Image[] ?? []
  }
  constructor(){
    this.fetchImages()
  }
}
