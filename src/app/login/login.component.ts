import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _route: Router, public _show: AppComponent) { }

  ngOnInit() {
  }

  goHome() {
    this._route.navigate(['/home'])
    return this._show.showHeader();
  }

}
