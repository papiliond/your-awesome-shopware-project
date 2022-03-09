<?php

declare(strict_types=1);

namespace Itg\Quotes\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1646828493Authors extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1646828493;
    }

    public function update(Connection $connection): void
    {

        $query = <<<SQL
CREATE TABLE `itg_quotes_author` (
            `id` BINARY(16) NOT NULL,
            `name` VARCHAR(255) NOT NULL,
            `created_at` DATETIME(3) NOT NULL,
            `updated_at` DATETIME(3) NULL,
            PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
SQL;

        $connection->executeStatement($query);
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
