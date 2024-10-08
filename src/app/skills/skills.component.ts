import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgFor } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {ionLogoHtml5,ionLogoCss3,ionLogoJavascript,ionLogoReact,ionLogoNodejs,ionLogoVercel} from '@ng-icons/ionicons'
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgIconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  viewProviders: [provideIcons({ ionLogoHtml5,ionLogoCss3,ionLogoJavascript,ionLogoReact,ionLogoNodejs,ionLogoVercel})],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', icon: 'ionLogoHtml5' },
    { name: 'CSS', icon: 'ionLogoCss3' },
    { name: 'JavaScript', icon: 'ionLogoJavascript' },
    { name: 'React', icon: 'ionLogoReact' },
    { name: 'Node.js', icon: 'ionLogoNodejs' },
    { name: 'Express.js', icon: 'assets/icons/express.svg' },
    { name: 'Next.js', icon: 'assets/icons/nextjs.svg' },
    { name: 'MySQL', icon: 'assets/icons/mysql.svg' },
    
    { name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
  
    { name: 'Tailwind CSS', icon: 'assets/icons/tailwind.svg' },
    { name: 'Git', icon: 'assets/icons/tailwind.svg' },
    { name: 'Vercel', icon: 'ionLogoVercel' },
  ];
}
