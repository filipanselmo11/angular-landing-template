import { Component } from '@angular/core';
import { TituloComponent } from '../titulo/titulo.component';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [TituloComponent],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.scss'
})
export class ScreenComponent {

}
