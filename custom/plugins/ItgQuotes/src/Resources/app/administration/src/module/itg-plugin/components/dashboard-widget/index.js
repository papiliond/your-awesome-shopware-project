import template from "./template.html.twig";

Shopware.Component.override("sw-dashboard-index", {
    inject: {
        quotesService: "quotes",
    },
    template,
    data() {
        return {
            quote: "",
        };
    },
    created() {
        this.showQuote();
    },
    methods: {
        showQuote() {
            this.quotesService.getQuote().then((quote) => {
                this.quote = quote.en;
            });
        },
    },
});
