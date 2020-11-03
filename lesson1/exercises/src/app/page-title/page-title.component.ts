import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
 title = 'Title';
  constructor() { }

  ngOnInit() {
  }

}
