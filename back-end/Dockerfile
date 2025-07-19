# Use uma imagem oficial do Python como imagem base
FROM python:3.10-slim

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o arquivo de dependências para o diretório de trabalho
COPY requirements.txt .

# Instale as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copie o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação Flask roda
EXPOSE 5000

# Comando para executar a aplicação
CMD ["python", "app.py"]