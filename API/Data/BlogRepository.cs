using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class BlogRepository : IBlogRepository
    {
        private readonly DataContext _context;

        public BlogRepository(DataContext context)
        {
            _context = context;
        }

        public void CreateBlog(Blog blog)
        {
            _context.Blogs?.Add(blog);
        }

        public async Task<Blog> GetBlogById(int blogId)
        {
            Blog blog = await _context.Blogs.Where(b => b.Id == blogId).FirstOrDefaultAsync();

            return blog;
        }

        public async Task<List<Blog>> GetBlogs(string category)
        {
            List<Blog> blogs = await _context.Blogs.Where(b => b.Category == category).ToListAsync();

            return blogs;
        }
    }
}