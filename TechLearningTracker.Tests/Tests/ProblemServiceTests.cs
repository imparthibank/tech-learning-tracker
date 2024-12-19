using Moq;
using TechLearningTracker.Core.Entities;
using TechLearningTracker.Core.Interfaces;
using TechLearningTracker.Infrastructure.Services;

namespace TechLearningTracker.Tests.Tests
{
    public class ProblemServiceTests
    {
        [Fact]
        public async Task GetProblemItems_ShouldReturnItems()
        {
            // Arrange
            var mockRepo = new Mock<IRepository<ProblemItem>>();
            mockRepo.Setup(repo => repo.GetAllAsync())
                .ReturnsAsync(new List<ProblemItem>
                {
                    new ProblemItem { Id = 1, Title = "Binary Search", Description = "Implement binary search", Solution = "O(log n)" },
                    new ProblemItem { Id = 2, Title = "Fibonacci", Description = "Find nth Fibonacci", Solution = "DP approach" }
                });

            var service = new ProblemService(mockRepo.Object);

            // Act
            var result = await service.GetProblemItemsAsync();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(2, result.Count());
            Assert.Contains(result, item => item.Title == "Binary Search");
        }

        [Fact]
        public async Task AddProblemItem_ShouldCallRepositoryAddAsync()
        {
            // Arrange
            var mockRepo = new Mock<IRepository<ProblemItem>>();
            var service = new ProblemService(mockRepo.Object);
            var newItem = new ProblemItem { Title = "Sorting", Description = "Implement QuickSort", Solution = "Recursive divide and conquer" };

            // Act
            await service.AddProblemItemAsync(newItem);

            // Assert
            mockRepo.Verify(repo => repo.AddAsync(newItem), Times.Once);
        }
    }
}
