namespace SocialMediaApp.WebApi.Dtos;

public sealed class PostCreateDto
{
    public int UserId {  get; set; }
    public string Content { get; set; }
}
