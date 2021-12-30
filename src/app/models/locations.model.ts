/**
 * Locations model (for activity 3)
 */
export class Locations {
  constructor(
    public id: number,
    public name: string,
    public address: Address,
    public campus: string,
    public country: string,
    public dc: Dc,
    public latitude: number,
    public longitude: number,
    public liveDate: number,
    public market: string,
    public metro: string,
    public networkRegion: string,
    public products: Products,
    public siteCode: string,
    public status: string,
    public vRouterAvailable: boolean,
  ) {}
}

export class Address {
  constructor(
    public street: string,
    public suburb: string,
    public postcode: string,
    public city: string,
    public state: string,
    public country: string,
  ) {}
}

export class Products {
  constructor(
    public mcr: boolean,
    public megaport: number[],
  ) {}
}

export class Dc {
  constructor(
    public id: number,
    public name: string,
  ) {}
}
