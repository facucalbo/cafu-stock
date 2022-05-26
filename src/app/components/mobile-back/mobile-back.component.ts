import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-back',
  templateUrl: './mobile-back.component.html',
  styleUrls: ['./mobile-back.component.css']
})
export class MobileBackComponent implements OnInit {

  @Input() text = '';

  constructor() { }

  ngOnInit(): void {
  }

}
