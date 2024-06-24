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
