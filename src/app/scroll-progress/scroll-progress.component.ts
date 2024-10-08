import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [],
  templateUrl: './scroll-progress.component.html',
  styleUrl: './scroll-progress.component.css'
})
export class ScrollProgressComponent {
  scrollProgress = 0;

  ngOnInit(): void {
    this.updateScrollProgress();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateScrollProgress();
  }

  private updateScrollProgress() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;

    this.scrollProgress = (scrollPosition / totalHeight) * 100;
  }
}
