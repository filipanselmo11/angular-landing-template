import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { TituloComponent } from '../../components/titulo/titulo.component';
import { ScreenComponent } from '../../components/screen/screen.component';
import { TabComponent } from '../../components/tab/tab.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContainerComponent, TituloComponent, ScreenComponent, TabComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
