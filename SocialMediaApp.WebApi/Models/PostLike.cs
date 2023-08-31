namespace SocialMediaApp.WebApi.Models;

public sealed class PostLike
{
    public int Id { get; set; }
    public int PostId { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
}