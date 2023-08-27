using System.ComponentModel.DataAnnotations.Schema;

namespace SocialMediaApp.WebApi.Models;

public sealed class Post
{
    public int Id { get; set; }

    [ForeignKey("User")]
    public int UserId { get; set; }
    public User User { get; set; }

    public DateTime Created { get; set; }
    public string Content { get; set; }
    public ICollection<PostLike> PostLikes { get; set; }
}
