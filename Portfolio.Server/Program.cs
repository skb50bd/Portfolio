var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// var options = new DefaultFilesOptions();
// options.DefaultFileNames.Clear();
// options.DefaultFileNames.Add("index.html");
app.UseDefaultFiles();
app.UseStaticFiles();
app.MapGet("/ping", () => "ping");

app.Run();
