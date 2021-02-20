using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext db;
        public ActivitiesController(DataContext db)
        {
            this.db = db;

        }

        [HttpGet]
        public async Task<List<Activity>> GetActivities() 
        {
            return await this.db.Activities.ToListAsync();   
        }

        [HttpGet("{id}")]
        public async Task<Activity> GetActivity(Guid id) 
        {
            return await this.db.Activities.FindAsync(id);    
        }
    }
}