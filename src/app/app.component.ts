import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FaceSnapComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  faceSnaps! : FaceSnap[];
 /* mySnap! : FaceSnap;
  myOtherSnap! : FaceSnap;
  myLastSnap! : FaceSnap;*/
  /*ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
  }*/
  ngOnInit() {
    this.faceSnaps = [
      {
        title : 'Archibald',
        description : 'Mon meilleur ami depuis tout petit !',
        imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        location : "Anvers",
        snaps : 50

      },
      {
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        createdDate: new Date(),
        snaps: 325
      },
      {
        title: 'Un bon repas',
        description: 'Mmmh que c\'est bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(),
        snaps: 5
      }
    ]
    /*this.mySnap = {
      title : 'Archibald',
      description : 'Mon meilleur ami depuis tout petit !',
      imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      location : "Anvers",
      snaps : 0

    };

    this.myOtherSnap = {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 0
    };

    this.myLastSnap = {
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0
    };*/
  }
  //title = 'snapface';
}
