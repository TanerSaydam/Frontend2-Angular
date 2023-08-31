import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostResponseModel } from 'src/app/models/post-response.model';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export default class HomeComponent {
  content: string = "";
  posts: PostResponseModel[] = [];

  constructor(
    private http: HttpService,
    public auth: AuthService,
    private error: ErrorService
  ) {
    this.getAll(); 
  }

  check(userId: number){
    if(userId === this.auth.tokenDecode.id)
      return false;

    return true;
  }

  send(){
    this.http.post("Posts/Create", {userId: this.auth.tokenDecode.id, content: this.content}, (res)=> {
      this.content = "";
      this.getAll();
    });
  }

  getAll(){
    this.http.get(`Posts/GetAll`, (res)=> {
      this.posts = res;
    });
  }


  likeOrUnlike(postId: number){
    this.http.get(`PostLikes?userId=${this.auth.tokenDecode.id}&postId=${postId}`, (res)=> {
      this.getAll();
    });
  }

  changeLikeOrUnLikeBtn(post: PostResponseModel){
    const userId = this.auth.tokenDecode.id;
    const result = post.likes.filter(p=> p.userId === userId)[0];
    
    if(result !== undefined){
      return "btn-primary"
    }else{
      return "btn-light"
    }
  }
}
