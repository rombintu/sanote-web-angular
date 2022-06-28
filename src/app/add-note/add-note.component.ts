import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  noteTitle: string = null
  noteBody: string = null
  noteDate: Date

  @Output() onAddNote = new EventEmitter<{title: string, body: string, date: Date}>();
  
  addNote() {
    if (this.noteTitle === null || this.noteBody === null) {
      alert("Поля должны быть заполнены")
      return
    }
    
    this.onAddNote.emit({
      title: this.noteTitle,
      body: this.noteBody,
      date: new Date(Date.now())
    });
    
    this.noteTitle = null;
    this.noteBody = null;
  }

}
