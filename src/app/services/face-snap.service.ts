import { FaceSnap } from './../models/face-snap.models';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn : 'root'
})
export class FaceSnapService {

  faceSnaps : FaceSnap[] = [
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

  getAllFaceSnap() : FaceSnap[] {
    return this.faceSnaps;
  }

}
