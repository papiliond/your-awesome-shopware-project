import "./pages";
import "./components";
import "./services";
import enGB from "./snippet/en-GB";

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
