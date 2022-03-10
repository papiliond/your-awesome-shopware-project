import template from "./itg-quotes-list.html.twig";

const { Component } = Shopware;
const Criteria = Shopware.Data.Criteria;

Component.register("itg-quotes-list", {
    template,
    metaInfo() {
        return {
            title: this.$createTitle(),
        };
    },
    inject: {
        repositoryFactory: "repositoryFactory",
    },
    computed: {
        itgQuotesAuthorRepository() {
            return this.repositoryFactory.create("itg_quotes_author");
        },
        columns() {
            return [
                {
                    property: "name",
                    dataIndex: "name",
                    label: this.$tc("itg-quotes.list.authorColumnName"),
                    inlineEdit: "string",
                    allowResize: true,
                },
            ];
        },
    },
    data() {
        return {
            isLoading: true,
            authors: null,
        };
    },
    created() {
        this.itgQuotesAuthorRepository
            .search(new Criteria(), Shopware.Context.api)
            .then((result) => {
                this.authors = result;
            });
    },
});
