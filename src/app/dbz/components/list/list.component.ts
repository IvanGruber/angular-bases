import {  Component, Input , EventEmitter , Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl:'./list.component.css'

})
export class ListComponent {

  @Input()
  public characterList:Character [] = []


  @Output()
  public onDeleteId : EventEmitter <string> = new EventEmitter();


  public onDelete(index?: string):void{

    console.log( 'Indice que va a borrar', {index})
    this.onDeleteId.emit(index);

  }
}

