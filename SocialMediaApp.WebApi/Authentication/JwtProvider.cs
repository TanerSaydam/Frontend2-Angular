using Microsoft.IdentityModel.Tokens;
using SocialMediaApp.WebApi.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SocialMediaApp.WebApi.Authentication;

public static class JwtProvider
{
    public static string CreateToken(User user)
    {
        var claims = new Claim[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim("UserName", user.UserName),
            new Claim("ImageUrl", user.ImageUrl),
            new Claim("Name", user.Name),
        };

        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("my secret key my secret key my secret key 12546/*>"));
        var signingCredentials = new SigningCredentials(securityKey,SecurityAlgorithms.HmacSha256);

        JwtSecurityToken jwtSecurityToken = new(
            issuer: "Taner Saydam",
            audience: "Taner Saydam",
            claims: claims,
            expires: DateTime.Now.AddDays(1),
            signingCredentials: signingCredentials);

        var token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);
        return token;
    }
}
