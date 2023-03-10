import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; // Close dialog on success
import { FetchApiDataService } from '../fetch-api-data.service'; // API
import { MatSnackBar } from '@angular/material/snack-bar'; // Notifications
import { Router } from '@angular/router'; // Routing

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss'],
})
export class UserLoginFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void { }

  /**
   * Send the form inputs to the backend via API call
   * @function loginUser
   */

  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe(
      (result) => {
        console.log(result);
        localStorage.setItem('user', result.user.Username);
        localStorage.setItem('token', result.token);
        this.dialogRef.close(); // This will close the modal on success
        this.router.navigate(['movies']);
      },
      (result) => {
        this.snackBar.open(result, 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
