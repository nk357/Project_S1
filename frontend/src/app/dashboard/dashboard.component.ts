// dashboard.component.ts
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   standalone: true,
//   selector: 'app-dashboard',
//   imports: [CommonModule],
//   template: `<h2>🎉 Welcome to your Dashboard!</h2>`
// })
// export class DashboardComponent {}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAuth, signOut } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert('👋 Logged out successfully');
        this.router.navigateByUrl('/login');
      })
      .catch(error => {
        console.error('❌ Logout error:', error);
      });
  }
}
