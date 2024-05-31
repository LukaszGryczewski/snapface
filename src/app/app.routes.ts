import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingelFaceSnapComponent } from './singel-face-snap/singel-face-snap.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path : '', component: LandingPageComponent },
  { path : 'facesnaps', component : FaceSnapListComponent },
  { path : 'facesnaps/:id', component : SingelFaceSnapComponent},
  { path : 'about', component : AboutComponent}


];
