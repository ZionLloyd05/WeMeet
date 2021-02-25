using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            private readonly IMapper mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                this.mapper = mapper;
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var mayBeActivity = await this.context.Activities
                    .FindAsync(request.Activity.Id);

                this.mapper.Map(request.Activity, mayBeActivity);

                mayBeActivity.Title = request.Activity.Title ?? mayBeActivity.Title;

                await this.context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}