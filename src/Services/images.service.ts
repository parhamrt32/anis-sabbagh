import { Injectable } from '@angular/core';
import { Storage , ref , listAll ,getDownloadURL , getMetadata} from '@angular/fire/storage';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private portraitImagePath = '../../../assets/images/portrait/'; // Path to your images folder



  constructor(  ) { }

  portraitFilesNames = [
    "anis-sabbagh-5S-t1aUGfeo-unsplash.webp",
    "anis-sabbagh-c-PB4nrEW2k-unsplash.webp",
    "anis-sabbagh-C8L_bYC0yCQ-unsplash.webp",
    "anis-sabbagh-gSpFBCSoqAs-unsplash.webp",
    "anis-sabbagh-J0GY67OBD20-unsplash.webp",
    "anis-sabbagh-JftqShRg39c-unsplash.webp",
    "anis-sabbagh-JL2iPba2C7U-unsplash.webp",
    "anis-sabbagh-Md7qIHzQwu0-unsplash.webp",
    "anis-sabbagh-MROvVqfilAU-unsplash.webp",
    "anis-sabbagh-Q5b3VCY8KGQ-unsplash.webp",
    "anis-sabbagh-SntungyMhcs-unsplash.webp",
    "anis-sabbagh-SXqlJVL05V4-unsplash.webp",
    "anis-sabbagh-t9fwLWmEBtc-unsplash.webp",
    "anis-sabbagh-uLaqR_vdKj0-unsplash.webp",
    "anis-sabbagh-x9vNae3QksE-unsplash_1.webp",
    "anis-sabbagh-yW1g74jV0k0-unsplash_1.webp",
    "ezgif.com-gif-maker.webp"
  ]

  getPortraitsImagePaths(): string[] {
    return this.portraitFilesNames.map(filename => this.portraitImagePath + filename);
  }













}
