import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ActivityOneComponent } from './components/activity-one/activity-one.component';
import { ActivityTwoComponent } from './components/activity-two/activity-two.component';
import { ActivityThreeComponent } from './components/activity-three/activity-three.component';
import { SortDirective } from "./directives/sort.directive";
import { SearchFilterPipe } from "./pipes/search-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ActivityOneComponent,
    ActivityTwoComponent,
    ActivityThreeComponent,
    SortDirective,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
