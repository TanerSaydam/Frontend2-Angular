namespace SocialMediaApp.WebApi.Dtos;

public sealed class RegisterDto
{
    public string Name { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public IFormFile Image { get; set; }
}
