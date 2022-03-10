import template from "./itg-quotes-create.html.twig";

const { Component, Mixin } = Shopware;

Component.register("itg-quotes-create", {
    template,
    inject: {
        quotesService: "quotes",
        repositoryFactory: "repositoryFactory",
    },
    mixins: [Mixin.getByName("notification")],
    computed: {
        itgQuotesAuthorRepository() {
            return this.repositoryFactory.create("itg_quotes_author");
        },
    },
    data() {
        return {
            author: null,
            authors: null,
            isLoading: true,
            processSuccess: false,
        };
    },
    created() {
        this.author = this.itgQuotesAuthorRepository.create(
            Shopware.Context.api
        );
        this.getAvailableAuthors();
    },
    methods: {
        getAvailableAuthors() {
            this.isLoading = true;

            this.quotesService
                .getAuthors()
                .then((authors) => {
                    this.authors = authors;
                    this.isLoading = false;
                })
                .catch((error) => {
                    this.isLoading = false;
                });
        },
        onClickSave() {
            this.isLoading = true;
            this.itgQuotesAuthorRepository
                .save(this.author, Shopware.Context.api)
                .then(() => {
                    this.isLoading = false;
                    this.$router.push({
                        name: "itg.quotes.list",
                    });
                })
                .catch((exception) => {
                    this.isLoading = false;
                    this.createNotificationError({
                        title: this.$tc("itg-quotes.create.errorTitle"),
                        message: exception,
                    });
                });
        },
        saveFinish() {
            this.processSuccess = false;
        },
    },
});
