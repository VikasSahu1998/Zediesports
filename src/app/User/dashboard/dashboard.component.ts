import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Shared/auth.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user$ = this.authService.currentUser$;
  

  constructor(private authService: AuthService, private router: Router,) {  }
 

  ngOnInit(): void {}
}