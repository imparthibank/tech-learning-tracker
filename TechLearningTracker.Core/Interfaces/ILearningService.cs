using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TechLearningTracker.Core.Entities;

namespace TechLearningTracker.Core.Interfaces
{
    public interface ILearningService
    {
        Task<IEnumerable<LearningItem>> GetLearningItemsAsync();
        Task AddLearningItemAsync(LearningItem item);
    }
}
