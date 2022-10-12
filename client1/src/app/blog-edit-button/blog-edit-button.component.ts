import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-blog-edit-button',
  templateUrl: './blog-edit-button.component.html',
  styleUrls: ['./blog-edit-button.component.css'],
})
export class BlogEditButtonComponent implements OnInit {
  bsModalRef?: BsModalRef;
  blog: Blog;
  public Editor = ClassicEditor;

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private blogService: BlogService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  openEditBlogModal(template: TemplateRef<any>) {
    // Get blog detail from current path
    const id = this.route.snapshot.paramMap.get('id');

    this.blogService.getBlog(id).subscribe((response: Blog) => {
      this.blog = response;
      this.bsModalRef = this.modalService.show(template);
    });
  }

  onEditBlog() {
    // Collect blog data
    let toUpdateBlog: Blog = {
      id: this.blog.id,
      title: this.blog.title,
      content: this.blog.content,
    };

    // Call put api to update blog
    this.blogService.updateBlog(toUpdateBlog).subscribe((response: Blog) => {
      this.bsModalRef.hide();
      this.toastr.success('Updated blog successfully!');

      // Reload blog data
      this.blog.title = response.title;
      this.blog.content = response.content;
      this.blogService.setBlog(this.blog);
    });
  }

  public onChange({ editor }: ChangeEvent) {
    this.blog.content = editor.getData();
  }
}
