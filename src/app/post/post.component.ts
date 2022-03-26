import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: IPost;
  @ContentChild('info', {static: true}) infoRef!: ElementRef;

  constructor() {
    this.post = { title: '', text: '' };
  }

  ngOnInit() {
    if (this.infoRef) {
      console.log(this.infoRef.nativeElement);
    }
  }
}
