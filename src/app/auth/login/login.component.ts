import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  departments: string[] = ['IT Support', 'Development', 'HR', 'Finance', 'Administration'];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      // email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      matricule: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    });
  }


  onSubmit() {
    if (this.userForm.valid) {
      const { matricule, password } = this.userForm.value;
      this.authService.login(matricule, password).subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          this.router.navigate(['/my-requests']);
        },
        error: (error: any) => {
          console.error('Login failed', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
