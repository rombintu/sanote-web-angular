import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input('noteItem') note : {title: string, body: string, date: Date};
  @Output() remove = new EventEmitter<{title: string, body: string, date: Date}>()
}
