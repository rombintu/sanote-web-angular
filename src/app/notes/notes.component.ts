import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  newNote: string = ""
  notes: [{title: string, body: string, date: Date}] = [
    {title: "Default", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatum, sunt sequi aspernatur animi dignissimos praesentium est tempora minima natus, quaerat, suscipit labore earum corporis illo voluptate neque esse alias!", date: new Date(Date.now())}
  ]
  
  updateNotes(note: {title: string, body: string, date: Date}) {
    this.notes.unshift(note);
  }

  addNote() {
    this.newNote = prompt("Новая записка", "")
    if (this.newNote === "" || this.newNote === null) {
      return
    }
    this.notes.unshift({title: this.newNote.split(" ")[0]+"...", body: this.newNote, date: new Date(Date.now())})
  }

  remove(note: any) {
    this.notes.splice(this.notes.indexOf(note), 1)
  }
}
