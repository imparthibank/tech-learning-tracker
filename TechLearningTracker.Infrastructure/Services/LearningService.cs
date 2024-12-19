using TechLearningTracker.Core.Entities;
using TechLearningTracker.Core.Interfaces;

namespace TechLearningTracker.Infrastructure.Services
{
    public class LearningService : ILearningService
    {
        private readonly IRepository<LearningItem> _repository;

        public LearningService(IRepository<LearningItem> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<LearningItem>> GetLearningItemsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task AddLearningItemAsync(LearningItem item)
        {
            await _repository.AddAsync(item);
        }
    }
}
