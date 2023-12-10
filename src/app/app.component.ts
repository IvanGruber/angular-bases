import { Component } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/components/heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterModule,HeroesModule, DbzModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 public title:string = 'Hola Mundo';

}
