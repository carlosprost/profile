import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent {




  getRepositorio(repo: string) {
    window.location.href = `${repo}`;
  }

  getDemo(demo: string) {
    window.location.href = `${demo}`;
  }
}
