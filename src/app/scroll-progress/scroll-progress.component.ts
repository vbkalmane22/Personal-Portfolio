import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  templateUrl: './scroll-progress.component.html',
  styleUrls: ['./scroll-progress.component.css']
})
export class ScrollProgressComponent implements OnInit {
  scrollProgress = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.updateScrollProgress();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateScrollProgress();
  }

  private updateScrollProgress() {
    if (isPlatformBrowser(this.platformId)) {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;

      this.scrollProgress = (scrollPosition / totalHeight) * 100;
    }
  }
}
