import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'CustomIconButton',
  templateUrl: './custom-icon-button.component.html',
  styleUrls: ['./custom-icon-button.component.scss']
})
export class CustomIconButtonComponent implements OnInit {

  @Input() source: any = '';
  @Input() customClass: any = '';
  @Input() title: any = '';
  @Input() selected: any = false;
  @Output() onPress: any = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  clickButton() {
    this.onPress.emit();
  }
}
