const React = novi.react.React;
import SettingsItem from "./SettingsItem";
import AddSlideItem from "./AddSlideItem";
import RemoveSlideItem from "./RemoveSlideItem";
import Settings from "./Settings";

const Plugin = {
    name: "novi-plugin-owl-carousel",
    title: "Novi Owl Carousel Plugin",
    description: "Novi Plugin for owl carousel customization",
    version: "1.0.0",
    dependencies: {
        novi: "0.8.5"
    },
    defaults: {
        querySelector: '.owl-carousel',
    },
    ui: {
        editor: [SettingsItem, AddSlideItem, RemoveSlideItem],
        settings: <Settings/>,
    }

};

novi.plugins.register(Plugin);