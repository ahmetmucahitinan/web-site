import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  

  flappy() {
    window.location.href = "https://github.com/talha-al/Flappy-Bird";
  }
  roll() { 
    window.location.href = "https://github.com/talha-al/Roll-a-ball-GameFactory-Academy";
  }
  traffic() { 
    window.location.href = "https://github.com/talha-al/TrafficRacer";
  }
  pokey() { 
    window.location.href = "https://github.com/talha-al/PokeyBall-Demo-";
  }
  ball() { 
    window.location.href = "https://github.com/talha-al/BallControl";
  }
  collect() { 
    window.location.href = "https://github.com/talha-al/CollectCubes";
  }
  balon() { 
    window.location.href = "https://github.com/talha-al/BalonPatlatma";
  }
  klinik() { 
    window.location.href = "https://github.com/talha-al/KlinikTakipSistemi.jh";
  }
  
}
