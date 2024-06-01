import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, ColumnSeriesService }from '@syncfusion/ej2-angular-charts'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ChartModule,
    AppRoutingModule,
  ],
  providers: [
    CategoryService,
    ColumnSeriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
