import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public router: Router) { }

  /**
   * logs out user, clears token and username from local storage
   * @function logout
   */
  logout(): void {
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
}
