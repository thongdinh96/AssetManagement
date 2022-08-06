using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedBlogs(IUnitOfWork unitOfWork, DataContext context)
        {
            if (await context.Blogs.AnyAsync()) return;
            var blogData = await File.ReadAllTextAsync("Data/BlogSeedData.json");
            var blogs = JsonSerializer.Deserialize<List<Blog>>(blogData);

            if (blogs == null) return;

            foreach (Blog blog in blogs)
            {
                blog.CreatedAt = DateTime.Now;
                unitOfWork.BlogRepository.CreateBlog(blog);
            }

            bool createRes = await unitOfWork.Complete();

            if (!createRes)
            {
                throw new Exception("Error on seeding blogs");
            }
        }
    }
}