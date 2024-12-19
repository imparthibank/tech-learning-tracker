using Moq;
using TechLearningTracker.Core.Entities;
using TechLearningTracker.Core.Interfaces;
using TechLearningTracker.Infrastructure.Services;

namespace TechLearningTracker.Tests.Tests
{
    public class LearningServiceTests
    {
        [Fact]
        public async Task GetLearningItemsAsync_ShouldReturnLearningItems()
        {
            // Arrange
            var mockRepo = new Mock<IRepository<LearningItem>>();
            mockRepo.Setup(repo => repo.GetAllAsync())
                .ReturnsAsync(new List<LearningItem>() 
                {
                    new LearningItem { Id = 1, Technology = "C#", Description = "Learn C#" },
                    new LearningItem { Id = 2, Technology = "Python", Description = "Learn Python" }
                });

            var service = new LearningService(mockRepo.Object);

            // Act
            var result = await service.GetLearningItemsAsync();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(2, result.Count());
            Assert.Contains(result, item => item.Technology == "C#");
        }

        [Fact]
        public async Task AddLearningItem_ShouldCallRepositoryAddAsync()
        {
            // Arrange
            var mockRepo = new Mock<IRepository<LearningItem>>();
            var service = new LearningService(mockRepo.Object);
            var newItem = new LearningItem { Technology = "Rust", Description = "Learn Rust" };

            // Act
            await service.AddLearningItemAsync(newItem);

            // Assert
            mockRepo.Verify(repo => repo.AddAsync(newItem), Times.Once);
        }
    }
}
