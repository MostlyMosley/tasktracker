import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'tt-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedInStatus: boolean = false;
  accountMenuLoggedIn: {route: string, label: string, icon: string, type: string}[] = [
    {route: 'tasks', label: 'Tasks', icon: 'task_alt', type: 'button'},
    {route: 'settings', label: 'Settings', icon: 'settings', type: 'button'},
    {route: 'none', label: '', icon: '', type: 'divider'},
    {route: 'sign-in', label: 'Sign Out', icon: 'logout', type: 'button'},
  ];
  accountMenuLoggedOut: {route: string, label: string, icon: string, type: string}[] = [
    {route: 'sign-up', label: 'Sign Up', icon: 'person_add', type: 'button'},
    {route: 'none', label: '', icon: '', type: 'divider'},
    {route: 'sign-in', label: 'Sign In', icon: 'login', type: 'button'}
  ];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getStatus();
  }
  getStatus(): void {
    // Setting to always true for now, will need to change after setting up login page
    this.userService.setLoggedInStatus(true);
    this.loggedInStatus = this.userService.loggedIn;
  }

  getAccountDropdown(): {route: string, label: string, icon: string, type: string}[] {
    if (this.loggedInStatus) {
      return this.accountMenuLoggedIn;
    } else {
      return this.accountMenuLoggedOut;
    }
  }

}
