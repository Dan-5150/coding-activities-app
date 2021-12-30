import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { bakedGoods } from "./data";

@Component({
  selector: 'app-activity-one',
  templateUrl: './activity-one.component.html',
  styleUrls: ['./activity-one.component.css']
})
export class ActivityOneComponent implements OnInit {
  /**
   * Baked goods data
   */
  data = bakedGoods;

  /**
   * Initialises form group
   */
  bakedGoodsForm: FormGroup;

  /**
   * Boolean controlling form visibility
   */
  showForm = false;

  /**
   * Initialise search text
   */
  searchText: string;

  /**
   * Run initialise form
   */
  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initialise new baked goods form
   */
  initForm(): void {
    this.bakedGoodsForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      topping: new FormControl(null, [Validators.required]),
    })
  }

  /**
   * Toggle show form status
   */
  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  /**
   * Adds form data to existing data and resets form
   */
  onSubmit(): void {
    // Hide form
    this.showForm = false;

    // Get ID from name
    const id = this.assignId(this.bakedGoodsForm.get("name")!.value);

    // Assign ID to form
    this.bakedGoodsForm.patchValue({
      id: id
    });

    // Push form data to existing baked goods
    console.log(this.bakedGoodsForm.value);
    this.data.push(this.bakedGoodsForm.value);

    // Reset form
    this.bakedGoodsForm.reset();
  }

  /**
   * Get ID number corresponding to name
   * 
   * @param name Baked goods name
   * @returns ID number
   */
  assignId(name: string): number {
    let id = 7;
    if (name === "Cake") {
      return id = 1;
    } else if (name === "Raised") {
      return id = 2;
    } else if (name === "Old Fashioned") {
      return id = 3;
    } else if (name === "Bar") {
      return id = 4;
    } else if (name === "Twist") {
      return id = 5;
    } else if (name === "Filled") {
      return id = 6;
    }
    return id;
  }
}
