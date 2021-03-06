#!/usr/bin/env bash

rm -rf vendor/shopware
rm -rf composer.lock
rm -rf dev-ops/analyze/vendor

composer update --no-interaction --optimize-autoloader --no-scripts
composer install --no-interaction --optimize-autoloader --working-dir=dev-ops/analyze

if grep -q static-analyze platform/composer.json; then composer update --working-dir=platform; fi
