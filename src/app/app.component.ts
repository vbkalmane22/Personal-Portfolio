import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from "./skills/skills.component";
import { ScrollProgressComponent } from "./scroll-progress/scroll-progress.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrollProgressComponent, HeaderComponent, HomeComponent, AboutComponent, SkillsComponent],
  templateUrl: './app.component.html',



})
export class AppComponent {
  title = 'Personal-Portfolio';
}
