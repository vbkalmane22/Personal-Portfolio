import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HomeComponent],
  templateUrl: './app.component.html',



})
export class AppComponent {
  title = 'Personal-Portfolio';
}
