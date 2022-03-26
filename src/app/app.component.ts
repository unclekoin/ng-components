import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {
  public title = 'App Component';
  public posts: IPost[] = [
    {
      id: 1,
      title: 'Card Title #1',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    }
    // {id: 2, title: 'Card Title #2', text: 'Some quick example text.'},
    // {id: 3, title: 'Card Title #3', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
    // {id: 4, title: 'Card Title #4', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
    // {id: 5, title: 'Card Title #5', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
  ];

  ngOnInit() {
    setTimeout(() => {
      console.log('Timeout');
      // this.posts[0].title = 'Changed!';
      this.posts[0] = {
        id: 123,
        title: 'Changed!',
        text: 'Some text'
      }
    }, 5000);
  }

  public updatePosts(post: IPost) {
    this.posts.unshift(post);
    console.log('Posts', post);
  }

  public removePost(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
  }
}
