import { NgFor,NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {featherExternalLink} from '@ng-icons/feather-icons';
import { trigger, style, transition, animate } from '@angular/animations';
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor,NgIconComponent,NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  viewProviders: [provideIcons({ featherExternalLink})],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})


export class ProjectsComponent {


  projects: Project[] = [
    {
      title: 'Splitter Application',
      description: 'A handy application that evenly splits any given amount among a specified number of people.',
      tech: ['React', 'Node.js', 'Typescript','Javascript','Tailwind'],
      image: 'splitter.png',
      link: 'https://github.com/vbkalmane22/splitterapplication',
    },
    {
      title: 'Library Management App',
      description: 'An efficient system for managing library resources, member registrations, and book transactions.',
      tech: ['Next.js', 'Tailwind', 'Typescript','Javascript','MySQL','Vercel'],
      image: 'l.png',
      link: 'https://nextjs-library-eta.vercel.app/en',
    },
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio showcasing my skills, projects, and expertise as a full-stack developer.',
      tech: ['Angular.js', 'Tailwind', 'Typescript','Netlify','Github'],
      image: 'portfolio.png',
      link: 'https://vkalmane.netlify.app/',
    },
    
  ];
  encodeURIComponent(title: string): string {
    return encodeURIComponent(title);
  }
}