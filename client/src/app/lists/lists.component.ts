import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { Pagination } from '../_models/pagination';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  blogs: Blog[] = [];
  blogIds: Set<number> = new Set<number>();
  pagination: Pagination;
  pageNumber = 1;
  pageSize = 2;
  category: string;
  loading = false;

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.category = this.router.url.replace('/', '');
    this.loadBlogs();

    this.blogService.updatedBlogs$.subscribe((value) => {
      this.blogs = value;
    });
  }

  loadBlogs() {
    this.loading = true;
    this.blogService
      .getBlogs(this.pageNumber, this.pageSize, this.category)
      .subscribe((response) => {
        this.blogs = response.result;
        this.pagination = response.pagination;

        console.log('blogs: ', this.blogs)
        console.log('pagination: ', this.pagination)

        this.loading = false;
      });
  }

  onSelectBlog(values: any): void {
    let blogId = values.currentTarget.value;

    if (values.currentTarget.checked) {
      this.blogIds.add(blogId);
    } else {
      this.blogIds.delete(blogId);
    }
    this.blogService.setBlogIds(Array.from(this.blogIds.values()));
  }

  pageChanged(event: any) {
    this.pageNumber = event.page;
    this.loadBlogs();
  }
}
