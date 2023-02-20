import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() author?: string

  skills: Array<string> = ['HTML, CSS y JavaScript', 'Angular', 'NestJS', 'NodeJS', 'ExpressJS']
  skill!: string
  constructor(){
    this.skillsScreen()
    
  }

  skillsScreen(): void{
    let counter: number = 0
    setInterval(()=>{
      if(counter == this.skills.length){
        counter = 0
      }
      this.skill = this.skills[counter]
      counter++
    }, 2000)
  }
}
