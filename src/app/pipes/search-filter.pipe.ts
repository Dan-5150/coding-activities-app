import { Pipe, PipeTransform } from "@angular/core";
import { BakedGoods } from "../models/baked-goods.model";

@Pipe({
  name: "searchFilter"
})
export class SearchFilterPipe implements PipeTransform {
  /**
   * Filter with searched text
   *
   * @param {BakedGoods[]} searchData Data to search from
   * @param {string} [searchText] Search input
   * @return {*}  {(BakedGoods[] | null)} Objects where search text matches or null if no data exists in search
   */
  transform(searchData: BakedGoods[], searchText?: string): BakedGoods[] | null {
    if (!searchData) return null;
    if (!searchText) return searchData;
    searchText = searchText.toLowerCase();

    return searchData.filter((item: BakedGoods) => {
      return JSON.stringify(item).toLowerCase().includes(searchText!);
    });
  }
}
