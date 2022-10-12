import { Component, OnInit } from '@angular/core';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  blog: Blog = {
    title: '',
    content: '',
    category: '',
  };
  blogHtml: SafeHtml;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.blogService.getBlog(id).subscribe((response: Blog) => {
      this.blog = response;
      this.blogHtml = this.sanitizer.bypassSecurityTrustHtml(this.blog.content);
    });

    this.blogService.updatedBlog$.subscribe((value) => {
      this.blog = value;
      this.blogHtml = this.sanitizer.bypassSecurityTrustHtml(this.blog.content);
    });
  }
}
