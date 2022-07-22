namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        IBlogRepository BlogRepository { get; }
        IUserRepository UserRepository { get; }
        Task<bool> Complete();
        bool HasChanges();
    }
}