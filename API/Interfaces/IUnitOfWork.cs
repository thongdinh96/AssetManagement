namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        IBlogRepository BlogRepository { get; }
        Task<bool> Complete();
        bool HasChanges();
    }
}