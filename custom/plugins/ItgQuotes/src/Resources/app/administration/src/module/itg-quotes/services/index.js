import QuotesService from "./quotes.service";

Shopware.Service().register("quotes", () => {
    const initContainer = Shopware.Application.getContainer("init");
    return new QuotesService(initContainer.httpClient);
});
