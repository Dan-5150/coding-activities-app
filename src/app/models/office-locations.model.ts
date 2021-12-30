/**
 * Office locations model (for activity 2)
 */
export class OfficeLocations {
  constructor(
    public name: string,
    public address: Address,
    public industry: Industry,
  ) {}
}

export class Address {
  constructor(
    public office: Office,
  ) {}
}

export class Office {
  constructor(
    public unit: string,
    public street: string,
    public suburb: string,
    public city: string,
    public state: string,
    public postcode: number,
  ) {}
}

export class Industry {
  constructor(
    public type: string,
    public asxListed: boolean,
  ) {}
}
