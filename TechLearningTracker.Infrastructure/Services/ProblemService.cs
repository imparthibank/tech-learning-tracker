using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TechLearningTracker.Core.Entities;
using TechLearningTracker.Core.Interfaces;

namespace TechLearningTracker.Infrastructure.Services
{
    public class ProblemService : IProblemService
    {
        private readonly IRepository<ProblemItem> _repository;

        public ProblemService(IRepository<ProblemItem> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<ProblemItem>> GetProblemItemsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task AddProblemItemAsync(ProblemItem item)
        {
            await _repository.AddAsync(item);
        }
    }
}
