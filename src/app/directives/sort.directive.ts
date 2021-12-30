import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { Sort } from '../components/activity-one/sort';
import { SortOrder } from "../enums/sort-order.enum";
import { BakedGoods } from "../models/baked-goods.model";

@Directive({
  selector: '[appSort]'
})
export class SortDirective {
  @Input() appSort!: BakedGoods[];
  constructor(private targetElem: ElementRef) { }
  
  @HostListener("click")
  sortData() {
    console.log(this.appSort);
    const sort = new Sort();
    const element = this.targetElem.nativeElement;
  
    // Get element attributes
    const order = element.getAttribute("data-order");
    const type = element.getAttribute("data-type");
    const property = element.getAttribute("data-name");

    if (order === SortOrder.Descending) {
      this.appSort.sort(sort.startSort(property, order, type));
      element.setAttribute("data-order", SortOrder.Ascending);
    } else {
      this.appSort.sort(sort.startSort(property, order, type));
      element.setAttribute("data-order", SortOrder.Descending);
    }
  }
}
