FROM fusuf/whatsasena:latest

RUN git clone https://github.com/1mxt1/FREE /root/FREE
WORKDIR /root/FREE/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]

