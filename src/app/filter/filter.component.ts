import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  activatedTab: any = 'tab_1';
  selectedFilter: any = 1;
  selectedColorFilter: any = 1;
  startingPrice: any = 1000;
  endingPrice: any = 7500;
  constructor() { }

  ngOnInit() {
    this.activeTab('tab_1')
  }

  activeTab(tabName) {
    this.activatedTab = tabName;
    setTimeout(() => {
      $('.active-tab:first-child').next().addClass('no-left-arrow')
      $('.active-tab:last-child').prev().addClass('no-right-arrow')
      $('.filter-tab-li').removeClass('no-right-arrow no-left-arrow');
      $('.active-tab').next().addClass('no-left-arrow');
      $('.active-tab').prev().addClass('no-right-arrow');
    }, 10);
  }

  applyFilter(filterType) {
    console.log('Ring Filter Api call');
    this.selectedFilter = filterType;
  }
  applyColorFilter(filterType) {
    console.log('color Filter Api call');
    this.selectedColorFilter = filterType;
  }

  changePrice(value) {
    this.startingPrice = value.startValue;
    this.endingPrice = value.endValue;
  }
}
