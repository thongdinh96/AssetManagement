using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<RegisterDto, AppUser>();
            CreateMap<Blog, BlogDto>();
            CreateMap<UpdateBlogDto, Blog>();
            CreateMap<CryptoOrderDto, CryptoOrder>().ReverseMap();
        }
    }
}
