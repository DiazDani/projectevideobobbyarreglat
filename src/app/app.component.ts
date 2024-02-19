import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ActivitatComponent} from "./activitat/activitat.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, ActivitatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectevideobobbyarreglat';
}
