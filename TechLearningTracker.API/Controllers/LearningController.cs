using Microsoft.AspNetCore.Mvc;
using TechLearningTracker.Core.Entities;
using TechLearningTracker.Core.Interfaces;

namespace TechLearningTracker.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LearningController : ControllerBase
    {
        private readonly ILearningService _learningService;

        public LearningController(ILearningService learningService)
        {
            _learningService = learningService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LearningItem>>> Get()
        {
            var items = await _learningService.GetLearningItemsAsync();
            return Ok(items);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] LearningItem item)
        {
            if (item == null) return BadRequest("Learning item cannot be null.");

            // Ensure the DateStarted is in UTC
            item.DateStarted = DateTime.SpecifyKind(item.DateStarted, DateTimeKind.Utc);

            await _learningService.AddLearningItemAsync(item);
            return CreatedAtAction(nameof(Get), new { id = item.Id }, item);
        }
    }
}
