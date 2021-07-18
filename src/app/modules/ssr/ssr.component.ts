import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ssr',
  templateUrl: './ssr.component.html',
  styleUrls: ['./ssr.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SsrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
