<?php

declare(strict_types=1);

namespace Itg\Quotes\Content\Author;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void               add(ItgQuotesAuthorEntity $entity)
 * @method void               set(string $key, ItgQuotesAuthorEntity $entity)
 * @method ItgQuotesAuthorEntity[]    getIterator()
 * @method ItgQuotesAuthorEntity[]    getElements()
 * @method ItgQuotesAuthorEntity|null get(string $key)
 * @method ItgQuotesAuthorEntity|null first()
 * @method ItgQuotesAuthorEntity|null last()
 */
class ItgQuotesAuthorCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return ItgQuotesAuthorEntity::class;
    }
}
