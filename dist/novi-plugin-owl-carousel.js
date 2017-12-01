module.exports=function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=v.getDataByKey("novi-plugin-owl-carousel");return e.ui.editor[0].title=t.editor.settings.title,e.ui.editor[0].tooltip=t.editor.settings.tooltip,e.ui.editor[0].header[1]=d.createElement("span",null,t.editor.settings.header),e.ui.editor[1].title=t.editor.addSlide.title,e.ui.editor[1].tooltip=t.editor.addSlide.tooltip,e.ui.editor[2].title=t.editor.removeSlide.title,e.ui.editor[2].tooltip=t.editor.removeSlide.tooltip,e}var l=n(1),o=i(l),r=n(3),s=i(r),u=n(5),c=i(u),g=n(6),m=i(g),d=novi.react.React,v=novi.language,p={name:"novi-plugin-owl-carousel",title:"Novi Owl Carousel Plugin",description:"Novi Plugin for owl carousel customization",version:"1.0.1",dependencies:{novi:"0.8.6"},defaults:{querySelector:".owl-carousel",childQuerySelector:".owl-carousel .owl-item > *"},ui:{editor:[o.default,s.default,c.default],settings:d.createElement(m.default,null)},onLanguageChange:a};novi.plugins.register(p)},function(e,t,n){"use strict";function i(e,t){var n=!1,i=t[0],a={loop:i.loop,autoplayTime:i.autoplayTime,autoplay:i.autoplay,items:i.items,margins:i.margins};if(!s.isEqual(i.initValue,a)){if(!s.isEqual(a.margins,i.initValue.margins)){for(var l=["data-margin","data-xs-margin","data-sm-margin","data-md-margin","data-lg-margin","data-xl-margin"],o=0;o<l.length;o++)a.margins[o]!==i.initValue.margins[o]&&novi.element.setAttribute(i.element,""+l[o],a.margins[o]);n=!0}if(!s.isEqual(a.items,i.initValue.items)){for(var r=["data-items","data-xs-items","data-sm-items","data-md-items","data-lg-items","data-xl-items"],u=0;u<r.length;u++)a.items[u]!==i.initValue.items[u]&&novi.element.setAttribute(i.element,""+r[u],a.items[u]);n=!0}a.loop!==i.initValue.loop&&(novi.element.setAttribute(i.element,"data-loop",a.loop),i.element.setAttribute("data-loop",a.loop)),a.autoplay!==i.initValue.autoplay&&(novi.element.setAttribute(i.element,"data-autoplay",a.autoplay),i.element.setAttribute("data-autoplay",a.autoplay)),a.autoplayTime!==i.initValue.autoplayTime&&(novi.element.setAttribute(i.element,"data-autoplay-timeout",1e3*a.autoplayTime),i.element.setAttribute("data-autoplay-timeout",1e3*a.autoplayTime)),n&&novi.page.forceUpdate()}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),l=function(e){return e&&e.__esModule?e:{default:e}}(a),o=novi.react.React,r=(novi.ui.icons,novi.ui.icon),s=novi.utils.lodash,u=novi.language.getDataByKey("novi-plugin-owl-carousel"),c=o.createElement(r,null,o.createElement("svg",{viewBox:"0 0 27 16",style:{height:28,width:28,maxWidth:"inherit",maxHeight:"inherit"}},o.createElement("path",{d:"M17,10 C15.8976,10 15,9.1024 15,8 C15,6.8976 15.8976,6 17,6 C18.1024,6 19,6.8976 19,8 C19,9.1024 18.1024,10 17,10 Z M17,7 C16.4486667,7 16,7.44866667 16,8 C16,8.55133333 16.4486667,9 17,9 C17.5513333,9 18,8.55133333 18,8 C18,7.44866667 17.5513333,7 17,7 Z"}),o.createElement("path",{d:"M8,1 L8,2.05144019 L19,2.0758879 L19,1 L8,1 Z M8,0 L19,0 C19.5522847,-1.01453063e-16 20,0.44771525 20,1 L20,2.08777076 L7,2.0470348 L7,1 C7,0.44771525 7.44771525,1.01453063e-16 8,0 Z"}),o.createElement("path",{d:"M20.5,2 L6.5,2 C5.673,2 5,2.673 5,3.5 L5,14.5 C5,15.327 5.673,16 6.5,16 L20.5,16 C21.327,16 22,15.327 22,14.5 L22,3.5 C22,2.673 21.327,2 20.5,2 Z M6,12.693 L10.197,8.076 C10.282,7.983 10.393,7.931 10.511,7.929 C10.629,7.927 10.742,7.977 10.829,8.068 L17.329,15 L6.499,15 C6.223,15 5.999,14.776 5.999,14.5 L6,12.693 Z M20.5,15 L18.714,15 L11.553,7.377 C11.272,7.083 10.898,6.925 10.5,6.93 C10.102,6.935 9.732,7.103 9.458,7.404 L6.001,11.207 L6.001,3.5 C6.001,3.224 6.225,3 6.501,3 L20.501,3 C20.777,3 21.001,3.224 21.001,3.5 L21.001,14.5 C21,14.776 20.776,15 20.5,15 Z"}),o.createElement("path",{d:"M2.85325,11.85225 C3.04825,11.65725 3.04825,11.34025 2.85325,11.14525 L1.20725,9.49925 L2.85325,7.85325 C3.04825,7.65825 3.04825,7.34125 2.85325,7.14625 C2.65825,6.95125 2.34125,6.95125 2.14625,7.14625 L0.14625,9.14625 C-0.04875,9.34125 -0.04875,9.65825 0.14625,9.85325 L2.14625,11.85325 C2.24425,11.95125 2.37225,11.99925 2.50025,11.99925 C2.62725,11.99825 2.75525,11.94925 2.85325,11.85225 Z"}),o.createElement("path",{d:"M26.85325,11.85225 C27.04825,11.65725 27.04825,11.34025 26.85325,11.14525 L25.20725,9.49925 L26.85325,7.85325 C27.04825,7.65825 27.04825,7.34125 26.85325,7.14625 C26.65825,6.95125 26.34125,6.95125 26.14625,7.14625 L24.14625,9.14625 C23.95125,9.34125 23.95125,9.65825 24.14625,9.85325 L26.14625,11.85325 C26.24425,11.95125 26.37225,11.99925 26.50025,11.99925 C26.62725,11.99825 26.75525,11.94925 26.85325,11.85225 Z",transform:"translate(25.499750, 9.499625) scale(-1, 1) translate(-25.499750, -9.499625) "}))),g={trigger:c,tooltip:u.editor.settings.tooltip,title:u.editor.settings.title,header:[c,o.createElement("span",null,u.editor.settings.header)],body:[o.createElement(l.default,null)],closeIcon:"submit",onSubmit:i,width:350,height:170,submitOnBlur:!1};t.default=g},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=(novi.ui.input,novi.react.React),r=novi.react.Component,s=novi.ui.switcher,u=novi.ui.inputNumber,c=novi.editor,g=novi.language,m=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),l=novi.element.getAttribute(e.element,"data-autoplay-timeout")/1e3||"",o="true"===novi.element.getAttribute(e.element,"data-autoplay"),r="true"===novi.element.getAttribute(e.element,"data-loop"),s=a.getMargins(e.element),u=a.getItems(e.element);return o&&c.setBodyHeight(220),a.state={loop:r,autoplayTime:l,autoplay:o,items:u,margins:s,initValue:{loop:r,autoplayTime:l,autoplay:o,items:u,margins:s},element:e.element,childElement:e.childElement},a.style="\n        .owl-wrap{\n            padding: 0 12px;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            height: 100%;\n            color: #6E778A;\n        }\n        .owl-switcher{\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            margin-top: 16px;\n            -webkit-transition: 0.15s all cubic-bezier(0.4, 0, 1, 1);\n            transition: 0.15s all cubic-bezier(0.4, 0, 1, 1);\n            opacity: 1;\n            visibility: visible;\n        }\n        .owl-switcher.disabled{\n            opacity: 0;\n            visibility: hidden;\n            height: 0;\n            margin-top: 0;\n        }\n      \n        .owl-switcher .novi-input{\n            width: 55px;\n        }  \n        .owl-wrap .Select-menu-outer, .owl-wrap .Select-menu{\n            max-height: 85px;\n        }\n        .owl-group{\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n        }\n        ",a._handleItemChange=a._handleItemChange.bind(a),a._handleMarginChange=a._handleMarginChange.bind(a),a._handleAutoplayChange=a._handleAutoplayChange.bind(a),a._handleSwitcherChange=a._handleSwitcherChange.bind(a),a._handleLoopChange=a._handleLoopChange.bind(a),a._renderAutoPlaySeconds=a._renderAutoPlaySeconds.bind(a),a.messages=g.getDataByKey("novi-plugin-owl-carousel"),a}return a(t,e),l(t,[{key:"render",value:function(){var e=this.getActiveItemValue(this.state.items),t=this.getActiveItemValue(this.state.margins);return o.createElement("div",{className:"owl-wrap"},o.createElement("style",null,this.style),o.createElement("div",{className:"owl-group"},o.createElement("div",null,o.createElement("p",{className:"novi-label",style:{marginTop:"0"}},this.messages.editor.settings.body.visibleItems),o.createElement(u,{min:1,value:e,onChange:this._handleItemChange})),o.createElement("div",{style:{marginLeft:"10px"}},o.createElement("p",{className:"novi-label",style:{marginTop:"0"}},this.messages.editor.settings.body.indent),o.createElement(u,{min:0,value:t,onChange:this._handleMarginChange}))),o.createElement("div",{className:"owl-switcher"},o.createElement("p",{className:"novi-label",style:{margin:0}},this.messages.editor.settings.body.loop),o.createElement(s,{isActive:this.state.loop,onChange:this._handleLoopChange})),o.createElement("div",{className:"owl-switcher"},o.createElement("p",{className:"novi-label",style:{margin:0}},this.messages.editor.settings.body.autoplay),o.createElement(s,{isActive:this.state.autoplay,onChange:this._handleSwitcherChange})),this._renderAutoPlaySeconds())}},{key:"_renderAutoPlaySeconds",value:function(){var e=this.state.autoplay?"owl-switcher":"owl-switcher disabled";return o.createElement("div",{className:e},o.createElement("p",{className:"novi-label",style:{margin:0}},this.messages.editor.settings.body.autoplayDelay),o.createElement("div",{style:{maxWidth:"56px"}},o.createElement(u,{min:1,value:this.state.autoplayTime,onChange:this._handleAutoplayChange})))}},{key:"_handleAutoplayChange",value:function(e){this.setState({autoplayTime:e})}},{key:"_handleSwitcherChange",value:function(e){e?c.setBodyHeight(220):c.setBodyHeight(170),this.setState({autoplay:e})}},{key:"_handleLoopChange",value:function(e){this.setState({loop:e})}},{key:"_handleItemChange",value:function(e){var t=[];t=t.concat(this.state.items),t[this.getActiveItem(this.state.element)]=e.toString(),this.setState({items:t})}},{key:"_handleMarginChange",value:function(e){var t=[];t=t.concat(this.state.margins),t[this.getActiveItem(this.state.element)]=e.toString(),this.setState({margins:t})}},{key:"getItems",value:function(e){return[novi.element.getAttribute(e,"data-items")||null,novi.element.getAttribute(e,"data-xs-items")||null,novi.element.getAttribute(e,"data-sm-items")||null,novi.element.getAttribute(e,"data-md-items")||null,novi.element.getAttribute(e,"data-lg-items")||null,novi.element.getAttribute(e,"data-xl-items")||null]}},{key:"getMargins",value:function(e){return[novi.element.getAttribute(e,"data-margin")?novi.element.getAttribute(e,"data-margin").replace("px",""):null,novi.element.getAttribute(e,"data-xs-margin")?novi.element.getAttribute(e,"data-xs-margin").replace("px",""):null,novi.element.getAttribute(e,"data-sm-margin")?novi.element.getAttribute(e,"data-sm-margin").replace("px",""):null,novi.element.getAttribute(e,"data-md-margin")?novi.element.getAttribute(e,"data-md-margin").replace("px",""):null,novi.element.getAttribute(e,"data-lg-margin")?novi.element.getAttribute(e,"data-lg-margin").replace("px",""):null,novi.element.getAttribute(e,"data-xl-margin")?novi.element.getAttribute(e,"data-xl-margin").replace("px",""):null]}},{key:"getActiveItem",value:function(e){var t=novi.viewport.getActiveSize();return t.width||(t.width=e.ownerDocument.defaultView.innerWidth),t.width<480?0:t.width<768?1:t.width<992?2:t.width<1200?3:t.width<1600?4:5}},{key:"getActiveItemValue",value:function(e){var t=this.getActiveItem(this.state.element);if(e[t])return e[t];for(var n=t;t>=0;n--)if(null!==e[n])return e[n]}}]),t}(r);t.default=m},function(e,t,n){"use strict";function i(e,t){if(e.owl)if(t){var n=a(e,t);o(e,t,n)}else{var i=l(e);r(e,i)}else t?(a(e,t),novi.page.forceUpdate()):(l(e),novi.page.forceUpdate())}function a(e,t){var n=novi.element.getStaticReference(t);if(n){var i=n.cloneNode(!0),a=novi.element.getStaticReference(t.parentNode.nextSibling);if(a)novi.element.insertStaticBefore(i,a);else{var l=novi.element.getStaticReference(e);novi.element.appendStatic(i,l)}return i}}function l(e){var t=u.getLastSlideElement(e);if(t){var n=novi.element.getStaticReference(t);if(n){var i=n.cloneNode(!0),a=novi.element.getStaticReference(e);return novi.element.appendStatic(i,a),i}}}function o(e,t,n){if(n){var i=novi.element.map(n),a=e.owl,l=u.getElementIndex(e,t);if(l?a.trigger("add.owl.carousel",[i,l]):a.trigger("add.owl.carousel",[i]),a.trigger("refresh.owl.carousel"),l)a.trigger("to.owl.carousel",[l,200,!0]);else{var o=e.querySelectorAll(".owl-stage-outer .owl-stage > *").length;a.trigger("to.owl.carousel",[o,200,!0])}}}function r(e,t){if(t){var n=novi.element.map(t),i=e.owl;i.trigger("add.owl.carousel",[n]),i.trigger("refresh.owl.carousel");var a=e.querySelectorAll(".owl-stage-outer .owl-stage > *").length;i.trigger("to.owl.carousel",[a,200,!0])}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),c=novi.react.React,g=novi.ui.icons,m=novi.ui.icon,d=novi.language.getDataByKey("novi-plugin-owl-carousel"),v={trigger:c.createElement(m,null,g.ICON_PLUS_SQUARE),tooltip:d.editor.addSlide.tooltip,closeIcon:"submit",title:d.editor.addSlide.title,onTriggerClick:i,highlightChild:!0};t.default=v},function(e,t){"use strict";function n(e){var t=e.querySelectorAll(".owl-stage-outer .owl-stage > *");return t[t.length-1].firstChild}function i(e,t){for(var n=e.querySelectorAll(".owl-stage-outer .owl-stage > *"),i=t.parentNode,a=0;a<n.length;a++)if(n[a]===i&&a!==n.length-1)return a+1}function a(e,t){var n=e.querySelectorAll(".owl-stage-outer .owl-stage > *");if(!t)return n.length-1;for(var i=t.parentNode,a=0;a<n.length;a++)if(n[a]===i)return a}Object.defineProperty(t,"__esModule",{value:!0}),t.getLastSlideElement=n,t.getElementIndex=i,t.getRemoveElementIndex=a;novi.utils},function(e,t,n){"use strict";function i(e,t){if(e.owl)if(t){var n=a(t);o(e,n,t),novi.element.removeStatic(n)}else{var i=l(e);o(e,i),novi.element.removeStatic(i)}else if(t){var r=a(t);novi.element.removeStatic(r),novi.page.forceUpdate()}else{var s=l(e);novi.element.removeStatic(s),novi.page.forceUpdate()}}function a(e){var t=novi.element.getStaticReference(e);if(t)return t}function l(e){var t=s.getLastSlideElement(e),n=novi.element.getStaticReference(t);if(n)return n}function o(e,t,n){if(t){var i=e.owl,a=s.getRemoveElementIndex(e,n);i.trigger("remove.owl.carousel",a),i.trigger("refresh.owl.carousel")}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r),u=novi.react.React,c=novi.ui.icons,g=novi.ui.icon,m=novi.language.getDataByKey("novi-plugin-owl-carousel"),d={trigger:u.createElement(g,null,c.ICON_MINUS_SQUARE),tooltip:m.editor.removeSlide.tooltip,closeIcon:"submit",title:m.editor.removeSlide.title,onTriggerClick:i,highlightChild:!0};t.default=d},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=novi.react.React,r=novi.react.Component,s=novi.ui.input,u=novi.ui.button,c=novi.language,g=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state={settings:{querySelector:e.settings.querySelector}},a.saveSettings=a.saveSettings.bind(a),a.onChange=a.onChange.bind(a),a.messages=c.getDataByKey("novi-plugin-owl-carousel"),a}return a(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({settings:{querySelector:e.settings.querySelector}})}},{key:"render",value:function(){return o.createElement("div",null,o.createElement("span",{style:{letterSpacing:"0,0462em"}},"Owl Carousel Plugin"),o.createElement("div",{style:{fontSize:13,color:"#6E778A",marginTop:21}},this.messages.settings.inputPlaceholder),o.createElement(s,{style:{marginTop:10,width:340},value:this.state.settings.querySelector,onChange:this.onChange}),o.createElement("div",{style:{marginTop:30}},o.createElement(u,{type:"primary",messages:{textContent:this.messages.settings.submitButton},onClick:this.saveSettings})))}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({settings:{querySelector:t}})}},{key:"saveSettings",value:function(){novi.plugins.settings.update("novi-plugin-owl-carousel",this.state.settings)}}]),t}(r);t.default=g}]);