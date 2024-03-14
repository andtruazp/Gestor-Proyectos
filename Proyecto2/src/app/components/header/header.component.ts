import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit() {
    const navToggle: HTMLElement | null = document.querySelector(".nav-toggle");
    const navMenu: HTMLElement | null = document.querySelector(".nav-menu");

    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu_visible");
      });
    }
  }
}

