using API.Entities;

namespace API.Interfaces
{
    public interface IBlogRepository
    {
        void CreateBlog(Blog blog);

        Task<List<Blog>> GetBlogs(string category);
        
        Task<Blog> GetBlogById(int blogId);
        
        void DeleteBlog(int id);
    }
}