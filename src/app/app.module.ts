import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { SummaryBusinessOverviewComponent } from './component/dash-board/summary-business-overview/summary-business-overview.component';
import { AnalyticsGraphsComponent } from './component/dash-board/analytics-graphs/analytics-graphs.component';

@NgModule({
  declarations: [AppComponent, DashBoardComponent, SummaryBusinessOverviewComponent, AnalyticsGraphsComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
