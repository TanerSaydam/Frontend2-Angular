using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SocialMediaApp.WebApi.Context;
using SocialMediaApp.WebApi.Dtos;
using SocialMediaApp.WebApi.Models;

namespace SocialMediaApp.WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class PostsController : ControllerBase
    {
        [HttpPost]
        public IActionResult Create(PostCreateDto request)
        {
            AppDbContext context = new();

            Post post = new()
            {
                UserId = request.UserId,
                Content = request.Content,
                Created = DateTime.Now,
            };
            context.Add(post);
            context.SaveChanges();

            return NoContent();
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            AppDbContext context = new();
            var posts = context.Posts.OrderByDescending(p => p.Created)
                .Include(p=> p.User)
                .Include(p=> p.PostLikes)
                .ThenInclude(p=> p.User)
                .Select(s => new
                {
                    Id = s.Id,
                    UserId = s.UserId,
                    UserName = s.User.Name,
                    UserImage = s.User.ImageUrl,
                    Date = s.Created,
                    Content = s.Content,
                    Likes = s.PostLikes
                })
                .ToList();

            return Ok(posts);
        }
    }
}
