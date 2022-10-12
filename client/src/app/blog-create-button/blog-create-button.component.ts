import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BlogService } from '../_services/blog.service';
import { Blog } from '../_models/blog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-blog-create-button',
  templateUrl: './blog-create-button.component.html',
  styleUrls: ['./blog-create-button.component.css'],
})
export class BlogCreateButtonComponent implements OnInit {
  bsModalRef?: BsModalRef;
  blog: Blog = {
    title: '',
    content: '',
  };
  public Editor = ClassicEditor;

  ngOnInit(): void {}

  constructor(
    private modalService: BsModalService,
    private blogService: BlogService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  openCreateBlogModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
  }

  onCreateBlog() {
    this.blog.category = this.router.url.replace('/', '');

    this.blogService.createBlog(this.blog).subscribe(() => {
      this.bsModalRef.hide();
      this.toastr.success('Created blog successfully!');
      // this.blogService
      //   .getBlogs(this.blog.category)
      //   .subscribe((response: Blog[]) => {
      //     this.blogService.setBlogs(response);
      //   });
    });
  }

  public onChange({ editor }: ChangeEvent) {
    this.blog.content = editor.getData();
  }
}
