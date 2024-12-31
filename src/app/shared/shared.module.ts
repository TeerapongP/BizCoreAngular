import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './side-bar/side-bar.component';

// Import PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    // Import Components    
    SideBarComponent
  ],
  imports: [
    CommonModule,
    // Register PrimeNG modules
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    MenuModule,
    TieredMenuModule,
    PanelMenuModule,
    MenubarModule,
    SidebarModule,


  ],
  exports: [
    SideBarComponent
  ]
})
export class SharedModule { }
