import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'sitamat-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() languages: any;
  @Output() changeLang = new EventEmitter<string>();
  language: string;

  constructor() { }

  ngOnInit() {
    
  }
}
