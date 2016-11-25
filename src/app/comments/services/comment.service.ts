import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Comment } from '../model/comment'

@Injectable()
export class CommentService {
  constructor(private http: Http) {
  }
    private commentsUrl = 'http://5837f9738405b21200fbd5a6.mockapi.io/api/v1/comment';
    //获取所有评论
    getComments(): Observable<Comment[]> {
      return this.http.get(this.commentsUrl)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    //添加评论
  addComment(body: Object): Observable<Comment[]> {
      let bodyString = JSON.stringify(body);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      return this.http.post(this.commentsUrl, body, options)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  //编辑评论
  updateComment (body: Object): Observable<Comment[]> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options)
      .map((res:Response)=>res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  //删除评论
  removeComment(id: string): Observable<Comment[]> {
      return this.http.delete(`${this.commentsUrl}/${id}`)
        .map((res:Response)=>res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
