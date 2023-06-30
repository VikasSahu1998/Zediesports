import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Note } from 'src/app/note';
import { NoteService } from 'src/app/note.service';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss']
})
export class HomeBlogComponent implements OnInit{
  constructor(private fb: FormBuilder, private noteservice: NoteService) {
  }
  noteDetails: any;
  notesData: any = [];
  ngOnInit() {
    this.getAllNotes()
  }

  //get data from firebase
  getAllNotes() {
    this.noteservice.getNotes().subscribe((res: Note[]) => {
      // console.log(res);
      this.notesData = res;
    })
  }
  getAllNoteDetails(note: Note) {
    this.noteDetails = note
    console.log(this.noteDetails)
  }
}
