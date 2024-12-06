FROM mcr.microsoft.com/playwright:v1.49.0-noble
RUN apt-get update && apt-get install -y xvfb

RUN mkdir /app
WORKDIR /app
COPY . /app


RUN npm install --force

RUN npx playwright install


