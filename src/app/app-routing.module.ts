import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { SummaryBusinessOverviewComponent } from './component/dash-board/summary-business-overview/summary-business-overview.component';
import { AnalyticsGraphsComponent } from './component/dash-board/analytics-graphs/analytics-graphs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashBoardComponent,
  },
  {
    path: 'dashboard/summaryBusinessOverview',
    component: SummaryBusinessOverviewComponent,
  },
  {
    path: 'dashboard/analyticsGraphs',
    component: AnalyticsGraphsComponent,
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to dashboard by default
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
