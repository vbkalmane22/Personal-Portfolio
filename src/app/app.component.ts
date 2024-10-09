import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from "./skills/skills.component";
import { ScrollProgressComponent } from "./scroll-progress/scroll-progress.component";
import { ProjectsComponent } from "./projects/projects.component";
import { GetintouchComponent } from './getintouch/getintouch.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, ScrollProgressComponent, HeaderComponent, HomeComponent, AboutComponent, SkillsComponent, ProjectsComponent,GetintouchComponent],
  templateUrl: './app.component.html',



})
export class AppComponent {
  title = 'Personal-Portfolio';
}
