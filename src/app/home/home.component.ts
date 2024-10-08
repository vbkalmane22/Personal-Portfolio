import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapGithub,bootstrapLinkedin ,bootstrapChevronDown,bootstrapEnvelope} from '@ng-icons/bootstrap-icons';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  viewProviders: [provideIcons({ bootstrapGithub,bootstrapLinkedin ,bootstrapChevronDown,bootstrapEnvelope})],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {

}
