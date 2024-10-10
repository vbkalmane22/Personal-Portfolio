import { Component ,OnInit} from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('0.8s ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('0.8s ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  introText: string = '';
  combinedText: string = 'Hello, I am Vinayak, a passionate full-stack developer with a creative approach to problem-solving and a deep love for crafting seamless user experiences.With a strong foundation in both front-end and back-end development, I have built dynamic and visually appealing web applications that are not only functional but also scalable and performance-driven.';
  
  typingSpeed: number = 50; 

 
  ngOnInit(): void {
    this.typeWriterEffect(this.combinedText, 'introText');
  }

  typeWriterEffect(fullText: string, property: 'introText') {
    let currentText = '';
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        this[property] = currentText;
        index++;
      } else {
        clearInterval(interval);
      }
    }, this.typingSpeed);
  }
}
