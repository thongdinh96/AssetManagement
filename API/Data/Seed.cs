using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedBlogs(DataContext context)
        {
            if (await context.Blogs.AnyAsync()) return;
            var blogData = await File.ReadAllTextAsync("Data/BlogSeedData.json");
            var blogs = JsonSerializer.Deserialize<List<Blog>>(blogData);

            if (blogs == null) return;

            foreach (Blog blog in blogs)
            {
                blog.CreatedAt = DateTime.Now;
                blog.UpdatedAt = DateTime.Now;
                context.Blogs.Add(blog);
            }

            int createRes = await context.SaveChangesAsync();

            if (createRes == 0)
            {
                throw new Exception("Error on seeding blogs");
            }
        }

        public static async Task SeedRoles(RoleManager<AppRole> roleManager)
        {
            if (await roleManager.Roles.AnyAsync()) return;
            var userData = await File.ReadAllTextAsync("Data/UserSeedData.json");
            var users = JsonSerializer.Deserialize<List<AppUser>>(userData);
            if (users == null) return;

            var roles = new List<AppRole>
            {
                new AppRole{Name = "Member"},
                new AppRole{Name = "Admin"},
                new AppRole{Name = "Moderator"}
            };

            foreach (var role in roles)
            {
                await roleManager.CreateAsync(role);
            }
        }
    }
}