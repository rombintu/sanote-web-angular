import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './note/note.component';
import { AddNoteComponent } from './add-note/add-note.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, NotesComponent, NoteComponent, AddNoteComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}