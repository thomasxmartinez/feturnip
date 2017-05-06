FROM risingstack/alpine:3.3-v4.2.6-1.1.3

COPY package.json package.json
RUN apt-get -y update
RUN apt-get -y install nodejs
RUN apt-get -y install npm
RUN npm install

# Add your source files
COPY . .
CMD ["npm","start"]  
