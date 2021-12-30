import { Component, OnInit } from '@angular/core';

import { Locations } from "../../models/locations.model";
import { LocationsService } from "../../services/locations.service";

@Component({
  selector: 'app-activity-three',
  templateUrl: './activity-three.component.html',
  styleUrls: ['./activity-three.component.css']
})
export class ActivityThreeComponent implements OnInit {
  /**
   * Locations
   */
  locations: Locations[] = [];

  /**
   * Creates an instance of ActivityThreeComponent.
   */
  constructor(public locationsService: LocationsService) { }

  /**
   * Runs get locations on page init
   */
  ngOnInit(): void {
    this.getLocations();
  }

  /**
   * Retrieves list of locations
   */
  getLocations(): void {
    this.locationsService.getLocations();

    this.locationsService.locations$.subscribe((location) => {
      if (location) {
        this.locations = location;
        this.locations.splice(0, 2);
        this.locations = this.locations.concat(this.locations[0]);
        this.locations.shift();
        // console.log(this.locations);
      }
    });
  }
}
