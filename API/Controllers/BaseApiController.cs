using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator mediator;
        
        protected IMediator Mediator => this.mediator ??= HttpContext.RequestServices
            .GetService<IMediator>();

    }
}