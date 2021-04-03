import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from '../../../assets/data/particlesjs-config';
import * as Typed from 'typed.js';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  terminalStart = 'chrislematty.com ~ ';
  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['Hello.', 'Welcome to my page.', 'Click around for some fun!'],
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1000,
      smartBackspace: true
    };
    const header = document.querySelector('.terminal-text');
    const typed = new Typed.default(header, options);
    particlesJS('particles-js', ParticlesConfig, () => {
      console.log('callback - particles.js config loaded');
    });
  }
}
