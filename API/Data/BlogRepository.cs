using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class BlogRepository : IBlogRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public BlogRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void CreateBlog(Blog blog)
        {
            _context.Blogs?.Add(blog);
        }
        public Blog EditBlog(Blog blog)
        {
            Blog toUpdateBlog = _context.Blogs.FirstOrDefault(b => b.Id == blog.Id);

            toUpdateBlog.Title = blog.Title;
            toUpdateBlog.Content = blog.Content;
            toUpdateBlog.UpdatedAt = DateTime.Now;

            return _context.Blogs?.Update(toUpdateBlog).Entity;
        }

        public void DeleteBlog(int id)
        {
            Blog blog = _context.Blogs.FirstOrDefault(b => b.Id == id);
            _context.Blogs?.Remove(blog);
        }

        public async Task<Blog> GetBlogById(int blogId)
        {
            Blog blog = await _context.Blogs.Where(b => b.Id == blogId).FirstOrDefaultAsync();

            return blog;
        }

        public async Task<List<BlogDto>> GetBlogs(string category)
        {
            var blogs = await _context.Blogs
                .Where(b => b.Category == category)
                .ProjectTo<BlogDto>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return blogs;

        }
    }
}