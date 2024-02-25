import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor (private _router:Router){}

  goToAbout(){
    this._router.navigateByUrl("about");
  }

  goToPortfolio(){
    this._router.navigateByUrl("portfolio");
  }
  goToService(){
    this._router.navigateByUrl("services");
  }
  goToContact(){
    this._router.navigateByUrl("contact");
  }
}
