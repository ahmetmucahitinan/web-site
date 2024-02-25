import { Component, OnInit } from '@angular/core';
import { AboutTextService } from '../about-text.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  fullName: string = "";
  image: string = "";
  developer: string[]=[];
  aboutText: string = "";
  aboutTextlist: string = "";
  constructor(private _aboutTextService: AboutTextService) { }
  

  ngOnInit(){
    this.fullName = this._aboutTextService._fullName;
    this.image = this._aboutTextService._image;
    this.developer = this._aboutTextService._developer;
    this.aboutText = this._aboutTextService._aboutText;
    this.aboutTextlist = this._aboutTextService._aboutTextlist;
  }
}
