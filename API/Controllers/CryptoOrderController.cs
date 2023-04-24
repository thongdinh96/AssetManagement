using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CryptoOrderController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public CryptoOrderController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<ApiResponse>>
            CreateCryptoOrder(CryptoOrderDto cryptoOrderDto)
        {
            var cryptoOrder
                = _mapper
                    .Map<CryptoOrder>
                        (cryptoOrderDto);
            _unitOfWork
                .CryptoOrderRepository
                    .CreateCryptoOrder
                        (cryptoOrder);
            if (await _unitOfWork.Complete())
                return Ok();

            return BadRequest("Problem adding crypto");
        }

        [HttpGet]
        public async Task<ActionResult<List<BlogDto>>> GetCryptoOrders(
            [FromQuery] PaginationParams paginationParams)
        {
            //List<BlogDto> blogs = await _unitOfWork.CryptoOrderRepository.(category);
            //blogs = blogs.Select(b =>
            //{
            //    b.Content = Utils.ExtractText(b.Content);
            //    b.Content = string.Join(" ", b.Content.Split().Take(Constants.BlogDescriptionWordsCount).ToArray()) + "...";
            //    return b;
            //}).ToList();
            //var blogsPagedList = PagedList<BlogDto>.Create(blogs.AsQueryable(), paginationParams.PageNumber, paginationParams.PageSize);
            //Response.AddPaginationHeader(blogsPagedList.CurrentPage, blogsPagedList.PageSize, blogsPagedList.TotalCount, blogsPagedList.TotalPages);
            //return Ok(blogsPagedList);
        }
    }
}
