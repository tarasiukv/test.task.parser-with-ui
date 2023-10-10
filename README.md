# Scraper #
Laravel parser with Admin UI.

## Link for scraper ##
- default - http://lifehacker.com/rss

# Installation

#### Make sure you are in the directory with the files: `.env` and `composer.json` ####


- Install all dependencies:
  `npm install`


- Install composer:
  `composer install`


- Generate key:
  `php artisan key:generate`


- Generate JWT key:
  `php artisan jwt:secret`


- Make changes to the `.env` file (add your database)


- Run parse:
  - schedule (every 5 min):
    `php artisan schedule:run`
  - immediately:
    `php artisan parse:post`


- Build project:
  `npm run build`


- Run UI:
  `php artisan serve`


## Issues

1. `/parser-with-ui/.env): Failed to open stream: No such file or directory`

Rename `.env.example` to `.env`
