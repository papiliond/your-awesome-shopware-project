<?php

declare(strict_types=1);

namespace Itg\Quotes\Content\Author;

use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;

class ItgQuotesAuthorEntity extends Entity
{
    use EntityIdTrait;

    protected ?string $name;

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): void
    {
        $this->name = $name;
    }
}
