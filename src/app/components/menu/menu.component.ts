import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  abrirMenu(event: Event) {
    let btn = event.target as HTMLElement;
    let menuOpt = document.querySelector('.menu-principal') as HTMLElement;
    if (btn.classList.contains('close_toggle')) {
      btn.classList.remove('close_toggle');
      menuOpt.classList.remove('menu-principal-visible');
    } else {
      btn.classList.add('close_toggle');
      menuOpt.classList.add('menu-principal-visible');
    }

    menuOpt.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        btn.classList.remove('close_toggle');
        menuOpt.classList.remove('menu-principal-visible');
      });
    });
  }
}
