import { Component,Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { CommonModule } from '@angular/common';
//import { FaceSnapComponent } from './face-snap/face-snap.component';


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  @Input() faceSnaps! : FaceSnap[];

  ngOnInit(): void {
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
    ];
  }
}
