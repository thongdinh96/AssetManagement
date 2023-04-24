using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface ICryptoOrderRepository
    {
        void CreateCryptoOrder(CryptoOrder cryptoOrder);

        Task<List<BlogDto>> GetBlogs(string category);
    }
}
