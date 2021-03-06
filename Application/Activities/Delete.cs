using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var mayBeActivity = await this.context.Activities
                    .FindAsync(request.Id);

                this.context.Remove(mayBeActivity);
                await this.context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}