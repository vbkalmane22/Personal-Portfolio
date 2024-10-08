import { Component } from '@angular/core';
import { trigger, style, animate, transition,state } from '@angular/animations';
import { NgIf,NgFor } from '@angular/common';
import { ScrollProgressComponent } from "../scroll-progress/scroll-progress.component";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgFor, ScrollProgressComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('menuAnimation', [
      state('open', style({
        opacity: 1,
        transform: 'translateY(0)',
      })),
      state('closed', style({
        opacity: 0,
        transform: 'translateY(-20px)',
      })),
      transition('open => closed', animate('200ms ease-in-out')),
      transition('closed => open', animate('200ms ease-in-out')),
    ]),
  ],
})
export class HeaderComponent {
  isMenuOpen = false;
  activeSection = 'home'; 
  navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollToSection(section: string) {
    this.activeSection = section;
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
