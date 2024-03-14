import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: any;
  constructor(
    private http: HttpClient
  ) {
  }
  ngOnInit() {
    const options = {
      strings: ["Crear.", "Organizar.", "Gestionar."],
      typeSpeed: 30,
      startDelay: 1200,
      backSpeed: 20,
      backDelay: 500,
      loop: true,
      loopCount: 5,
      showCursor: false,
      cursorChar: "|",
      contentType: 'html',
      callback: () => {},
      preStringTyped: () => {},
      onStringTyped: () => {},
      resetCallback: () => {}
  };  
    const typed = new Typed('.typed', options);
  }
}
