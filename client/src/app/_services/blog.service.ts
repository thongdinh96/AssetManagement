import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../_models/blog';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  baseUrl = environment.apiUrl;

  private blogs$ = new BehaviorSubject<Blog[]>([]);
  updatedBlogs$ = this.blogs$.asObservable();

  private blog$ = new BehaviorSubject<Blog>({ title: '', content: '' });
  updatedBlog$ = this.blog$.asObservable();

  private blogIds$ = new BehaviorSubject<number[]>([]);
  toDeleteBlogIds$ = this.blogIds$.asObservable();

  constructor(private http: HttpClient) {}

  getBlogs(pageNumber: number, pageSize: number, category: string) {
    let params = getPaginationHeaders(pageNumber, pageSize);    
    
    // return this.http.get(this.baseUrl + `blog/?category=${category}`);
    return getPaginatedResult<Blog[]>(this.baseUrl + `blog/?category=${category}`, params, this.http);
  }

  getBlog(id: string) {
    return this.http.get(this.baseUrl + `blog/${id}`);
  }

  createBlog(model: any) {
    return this.http.post(this.baseUrl + 'blog', model);
  }

  updateBlog(model: any) {
    return this.http.put(this.baseUrl + 'blog', model);
  }

  deleteBlog(id: number) {
    return this.http.delete(this.baseUrl + `blog/${id}`);
  }

  setBlogs(blogs: Blog[]) {
    this.blogs$.next(blogs);
  }

  setBlog(blog: Blog) {
    this.blog$.next(blog);
  }

  setBlogIds(blogIds: number[]) {
    this.blogIds$.next(blogIds);
  }
}
