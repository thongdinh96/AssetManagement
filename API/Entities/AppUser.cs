using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class AppUser : IdentityUser<int>
    {
        public DateTime Created { get; set; } = DateTime.Now;
        
        public DateTime DateOfBirth { get; set; }
        
        public DateTime LastActive { get; set; } = DateTime.Now;
        
        public ICollection<AppUserRole> UserRoles { get; set; }
    }
}
