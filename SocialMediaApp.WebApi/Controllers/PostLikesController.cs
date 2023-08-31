using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SocialMediaApp.WebApi.Context;
using SocialMediaApp.WebApi.Models;

namespace SocialMediaApp.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class PostLikesController : ControllerBase
    {
        [HttpGet]
        public IActionResult LikeOrUnlike(int userId, int postId)
        {
            AppDbContext context = new();
            PostLike postLike = context.PostLikes.Where(p=> p.UserId == userId && p.PostId == postId).FirstOrDefault();

            if(postLike != null)
            {
                context.Remove(postLike);
            }
            else
            {
                postLike = new()
                {
                    UserId = userId,
                    PostId = postId
                };

                context.Add(postLike);
            }

            context.SaveChanges();

            return NoContent();
        }
    }
}
