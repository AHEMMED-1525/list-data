import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RangeListComponent } from './range-list/range-list.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
//font awesome
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
//toastr
import { ToastrModule}  from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    RangeListComponent,
    TicTacToeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
