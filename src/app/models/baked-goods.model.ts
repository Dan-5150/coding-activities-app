/**
 * Baked goods model
 */
export class BakedGoods {
  constructor(
    public id: number,
    public type: string,
    public name: string,
    public topping: string,
  ) {}
}
