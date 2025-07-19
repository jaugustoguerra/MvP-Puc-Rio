# Use uma imagem oficial do Nginx como imagem base
FROM nginx:alpine

# Remova o arquivo de configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copie um arquivo de configuração personalizado (criaremos a seguir)
COPY nginx.conf /etc/nginx/conf.d

# Copie os arquivos estáticos do front-end para o diretório do Nginx
COPY . /usr/share/nginx/html

# Exponha a porta 80, que é a porta padrão do Nginx
EXPOSE 80