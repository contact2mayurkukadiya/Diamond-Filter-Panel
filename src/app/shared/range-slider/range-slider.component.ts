import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'RangeSlider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {

  @ViewChild('leftRange', { static: false }) leftRange: ElementRef;
  @ViewChild('rightRange', { static: false }) rightRange: ElementRef;

  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() startValue: number = 0;
  @Input() endValue: number = 0;

  @Output() onChange = new EventEmitter();
  @Output() onInput = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeInput(startValue, endValue, isInputChange: any = false) {
    var slide1 = parseFloat(startValue);
    var slide2 = parseFloat(endValue);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) { var tmp = slide2; slide2 = slide1; slide1 = tmp; }
    if (isInputChange) {
      this.onInput.emit({ startValue: slide1, endValue: slide2 });
    }
    else {
      this.onChange.emit({ startValue: slide1, endValue: slide2 });
    }

  }

}
