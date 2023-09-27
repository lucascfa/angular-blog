import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photo_new:string = "https://img.olhardigital.com.br/wp-content/uploads/2023/04/shutterstock_1916961890.jpg";
  @Input()
  titulo_new:string = "DOGCOIN! Saiba como ficar rico com a nova moeda do momento.";
  @Input()
  description_new:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis mauris euismod, tempor nisl sed, ornare sapien. Suspendisse quis sem et neque ullamcorper eleifend. Pellentesque suscipit elementum est. Pellentesque ex quam, facilisis quis odio ut, pellentesque luctus sapien. Fusce ac mi dolor. In sit amet ipsum congue, lac";
  @Input()
  id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
