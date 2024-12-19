using Microsoft.AspNetCore.Mvc;
using TechLearningTracker.Core.Entities;
using TechLearningTracker.Core.Interfaces;

namespace TechLearningTracker.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProblemController : ControllerBase
    {
        private readonly IProblemService _problemService;

        public ProblemController(IProblemService problemService)
        {
            _problemService = problemService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProblemItem>>> Get()
        {
            var items = await _problemService.GetProblemItemsAsync();
            return Ok(items);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ProblemItem item)
        {
            await _problemService.AddProblemItemAsync(item);
            return CreatedAtAction(nameof(Get), new { id = item.Id }, item);
        }
    }
}
