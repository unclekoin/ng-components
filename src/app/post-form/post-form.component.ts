import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>();

  @ViewChild('titleInput') inputRef!: ElementRef;

  public title: string = '';
  public text: string = '';

  public addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: IPost = {
        id: Date.now(),
        title: this.title,
        text: this.text
      };
      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }

  public focusTitle() {
    if (this.inputRef) {
     this.inputRef.nativeElement.focus();
    }
  }
}
