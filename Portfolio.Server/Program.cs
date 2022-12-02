var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSassCompiler();

var app = builder.Build();
app.MapGet("/ping", () => "pong");
app.UseDefaultFiles();
app.UseStaticFiles();
app.Run();