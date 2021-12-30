import { BakedGoods } from "../../models/baked-goods.model";
import { SortOrder } from "../../enums/sort-order.enum";

export class Sort {
  sortOrder = 1;

  collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base",
  });

  startSort(property: string, order: string, type = "") {
    if (order === SortOrder.Descending) {
      this.sortOrder = -1;
    }

    return (a: BakedGoods | any, b: BakedGoods | any) => {
      return this.collator.compare(a[property], b[property]) * this.sortOrder;
    }
  }
}
