import enGB from "./snippet/en-GB";
import "./page/list";

Shopware.Module.register("itg-plugin", {
    type: "plugin",
    name: "ITG Plugin",
    title: "itg.general.mainMenuItemGeneral",
    description: "sw-property.general.descriptionTextModule",
    color: "#ff3d58",
    icon: "default-shopping-paper-bag-product",
    snippets: {
        "en-GB": enGB,
    },
    settingsItem: [
        {
            group: "plugins",
            to: "itg.plugin.list",
            icon: "default-object-rocket",
            name: "itg.general.mainMenuItemGeneral",
        },
    ],
    navigation: [
        {
            label: "ITG Plugin",
            color: "#ff3d58",
            path: "itg.plugin.list",
            icon: "default-shopping-paper-bag-product",
            position: 100,
            parent: "sw-extension",
        },
    ],
    routes: {
        overview: {
            path: "list",
            component: "itg-plugin-list",
        },
    },
});
