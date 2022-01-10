## About Project

The project was developed using the following stacks:

- Backend Php 7.4/Laravel 8
- Frontend Inertia/Vue3/Tailwindcss

## Description

- To create a new customer you must login first, if you don't have a record, you can create a new user in the endpoint register
- When the customer is created he will be able to register his numbers
- Preferences are automatically registered when the number is created.
- I didn't use tests because I hardly studied the subject

## Instalation Projet

### Local

```bash
composer install
php artisan migrate --seed
cp .env.example.local .env
php artisan key:generate
yarn dev
```

### Sail

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php74-composer:latest \
    composer install --ignore-platform-reqs

./vendor/bin/sail up -d
./vendor/bin/sail artisan migrate --seed
cp .env.example.sail .env
```

## Access

### Local

```bash
php artisan serve
```

- http://localhost:8000

### Sail

- http://localhost
