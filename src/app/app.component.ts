import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BizCore';

  public isSidebarExpanded: boolean = false

  public isSidebarExpandedFromChild(event: boolean) {
    this.isSidebarExpanded = event
  }
}
