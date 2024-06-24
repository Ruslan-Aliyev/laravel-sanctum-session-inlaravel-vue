# Laravel - Sanctum (Session based) - In-Laravel Vue

```
composer require laravel/breeze
php artisan breeze:install # The Vue option

composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

php artisan migrate --seed
```

`\Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,` to `bootstrap/app.php`

```
npm install
npm run dev
```

Setup Vue in Laravel 11: https://laraveldaily.com/post/how-to-add-vue-3-laravel-10-vite-quick-tutorial

Finish the Vue related files and make a protected route.

```
php artisan serve
npm run dev
```

![](/Illustrations/results.png)

---

## Tutorials

- https://www.youtube.com/watch?v=eeMtmkDZ72Q
