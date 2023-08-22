import { Injectable } from '@angular/core';
import { Storage , ref , listAll ,getDownloadURL , getMetadata} from '@angular/fire/storage';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private portraitImagePath = '../assets/images/portrait'; // Path to your images folder



  constructor( ) { }









}
