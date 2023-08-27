namespace SocialMediaApp.WebApi.Dtos;

public sealed class LoginDto
{
    public string EmailOrUserName { get; set; }
    public string Password { get; set; }
}
