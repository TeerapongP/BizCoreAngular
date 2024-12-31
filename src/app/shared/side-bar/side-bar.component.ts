import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SummaryBusinessOverviewComponent } from '../../component/dash-board/summary-business-overview/summary-business-overview.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  @Output() isSidebarExpandedChange: EventEmitter<boolean> = new EventEmitter();

  isSidebarExpanded: boolean = false;

  public toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    this.isSidebarExpandedChange.emit(this.isSidebarExpanded);
  }

  public toggleSubMenu(index: number) {
    // Toggle the 'isOpen' property of the menu item at the given index
    this.menuItems[index]['isOpen'] = !this.menuItems[index]['isOpen'];
  }

  // Select a sub-menu item
  selectSubMenuItem(menuItemIndex: number, subItemIndex: number) {
    // Set the selected sub-menu item
    // Set the selected sub-menu item
    this.menuItems[menuItemIndex]['selectedSubMenuItem'] = subItemIndex;

    // Optionally, reset the selection of other sub-menu items for other menu items
    this.menuItems.forEach((menu, i) => {
      if (i !== menuItemIndex) {
        menu['selectedSubMenuItem'] = null;
      }
    });
  }

  menuItems: MenuItem[] = [
    {
      label: 'แดชบอร์ด (Dashboard)',
      icon: 'pi pi-home', // Icon for the dashboard menu
      isOpen: false, // State of the submenu (whether it is open or closed)
      selectedSubMenuItem: null, // Tracks the selected submenu item
      items: [
        { label: 'สรุปภาพรวมทางธุรกิจ', routerLink: '/dashboard/summaryBusinessOverview' },
        { label: 'กราฟและข้อมูลเชิงวิเคราะห์', routerLink: '/dashboard/analyticsGraphs' }
      ]
    },
    {
      label: 'บัญชีและการเงิน (Accounting & Finance)',
      icon: 'pi pi-dollar',
      isOpen: false,
      selectedSubMenuItem: null,
      items: [
        { label: 'การบันทึกบัญชี' },
        { label: 'ธุรกรรมการเงิน' },
        { label: 'รายงานการเงิน' }
      ]
    },
    {
      label: 'สินค้าคงคลัง (Inventory)',
      icon: 'pi pi-box',
      isOpen: false,
      selectedSubMenuItem: null,
      items: [
        { label: 'ตรวจสอบสถานะสินค้าคงคลัง' },
        { label: 'การจัดการคลังสินค้า' },
        { label: 'การตั้งค่าแจ้งเตือน' }
      ]
    },
    {
      label: 'ซัพพลายเชน (Supply Chain)',
      icon: 'pi pi-truck',
      isOpen: false,
      selectedSubMenuItem: null,
      items: [
        { label: 'คำสั่งซื้อ' },
        { label: 'ซัพพลายเออร์' },
        { label: 'วางแผนความต้องการวัตถุดิบ' }
      ]
    },
    {
      label: 'ทรัพยากรบุคคล (Human Resources)',
      icon: 'pi pi-users',
      isOpen: false,
      selectedSubMenuItem: null,
      items: [
        { label: 'ข้อมูลพนักงาน' },
        { label: 'ระบบเงินเดือน' },
        { label: 'การวางแผนและประเมินผล' }
      ]
    },
    {
      label: 'การขายและการตลาด (Sales & Marketing)',
      icon: 'pi pi-chart-line',
      isOpen: false,
      selectedSubMenuItem: null,
      items: [
        { label: 'ข้อมูลลูกค้า (CRM)' },
        { label: 'ใบเสนอราคาและใบแจ้งหนี้' },
        { label: 'การวิเคราะห์ยอดขาย' }
      ]
    },
    {
      label: 'การผลิต (Production)',
      icon: 'pi pi-cog',
      isOpen: false,
      selectedSubMenuItem: null,
      items: [
        { label: 'วางแผนการผลิต' },
        { label: 'กระบวนการผลิต' },
        { label: 'การจัดการเครื่องจักร' }
      ]
    },
    {
      label: 'รายงาน (Reports)',
      icon: 'pi pi-file',
      isOpen: false,
      selectedSubMenuItem: null,
      items: [
        { label: 'รายงานสำเร็จรูป' },
        { label: 'การปรับแต่งรายงาน' },
        { label: 'การส่งออกข้อมูล' }
      ]
    },
    {
      label: 'ตั้งค่าระบบ (System Settings)',
      icon: 'pi pi-cog',
      isOpen: false,
      selectedSubMenuItem: null,
      items: [
        { label: 'การจัดการผู้ใช้งานและสิทธิ์' },
        { label: 'การตั้งค่าภาษาและสกุลเงิน' },
        { label: 'การเชื่อมต่อกับระบบอื่น' }
      ]
    },
    {
      label: 'แจ้งเตือน (Notifications)',
      icon: 'pi pi-bell',
      isOpen: false,
      selectedSubMenuItem: null,
      items: [
        { label: 'การแจ้งเตือนเกี่ยวกับสินค้าคงคลัง' },
        { label: 'การแจ้งเตือนงานที่เกี่ยวข้อง' }
      ]
    },
    {
      label: 'ประวัติการดำเนินงาน (Activity Logs)',
      icon: 'pi pi-history',
      isOpen: false,
      selectedSubMenuItem: null,
      items: [
        { label: 'บันทึกการใช้งานของผู้ใช้' },
        { label: 'ติดตามความเปลี่ยนแปลงของข้อมูล' }
      ]
    },
    {
      label: 'ศูนย์ช่วยเหลือ (Help Center)',
      icon: 'pi pi-question-circle',
      isOpen: false,
      selectedSubMenuItem: null,
      items: [
        { label: 'คู่มือการใช้งาน' },
        { label: 'ติดต่อฝ่ายสนับสนุน' }
      ]
    },
    {
      label: 'การแจ้งเตือนแบบเรียลไทม์ (Live Notifications)',
      icon: 'pi pi-bell-slash',
      isOpen: false,
      selectedSubMenuItem: null
    }
  ];

}