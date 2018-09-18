import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import { GrdFilterPipe } from './grd-filter.pipe';
import { SearchpeopleComponent } from './searchpeople/searchpeople.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchpeopleComponent,
    GrdFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'customer-link', component: SearchpeopleComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }