import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  public sanitizer: DomSanitizer;
  public foto: SafeResourceUrl;

  constructor(sanit: DomSanitizer) {
    this.sanitizer = sanit;
   }

   async fotografar(): Promise<void>{
    const imagem = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      allowEditing: false,
    });

    const imagemUrl = imagem.webPath;
    this.foto = this.sanitizer.bypassSecurityTrustResourceUrl(imagemUrl)
  }

  ngOnInit() {
  }

}
