import { Component } from '@angular/core';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrl: './my-requests.component.scss'
})
export class MyRequestsComponent {
  items = [
    { name: 'John Doe', submissionDate: '2024-07-28', status: 'Pending' },
    { name: 'Jane Smith', submissionDate: '2024-07-27', status: 'Approved' },
    { name: 'Mike Johnson', submissionDate: '2024-07-26', status: 'Rejected' }
  ];

  getStatusCircleClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'circle-pending';
      case 'approved':
        return 'circle-approved';
      case 'rejected':
        return 'circle-rejected';
      default:
        return '';
    }
  }
}
