import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [NgFor],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class CertificationsComponent {
  certifications = [
    { name: 'Responsive web design', issuer: 'Freecodecamp', year: 2024 },
    { name: 'Data structures and Algorithms in Javascript', issuer: 'Freecodecamp', year: 2024 },
    { name: 'Total Typescript', issuer: 'Total Typescript', year: 2024 },
    { name: 'Postman 30 days challenge', issuer: 'Postman', year: 2024 },
  ];
}
