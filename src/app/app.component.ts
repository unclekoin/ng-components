import { Component } from '@angular/core';

export interface IPost {
  id?: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'App Component';
  public posts: IPost[] = [
    {id: 1, title: 'Card Title #1', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
    {id: 2, title: 'Card Title #2', text: 'Some quick example text.'},
    {id: 3, title: 'Card Title #3', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
    {id: 4, title: 'Card Title #4', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
    {id: 5, title: 'Card Title #5', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
  ]

  public updatePosts(post: IPost) {
    this.posts.unshift(post);
    console.log('Posts', post);
  }
}
