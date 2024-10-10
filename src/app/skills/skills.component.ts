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
    { name: 'HTML',icon: 'html.svg' },
    { name: 'CSS', icon: 'CSS.svg' },
    { name: 'JavaScript', icon: 'js.svg' },
    { name: 'React', icon: 'react.svg' },
    { name: 'Node.js', icon: 'node.svg' },
    { name: 'Express.js',icon: 'express.svg' },
    { name: 'Next.js', icon: 'nextjs.svg' },
    { name: 'MySQL', icon: 'mysql.svg' },
    
    { name: 'TypeScript', icon: 'ts.svg' },
  
    { name: 'Tailwind CSS', icon: 'tailwind.svg' },
    { name: 'Github',icon: 'git.svg' },
    { name: 'Vercel', icon: 'vercel.svg' },
  ];
}
