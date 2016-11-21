FROM node:boron

ADD . /app
WORKDIR /app

# work around for fixing error: EXDEV: cross-device link not permitted, rename '/app/node_modules/babel-plugin-module-alias'
RUN cd $(npm root -g)/npm \
&& npm install fs-extra \
&& sed -i -e s/graceful-fs/fs-extra/ -e s/fs.rename/fs.move/ ./lib/utils/rename.js

RUN npm install --production
RUN npm rebuild node-sass

EXPOSE 3000
CMD ["npm", "run", "production"]
