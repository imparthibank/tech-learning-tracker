using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TechLearningTracker.Core.Entities
{
    public class LearningItem
    {
        public int Id { get; set; }
        public string Technology { get; set; }
        public string Description { get; set; }
        private DateTime _dateStarted;
        public DateTime DateStarted
        {
            get => _dateStarted;
            set => _dateStarted = DateTime.SpecifyKind(value, DateTimeKind.Unspecified);
        }
        public bool IsCompleted { get; set; }
    }
}
