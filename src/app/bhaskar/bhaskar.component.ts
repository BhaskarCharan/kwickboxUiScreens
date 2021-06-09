import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bhaskar',
  templateUrl: './bhaskar.component.html',
  styleUrls: ['./bhaskar.component.scss']
})
export class BhaskarComponent implements OnInit {
  public hello = ""

  constructor() { }

  ngOnInit(): void {
  }

  onClick(_$event: any){
    this.hello ="welcome"
  }

}
