# Arbolista.mx website

This is the code that powers the http://www.arbolista.mx site. It is built on top of the Espina boilerplate.

## Scripts

Install dependencies with `npm i`. You may need to sudo.

### Environment variables

ReCAPTCHA is used for submissions through the contact form.

Copy and configure env variables.
```sh
cp .env.example .env

// Set:
CAPTCHA_SECRET_KEY=x
SENDGRID_TOKEN=x
SENDGRID_TEMPLATE_ID=x
RECIPIENT=enter@email.com

export $(cat .env | xargs)

```

### Developing

To run the development server,

```sh
npm run develop
```

Go to `localhost:3000` to view app.

## Production

To run the production Node server with server-side rendering in a Docker container, a Docker image needs to be built and the container to be launched:

```sh
docker build -t arbolista-site .

(docker stop arbolista-site || exit 0) && \
(docker rm arbolista-site || exit 0) && \
docker run \
  -d \
  -p 0.0.0.0:3000:3000 \
  --name arbolista-site\
  --env-file .env\
  arbolista-site
```

Go to `localhost:3000` to view app.

Alternatively the server can be started outside of a Docker container using,
```sh
npm run production
```
