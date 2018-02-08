const React = novi.react.React;
import SettingsItem from "./SettingsItem";
import MoveSlideLeftItem from "./MoveSlideLeftItem";
import MoveSlideRightItem from "./MoveSlideRightItem";
import AddSlideItem from "./AddSlideItem";
import RemoveSlideItem from "./RemoveSlideItem";
import Settings from "./Settings";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-owl-carousel",
    title: "Novi Owl Carousel Plugin",
    description: "Novi Plugin for owl carousel customization",
    version: "1.0.2",
    dependencies: {
        novi: "0.9.0"
    },
    defaults: {
        querySelector: '.owl-carousel',
        childQuerySelector : '.owl-carousel .owl-item > *'
    },
    ui: {
        editor: [MoveSlideLeftItem, SettingsItem, AddSlideItem, RemoveSlideItem, MoveSlideRightItem],
        settings: <Settings/>,
    },
    onLanguageChange : onLanguageChange
};
function onLanguageChange(plugin){
    let messages = Language.getDataByKey("novi-plugin-owl-carousel");
    plugin.ui.editor[0].title = messages.editor.settings.title;
    plugin.ui.editor[0].tooltip = messages.editor.settings.tooltip;
    plugin.ui.editor[0].header[1] = <span>{messages.editor.settings.header}</span>;

    plugin.ui.editor[1].title = messages.editor.addSlide.title;
    plugin.ui.editor[1].tooltip = messages.editor.addSlide.tooltip;

    plugin.ui.editor[2].title = messages.editor.removeSlide.title;
    plugin.ui.editor[2].tooltip = messages.editor.removeSlide.tooltip;

    return plugin;
}
novi.plugins.register(Plugin);