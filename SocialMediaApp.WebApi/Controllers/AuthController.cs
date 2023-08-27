using GenericFileService.Files;
using Microsoft.AspNetCore.Mvc;
using SocialMediaApp.WebApi.Authentication;
using SocialMediaApp.WebApi.Context;
using SocialMediaApp.WebApi.Dtos;
using SocialMediaApp.WebApi.Models;

namespace SocialMediaApp.WebApi.Controllers;

[Route("api/[controller]/[action]")]
[ApiController]
public sealed class AuthController : ControllerBase
{
    [HttpPost]
    public IActionResult Register([FromForm] RegisterDto request)
    {
        string path =
            @"C:\Frontend2-Angular\my-social-media\src\assets\avatars\";

        string fileName = FileService.FileSaveToServer(request.Image, path);

        User user = new()
        {
            Email = request.Email,
            ImageUrl = fileName,
            Name = request.Name,
            Password = request.Password,
            UserName = request.UserName
        };

        AppDbContext context = new();
        context.Add(user);
        context.SaveChanges();

        return Ok(new { Message = "Kullanıcı kaydı başarıyla tamamlandı!" });
    }

    [HttpPost]
    public IActionResult Login(LoginDto request)
    {
        AppDbContext context = new();
        User? user = 
            context.Set<User>()
            .Where(p=> 
                    p.Email == request.EmailOrUserName || 
                    p.UserName == request.EmailOrUserName)
            .FirstOrDefault();

        if (user == null) throw new Exception("Kullanıcı bulunamadı!");

        if (user.Password != request.Password)
            throw new Exception("Şifre yanlış!");

        string token = JwtProvider.CreateToken(user);

        return Ok(new {Token = token});
    }
}
