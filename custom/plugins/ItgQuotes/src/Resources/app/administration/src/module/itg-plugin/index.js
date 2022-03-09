import "./page/create";
import "./page/list";
import "./components/icon";
import "./components/dashboard-widget";
import enGB from "./snippet/en-GB";
import QuotesService from "./services/quotes.service";

Shopware.Service().register("quotes", () => {
    const initContainer = Shopware.Application.getContainer("init");
    return new QuotesService(initContainer.httpClient);
});

Shopware.Module.register("itg-quotes", {
    type: "plugin",
    name: "ITG Quotes",
    title: "itg-quotes.general.mainMenuItemGeneral",
    description: "itg-quotes.general.descriptionTextModule",
    color: "#ff3d58",
    iconComponent: "itg-plugin-icon",
    snippets: {
        "en-GB": enGB,
    },
    routes: {
        list: {
            path: "list",
            component: "itg-quotes-list",
        },
        create: {
            path: "create",
            component: "itg-quotes-create",
            meta: {
                parentPath: "itg.quotes.list",
            },
        },
    },
    settingsItem: [
        {
            group: "plugins",
            to: "itg.quotes.list",
            iconComponent: "itg-plugin-icon",
            name: "itg-quotes.general.mainMenuItemGeneral",
        },
    ],
});
