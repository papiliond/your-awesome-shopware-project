import template from "./dashboard-widget.html.twig";
import "./dashboard-widget.scss";

const { Component, Context } = Shopware;
const Criteria = Shopware.Data.Criteria;

Component.override("sw-dashboard-index", {
    inject: {
        quotesService: "quotes",
        repositoryFactory: "repositoryFactory",
    },
    template,
    computed: {
        itgQuotesAuthorRepository() {
            return this.repositoryFactory.create("itg_quotes_author");
        },
    },
    data() {
        return {
            quote: null,
            loading: true,
        };
    },
    created() {
        this.itgQuotesAuthorRepository
            .search(new Criteria(), Context.api)
            .then((authors) => {
                const index = Math.floor(Math.random() * authors.length);
                const author = authors[index].name;

                this.quotesService.getQuote(author).then((quote) => {
                    this.quote = quote;
                });
                this.loading = false;
            })
            .catch(() => {
                this.loading = false;
            });
    },
});
