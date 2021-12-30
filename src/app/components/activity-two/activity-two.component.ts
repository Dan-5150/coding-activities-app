import { Component, OnInit } from '@angular/core';

import { OfficeLocations } from "../../models/office-locations.model";

@Component({
  selector: 'app-activity-two',
  templateUrl: './activity-two.component.html'
})
export class ActivityTwoComponent implements OnInit {
  /**
   * Office location object to test with
   */
  officeLocation: OfficeLocations = {
    name: 'Megaport',
    address: {
      office: {
        unit: 'Level 3',
        street: '825 Ann Street',
        suburb: 'Fortitude Valley',
        city: 'Brisbane',
        state: 'Queensland',
        postcode: 4006,
      },
    },
    industry: {
      type: 'Internet and telecommunications',
      asxListed: true,
    },
  };

  /**
   * Output of function
   */
  fnOutput: any[] = [];

  /**
   * Get properties from office locations object
   */
  ngOnInit(): void {
    const val1 = this.getValue("address.office.suburb", this.officeLocation);
    const val2 = this.getValue("industry.asxListed", this.officeLocation);
    this.fnOutput.push(val1, val2);
  }

  /**
   * Get value of the property
   *
   * @param {string} path The object path ie. 'address.office.state'
   * @param {*} obj The object
   */
  getValue(path: string, obj: any): string | number | boolean {
    const splitPath = path.split(".");

    for (const path of splitPath) {
      obj = obj[path];
    }
  
    console.log("Activity 2", {obj});
    return obj;
  }
}
