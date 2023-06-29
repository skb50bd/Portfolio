# Portfolio
A simple portfolio website for a software engineer.

### Development

###### Publish 
```shell
docker build -t skb50bd/portfolio:v1 .
```

###### Run 
```shell 
docker run -t -i -d -p 80:80 -p 443:443 --name shakib-portfolio --restart unless-stopped skb50bd/portfolio:v1
```