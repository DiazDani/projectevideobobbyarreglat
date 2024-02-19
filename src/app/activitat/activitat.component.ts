import {Component, ViewChild} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {io} from 'socket.io-client';
@Component({
  selector: 'app-activitat',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './activitat.component.html',
  styleUrl: './activitat.component.css'
})
export class ActivitatComponent {
  private socket = io('http://192.168.56.1:8888', {transports: ['websocket']});

  codigoGenerado: string | undefined;
  codigoCorrecto: boolean | undefined;
  videoSeleccionado: boolean | undefined
  nameVideoseleccionado: string | any
  videos: any[] = [];
  input: any

  constructor() {
    this.socket.on('hello', (args) => {
      console.log(args);
    });
    this.socket.on('nouCode', (code) => {
      this.codigoGenerado = code
    })
    this.socket.on('codigoCorrecto', (correcto) => {
      this.codigoCorrecto = correcto;
      console.log('Código correcto:', correcto);


    });

    this.socket.on('listaVideos', (videoList) => {
      this.videos = videoList;
      console.log('Lista de videos actualizada:', this.videos);
    });
  }

  generarCodi(videoName: string) {
    this.codigoCorrecto=false
    this.socket.emit('generarCodigo', '');
    this.videoSeleccionado = true;
    this.nameVideoseleccionado = videoName;
  }


}
