using API.Entities;
using API.Interfaces;
using AutoMapper;

namespace API.Data
{
    public class CryptoOrderRepository : ICryptoOrderRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public CryptoOrderRepository(
            DataContext context,
            IMapper mapper
            )
        {
            _context = context;
            _mapper = mapper;
        }

        public void
            CreateCryptoOrder(CryptoOrder cryptoOrder)
        {
            _context.CryptoOrders?.Add(cryptoOrder);
        }
    }
}
