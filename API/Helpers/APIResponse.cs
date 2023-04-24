using System.Net;

namespace API.Helpers
{
    public class ApiResponse
    {
        public HttpStatusCode StatusCode { get; set; }

        public bool IsSuccess { get; set; }

        public List<string> ErrorMessages { get; set; }

        public object Result { get; set; }
    }
}
