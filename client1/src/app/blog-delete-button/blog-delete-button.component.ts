import { Component, OnInit, TemplateRef } from '@angular/core';
import { BlogService } from '../_services/blog.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-delete-button',
  templateUrl: './blog-delete-button.component.html',
  styleUrls: ['./blog-delete-button.component.css'],
})
export class BlogDeleteButtonComponent implements OnInit {
  blogIds: number[] = [];
  lastPath: string = '';
  bsModalRef?: BsModalRef;
  confirmTitle: string = 'Confirm delete';
  infoTitle: string = 'Information';

  constructor(
    private blogService: BlogService,
    private modalService: BsModalService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.lastPath = this.router.url.replace('/', '').split('/').pop();
  }

  ngOnInit(): void {
    this.blogService.toDeleteBlogIds$.subscribe((value) => {
      this.blogIds = value;
    });
  }

  openConfirmDeleteModal(
    confirmListTemplate: TemplateRef<any>,
    infoTemplate: TemplateRef<any>
  ) {
    if (this.blogIds.length == 0) {
      // Show modal information
      this.bsModalRef = this.modalService.show(infoTemplate);
    } else {
      // Show modal confirm
      this.bsModalRef = this.modalService.show(confirmListTemplate);
    }
  }

  onDeleteSelectedBlogs() {
    // let category = this.router.url.replace('/', '');
    // this.blogIds.forEach((blogId) => {
    //   // console.log(blogId);
    //   this.blogService.deleteBlog(blogId).subscribe((res) => {
    //     console.log(res);
    //   });
    // });
    // this.toastr.success('Deleted selected blogs successfully!');
    // this.blogService.getBlogs(category).subscribe((response: Blog[]) => {
    //   this.blogService.setBlogs(response);
    // });
  }

  onClickNoButton() {
    this.bsModalRef.hide();
  }

  onClickOkButton() {
    this.bsModalRef.hide();
  }

  openConfirmDeleteBlog(confirmPostTemplate: TemplateRef<any>) {
    // Show modal confirm delete
    this.bsModalRef = this.modalService.show(confirmPostTemplate);
  }

  onDeleteBlog() {
    // Get blog id
    let blogId = +this.lastPath;
    this.blogService.deleteBlog(blogId).subscribe(() => {
      this.toastr.success('Deleted blog successfully!');
      
      // Back to list component
      this.router.navigateByUrl('programming');
      this.bsModalRef.hide();
    });
  }
}
