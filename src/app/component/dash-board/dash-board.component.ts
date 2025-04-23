import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent {

  // ตัวแปรเพื่อเก็บข้อมูลสรุป
  summaryData = {
    totalOrders: 120,
    totalRevenue: 35000,
    pendingOrders: 30,
    completedOrders: 90
  };

  // ตัวแปรสำหรับตารางข้อมูล
  orders = [
    { orderId: 1, customer: 'John Doe', status: 'Completed', total: 200 },
    { orderId: 2, customer: 'Jane Smith', status: 'Pending', total: 150 },
    { orderId: 3, customer: 'Samuel Green', status: 'Completed', total: 300 }
  ];
}
