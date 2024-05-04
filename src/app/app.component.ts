import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.models';
import { CommonModule } from '@angular/common';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[ RouterOutlet,
            FaceSnapComponent,
            CommonModule,
            FaceSnapListComponent,
            HeaderComponent,
            FooterComponent,
            RouterLink,
            RouterLinkActive,
            RouterModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  faceSnaps! : FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
    ]
  }
}
