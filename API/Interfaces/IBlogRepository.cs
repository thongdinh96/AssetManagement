using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IBlogRepository
    {
        void CreateBlog(Blog blog);
        
        Blog EditBlog(Blog blog);

        Task<List<BlogDto>> GetBlogs(string category);
        
        Task<Blog> GetBlogById(int blogId);
        
        void DeleteBlog(int id);
    }
}