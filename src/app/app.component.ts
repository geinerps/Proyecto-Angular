import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule,
    CommonModule, HttpClientModule, RouterOutlet, RouterLink ]
})

export class AppComponent implements OnInit {
  title = 'AngularApp';
  authService = inject(AuthService)
  

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else{
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig());
    });
  }

  logout(): void {
    this.authService.logout();
  }

  sidenavOpened = false;

  openSidenav() {
    this.sidenavOpened = true;
  }

  closeSidenav() {
    this.sidenavOpened = false;
  }
}