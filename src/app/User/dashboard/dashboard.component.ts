import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Shared/auth.service';
import {Observable} from "rxjs";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user$ = this.authService.currentUser$;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}