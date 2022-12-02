var app = WebApplication.CreateBuilder(args).Build();
app.MapGet("/ping", () => "ping");
app.UseDefaultFiles();
app.UseStaticFiles();
app.Run();