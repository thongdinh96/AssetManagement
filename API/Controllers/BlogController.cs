using API.DTOs;
using API.Entities;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public BlogController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<List<BlogDto>>> GetBlogs(string category)
        {
            List<Blog> blogs = await _unitOfWork.BlogRepository.GetBlogs(category);
            blogs = blogs.Select(b =>
            {
                b.Content = Utils.ExtractText(b.Content);
                b.Content = string.Join(" ", b.Content.Split().Take(Constants.BlogDescriptionWordsCount).ToArray()) + "...";
                return b;
            }).ToList();
            return Ok(_mapper.Map<List<BlogDto>>(blogs));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BlogDto>> GetBlog(int id)
        {
            Blog blog = await _unitOfWork.BlogRepository.GetBlogById(id);

            return Ok(_mapper.Map<BlogDto>(blog));
        }

        [HttpPost]
        public async Task<ActionResult<string>> CreateBlog(CreateBlogDto createBlogDto)
        {
            var blog = new Blog
            {
                Title = createBlogDto.Title,
                Category = createBlogDto.Category,
                Content = createBlogDto.Content,
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now
            };

            _unitOfWork.BlogRepository.CreateBlog(blog);
            if (await _unitOfWork.Complete()) return Ok();

            return BadRequest("Problem adding blog");
        }

        [HttpPut]
        public async Task<ActionResult<Blog>> UpdateBlog(UpdateBlogDto updateBlogDto)
        {
            Blog updatedBlog = _unitOfWork.BlogRepository.EditBlog(_mapper.Map<Blog>(updateBlogDto));
            if (await _unitOfWork.Complete()) return Ok(updatedBlog);

            return BadRequest("Problem editing blog");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteBlog(int id)
        {
            _unitOfWork.BlogRepository.DeleteBlog(id);
            if (await _unitOfWork.Complete()) return Ok();

            return BadRequest("Problem deleting blog");
        }
    }
}
