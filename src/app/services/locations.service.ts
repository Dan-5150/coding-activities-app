import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { BehaviorSubject, map, Observable } from "rxjs";

import { Locations } from "../models/locations.model";

/**
 * Service to get locations from Megaport API
 */
@Injectable({ providedIn: 'root' })
export class LocationsService {
  /**
   * Initialize locations subject
   */
  public locationsSubject = new BehaviorSubject<Locations[]>([]);

  /**
  * Initialize locations observable
  */
  public locations$: Observable<Locations[]> = this.locationsSubject.asObservable();

  /**
   * Constructor
   *
   * @param http Angular HTTP client
   */
   constructor(private http: HttpClient) {}

   /**
    * Sends a GET request to the API
    *
    * @param controller Request URL
    * @param params Request params
    */
   createGetRequest(controller: string, params?: HttpParams): Observable<any> {
     return this.http.get<any>(
       `https://api.megaport.com/v2/${controller}`,
       {
         params: params,
       }
     );
   }

  /**
   * Returns all locations
   */
  getLocations(): void {
    this.createGetRequest("locations")
      .pipe(map((response: Locations[]) => Object.values(response)))
      .subscribe((res) => {
        this.locationsSubject.next(res);
      });
  }

}
