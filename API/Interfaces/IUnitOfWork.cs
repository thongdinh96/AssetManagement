namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        IBlogRepository BlogRepository { get; }
        ICryptoOrderRepository CryptoOrderRepository { get; }
        Task<bool> Complete();
        bool HasChanges();
    }
}