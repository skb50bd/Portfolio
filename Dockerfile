FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Portfolio.Server/Portfolio.Server.csproj", "Portfolio.Server/"]
RUN dotnet restore "Portfolio.Server/Portfolio.Server.csproj"
COPY . .
WORKDIR "/src/Portfolio.Server"
RUN dotnet build "Portfolio.Server.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Portfolio.Server.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Portfolio.Server.dll"]