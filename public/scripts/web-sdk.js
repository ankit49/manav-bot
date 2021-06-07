/*!
 * Copyright (c) 2021 Oracle and/or its affiliates.
 * All rights reserved. Oracle Digital Assistant Chat Web SDK, Release: 21.04.1
 */
var e, t;
(e = self),
  (t = function () {
    return (function () {
      var e = {
          6432: function (e, t, n) {
            (t = n(3645)(!1)).push([
              e.id,
              "/* wrapper base state */\n.wrapper {\n    box-sizing: border-box;\n    height: 0;\n    position: fixed;\n    text-transform: none;\n    transition: all 0.25s ease-in-out;\n    width: 0;\n    z-index: 10000;\n}\n\n/* button base state */\n.button {\n    background-position: center center;\n    background-repeat: no-repeat;\n    border: none;\n    bottom: 0;\n    cursor: pointer;\n    overflow: visible;\n    padding: 0;\n    position: absolute;\n    right: 0;\n    text-align: center;\n    touch-action: none;\n    transition: height 0.25s ease-out, width 0.25s ease-out;\n    z-index: 10000;\n}\n\n[dir=rtl] .button {\n    left: 0;\n    right: unset;\n}\n\n.button:focus {\n    outline: thin solid #fff;\n}\n\n.expanded:not(.drag) .button {\n    -webkit-animation: scale-out-center 0.25s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards;\n            animation: scale-out-center 0.25s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards;\n}\n\n.collapsed:not(.drag) .button {\n    -webkit-animation: scale-in-center 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both;\n            animation: scale-in-center 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both;\n    display: flex;\n}\n\n.button img {\n    display: block;\n    height: 100%;\n    max-height: 100%;\n    max-width: 100%;\n    width: 100%;\n}\n\n.notification-badge {\n    align-items: center;\n    background: #e6081a;\n    border-radius: 24px;\n    color: #fff;\n    display: flex;\n    font-size: 14px;\n    height: 24px;\n    justify-content: center;\n    position: absolute;\n    text-align: center;\n    width: 32px;\n}\n\n/* Widget base state */\n.widget {\n    background: #fff;\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    overflow: hidden;\n    position: absolute;\n    text-decoration: none;\n    text-transform: none;\n    z-index: 10000;\n}\n\n.expanded .widget {\n    -webkit-animation: scale-in-br 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both;\n            animation: scale-in-br 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both;\n}\n\n[dir=rtl] .expanded .widget {\n    -webkit-animation: scale-in-bl 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both;\n            animation: scale-in-bl 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both;\n}\n\n.collapsed .widget {\n    -webkit-animation: scale-out-br 0.25s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards;\n\t        animation: scale-out-br 0.25s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards;\n}\n\n[dir=rtl] .collapsed .widget {\n    -webkit-animation: scale-out-bl 0.25s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards;\n\t        animation: scale-out-bl 0.25s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards;\n}\n\n.none {\n    display: none;\n}\n\n.conversation-pane {\n    display: flex;\n    flex: 1 1 auto;\n    flex-direction: column;\n}\n\n.conversation-container {\n    padding: 10px 12px 0;\n}\n\n.empty-conversation-div {\n    display: flex;\n    flex: auto;\n}\n\n.message-date {\n    font-size: 10px;\n    margin: 4px 4px 0;\n}\n\n.embed-sticky-top, .embed-sticky-bottom {\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n.embed-scroll-top {\n    padding-top: 5px;\n    padding-bottom: 10px;\n}\n\n.embed-scroll-bottom {\n    padding-top: 10px;\n    padding-bottom: 5px;\n}\n\n/* Chat responsive layouts */\n\n/* Mobile layout */\n.wrapper {\n    bottom: 20px;\n    right: 10px;\n}\n\n[dir=rtl] .wrapper {\n    left: 10px;\n    right: unset;\n}\n\n.button {\n    height: 48px;\n    width: 48px;\n}\n\n.button-icon {\n    max-height: 48px;\n    max-width: 48px;\n}\n\n.widget {\n    bottom: -20px;\n    height: 85vh;\n    max-height: calc(100vh - 60px);\n    max-width: 100vw;\n    right: -10px;\n    width: 100vw;\n    transition: all 0.25s ease-in-out;\n}\n\n[dir=rtl] .widget {\n    left: -10px;\n    right: unset;\n}\n\n.timestamp-header {\n    align-items: center;\n    display: flex;\n    font-size: 13.75px;\n    font-weight: 600;\n    justify-content: center;\n    padding: 8px;\n    margin: 8px;\n    text-transform: uppercase;\n}\n\n.relative-timestamp {\n    font-size: 12px;\n    margin: -16px auto 24px;\n}\n\n.relative-timestamp.left.has-message-icon,\n[dir=rtl] .relative-timestamp.right.has-message-icon {\n    margin-left: 40px;\n}\n\n.relative-timestamp.right.has-message-icon,\n[dir=rtl] .relative-timestamp.left.has-message-icon {\n    margin-right: 40px;\n}\n\n/* Large mobile and tablet layout */\n@media screen and (min-width: 426px) {\n    .widget {\n        bottom: 0;\n        height: 85vh;\n        /* 20px compensation for bottom position of wrapper */\n        max-height: calc(100vh - 20px - 60px);\n        /* 10px compensation for right position of wrapper and next 10px for balanced look */\n        max-width: calc(100vw - 10px - 10px);\n        min-width: 300px;\n        right: 0;\n        width: 300px;\n    }\n\n    [dir=rtl] .widget {\n        left: 0;\n        right: unset;\n    }\n}\n\n/* Desktop layout */\n@media screen and (min-width: 769px) {\n    .wrapper {\n        bottom: 20px;\n        right: 20px;\n    }\n\n    [dir=rtl] .wrapper {\n        left: 20px;\n        right: unset;\n    }\n\n    .button {\n        height: 64px;\n        width: 64px;\n    }\n\n    .button-icon {\n        max-height: 64px;\n        max-width: 64px;\n    }\n\n    .widget {\n        height: 70vh;\n        /* 20px compensation for bottom position of wrapper */\n        max-height: calc(100vh - 20px - 60px);\n        max-width: 512px;\n        width: 30vw;\n    }\n}\n\n/* Chat button entrance */\n@keyframes scale-in-center{0%{opacity:1;transform:scale(0)}100%{opacity:1;transform:scale(1)}}\n\n/* Chat button exit */\n@keyframes scale-out-center{0%{display:flex;opacity:1;transform:scale(1)}100%{display:none;opacity:1;transform:scale(0)}}\n\n/* Chat widget entrance */\n@keyframes scale-in-br{0%{opacity:1;transform:scale(0);transform-origin:100% 100%}100%{opacity:1;transform:scale(1);transform-origin:100% 100%}}\n\n@keyframes scale-in-bl {0% {opacity: 1;transform: scale(0);transform-origin: 0% 100%}100% {opacity: 1;transform: scale(1);transform-origin: 0% 100%}}\n\n/* Chat widget exit */\n@keyframes scale-out-br{0%{opacity:1;transform:scale(1);transform-origin:100% 100%}99%{opacity:1;transform:scale(.01);transform-origin:100% 100%}100%{display:none;opacity:1;transform:scale(0);transform-origin:100% 100%}}\n\n@keyframes scale-out-bl{0%{opacity: 1;transform:scale(1);transform-origin:0 100%}99%{opacity:1;transform:scale(.01);transform-origin:0 100%}100%{opacity:1;transform:scale(0);transform-origin:0 100%}}\n\n@media (prefers-reduced-motion: reduce) {\n    .button, .widget, .autocomplete-items, .status-message-wrapper, .share-popup-expand {\n        animation: none;\n    }\n\n    .conversation, .card-message-horizontal .card-message-cards {\n        scroll-behavior: auto;\n    }\n}\n",
              "",
            ]),
              (e.exports = t);
          },
          909: function (e, t, n) {
            (t = n(3645)(!1)).push([
              e.id,
              ".footer {\n    align-items: center;\n    background-color: #fff;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;                    /* LTR */\n    position: relative;\n    text-align: start;\n}\n\n.footer-mode-keyboard {\n    align-items: center;\n    flex: 1;\n    flex-direction: row;                    /* LTR */\n    justify-content: center;\n    max-height: 78px;\n    max-width: 100%;\n    padding: 8px 6px 8px 4px;               /* LTR */\n}\n\n.footer-mode-voice {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n}\n\n.footer-visualizer-wrapper {\n    align-items: center;\n    display: flex;\n    flex-direction: row;                    /* LTR */\n    height: 48px;\n    justify-content: center;\n    padding: 8px;\n    width: 100%;\n}\n\n.footer-recognition-wrapper {\n    align-items: center;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;                    /* LTR */\n    height: 48px;\n    padding: 8px 6px 8px 8px;               /* LTR */\n    width: 100%;\n}\n\n.footer-button {\n    -webkit-tap-highlight-color: transparent;\n    align-items: center;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    height: 32px;\n    justify-content: center;\n    max-height: 32px;\n    max-width: 32px;\n    overflow: hidden;\n    padding: 4px;\n    text-shadow: none;\n    width: 32px;\n}\n\n.footer-button:disabled {\n    cursor: default;\n    pointer-events: none;\n}\n\n.footer-button-icon {\n    background-position: center;\n    background-size: 100%;\n    height: 100%;\n    margin: auto;\n    padding: 0;\n    width: 100%;\n}\n\n.footer-button-svg-icon {\n    fill: #787570;\n    height: 24px;\n    width: 24px;\n}\n\n.footer-button:disabled .footer-button-svg-icon,\n.footer-button:disabled .footer-button-svg-icon:active,\n.footer-button:disabled .footer-button-svg-icon:hover {\n    fill: #bbb6b2;\n}\n\n.button-upload {\n    margin-left: 2px;\n}\n\n.button-speech-active {\n    animation: mic-toggle 400ms ease 0s infinite normal none running;\n}\n\n.footer.mode-keyboard .footer-mode-keyboard, .footer.mode-voice .footer-mode-voice {\n    display: flex;\n}\n\n.footer.mode-voice .footer-mode-keyboard, .footer.mode-keyboard .footer-mode-voice {\n    display: none;\n}\n\n@keyframes mic-toggle {\n    from {\n        fill: #ff8a80;\n    }\n    to {\n        fill: #d50000;\n    }\n}\n\n.user-input {\n    border: 1px solid #dadada;\n    border-radius: 16px;\n    box-sizing: border-box;\n    color: #333;\n    font-size: 16px;\n    flex: 1;\n    height: 32px;\n    line-height: 18px;\n    margin: 0 6px;\n    max-height: 61px;\n    min-height: 32px;\n    outline: none;\n    overflow: auto;\n    padding: 6px 14px;\n    resize: none;\n    text-align: start;\n}\n\n.user-input::placeholder {\n    color: #787570;\n}\n\n.user-input.disabled {\n    color: #737373;\n}\n\n.user-input.disabled::placeholder {\n    color: #bbb6b2;\n}\n\n.user-input.user-input-inline-send {\n    padding: 6px 40px 6px 14px;             /* LTR */\n}\n\n.autocomplete-items {\n    -webkit-animation: popup-suggestion .15s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n    animation: popup-suggestion .15s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n    border: 1px solid #bababa;\n    border-radius: 6px 6px 0 0;\n    bottom: 100%;\n    left: 0;\n    margin: 0 auto;\n    width: 77%;\n    max-height: 240px;\n    overflow-y: auto;\n    position: absolute;\n    right: 0;\n    z-index: 1;\n}\n\n.autocomplete-items.no-attach {\n    margin-left: 10px;\n    width: 86%;\n}\n\n.autocomplete-items div {\n    background-color: #fff;\n    color: #161513;\n    cursor: pointer;\n    font-size: 16px;\n    min-height: 44px;\n    padding: 10px;\n    text-align: start;\n}\n\n.autocomplete-items strong {\n    font-weight: 700;\n}\n\n.autocomplete-items div:hover {\n    background-color: #e9e9e9;\n}\n\n.button-send-inline {\n    left: unset;\n    position: absolute;\n    right: 52px;\n}\n\n.recognition-text-view {\n    border: none;\n    flex: 1;\n    font-size: 16px;\n    margin: 0 8px;\n    pointer-events: none;\n}\n\n.share-popup {\n    background-color: #fcfbfa;\n    border: 1px solid #dadada;\n    border-radius: 4px;\n    bottom: 90%;\n    display: none;\n    left: 8px;                              /* LTR */\n    max-width: 200px;\n    padding: 8px;\n    position: absolute;\n    right: unset;\n    z-index: 2;\n}\n\n.share-popup::after {\n    border-left: 8px solid transparent;\n    border-right: 8px solid transparent;\n    border-top: 8px solid #fcfbfa;\n    content: '';\n    height: 0;\n    left: 8px;                              /* LTR */\n    position: absolute;\n    right: unset;\n    top: 100%;\n    width: 0;\n}\n\n.share-popup-expand {\n    -webkit-animation: scale-in-bl .25s cubic-bezier(0.250, 0.460, 0.450, 0.940) .2s both;\n    animation: scale-in-bl .25s cubic-bezier(0.250, 0.460, 0.450, 0.940) .2s both;\n    display: flex;\n}\n\n.share-popup-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    list-style: none;\n    margin: 0;\n    max-width: 100%;\n    padding: 0;\n    width: 100%;\n}\n\n.share-popup-list li {\n    border-bottom: 1px solid #dadada;\n    padding-bottom: 2px;\n    padding-top: 2px;\n}\n\n.share-popup-list li:last-of-type {\n    border-bottom: none;\n}\n\n.share-popup-item {\n    align-items: center;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    flex: 1;\n    font-size: 13.75px;\n    font-weight: 700;\n    height: 40px;\n    padding: 8px;\n    text-align: start;\n    width: 100%;\n}\n\n.share-popup-item:hover, .share-popup-item:focus {\n    background-color: #fff;\n}\n\n.share-popup-item-icon {\n    fill: #787570;\n    flex: 1 0 auto;\n    height: 24px;\n    max-height: 24px;\n    max-width: 24px;\n    width: 24px;\n}\n\n.share-popup-item-text {\n    flex: 1 1 auto;\n    margin: 0 8px;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.autocomplete-items .autocomplete-active, .autocomplete-items .autocomplete-active:hover {\n    background-color: #85bbe7;\n}\n\n/* --- RTL --- */\n\n[dir=rtl] .footer-mode-keyboard {\n    flex-direction: row-reverse;\n    padding: 8px 4px 8px 6px;\n}\n\n[dir=rtl] .footer-recognition-wrapper {\n    flex-direction: row-reverse;\n    padding: 8px 8px 8px 6px;\n}\n\n[dir=rtl] .button-upload {\n    margin-left: unset;\n    margin-right: 2px;\n}\n\n[dir=rtl] .user-input.user-input-inline-send {\n    padding: 6px 14px 6px 40px;\n}\n\n[dir=rtl] .user-input {\n    direction: rtl;\n}\n\n[dir=rtl] .button-send {\n    transform: scale(-1, 1);\n}\n\n[dir=rtl] .button-send-inline {\n    left: 52px;\n    right: unset;\n}\n\n[dir=rtl] .share-popup-expand {\n    -webkit-animation: scale-in-br .25s cubic-bezier(0.250, 0.460, 0.450, 0.940) .2s both;\n    animation: scale-in-br .25s cubic-bezier(0.250, 0.460, 0.450, 0.940) .2s both;\n}\n\n[dir=rtl] .footer, [dir=rtl] .footer-visualizer-wrapper, [dir=rtl] .share-popup-item {\n    flex-direction: row-reverse;\n}\n\n[dir=rtl] .share-popup, [dir=rtl] .share-popup::after {\n    left: unset;\n    right: 8px;\n}\n\n@keyframes popup-suggestion{0%{box-shadow:0 0 0 0 transparent,0 0 0 0 transparent;transform:scaleY(.4);transform-origin:0 100%}100%{box-shadow:0 -12px 15px -12px rgba(0,0,0,.35);transform:scaleY(1);transform-origin:0 100%}}\n\n@keyframes scale-in-bl{0%{opacity:1;transform:scale(0);transform-origin:0 100%}100%{opacity:1;transform:scale(1);transform-origin:0 100%}}\n\n@keyframes scale-in-br{0%{opacity:1;transform:scale(0);transform-origin:100% 100%}100%{opacity:1;transform:scale(1);transform-origin:100% 100%}}\n",
              "",
            ]),
              (e.exports = t);
          },
          5464: function (e, t, n) {
            (t = n(3645)(!1)).push([
              e.id,
              ".header {\n    align-items: center;\n    box-sizing: border-box;\n    color: #fff;\n    display: flex;\n    flex-direction: row;\n    height: 48px;\n    padding: 0 8px 0 10px;\n    text-align: start;\n}\n\n.logo {\n    flex: 0 0 auto;\n    height: 24px;\n    max-height: 32px;\n    max-width: 32px;\n    min-height: 16px;\n    padding: 0;\n    width: 24px;\n}\n\n.header-info-wrapper {\n    align-items: flex-start;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    margin: 0 8px;\n    min-width: 0;\n    padding: 0;\n    width: 100%;\n}\n\n.title {\n    color: #fff;\n    font-size: 18px;\n}\n\n.subtitle {\n    color: #fff;\n    font-size: 14px;\n}\n\n.connection-status {\n    font-size: 10px;\n    font-weight: 700;\n    text-transform: uppercase;\n}\n\n.title, .subtitle, .connection-status {\n    justify-content: center;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.header-custom-element {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    word-break: break-all;\n}\n\n.header-actions {\n    display: flex;\n    flex: 1 0 auto;\n    justify-content: flex-end;\n}\n\n.header-button {\n    align-items: center;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n    display: flex;\n    height: 32px;\n    justify-content: center;\n    margin: 0 0 0 8px;\n    max-height: 32px;\n    max-width: 32px;\n    padding: 4px;\n    width: 32px;\n}\n\n.header-button:disabled {\n    cursor: default;\n    pointer-events: none;\n}\n\n.header-button svg {\n    fill: #fff;\n}\n\n.header-button:hover {\n    filter: brightness(1.2);\n}\n\n.header-button:active {\n    filter: brightness(0.875);\n}\n\n.header-button-icon {\n    height: 24px;\n    width: 24px;\n}\n\n.header-button-img-icon {\n    height: 100%;\n    max-height: 100%;\n    max-width: 100%;\n    width: 100%;\n}\n\n.header-button:disabled .header-button-icon,\n.header-button:disabled .header-button-icon:active,\n.header-button:disabled .header-button-icon:hover {\n    fill: #bbb6b2;\n}\n\n.language-selection {\n    /* TODO: Attempt consistent UI for select and options */\n    /* -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none; */\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    border: none;\n    box-sizing: border-box;\n    display: block;\n    font-size: 18px;\n    margin: 0;\n    max-width: 8rem;\n    min-width: 4rem;\n    padding: 2px;\n}\n\n.language-selection::-ms-expand {\n    display: none;\n}\n\n/* --- RTL --- */\n\n[dir=rtl] .header {\n    flex-direction: row-reverse;\n    padding: 0 10px 0 8px;\n}\n\n[dir=rtl] .header-info-wrapper {\n    align-items: flex-end;\n}\n\n[dir=rtl] .header-actions {\n    flex-direction: row-reverse;\n}\n\n[dir=rtl] .header-button {\n    margin: 0 8px 0 0;\n}\n",
              "",
            ]),
              (e.exports = t);
          },
          9192: function (e, t, n) {
            (t = n(3645)(!1)).push([
              e.id,
              '.conversation {\n    background: #ffffff;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;\n    overflow: auto;\n    scroll-behavior: smooth;\n    width: 100%;\n}\n',
              "",
            ]),
              (e.exports = t);
          },
          4068: function (e, t, n) {
            (t = n(3645)(!1)).push([
              e.id,
              ".message-actions {\n    display: flex;\n    flex-direction: column;\n}\n\n.action-postback {\n    align-items: center;\n    background: #025e7e;\n    border-radius: 4px;\n    border-width: 1px;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: flex;\n    flex: 1 1 auto;\n    font-size: 13.75px;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: 700;\n    justify-content: center;\n    letter-spacing: normal;\n    line-height: 1.31;\n    padding: 12px 24px;\n    text-align: center;\n    text-decoration: none;\n    text-indent: 0;\n    text-shadow: none;\n    text-transform: none;\n    word-break: break-all;\n    word-spacing: normal;\n}\n\n.message-actions .action-postback {\n    margin: 4px;\n}\n\n.message-actions .action-postback:focus, .message-actions a.action-postback:active {\n    background: #004d80;\n}\n\n.message-actions .action-postback.disabled {\n    background: #f8f8f8;\n    border-color: #c5c5c5;\n    color: #737373;\n    cursor: default;\n}\n\n.message-actions .action-postback.disabled:hover {\n    background: #f8f8f8;\n}\n\n.message-actions .action-postback.disabled:focus, .message-actions a.action-postback.disabled:active {\n    background: #f8f8f8;\n}\n\n.message-global-actions {\n    align-items: flex-start;\n    display: flex;\n    flex-direction: column;\n    margin-top: 16px;\n}\n\n.message-global-actions.has-message-icon {\n    margin-left: 40px;\n}\n\n[dir=rtl] .message-global-actions.has-message-icon {\n    margin-left: unset;\n    margin-right: 40px;\n}\n\n.message-global-actions .action-postback {\n    border: 1px solid #1b8fd2;\n    color: #1b8fd2;\n    margin-top: 4px;\n    margin-bottom: 4px;\n}\n\n.message-global-actions .action-postback:first-of-type {\n    margin-top: 0;\n}\n\n.message-global-actions .action-postback:last-of-type {\n    margin-bottom: 0;\n}\n\n.message-global-actions .action-postback:hover {\n    background: #1b8fd2;\n    color: #fff;\n}\n\n.message-global-actions .action-postback:focus, .message-global-actions .action-postback:active {\n    background: #004d80;\n    color: #fff;\n}\n\n.message-global-actions .action-postback.disabled {\n    background: #f8f8f8;\n    border-color: #c5c5c5;\n    color: #737373;\n    cursor: default;\n}\n\n.message-global-actions .action-postback.disabled:hover, .message-global-actions .action-postback.disabled:focus, .message-global-actions .action-postback.disabled:active {\n    background: #f8f8f8;\n    border-color: #c5c5c5;\n    color: #737373;\n}\n\n.action-image {\n    margin: 0 4px;\n    max-height: 24px;\n    max-width: 24px;\n}\n",
              "",
            ]),
              (e.exports = t);
          },
          5311: function (e, t, n) {
            (t = n(3645)(!1)).push([
              e.id,
              ".attachment-image,\n.attachment-video{width: 100%;}\n.attachment-audio{width: 190px;}/* TODO: set by javascript */\n\n.attachment-message {\n    align-items: center;\n    display: -webkit-flex; /* Safari */\n    display: flex;\n}\n\n.attachment-icon {\n    align-items: center;\n    border: none;\n    background: no-repeat center center;\n    background-color: transparent;\n    flex: 0 0 auto;\n    height: 32px;\n    justify-content: center;\n    margin-right: 4px;\n    overflow: hidden;\n    width: 32px;\n}\n\n.attachment-fileName {\n    margin: auto 0;\n}\n",
              "",
            ]),
              (e.exports = t);
          },
          773: function (e, t, n) {
            (t = n(3645)(!1)).push([
              e.id,
              ".card-message-horizontal .message-bubble.message-header, .card-message-horizontal .message-bubble.message-footer {\n    margin-right: 0;\n}\n\n[dir=rtl] .card-message-horizontal .message-bubble.message-header, .card-message-horizontal .message-bubble.message-footer {\n    margin-left: 0;\n    margin-right: unset;\n}\n\n.card-message-horizontal .content-wrapper {\n    flex: 0 0 auto;\n    min-width: 0;\n    overflow-x: visible;\n}\n\n.card-message-content {\n    line-height: 1.5;\n    max-width: 100%;\n    white-space: pre-wrap;\n}\n\n.card-message-horizontal .card-message-content {\n    position: relative;\n}\n\n.card-message-content a {\n    text-decoration: none;\n}\n\n.card-message-horizontal {\n    margin-left: 20px;\n    margin-right: 20px;\n}\n\n.card-message-horizontal.has-message-icon {\n    margin-left: 0;\n}\n\n[dir=rtl] .card-message-horizontal.has-message-icon {\n    margin-left: unset;\n    margin-right: 0;\n}\n\n.card-message-cards {\n    max-width: 100%;\n    margin-right: 20px;\n}\n\n[dir=rtl] .card-message-cards {\n    margin-right: unset;\n}\n\n.card-message-horizontal .card-message-cards {\n    -ms-overflow-style: none;\n    -webkit-overflow-scrolling: touch;\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    max-width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n    position: relative;\n    scroll-behavior: smooth;\n    scroll-snap-type: x mandatory;\n    scrollbar-width: none;\n    white-space: nowrap;\n    width: 100%;\n}\n\n.card-message-horizontal .card-message-cards::-webkit-scrollbar {\n    display: none;\n}\n\n.card-message-vertical .card {\n    border-radius: 20px;\n    margin: 8px 0;\n}\n\n.card-message-vertical .card:first-of-type {\n    margin-top: 0;\n}\n\n.card-message-vertical .card:last-of-type {\n    margin-bottom: 0;\n}\n\n.card-message-vertical .message-wrapper {\n    flex-direction: column;\n}\n\n.card {\n    background: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.12);\n    border-radius: 20px;\n    box-sizing: border-box;\n    display: block;\n    max-width: 100%;\n    min-width: 75%;\n    overflow: hidden;\n    padding: 20px;\n    white-space: pre-wrap;\n}\n\n.card-message-horizontal .card {\n    align-self: stretch;\n    display: flex;\n    flex: 0 0 auto;\n    flex-direction: column;\n    justify-content: space-around;\n    margin: 0 8px;\n    scroll-snap-align: start;\n}\n\n.card-message-horizontal .card:first-of-type {\n    margin-left: 0;\n}\n\n.card-message-horizontal .card:last-of-type {\n    margin-right: 0;\n}\n\n.card-image {\n    height: 275px;\n    max-width: 100%;\n    width: 375px;\n}\n\n.card-content {\n    display: flex;\n    flex-direction: column;\n    line-height: 1.5;\n}\n\n.card-title {\n    font-weight: 400;\n    margin: 4px;\n    max-width: 100%;\n    text-align: center;\n    white-space: pre-wrap;\n}\n\n.card-description {\n    font-weight: 400;\n    margin: 4px;\n    max-width: 100%;\n    text-align: start;\n    text-overflow: ellipsis;\n    white-space: pre-wrap;\n}\n\n.card-actions {\n    display: flex;\n    flex-direction: column;\n}\n\n.card-actions .action-postback {\n    background: #09f;\n    margin: 4px;\n}\n\n.card-actions .action-postback:hover {\n    background: #eaeaea;\n}\n\n.card-actions button.disabled {\n    background: #fff;\n    border-color: #c5c5c5;\n    color: #737373;\n    cursor: default;\n}\n\n.card-actions button.disabled:hover {\n    background: #fff;\n    color: #737373;\n}\n\n.round {\n    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n    align-items: center;\n    background: #eaeaea;\n    border: none;\n    border-radius: 4px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n    color: #333;\n    cursor: pointer;\n    display: flex;\n    height: 36px;\n    justify-content: center;\n    padding: 0;\n    position: absolute;\n    text-align: center;\n    top: calc(50% - 18px);\n    width: 36px;\n    z-index: 1;\n}\n\n.round svg {\n    fill: #333;\n}\n\n.round:hover {\n    background: #4a90e2;\n    color: #fff;\n}\n\n.round:hover svg {\n    fill: #fff;\n}\n\n.previous {\n    left: -18px;\n}\n\n.next {\n    right: -18px;\n}\n",
              "",
            ]),
              (e.exports = t);
          },
          8371: function (e, t, n) {
            (t = n(3645)(!1)).push([
              e.id,
              ".loading-icon {\n    display: -webkit-flex; /* Safari */\n    display: flex;\n}\n",
              "",
            ]),
              (e.exports = t);
          },
          8566: function (e, t, n) {
            (t = n(3645)(!1)).push([
              e.id,
              ".spinner {\n    position: relative;\n    display: inline-block;\n    width: 28px;\n    height: 28px;\n    margin-right: 4px;\n}\n\n.spinner svg {\n    animation-duration: 750ms;\n    -webkit-animation: spinner-rotate 1s linear infinite;\n    animation: spinner-rotate 1s linear infinite;\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n}\n\n.spinner circle {\n    stroke: #387ef5;\n    fill: transparent;\n    stroke-width: 4px;\n    stroke-dasharray: 128px;\n    stroke-dashoffset: 82px;\n}\n\n@keyframes spinner-rotate {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n",
              "",
            ]),
              (e.exports = t);
          },
          8274: function (e, t, n) {
            (t = n(3645)(!1)).push([
              e.id,
              ".message-with-icon {\n    align-items: center;\n    display: -webkit-flex; /* Safari */\n    display: flex;\n}\n\n.error-icon {\n    margin-right: 5px;\n    max-width: 24px;\n    max-height: 24px;\n}\n\n.message-text {\n    margin: auto 0;\n    text-align: start;\n    white-space: pre-wrap;\n}\n",
              "",
            ]),
              (e.exports = t);
          },
          9244: function (e, t, n) {
            (t = n(3645)(!1)).push([
              e.id,
              ".message {\n    line-height: 1.5;\n    margin-bottom: 24px;\n}\n\n.left {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    text-align: start;\n}\n\n.right {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n}\n\n.left, [dir=rtl] .right {\n    align-items: flex-start;\n}\n\n.right, [dir=rtl] .left {\n    align-items: flex-end;\n}\n\n.message-wrapper {\n    display: flex;\n    max-width: 100%;\n}\n\n.left .message-wrapper, [dir=rtl] .right .message-wrapper {\n    flex-direction: row;\n}\n\n.right .message-wrapper, [dir=rtl] .left .message-wrapper {\n    flex-direction: row-reverse;\n}\n\n.icon-wrapper {\n    align-items: flex-end;\n    align-self: flex-end;\n    border-radius: 4px;\n    display: flex;\n    height: 32px;\n    justify-content: center;\n    min-width: 32px;\n    overflow: hidden;\n    width: 32px;\n}\n\n.left .icon-wrapper, [dir=rtl] .right .icon-wrapper {\n    margin-left: unset;\n    margin-right: 8px;\n}\n\n.right .icon-wrapper, [dir=rtl] .left .icon-wrapper {\n    margin-left: 8px;\n    margin-right: unset;\n}\n\n.message-icon {\n    height: 32px;\n    max-height: 32px;\n    max-width: 32px;\n    width: 32px;\n}\n\n.content-wrapper {\n    max-width: 100%;\n    overflow-x: auto;\n}\n\n.content-wrapper.with-icon {\n    max-width: 88%;\n}\n\n.message-bubble {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: 0;\n    max-width: 350px;\n    padding: 20px;\n    position: relative;\n}\n\n.screen-reader-only {\n    height: 1px;\n    left: -20000px;\n    overflow: hidden;\n    position: absolute;\n    top: auto;\n    width: 1px;\n}\n\n.message-content {\n    line-height: 1.5;\n    margin: 4px;\n    overflow: hidden;\n    text-align: start;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n}\n\n.message-content a {\n    text-decoration: none;\n}\n\n.right .message-bubble, [dir=rtl] .left .message-bubble {\n    border-radius: 24px 24px 0 24px;\n    margin-left: 20px;\n    margin-right: unset;\n}\n\n.left .message-bubble, [dir=rtl] .right .message-bubble {\n    border-radius: 24px 24px 24px 0;\n    margin-left: unset;\n    margin-right: 20px;\n}\n\n.left .message-header {\n    border-radius: 24px 24px 0 0;\n    margin-bottom: 10px;\n}\n\n.left .message-footer {\n    border-radius: 0 0 24px 24px;\n    margin-top: 10px;\n}\n\n.left .has-header {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.left .has-footer {\n    border-bottom-right-radius: 0;\n}\n\n[dir=rtl] .left .has-footer {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: unset;\n}\n\n.attachment-image, .attachment-video {\n    width: 100%;\n}\n\n.attachment-audio {\n    width: 190px;\n}\n\n.bubble-wrapper {\n    display: flex;\n    flex-direction: row;\n}\n",
              "",
            ]),
              (e.exports = t);
          },
          7519: function (e, t, n) {
            (t = n(3645)(!1)).push([
              e.id,
              ".status-message-container {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 24px;\n}\n\n.status-message-wrapper {\n    align-items: center;\n    align-self: center;\n    animation: vibrate 0.5s linear both;\n    background-color: #f3f3f3;\n    border-radius: 4px;\n    display: flex;\n    flex: 0 1 auto;\n    max-width: 80%;\n    padding: 10px 24px;\n}\n\n@keyframes vibrate {\n    0% {\n        -webkit-transform: translate(0);\n                transform: translate(0);\n    }\n    20% {\n        -webkit-transform: translate(-2px, 2px);\n                transform: translate(-2px, 2px);\n    }\n    40% {\n        -webkit-transform: translate(-2px, -2px);\n                transform: translate(-2px, -2px);\n    }\n    60% {\n        -webkit-transform: translate(2px, 2px);\n                transform: translate(2px, 2px);\n    }\n    80% {\n        -webkit-transform: translate(2px, -2px);\n                transform: translate(2px, -2px);\n    }\n    100% {\n        -webkit-transform: translate(0);\n                transform: translate(0);\n    }\n}\n\n.status-image {\n    max-width: 16px;\n    max-height: 16px;\n}\n\n.status-message {\n    color: #737373;\n    font-size: 14px;\n    margin-left: 8px;\n    text-align: start;\n}\n",
              "",
            ]),
              (e.exports = t);
          },
          93: function (e, t, n) {
            (t = n(3645)(!1)).push([
              e.id,
              "\nhr {\n    border-top: 1px solid #eee;\n    padding: 0;\n    margin: 10px 0;\n}\n",
              "",
            ]),
              (e.exports = t);
          },
          6069: function (e, t, n) {
            (t = n(3645)(!1)).push([
              e.id,
              "\n.webview-container {\n    background-color: #fff;\n    bottom: 0;\n    box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.08),\n        0 -2px 2px rgba(0, 0, 0, 0.12),\n        0 -3px 4px rgba(0, 0, 0, 0.16),\n        0 -4px 8px rgba(0, 0, 0, 0.20);\n    display: flex;\n    flex-direction: column;\n    height: 0;\n    max-width: 100%;\n    position: absolute;\n    width: 100%;\n    z-index: 1;\n}\n\n.webview-container.none {\n    display: none;\n}\n\n.webview-container.webview-container-close {\n    animation: oda-chat-webview-slide-out-bottom .4s cubic-bezier(.55, .085, .68, .53) both;\n}\n\n@keyframes oda-chat-webview-slide-out-bottom {\n    0% {\n        transform: translateY(0);\n        opacity: 1;\n    }\n    95% {\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(100%);\n        opacity: 0;\n    }\n}\n\n.webview-container.webview-container-open {\n    animation: oda-chat-webview-slide-in-bottom .4s cubic-bezier(.25, .46, .45, .94) both;\n}\n\n@keyframes oda-chat-webview-slide-in-bottom {\n    0% {\n        transform: translateY(100%);\n        opacity: 0;\n    }\n    1% {\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(0%);\n        opacity: 1;\n    }\n}\n\n.webview-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 100%;\n    height: 48px;\n}\n\n.webview-button-close {\n    align-items: center;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    flex: 0 0 auto;\n    justify-content: center;\n    margin: 4px;\n    padding: 4px;\n}\n\n.webview-button-close-icon {\n    height: 24px;\n    fill: #fff;\n    max-height: 32px;\n    max-width: 32px;\n    padding: 0;\n    width: 24px;\n}\n\n.progress-bar {\n    background-color: #dadada;\n    border-radius: 0;\n    border-style: none;\n    box-sizing: border-box;\n    display: block;\n    height: 4px;\n    margin: 0;\n    position: absolute;\n    overflow: hidden;\n    top: 48px;\n    width: 100%;\n}\n\n.progress-bar-overlay {\n    width: 25%;\n    height: 100%;\n    background-color: #33553c;\n    position: relative;\n    animation: oda-chat-progress-bar 2s linear infinite;\n}\n\n@keyframes oda-chat-progress-bar {\n    0% {\n        left: -35%;\n        right: 100%\n    }\n\n    60% {\n        left: 100%;\n        right: -90%\n    }\n\n    100% {\n        left: 100%;\n        right: -90%\n    }\n}\n\n.webview {\n    background-color: #fff;\n    border: none;\n    flex: 1 1 auto;\n    max-width: 100%;\n    width: 100%;\n}\n\n.webview-error {\n    align-items: center;\n    background-color: #eaeaea;\n    border: 1px solid #dadada;\n    border-radius: 4px;\n    bottom: 16px;\n    display: flex;\n    flex: 1 1 auto;\n    flex-direction: row;\n    justify-content: space-between;\n    left: 5%;\n    max-width: 400px;\n    padding: 8px 4px 8px 8px;\n    position: absolute;\n    width: 90%;\n    animation: webview-error-in .6s cubic-bezier(.390,.575,.565,1.000) both;\n}\n\n.webview-error.none {\n    animation: webview-error-out .6s cubic-bezier(.25,.46,.45,.94) both;\n}\n\n[dir=rtl] .webview-error {\n    flex-direction: row-reverse;\n    padding: 8px 8px 8px 4px;\n}\n\n.webview-error-text {\n    color: #161513;\n}\n\n.webview-alt-link {\n    font-weight: 700;\n}\n\n.webview-error-button-close svg {\n    fill: #333;\n}\n\n@keyframes webview-error-in{0%{transform:translateY(50px);opacity:0}100%{transform:translateY(0);opacity:1}}\n\n@keyframes webview-error-out{0%{transform:translateY(0);opacity:1}100%{transform:translateY(50px);opacity:0}}\n",
              "",
            ]),
              (e.exports = t);
          },
          3645: function (e) {
            "use strict";
            e.exports = function (e) {
              var t = [];
              return (
                (t.toString = function () {
                  return this.map(function (t) {
                    var n = (function (e, t) {
                      var n,
                        i,
                        o,
                        s = e[1] || "",
                        r = e[3];
                      if (!r) return s;
                      if (t && "function" == typeof btoa) {
                        var a =
                            ((n = r),
                            (i = btoa(
                              unescape(encodeURIComponent(JSON.stringify(n)))
                            )),
                            (o =
                              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                                i
                              )),
                            "/*# ".concat(o, " */")),
                          c = r.sources.map(function (e) {
                            return "/*# sourceURL="
                              .concat(r.sourceRoot || "")
                              .concat(e, " */");
                          });
                        return [s].concat(c).concat([a]).join("\n");
                      }
                      return [s].join("\n");
                    })(t, e);
                    return t[2]
                      ? "@media ".concat(t[2], " {").concat(n, "}")
                      : n;
                  }).join("");
                }),
                (t.i = function (e, n, i) {
                  "string" == typeof e && (e = [[null, e, ""]]);
                  var o = {};
                  if (i)
                    for (var s = 0; s < this.length; s++) {
                      var r = this[s][0];
                      null != r && (o[r] = !0);
                    }
                  for (var a = 0; a < e.length; a++) {
                    var c = [].concat(e[a]);
                    (i && o[c[0]]) ||
                      (n &&
                        (c[2]
                          ? (c[2] = "".concat(n, " and ").concat(c[2]))
                          : (c[2] = n)),
                      t.push(c));
                  }
                }),
                t
              );
            };
          },
          9432: function (e, t, n) {
            "use strict";
            n.r(t),
              n.d(t, {
                assign: function () {
                  return h;
                },
                format: function () {
                  return O;
                },
                parse: function () {
                  return I;
                },
                defaultI18n: function () {
                  return g;
                },
                setGlobalDateI18n: function () {
                  return m;
                },
                setGlobalDateMasks: function () {
                  return A;
                },
              });
            var i =
                /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
              o = "[1-9]\\d?",
              s = "\\d\\d",
              r = "[^\\s]+",
              a = /\[([^]*?)\]/gm;
            function c(e, t) {
              for (var n = [], i = 0, o = e.length; i < o; i++)
                n.push(e[i].substr(0, t));
              return n;
            }
            var l = function (e) {
              return function (t, n) {
                var i = n[e]
                  .map(function (e) {
                    return e.toLowerCase();
                  })
                  .indexOf(t.toLowerCase());
                return i > -1 ? i : null;
              };
            };
            function h(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              for (var i = 0, o = t; i < o.length; i++) {
                var s = o[i];
                for (var r in s) e[r] = s[r];
              }
              return e;
            }
            var u = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              d = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              p = c(d, 3),
              g = {
                dayNamesShort: c(u, 3),
                dayNames: u,
                monthNamesShort: p,
                monthNames: d,
                amPm: ["am", "pm"],
                DoFn: function (e) {
                  return (
                    e +
                    ["th", "st", "nd", "rd"][
                      e % 10 > 3 ? 0 : ((e - (e % 10) != 10 ? 1 : 0) * e) % 10
                    ]
                  );
                },
              },
              f = h({}, g),
              m = function (e) {
                return (f = h(f, e));
              },
              v = function (e) {
                return e.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
              },
              _ = function (e, t) {
                for (void 0 === t && (t = 2), e = String(e); e.length < t; )
                  e = "0" + e;
                return e;
              },
              b = {
                D: function (e) {
                  return String(e.getDate());
                },
                DD: function (e) {
                  return _(e.getDate());
                },
                Do: function (e, t) {
                  return t.DoFn(e.getDate());
                },
                d: function (e) {
                  return String(e.getDay());
                },
                dd: function (e) {
                  return _(e.getDay());
                },
                ddd: function (e, t) {
                  return t.dayNamesShort[e.getDay()];
                },
                dddd: function (e, t) {
                  return t.dayNames[e.getDay()];
                },
                M: function (e) {
                  return String(e.getMonth() + 1);
                },
                MM: function (e) {
                  return _(e.getMonth() + 1);
                },
                MMM: function (e, t) {
                  return t.monthNamesShort[e.getMonth()];
                },
                MMMM: function (e, t) {
                  return t.monthNames[e.getMonth()];
                },
                YY: function (e) {
                  return _(String(e.getFullYear()), 4).substr(2);
                },
                YYYY: function (e) {
                  return _(e.getFullYear(), 4);
                },
                h: function (e) {
                  return String(e.getHours() % 12 || 12);
                },
                hh: function (e) {
                  return _(e.getHours() % 12 || 12);
                },
                H: function (e) {
                  return String(e.getHours());
                },
                HH: function (e) {
                  return _(e.getHours());
                },
                m: function (e) {
                  return String(e.getMinutes());
                },
                mm: function (e) {
                  return _(e.getMinutes());
                },
                s: function (e) {
                  return String(e.getSeconds());
                },
                ss: function (e) {
                  return _(e.getSeconds());
                },
                S: function (e) {
                  return String(Math.round(e.getMilliseconds() / 100));
                },
                SS: function (e) {
                  return _(Math.round(e.getMilliseconds() / 10), 2);
                },
                SSS: function (e) {
                  return _(e.getMilliseconds(), 3);
                },
                a: function (e, t) {
                  return e.getHours() < 12 ? t.amPm[0] : t.amPm[1];
                },
                A: function (e, t) {
                  return e.getHours() < 12
                    ? t.amPm[0].toUpperCase()
                    : t.amPm[1].toUpperCase();
                },
                ZZ: function (e) {
                  var t = e.getTimezoneOffset();
                  return (
                    (t > 0 ? "-" : "+") +
                    _(
                      100 * Math.floor(Math.abs(t) / 60) + (Math.abs(t) % 60),
                      4
                    )
                  );
                },
                Z: function (e) {
                  var t = e.getTimezoneOffset();
                  return (
                    (t > 0 ? "-" : "+") +
                    _(Math.floor(Math.abs(t) / 60), 2) +
                    ":" +
                    _(Math.abs(t) % 60, 2)
                  );
                },
              },
              y = function (e) {
                return +e - 1;
              },
              C = [null, o],
              S = [null, r],
              T = [
                "isPm",
                r,
                function (e, t) {
                  var n = e.toLowerCase();
                  return n === t.amPm[0] ? 0 : n === t.amPm[1] ? 1 : null;
                },
              ],
              E = [
                "timezoneOffset",
                "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
                function (e) {
                  var t = (e + "").match(/([+-]|\d\d)/gi);
                  if (t) {
                    var n = 60 * +t[1] + parseInt(t[2], 10);
                    return "+" === t[0] ? n : -n;
                  }
                  return 0;
                },
              ],
              w = {
                D: ["day", o],
                DD: ["day", s],
                Do: [
                  "day",
                  "[1-9]\\d?[^\\s]+",
                  function (e) {
                    return parseInt(e, 10);
                  },
                ],
                M: ["month", o, y],
                MM: ["month", s, y],
                YY: [
                  "year",
                  s,
                  function (e) {
                    var t = +("" + new Date().getFullYear()).substr(0, 2);
                    return +("" + (+e > 68 ? t - 1 : t) + e);
                  },
                ],
                h: ["hour", o, void 0, "isPm"],
                hh: ["hour", s, void 0, "isPm"],
                H: ["hour", o],
                HH: ["hour", s],
                m: ["minute", o],
                mm: ["minute", s],
                s: ["second", o],
                ss: ["second", s],
                YYYY: ["year", "\\d{4}"],
                S: [
                  "millisecond",
                  "\\d",
                  function (e) {
                    return 100 * +e;
                  },
                ],
                SS: [
                  "millisecond",
                  s,
                  function (e) {
                    return 10 * +e;
                  },
                ],
                SSS: ["millisecond", "\\d{3}"],
                d: C,
                dd: C,
                ddd: S,
                dddd: S,
                MMM: ["month", r, l("monthNamesShort")],
                MMMM: ["month", r, l("monthNames")],
                a: T,
                A: T,
                ZZ: E,
                Z: E,
              },
              x = {
                default: "ddd MMM DD YYYY HH:mm:ss",
                shortDate: "M/D/YY",
                mediumDate: "MMM D, YYYY",
                longDate: "MMMM D, YYYY",
                fullDate: "dddd, MMMM D, YYYY",
                isoDate: "YYYY-MM-DD",
                isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
                shortTime: "HH:mm",
                mediumTime: "HH:mm:ss",
                longTime: "HH:mm:ss.SSS",
              },
              A = function (e) {
                return h(x, e);
              },
              O = function (e, t, n) {
                if (
                  (void 0 === t && (t = x.default),
                  void 0 === n && (n = {}),
                  "number" == typeof e && (e = new Date(e)),
                  "[object Date]" !== Object.prototype.toString.call(e) ||
                    isNaN(e.getTime()))
                )
                  throw new Error("Invalid Date pass to format");
                var o = [];
                t = (t = x[t] || t).replace(a, function (e, t) {
                  return o.push(t), "@@@";
                });
                var s = h(h({}, f), n);
                return (t = t.replace(i, function (t) {
                  return b[t](e, s);
                })).replace(/@@@/g, function () {
                  return o.shift();
                });
              };
            function I(e, t, n) {
              if ((void 0 === n && (n = {}), "string" != typeof t))
                throw new Error("Invalid format in fecha parse");
              if (((t = x[t] || t), e.length > 1e3)) return null;
              var o = {
                  year: new Date().getFullYear(),
                  month: 0,
                  day: 1,
                  hour: 0,
                  minute: 0,
                  second: 0,
                  millisecond: 0,
                  isPm: null,
                  timezoneOffset: null,
                },
                s = [],
                r = [],
                c = t.replace(a, function (e, t) {
                  return r.push(v(t)), "@@@";
                }),
                l = {},
                u = {};
              (c = v(c).replace(i, function (e) {
                var t = w[e],
                  n = t[0],
                  i = t[1],
                  o = t[3];
                if (l[n])
                  throw new Error(
                    "Invalid format. " + n + " specified twice in format"
                  );
                return (l[n] = !0), o && (u[o] = !0), s.push(t), "(" + i + ")";
              })),
                Object.keys(u).forEach(function (e) {
                  if (!l[e])
                    throw new Error(
                      "Invalid format. " +
                        e +
                        " is required in specified format"
                    );
                }),
                (c = c.replace(/@@@/g, function () {
                  return r.shift();
                }));
              var d = e.match(new RegExp(c, "i"));
              if (!d) return null;
              for (var p = h(h({}, f), n), g = 1; g < d.length; g++) {
                var m = s[g - 1],
                  _ = m[0],
                  b = m[2],
                  y = b ? b(d[g], p) : +d[g];
                if (null == y) return null;
                o[_] = y;
              }
              1 === o.isPm && null != o.hour && 12 != +o.hour
                ? (o.hour = +o.hour + 12)
                : 0 === o.isPm && 12 == +o.hour && (o.hour = 0);
              for (
                var C = new Date(
                    o.year,
                    o.month,
                    o.day,
                    o.hour,
                    o.minute,
                    o.second,
                    o.millisecond
                  ),
                  S = [
                    ["month", "getMonth"],
                    ["day", "getDate"],
                    ["hour", "getHours"],
                    ["minute", "getMinutes"],
                    ["second", "getSeconds"],
                  ],
                  T = ((g = 0), S.length);
                g < T;
                g++
              )
                if (l[S[g][0]] && o[S[g][0]] !== C[S[g][1]]()) return null;
              return null == o.timezoneOffset
                ? C
                : new Date(
                    Date.UTC(
                      o.year,
                      o.month,
                      o.day,
                      o.hour,
                      o.minute - o.timezoneOffset,
                      o.second,
                      o.millisecond
                    )
                  );
            }
            var M = {
              format: O,
              parse: I,
              defaultI18n: g,
              setGlobalDateI18n: m,
              setGlobalDateMasks: A,
            };
            t.default = M;
          },
          9297: function (e, t, n) {
            "use strict";
            n.r(t),
              n.d(t, {
                default: function () {
                  return f;
                },
              });
            var i = function (e) {
                var t = this.constructor;
                return this.then(
                  function (n) {
                    return t.resolve(e()).then(function () {
                      return n;
                    });
                  },
                  function (n) {
                    return t.resolve(e()).then(function () {
                      return t.reject(n);
                    });
                  }
                );
              },
              o = function (e) {
                return new this(function (t, n) {
                  if (!e || void 0 === e.length)
                    return n(
                      new TypeError(
                        typeof e +
                          " " +
                          e +
                          " is not iterable(cannot read property Symbol(Symbol.iterator))"
                      )
                    );
                  var i = Array.prototype.slice.call(e);
                  if (0 === i.length) return t([]);
                  var o = i.length;
                  function s(e, n) {
                    if (n && ("object" == typeof n || "function" == typeof n)) {
                      var r = n.then;
                      if ("function" == typeof r)
                        return void r.call(
                          n,
                          function (t) {
                            s(e, t);
                          },
                          function (n) {
                            (i[e] = { status: "rejected", reason: n }),
                              0 == --o && t(i);
                          }
                        );
                    }
                    (i[e] = { status: "fulfilled", value: n }),
                      0 == --o && t(i);
                  }
                  for (var r = 0; r < i.length; r++) s(r, i[r]);
                });
              },
              s = setTimeout;
            function r(e) {
              return Boolean(e && void 0 !== e.length);
            }
            function a() {}
            function c(e) {
              if (!(this instanceof c))
                throw new TypeError("Promises must be constructed via new");
              if ("function" != typeof e) throw new TypeError("not a function");
              (this._state = 0),
                (this._handled = !1),
                (this._value = void 0),
                (this._deferreds = []),
                g(e, this);
            }
            function l(e, t) {
              for (; 3 === e._state; ) e = e._value;
              0 !== e._state
                ? ((e._handled = !0),
                  c._immediateFn(function () {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null !== n) {
                      var i;
                      try {
                        i = n(e._value);
                      } catch (e) {
                        return void u(t.promise, e);
                      }
                      h(t.promise, i);
                    } else (1 === e._state ? h : u)(t.promise, e._value);
                  }))
                : e._deferreds.push(t);
            }
            function h(e, t) {
              try {
                if (t === e)
                  throw new TypeError(
                    "A promise cannot be resolved with itself."
                  );
                if (t && ("object" == typeof t || "function" == typeof t)) {
                  var n = t.then;
                  if (t instanceof c)
                    return (e._state = 3), (e._value = t), void d(e);
                  if ("function" == typeof n)
                    return void g(
                      ((i = n),
                      (o = t),
                      function () {
                        i.apply(o, arguments);
                      }),
                      e
                    );
                }
                (e._state = 1), (e._value = t), d(e);
              } catch (t) {
                u(e, t);
              }
              var i, o;
            }
            function u(e, t) {
              (e._state = 2), (e._value = t), d(e);
            }
            function d(e) {
              2 === e._state &&
                0 === e._deferreds.length &&
                c._immediateFn(function () {
                  e._handled || c._unhandledRejectionFn(e._value);
                });
              for (var t = 0, n = e._deferreds.length; t < n; t++)
                l(e, e._deferreds[t]);
              e._deferreds = null;
            }
            function p(e, t, n) {
              (this.onFulfilled = "function" == typeof e ? e : null),
                (this.onRejected = "function" == typeof t ? t : null),
                (this.promise = n);
            }
            function g(e, t) {
              var n = !1;
              try {
                e(
                  function (e) {
                    n || ((n = !0), h(t, e));
                  },
                  function (e) {
                    n || ((n = !0), u(t, e));
                  }
                );
              } catch (e) {
                if (n) return;
                (n = !0), u(t, e);
              }
            }
            (c.prototype.catch = function (e) {
              return this.then(null, e);
            }),
              (c.prototype.then = function (e, t) {
                var n = new this.constructor(a);
                return l(this, new p(e, t, n)), n;
              }),
              (c.prototype.finally = i),
              (c.all = function (e) {
                return new c(function (t, n) {
                  if (!r(e))
                    return n(new TypeError("Promise.all accepts an array"));
                  var i = Array.prototype.slice.call(e);
                  if (0 === i.length) return t([]);
                  var o = i.length;
                  function s(e, r) {
                    try {
                      if (
                        r &&
                        ("object" == typeof r || "function" == typeof r)
                      ) {
                        var a = r.then;
                        if ("function" == typeof a)
                          return void a.call(
                            r,
                            function (t) {
                              s(e, t);
                            },
                            n
                          );
                      }
                      (i[e] = r), 0 == --o && t(i);
                    } catch (e) {
                      n(e);
                    }
                  }
                  for (var a = 0; a < i.length; a++) s(a, i[a]);
                });
              }),
              (c.allSettled = o),
              (c.resolve = function (e) {
                return e && "object" == typeof e && e.constructor === c
                  ? e
                  : new c(function (t) {
                      t(e);
                    });
              }),
              (c.reject = function (e) {
                return new c(function (t, n) {
                  n(e);
                });
              }),
              (c.race = function (e) {
                return new c(function (t, n) {
                  if (!r(e))
                    return n(new TypeError("Promise.race accepts an array"));
                  for (var i = 0, o = e.length; i < o; i++)
                    c.resolve(e[i]).then(t, n);
                });
              }),
              (c._immediateFn =
                ("function" == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  s(e, 0);
                }),
              (c._unhandledRejectionFn = function (e) {
                "undefined" != typeof console &&
                  console &&
                  console.warn("Possible Unhandled Promise Rejection:", e);
              });
            var f = c;
          },
          9012: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.stopAudioInput =
                t.getAudioInputUserMedia =
                t.getAudioInput =
                t.isAudioInputAvailable =
                t.AudioInputSourceType =
                  void 0);
            var i = n(9297);
            !(function (e) {
              (e[(e.DEFAULT = 0)] = "DEFAULT"),
                (e[(e.VOICE_RECOGNITION = 6)] = "VOICE_RECOGNITION");
            })(t.AudioInputSourceType || (t.AudioInputSourceType = {})),
              (t.isAudioInputAvailable = function () {
                return void 0 !== t.getAudioInput();
              }),
              (t.getAudioInput = function () {
                return window.audioinput;
              }),
              (t.getAudioInputUserMedia = function (e) {
                return new i.default(function (e, n) {
                  t.getAudioInput().checkMicrophonePermission(function (i) {
                    i
                      ? e()
                      : t
                          .getAudioInput()
                          .getMicrophonePermission(function (t, i) {
                            t ? e() : n(i);
                          });
                  });
                }).then(function () {
                  return t.getAudioInput().start(e), t.getAudioInput();
                });
              }),
              (t.stopAudioInput = function () {
                return new i.default(function (e) {
                  t.getAudioInput().isCapturing()
                    ? (t.getAudioInput().stop(e),
                      t.getAudioInput().disconnect())
                    : e();
                });
              });
          },
          7642: function (e, t) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ChatEvent = void 0),
              (function (e) {
                (e.CHAT_LANG = "chatlanguagechange"),
                  (e.CLICK_AUDIO_RESPONSE_TOGGLE = "click:audiotoggle"),
                  (e.CLICK_ERASE = "click:erase"),
                  (e.CLICK_VOICE_TOGGLE = "click:voicetoggle"),
                  (e.DESTROY = "destroy"),
                  (e.MESSAGE = "message"),
                  (e.MESSAGE_RECEIVED = "message:received"),
                  (e.MESSAGE_SENT = "message:sent"),
                  (e.NETWORK = "networkstatuschange"),
                  (e.READY = "ready"),
                  (e.TYPING = "typing"),
                  (e.UNREAD = "unreadCount"),
                  (e.WIDGET_CLOSED = "widget:closed"),
                  (e.WIDGET_OPENED = "widget:opened");
              })(n || (n = {})),
              (t.ChatEvent = n);
          },
          983: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.CONNECTION_STATE = void 0),
              (function (e) {
                (e[(e.CONNECTING = 0)] = "CONNECTING"),
                  (e[(e.OPEN = 1)] = "OPEN"),
                  (e[(e.CLOSING = 2)] = "CLOSING"),
                  (e[(e.CLOSED = 3)] = "CLOSED");
              })(t.CONNECTION_STATE || (t.CONNECTION_STATE = {}));
          },
          1210: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Constants =
                t.ATTACHMENT_MAX_SIZE =
                t.BYTE_MULTIPLIER =
                t.SDK_NAME =
                  void 0);
            var n = (function () {
              function e() {}
              return (
                (e.GEOLOCATION_REQUEST_DENIED = 1),
                (e.CHAT_SCROLL_DELAY = 300),
                (e.WEBSOCKET_READY_STATE = [
                  "CONNECTING",
                  "OPEN",
                  "CLOSING",
                  "CLOSED",
                ]),
                (e.WEBSOCKET_CLOSE_EVENT = {
                  CODE: { ABNORMAL_CLOSURE: 1006 },
                }),
                (e.ATTACHMENT_HEADER = {
                  AUTHORIZATION: "Authorization",
                  FILE_AUTH_TYPE: "x-oda-meta-file-authType",
                  FILE_IS_PROTECTED: "x-oda-meta-file-isProtected",
                  FILE_SIZE: "x-oda-meta-file-size",
                }),
                (e.ATTACHMENT_STATUS = {
                  ERROR_FILE_SIZE_LIMIT_EXCEEDED: 413,
                  ERROR_FILE_SIZE_ZERO_BYTE: 465,
                  ERROR_UNSUPPORTED_FILE_TYPE: 415,
                  OK: 200,
                }),
                (e.MAX_SUGGESTIONS_COUNT = 5),
                (e.MIN_SUGGESTIONS_COUNT = 1),
                (e.SUGGESTIONS_COUNT_THRESHOLD = 30),
                (e.SDK_NAME = "oda-chat"),
                (e.SDK_VERSION = "21.04.1"),
                (e.TIME = { MIN_FIFTY: 3e6 }),
                e
              );
            })();
            (t.Constants = n),
              (t.SDK_NAME = "oda-chat"),
              (t.BYTE_MULTIPLIER = 1024),
              (t.ATTACHMENT_MAX_SIZE =
                25 * t.BYTE_MULTIPLIER * t.BYTE_MULTIPLIER);
          },
          5076: function (e, t, n) {
            "use strict";
            var i =
              (this && this.__spreadArrays) ||
              function () {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                  e += arguments[t].length;
                var i = Array(e),
                  o = 0;
                for (t = 0; t < n; t++)
                  for (
                    var s = arguments[t], r = 0, a = s.length;
                    r < a;
                    r++, o++
                  )
                    i[o] = s[r];
                return i;
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createIconButton =
                t.getCssClassWithPrefix =
                t.addCSSClass =
                t.createImage =
                t.createElementFromString =
                t.createButton =
                t.createElement =
                  void 0);
            var o = n(1210),
              s = n(8216);
            (t.createElement = function (e, t) {
              var n = document.createElement(e);
              return r(n, t), n;
            }),
              (t.createButton = function (e) {
                var n = "button",
                  i = t.createElement(n, e);
                return (i.type = n), i;
              }),
              (t.createElementFromString = function (e, n) {
                var o = document.createElement("div");
                o.innerHTML = e.trim();
                var s = o.firstElementChild;
                return (
                  n &&
                    t.addCSSClass.apply(
                      void 0,
                      i(
                        [o.firstElementChild],
                        n.map(function (e) {
                          return t.getCssClassWithPrefix(e);
                        })
                      )
                    ),
                  s
                );
              }),
              (t.createImage = function (e, n, i) {
                var o = t.createElement("img", n);
                return (
                  e && (o.src = e),
                  i && (o.alt = i),
                  o.setAttribute("draggable", "false"),
                  o
                );
              });
            var r = function (e, n) {
              return (
                e.dir ? (e.dir = "auto") : e.setAttribute("dir", "auto"),
                n &&
                  t.addCSSClass.apply(
                    void 0,
                    i(
                      [e],
                      n.map(function (e) {
                        return t.getCssClassWithPrefix(e);
                      })
                    )
                  ),
                e
              );
            };
            (t.addCSSClass = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              e.classList
                ? t.forEach(function (t) {
                    return e.classList.add(t);
                  })
                : e.setAttribute(
                    "class",
                    t.reduce(function (e, t) {
                      return e + " " + t;
                    }, "")
                  );
            }),
              (t.getCssClassWithPrefix = function (e) {
                return o.SDK_NAME + "-" + e;
              }),
              (t.createIconButton = function (e) {
                var n,
                  i = e.css,
                  o = e.icon,
                  r = e.title,
                  a = e.iconCss,
                  c = t.createButton(i);
                return (
                  (c.innerHTML = ""),
                  (c.title = r),
                  s.isSVG(o)
                    ? ((n = t.createElementFromString(o, a)).setAttribute(
                        "role",
                        "img"
                      ),
                      n.setAttribute("aria-label", r))
                    : (n = t.createImage(o, a, r)),
                  c.appendChild(n),
                  c
                );
              });
          },
          8971: function (e, t) {
            "use strict";
            var n =
              (this && this.__spreadArrays) ||
              function () {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                  e += arguments[t].length;
                var i = Array(e),
                  o = 0;
                for (t = 0; t < n; t++)
                  for (
                    var s = arguments[t], r = 0, a = s.length;
                    r < a;
                    r++, o++
                  )
                    i[o] = s[r];
                return i;
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.generateEventDispatcher = void 0),
              (t.generateEventDispatcher = function () {
                var e = {};
                return {
                  bind: function (t, n) {
                    t &&
                      n &&
                      n.constructor === Function &&
                      (e.hasOwnProperty(t) ? e[t].push(n) : (e[t] = [n]));
                  },
                  trigger: function (t) {
                    for (var i = [], o = 1; o < arguments.length; o++)
                      i[o - 1] = arguments[o];
                    e.hasOwnProperty(t) &&
                      ((i = null != i ? i : []),
                      e[t].forEach(function (e) {
                        e.call.apply(e, n([null], i));
                      }));
                  },
                  unbind: function (t, n) {
                    t
                      ? n
                        ? (e[t] = e[t].filter(function (e) {
                            return e !== n;
                          }))
                        : e.hasOwnProperty(t) && e[t].splice(0, e[t].length)
                      : (e = {});
                  },
                };
              });
          },
          2574: function () {
            Number.isInteger =
              Number.isInteger ||
              function (e) {
                return (
                  "number" == typeof e && isFinite(e) && Math.floor(e) === e
                );
              };
          },
          9164: function () {
            [
              Element.prototype,
              Document.prototype,
              DocumentFragment.prototype,
            ].forEach(function (e) {
              e.hasOwnProperty("prepend") ||
                Object.defineProperty(e, "prepend", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: function () {
                    var e = Array.prototype.slice.call(arguments),
                      t = document.createDocumentFragment();
                    e.forEach(function (e) {
                      var n = e instanceof Node;
                      t.appendChild(n ? e : document.createTextNode(String(e)));
                    }),
                      this.insertBefore(t, this.firstChild);
                  },
                });
            });
          },
          4514: function () {
            [
              Element.prototype,
              CharacterData.prototype,
              DocumentType.prototype,
            ].forEach(function (e) {
              e.hasOwnProperty("remove") ||
                Object.defineProperty(e, "remove", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: function () {
                    this.parentNode.removeChild(this);
                  },
                });
            });
          },
          7926: function (e, t) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Response = void 0),
              (function (e) {
                e[(e.OK = 200)] = "OK";
              })(n || (n = {}));
            var i = (function () {
              function e() {}
              return (e.STATUS = n), e;
            })();
            t.Response = i;
          },
          3609: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.SVG_SPRITE = void 0),
              (t.SVG_SPRITE = {
                icon_bot_attach:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17a1 1 0 00.993-.883L13 16V6a3 3 0 00-5.995-.176L7 6v10l.005.217a5 5 0 009.99 0L17 16V4h2v12a7 7 0 01-13.996.24L5 16V6a5 5 0 019.995-.217L15 6v10a3 3 0 01-5.995.176L9 16V8h2v8a1 1 0 001 1z"/></svg>',
                icon_bot_button:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 48 48"><path d="M0 24a24 24 0 1 0 48 0 24 24 0 1 0-48 0" fill="#025e7e" opacity=".8"/><path d="M32.25 31.084h-7.532L19.2 37.021a1.061 1.061 0 0 1-1.251-1.316l.031-4.622h-1.23C12.47 31.084 9 28.372 9 23.97A7.862 7.862 0 0 1 16.75 16h15.5A7.862 7.862 0 0 1 40 23.97c0 4.402-3.47 7.114-7.75 7.114zM16.531 20.938a2.594 2.594 0 1 0 2.594 2.594 2.594 2.594 0 0 0-2.594-2.594zm7.969-.031a2.594 2.594 0 1 0 2.594 2.593 2.594 2.594 0 0 0-2.594-2.594zm7.969.031a2.594 2.594 0 1 0 2.594 2.594 2.594 2.594 0 0 0-2.594-2.594z" fill="#fff" fill-rule="evenodd"/></svg>',
                icon_bot_clear:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 17.001v2H1v-2zm6-6v2H1v-2zM17 5v2.001H1v-2z"/></svg>',
                icon_bot_close:
                  '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>',
                icon_bot_collapse:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 13h16v-2H4z"/></svg>',
                icon_bot_keyboard:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z"/><path d="M20 7v10H4V7h16m0-2H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-3 0h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2z"/></svg>',
                icon_bot_logo:
                  '<svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24"><path class="svg-icon16" d="M18 16.99h-6.267L8 21.125a1.119 1.119 0 0 1-1.021-1.36V16.99H6a5.849 5.849 0 0 1-6-5.87A6.061 6.061 0 0 1 6 5h12a6.061 6.061 0 0 1 6 6.12 5.849 5.849 0 0 1-6 5.87zM6 9a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm6 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm6 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2z"/></svg>',
                icon_bot_message_bubble:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18"><path d="M18 12.99h-6.267L8 17.125a1.119 1.119 0 0 1-1.021-1.36V12.99H6a5.849 5.849 0 0 1-6-5.87A6.061 6.061 0 0 1 6 1h12a6.061 6.061 0 0 1 6 6.12 5.849 5.849 0 0 1-6 5.87z" fill="#d1d1d1"/><path d="M4 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0" style="animation-name:dotScaleleft;animation-duration:1s;animation-iteration-count:infinite;transform-origin:20%;animation-delay:0s" fill="#fff"/><path d="M10 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0" style="animation-name:dotScalecenter;animation-duration:1s;animation-iteration-count:infinite;transform-origin:43%;animation-delay:.2s" fill="#fff"/><path d="M16 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0" style="animation-name:dotScaleright;animation-duration:1s;animation-iteration-count:infinite;transform-origin:70%;animation-delay:.4s" fill="#fff"/><style>@keyframes dotScaleleft{0%,to{transform:scale(1)}50%{transform:scale(1.25)}}@keyframes dotScalecenter{0%,to{transform:scale(1)}50%{transform:scale(1.25)}}@keyframes dotScaleright{0%,to{transform:scale(1)}50%{transform:scale(1.25)}}</style></svg>',
                icon_bot_mic:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 23v-2h4v-2.062C7.06 18.444 4 15.073 4 11h2c0 3.309 2.691 6 6 6s6-2.691 6-6h2c0 4.072-3.059 7.444-7 7.938V21h4v2h-6zm5-22c2.206 0 4 1.794 4 4v6c0 2.206-1.794 4-4 4s-4-1.794-4-4V5c0-2.206 1.794-4 4-4zm0 2c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2s2-.897 2-2V5c0-1.103-.897-2-2-2z"/></svg>',
                icon_bot_next:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 17.65L9.739 19 16 12 9.739 5 8 6.35 13.054 12z"/></svg>',
                icon_bot_previous:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 17.65L14.261 19 8 12l6.261-7L16 6.35 10.946 12z"/></svg>',
                icon_bot_send:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.355 1.065l.043.02a.993.993 0 01.294.195l.015.015a1.02 1.02 0 01.204.292l.009.022a.97.97 0 01.03.704l-.006.02-7 20c-.3.854-1.49.903-1.858.075l-3.844-8.648-8.648-3.844c-.828-.368-.78-1.559.076-1.858l20-7 .019-.007a.997.997 0 01.041-.012l-.06.02a.87.87 0 01.145-.04l.017-.003a.967.967 0 01.523.05zm-2.747 4.743l-7.416 7.416 2.697 6.067zm-1.415-1.415L4.711 9.113l6.066 2.696z"/></svg>',
                icon_bot_share_audio:
                  '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><path d="M22 2v20H2V2zm-2 2H4v16h16zm-3 1.674V14a2 2 0 11-2.15-1.995L15 12V8.326l-5 1.428V16a2 2 0 11-2.15-1.995L8 14V8.246z"/></svg>',
                icon_bot_share_media:
                  '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><path d="M22 2v16h-4v4H2V6h4V2zm-9.036 12.378L6.93 20H16v-2.585zM16 8H4v11.999l9.036-8.377L16 14.585zm4-4H8v2h10v10h2zM7 9a2 2 0 110 4 2 2 0 010-4z"/></svg>',
                icon_bot_share_file:
                  '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><path d="M13.414 2L17 5.586V7h.414L21 10.586V22H7v-4H3V2zM17 9.414V18H9v2h10v-8.586zm-2-3L12.586 4H5v12h10zM13 11v2H7v-2zm-2-4v2H7V7z"/></svg>',
                icon_bot_share_location:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>',
                icon_bot_speech_mute:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.707.293l22 22-1.414 1.414L12 13.414V21l-6.35-5.114H1V7.954h4.65l.5-.39L.293 1.707zM19.67 4.446c2.119 1.967 3.302 4.613 3.33 7.452a10.363 10.363 0 01-1.392 5.295l-1.476-1.476c.58-1.18.88-2.472.868-3.8-.023-2.29-.981-4.43-2.697-6.025zM7.583 8.996l-1.232.955H3v3.964h3.351L10 16.875v-5.461zm8.051-1.68C17.15 8.547 17.991 10.21 18 11.999c.003.482-.055.956-.17 1.416l-1.86-1.86c-.133-1.017-.691-1.964-1.604-2.706zM12 3v4.586L9.424 5.01z"/></svg>',
                icon_bot_speech_unmute:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 3v18l-6.35-5.114H2V7.954h4.65zm5.67 1.446c2.119 1.967 3.302 4.613 3.33 7.452.029 2.904-1.15 5.658-3.316 7.75l-1.396-1.421c1.772-1.71 2.735-3.95 2.712-6.31-.023-2.29-.981-4.43-2.697-6.025zM11 7.125L7.351 9.95H4v3.964h3.351L11 16.875zm4.634.19C17.15 8.548 17.991 10.212 18 12c.01 1.806-.828 3.5-2.358 4.771l-1.284-1.519c1.065-.885 1.65-2.037 1.642-3.242-.006-1.187-.587-2.309-1.634-3.16z"/></svg>',
              });
          },
          8216: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.setEmbeddedWebViewLinksHandler =
                t.sanitizeText =
                t.resetRegex =
                t.matchStringIgnoreCase =
                t.getValues =
                t.formatDate =
                t.utils =
                t.isAnyVoiceAvailable =
                t.isSVG =
                t.isMobile =
                t.isInteger =
                t.isFunction =
                  void 0);
            var i,
              o = n(5431),
              s = n(5049),
              r = n(9432),
              a = function (e) {
                var t = !1;
                return e.text && (t = !0), t;
              },
              c = function (e) {
                var t,
                  n,
                  i = !1;
                return (
                  (null === (t = e.location) || void 0 === t
                    ? void 0
                    : t.latitude) &&
                    (null === (n = e.location) || void 0 === n
                      ? void 0
                      : n.longitude) &&
                    (i = !0),
                  i
                );
              },
              l = function (e) {
                var t = !1;
                return e.postback && (t = !0), t;
              },
              h = function (e) {
                var t,
                  n,
                  i = !1;
                return (
                  (null === (t = e.attachment) || void 0 === t
                    ? void 0
                    : t.type) &&
                    (null === (n = e.attachment) || void 0 === n
                      ? void 0
                      : n.url) &&
                    (i = !0),
                  i
                );
              },
              u = {
                createCssClass: function (e, t) {
                  var n = "";
                  return (
                    (null == t ? void 0 : t.length) > 0 &&
                      ((n = e + " {\n"),
                      t.forEach(function (e) {
                        n += "  " + e + ";\n";
                      }),
                      (n += "}\n\n")),
                    n
                  );
                },
                deepFreeze: function (e) {
                  for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                    var i = e[n[t]];
                    i && "object" == typeof i && u.deepFreeze(i);
                  }
                  return Object.freeze(e);
                },
                isDivVisible: function (e, t) {
                  var n = e.scrollTop,
                    i = n + e.offsetHeight,
                    o = t.offsetTop,
                    s = o + t.offsetHeight;
                  return (
                    (i > o && i < s) ||
                    (n < s && i > s) ||
                    (n < o && i > s) ||
                    (n > o && i < s)
                  );
                },
                isSvg: function (e) {
                  var t = e.match(/<svg\s/gi);
                  return t && t.length > 0;
                },
                isValidSkillMessage: function (e) {
                  var t = !1;
                  if (null == e ? void 0 : e.messagePayload)
                    switch (e.messagePayload.type) {
                      case o.PAYLOAD_TYPE.TEXT:
                        t = a(e.messagePayload);
                        break;
                      case o.PAYLOAD_TYPE.LOCATION:
                        t = c(e.messagePayload);
                        break;
                      case o.PAYLOAD_TYPE.ATTACHMENT:
                        t = h(e.messagePayload);
                        break;
                      case o.PAYLOAD_TYPE.POSTBACK:
                        t = l(e.messagePayload);
                        break;
                      case o.PAYLOAD_TYPE.CARD:
                        t = (function (e) {
                          var t = !1;
                          return (
                            e.layout &&
                              e.cards.length &&
                              ((t = !0),
                              e.cards.forEach(function (e) {
                                e.title || (t = !1);
                              })),
                            t
                          );
                        })(e.messagePayload);
                        break;
                      case o.PAYLOAD_TYPE.RAW:
                        t = (function (e) {
                          var t = !1;
                          return e.payload && (t = !0), t;
                        })(e.messagePayload);
                    }
                  return t;
                },
                isValidUserMessage: function (e) {
                  var t = !1;
                  if (e.messagePayload)
                    switch (e.messagePayload.type) {
                      case o.PAYLOAD_TYPE.TEXT:
                        t = a(e.messagePayload);
                        break;
                      case o.PAYLOAD_TYPE.LOCATION:
                        t = c(e.messagePayload);
                        break;
                      case o.PAYLOAD_TYPE.ATTACHMENT:
                        t = h(e.messagePayload);
                        break;
                      case o.PAYLOAD_TYPE.POSTBACK:
                        t = l(e.messagePayload);
                    }
                  return t;
                },
                isSameDay: function (e, t) {
                  return (
                    (e = new Date(e)),
                    (t = new Date(t)),
                    e.getDate() === t.getDate() &&
                      e.getMonth() === t.getMonth() &&
                      e.getFullYear() === t.getFullYear()
                  );
                },
                secToMillisec: function (e) {
                  return 1e3 * e;
                },
                setEmbeddedLinksHandler: function (e, t) {
                  for (var n = 0; n < e.childElementCount; n++) {
                    var i = e.children[n];
                    if ("a" === i.tagName.toLowerCase()) {
                      var o = i;
                      (o.rel = "noreferrer noopener"),
                        t.onclick && (o.onclick = t.onclick.bind(o)),
                        t.target && (o.target = t.target);
                    }
                    i.hasChildNodes() && u.setEmbeddedLinksHandler(i, t);
                  }
                },
                setLinksOpenInNewWindow: function (e) {
                  for (
                    var t = function (t) {
                        var n = e.children[t];
                        "a" === n.tagName.toLowerCase() &&
                          (n.onclick = function (e) {
                            return (
                              window.open(
                                n.href,
                                "",
                                "height=450px,width=800px,menubar,toolbar,personalbar,status,resizable,noopener,noreferrer"
                              ),
                              e.preventDefault(),
                              e.stopPropagation(),
                              !1
                            );
                          }),
                          n.hasChildNodes() && u.setLinksOpenInNewWindow(n);
                      },
                      n = 0;
                    n < e.childElementCount;
                    n++
                  )
                    t(n);
                },
                setObjectReadOnly: function (e) {
                  for (
                    var t = 0, n = Object.getOwnPropertyNames(e);
                    t < n.length;
                    t++
                  ) {
                    var i = n[t];
                    Object.defineProperty(e, i, {
                      configurable: !0,
                      writable: !1,
                    });
                  }
                  return e;
                },
                setSearchParams: function (e, t) {
                  for (
                    var n = [], i = 0, o = Object.keys(t);
                    i < o.length;
                    i++
                  ) {
                    var s = o[i];
                    n.push(s + "=" + t[s]);
                  }
                  return n.length && (e = e + "?" + n.join("&")), e;
                },
                syncTTSLocaleIfUnavailable:
                  ((i = !1),
                  function (e) {
                    var t;
                    void 0 === e &&
                      (e = {
                        hasRecognition: !1,
                        hasSynthesis: !1,
                        isReset: !1,
                        recognitionLocale: "",
                        synthesisLocales: [],
                      }),
                      e.isReset && (i = !1);
                    var n = e.synthesisLocales;
                    return (
                      Array.isArray(n) || (n = []),
                      e.hasRecognition &&
                        e.hasSynthesis &&
                        (null === (t = e.recognitionLocale) || void 0 === t
                          ? void 0
                          : t.length) &&
                        ((!i && e.synthesisLocales.length) ||
                          ((i = !0), (n = [{ lang: e.recognitionLocale }]))),
                      n
                    );
                  }),
              };
            (t.utils = u),
              (t.formatDate = function (e, t) {
                var n = t.pattern,
                  i = t.fallback,
                  o = t.locale,
                  s = e.toLocaleString(o, i);
                if ("object" == typeof n && null !== n)
                  return e.toLocaleString(o, n);
                if ("string" == typeof n)
                  try {
                    return r.format(e, n);
                  } catch (e) {}
                return s;
              }),
              (t.getValues = function (e) {
                var t = [];
                if ("object" == typeof e && null !== e)
                  for (var n = 0, i = Object.keys(e); n < i.length; n++) {
                    var o = i[n];
                    t.push(e[o]);
                  }
                return t;
              }),
              (t.isFunction = function (e) {
                return "function" == typeof e;
              }),
              (t.isInteger = function (e) {
                return (
                  "number" == typeof e && isFinite(e) && Math.floor(e) === e
                );
              }),
              (t.isMobile = function () {
                return (
                  /Android/i.test(navigator.userAgent) ||
                  /iPhone|iPad/i.test(navigator.userAgent)
                );
              }),
              (t.isSVG = function (e) {
                var t = e.match(/<svg\s/gi);
                return t && t.length > 0;
              }),
              (t.matchStringIgnoreCase = function (e, t) {
                return (e = e.toLowerCase()) === (t = t.toLowerCase());
              });
            var d = function (e) {
              return (e.lastIndex = 0), e;
            };
            t.resetRegex = d;
            var p = [
              {
                match: /<([a-z])/gi,
                replace: function (e, t) {
                  return "&#x3c;" + t;
                },
              },
              {
                match: /<\/([a-z])/gi,
                replace: function (e, t) {
                  return "&#x3c;&#47;" + t;
                },
              },
            ];
            t.sanitizeText = function (e) {
              return (
                p.forEach(function (t) {
                  e = e.replace(d(t.match), t.replace);
                }),
                e
              );
            };
            var g = function (e, t) {
              for (var n, i = 0; i < e.childElementCount; i++) {
                var o = e.children[i];
                if ("a" === o.tagName.toLowerCase()) {
                  var r = o;
                  (r.rel = "noreferrer noopener"),
                    (null === (n = r.target) || void 0 === n
                      ? void 0
                      : n.toLowerCase()) === s.default.NAME &&
                      r.addEventListener("click", t.onclick.bind(r));
                }
                o.hasChildNodes() && g(o, t);
              }
            };
            (t.setEmbeddedWebViewLinksHandler = g),
              (t.isAnyVoiceAvailable = function (e, t) {
                if (!t) return Promise.resolve(!1);
                if ((Array.isArray(t) || (t = [t]), !t.length))
                  return Promise.resolve(!1);
                var n = t.map(function (e) {
                  var t;
                  return null === (t = e.lang) || void 0 === t
                    ? void 0
                    : t.toLowerCase();
                });
                return e.getVoices().then(function (e) {
                  for (
                    var t = !1,
                      i = e.map(function (e) {
                        return e.lang.toLowerCase();
                      }),
                      o = 0,
                      s = n;
                    o < s.length;
                    o++
                  ) {
                    var r = s[o];
                    if (i.indexOf(r) >= 0) {
                      t = !0;
                      break;
                    }
                  }
                  return t;
                });
              });
          },
          3289: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.setAudioContext =
                t.polyfillUserMedia =
                t.isUserMediaAvailable =
                t.isStorageAvailable =
                t.isLocationServiceAvailable =
                t.getLocales =
                t.getCurrentLocation =
                t.getBrowserLocale =
                  void 0);
            var i = n(9297);
            (t.getBrowserLocale = function () {
              return navigator.language.toLowerCase();
            }),
              (t.getCurrentLocation = function () {
                return t.isLocationServiceAvailable()
                  ? new i.default(function (e, t) {
                      navigator.geolocation.getCurrentPosition(
                        function (t) {
                          e(t);
                        },
                        function (e) {
                          t(e);
                        },
                        { timeout: 5e3 }
                      );
                    })
                  : i.default.reject(
                      new Error("Location service is not available.")
                    );
              }),
              (t.getLocales = function () {
                var e;
                return (
                  (null === (e = navigator.languages) || void 0 === e
                    ? void 0
                    : e.map(function (e) {
                        return e.toLowerCase();
                      })) || []
                );
              }),
              (t.isLocationServiceAvailable = function () {
                return navigator && navigator.geolocation;
              }),
              (t.isStorageAvailable = function (e) {
                return o(e);
              }),
              (t.isUserMediaAvailable = function () {
                return !!(
                  (navigator.mediaDevices &&
                    navigator.mediaDevices.getUserMedia) ||
                  navigator.webkitGetUserMedia ||
                  navigator.mozGetUserMedia
                );
              }),
              (t.polyfillUserMedia = function () {
                t.isUserMediaAvailable() &&
                  (void 0 === navigator.mediaDevices &&
                    (navigator.mediaDevices = {}),
                  void 0 === navigator.mediaDevices.getUserMedia &&
                    (navigator.mediaDevices.getUserMedia = function (e) {
                      var t =
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia;
                      if (!t) {
                        var n = new Error(
                          "getUserMedia is not implemented in this browser"
                        );
                        return (n.name = "TypeError"), i.default.reject(n);
                      }
                      return new i.default(function (n, i) {
                        t.call(navigator, e, n, i);
                      });
                    }));
              }),
              (t.setAudioContext = function () {
                window.AudioContext =
                  window.AudioContext || window.webkitAudioContext;
              });
            var o = function (e) {
              var t;
              try {
                t = window[e];
                var n = "__storage_test__";
                return t.setItem(n, n), t.removeItem(n), !0;
              } catch (e) {
                return (
                  e instanceof DOMException &&
                  (22 === e.code ||
                    1014 === e.code ||
                    "QuotaExceededError" === e.name ||
                    "NS_ERROR_DOM_QUOTA_REACHED" === e.name) &&
                  t &&
                  0 !== t.length
                );
              }
            };
          },
          2362: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                }),
              s =
                (this && this.__assign) ||
                function () {
                  return (s =
                    Object.assign ||
                    function (e) {
                      for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var o in (t = arguments[n]))
                          Object.prototype.hasOwnProperty.call(t, o) &&
                            (e[o] = t[o]);
                      return e;
                    }).apply(this, arguments);
                };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.WidgetComponent = void 0);
            var r = n(9297),
              a = n(5610),
              c = n(9171),
              l = n(983),
              h = n(1210),
              u = n(3609),
              d = n(8216),
              p = n(911),
              g = n(5431),
              f = n(6521),
              m = n(2158),
              v = n(3846),
              _ = n(9549),
              b = n(7825),
              y = n(248),
              C = n(2777),
              S = n(7605),
              T = n(1082),
              E = n(1809),
              w = n(6127),
              x = n(6204),
              A = n(5795),
              O = n(9994),
              I = n(7642),
              M = n(8971),
              P = n(3289),
              L = n(5049),
              k = n(7120),
              N = n(5170),
              R = n(9401),
              D = n(368),
              B = (function (e) {
                function t(t, n, i, o, s, r, a, l, h, u, d, p) {
                  var g,
                    f,
                    v,
                    _ = e.call(this, t) || this;
                  return (
                    (_.settings = n),
                    (_.openChat = i),
                    (_.closeChat = o),
                    (_.receiveMessage = s),
                    (_.sentMessage = r),
                    (_.getUnreadMessagesCount = a),
                    (_.onConnectionStatusChange = l),
                    (_.dataService = h),
                    (_._speechRecognitionService = u),
                    (_.authTokenService = d),
                    (_._eventDispatcher = p),
                    (_.NO_SPEECH_STATUS_TIMEOUT = 4e3),
                    (_.FINAL_RESULT_DISPLAY_TIMEOUT = 200),
                    (_._logger = new S.Logger("ChatComponent")),
                    (_._previousBotMessage = []),
                    (_._currentSessionBotMessages = []),
                    (_._consecutiveBotMessagesCount = 0),
                    (_._attachmentDivs = []),
                    (_._unreadMessages = []),
                    (_.isInitMessageSent = !1),
                    (_.isExpanded = !1),
                    (_.isFirstConnectionOpen = !1),
                    (_.isFirstMessage = !1),
                    (_.timestampHeaderFormat = {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: !0,
                    }),
                    (_.currentLocale = n.locale),
                    (_._localeText = n.i18n[n.locale]),
                    (_.isOpen = n.openChatOnLoad),
                    (_.isExpanded =
                      "init" ===
                        (null === (g = n.initMessageOptions) || void 0 === g
                          ? void 0
                          : g.sendAt) ||
                      n.openChatOnLoad ||
                      n.embedded),
                    (_.isInitMessageSent = n.enableHeadless),
                    (_._isFirstConnect = !0),
                    (_.isNarrationEnabled = n.enableBotAudioResponse),
                    (_.observer = M.generateEventDispatcher()),
                    _.dataService.on(
                      m.ChatServerEvent.STATUS,
                      _.onChatServerStatusChange.bind(_)
                    ),
                    (_.element = _._createElement()),
                    _.isNarrationEnabled &&
                      (_._setupSpeechSynthesis(),
                      (_.isNarrationMute = _.settings.initBotAudioMuted)),
                    (
                      null === (f = _.settings.multiLangChat) || void 0 === f
                        ? void 0
                        : f.supportedLangs
                    )
                      ? _.initMultiLangChat()
                      : (_.settings.multiLangChat = null),
                    "function" != typeof l &&
                      (_.onConnectionStatusChange = function () {}),
                    _.settings.showTypingIndicator &&
                      (_.typingIndicator = new x.TypingIndicatorComponent(
                        c.MESSAGE_SIDE.LEFT,
                        n
                      )),
                    "relative" === _.settings.timestampMode
                      ? (_.relativeTimestamp = new k.RelativeTimestampComponent(
                          t,
                          n
                        ))
                      : ((_.setTimestampHeaderIfNewDate = function () {}),
                        (_.updateRelativeTimestamp = function () {})),
                    "action" !==
                      (null === (v = _.settings.focusOnNewMessage) ||
                      void 0 === v
                        ? void 0
                        : v.toLowerCase()) &&
                      (_.focusMessageFirstAction = function () {}),
                    _
                  );
                }
                return (
                  o(t, e),
                  (t.prototype.render = function (e) {}),
                  (t.prototype.embedInElement = function (e) {
                    var t = this,
                      n = document.getElementById(e);
                    if (!n) throw new Error("Can not embed chat widget.");
                    var i = function () {
                      (t.chatWidgetDiv.style.width = n.clientWidth + "px"),
                        (t.chatWidgetDiv.style.height = n.clientHeight + "px"),
                        (t.chatWidgetDiv.style.position = "inherit"),
                        (t.chatWidgetDiv.style.boxShadow = "none");
                    };
                    i(),
                      this.appendToElement(n),
                      (this.resizeEventListener = function () {
                        i();
                      }),
                      window.addEventListener(
                        "resize",
                        this.resizeEventListener
                      );
                  }),
                  (t.prototype.showChat = function () {
                    var e = this;
                    this.isOpen ||
                      (this.utils.removeCSSClass(
                        this.element,
                        this.utils.getCssClassWithPrefix("collapsed")
                      ),
                      this.utils.addCSSClass(
                        this.element,
                        this.utils.getCssClassWithPrefix("expanded")
                      ),
                      this.utils.removeCSSClass(
                        this.chatWidgetDiv,
                        this.utils.getCssClassWithPrefix("none")
                      ),
                      this.settings.embedded ||
                        setTimeout(function () {
                          e.utils.addCSSClass(
                            e._botButton,
                            e.utils.getCssClassWithPrefix("none")
                          );
                        }, 250),
                      (this.isOpen = !0),
                      (this.isExpanded = !0),
                      this._sendInitMessages(),
                      this._updateUnreadMessages(),
                      this._scrollToBottom(),
                      this.footer.focusTextArea(),
                      this.observer.trigger(I.ChatEvent.WIDGET_OPENED));
                  }),
                  (t.prototype.onClose = function () {
                    var e,
                      t = this;
                    if (this.isOpen) {
                      if (
                        (this._textToSpeechCancel(),
                        this.utils.removeCSSClass(
                          this.element,
                          this.utils.getCssClassWithPrefix("expanded")
                        ),
                        this.utils.addCSSClass(
                          this.element,
                          this.utils.getCssClassWithPrefix("collapsed")
                        ),
                        !this.settings.embedded)
                      ) {
                        this.utils.removeCSSClass(
                          this._botButton,
                          this.utils.getCssClassWithPrefix("none")
                        ),
                          setTimeout(function () {
                            t.utils.addCSSClass(
                              t.chatWidgetDiv,
                              t.utils.getCssClassWithPrefix("none")
                            ),
                              t._botButton.focus();
                          }, 250);
                        var n = this.getUnreadMessagesCount();
                        n > 0
                          ? this._botButton.appendChild(
                              this._botNotificationBadge
                            )
                          : (null === (e = this._botNotificationBadge) ||
                            void 0 === e
                              ? void 0
                              : e.parentElement) &&
                            this._botNotificationBadge.remove(),
                          (this._botNotificationBadge.innerText = "" + n);
                      }
                      this.isOpen = !1;
                    }
                  }),
                  (t.prototype.updateNotificationBadge = function (e) {
                    var t;
                    this.isOpen ||
                      (e > 0
                        ? this._botButton.appendChild(
                            this._botNotificationBadge
                          )
                        : ((null === (t = this._botNotificationBadge) ||
                          void 0 === t
                            ? void 0
                            : t.parentElement) &&
                            this._botNotificationBadge.remove(),
                          (this._unreadMessages = [])));
                  }),
                  (t.prototype.onToggleNarration = function (e) {
                    this._toggleNarration(e),
                      this._eventDispatcher.trigger(
                        I.ChatEvent.CLICK_AUDIO_RESPONSE_TOGGLE,
                        e
                      );
                  }),
                  (t.prototype.remove = function () {
                    e.prototype.remove.call(this),
                      (this.dataService.onMessage = function () {}),
                      this.settings.embedded &&
                        window.removeEventListener(
                          "resize",
                          this.resizeEventListener
                        );
                  }),
                  (t.prototype.clearConversationHistory = function () {
                    var e,
                      t = !1;
                    for (
                      this.dataService.clearMessages(this.settings.userId),
                        (null === (e = this.typingIndicator) || void 0 === e
                          ? void 0
                          : e.isVisible()) &&
                          ((t = !0), this.hideTypingIndicator());
                      this._conversationContainer.firstChild;

                    )
                      this._conversationContainer.removeChild(
                        this._conversationContainer.lastChild
                      );
                    t && this.showTypingIndicator(),
                      this.renderMessagesAndScroll([], {}),
                      (this.isFirstMessage = !0),
                      this._textToSpeechCancel(),
                      this._eventDispatcher.trigger(I.ChatEvent.CLICK_ERASE);
                  }),
                  (t.prototype.setUserInputMessage = function (e) {
                    this.footer.setUserInputText(e, !0);
                  }),
                  (t.prototype.setUserInputPlaceholder = function (e) {
                    this.footer.setUserInputPlaceholder(e);
                  }),
                  (t.prototype.getWebViewComponent = function () {
                    return this.webViewComponent;
                  }),
                  (t.prototype.triggerPostback = function (e, t) {
                    var n,
                      i = this,
                      o = e.match(/[a-zA-Z]+/g)[0],
                      s = +e.match(/\d+/g)[0];
                    if ("card" === o) {
                      var r = C.MessageComponentFactory.fromMessage(
                        this.utils,
                        this.settings,
                        t,
                        this._markAsRead.bind(this)
                      );
                      n =
                        r.cards.length >= s
                          ? r.cards[s - 1].handleOnActionTrigger(e)
                          : null;
                    } else
                      (r = C.MessageComponentFactory.fromMessage(
                        this.utils,
                        this.settings,
                        t,
                        this._markAsRead.bind(this)
                      )),
                        (n = r.handleOnActionTrigger(e));
                    n &&
                      n.getEventPayload().then(function (e) {
                        var t = a.createUserMessage(
                          {
                            postback: e,
                            text: n.label,
                            type: g.PAYLOAD_TYPE.POSTBACK,
                          },
                          i.settings.userId,
                          new Date(),
                          !0
                        );
                        i._sendMessageToServer(t);
                      });
                  }),
                  (t.prototype.onMessageActionClicked = function (e) {
                    var t = this;
                    switch ((this.onSpeechToggle(!1), e.type)) {
                      case p.ACTION_TYPE.POSTBACK:
                        this._scrollToBottom(),
                          "none" !== this.settings.disablePastActions &&
                            e.messageComponent.disableActions(),
                          e.getPayload().then(function (n) {
                            var i = a.createUserMessage(
                              {
                                postback: n,
                                text: e.label,
                                type: g.PAYLOAD_TYPE.POSTBACK,
                              },
                              t.settings.userId,
                              new Date(),
                              !0
                            );
                            e.label === t._localeText.retryMessage
                              ? t.dataService.retryMessage(i)
                              : t._sendMessageToServer(i);
                          });
                        break;
                      case p.ACTION_TYPE.LOCATION:
                        this.shareUserLocation();
                        break;
                      case p.ACTION_TYPE.SHARE:
                        if (navigator.share)
                          e.getPayload().then(function (n) {
                            navigator
                              .share({ text: n, title: e.label })
                              .then(function () {
                                "none" !== t.settings.disablePastActions &&
                                  e.messageComponent.disableActions();
                              });
                          });
                        else {
                          var n = new w.StatusComponent(
                            this._localeText.shareFailureMessage,
                            this.utils,
                            this.settings.errorIcon
                          ).render();
                          this._appendMessageToConversation(n),
                            setTimeout(function () {
                              n && n.remove();
                            }, this.NO_SPEECH_STATUS_TIMEOUT),
                            this._scrollToBottom();
                        }
                    }
                  }),
                  (t.prototype.sendMessage = function (e, t) {
                    var n,
                      i = !1;
                    if (!e)
                      return (
                        this._logger.error("No message passed to send to bot"),
                        i
                      );
                    if (
                      ("string" == typeof e
                        ? ((n =
                            !this.settings.enableSpeechAutoSend &&
                            this.speechFinalResult &&
                            e
                              .toLowerCase()
                              .indexOf(this.speechFinalResult.text) >= 0
                              ? a.createUserTextMessage(
                                  e,
                                  this.speechFinalResult.speechId
                                )
                              : a.createUserTextMessage(e)),
                          (this.speechFinalResult = null))
                        : (n = e),
                      n)
                    ) {
                      var o = a.createUserMessage(
                        n,
                        this.settings.userId,
                        new Date(),
                        !0
                      );
                      i = this._sendMessageToServer(o, t);
                    } else
                      this._logger.error(
                        "Can not parse payload from message",
                        e
                      );
                    return i;
                  }),
                  (t.prototype.uploadFile = function (e, t) {
                    var n = this;
                    this._textToSpeechCancel();
                    var i = new r.default(function (i, o) {
                      var s;
                      if (n.settings.enableHeadless)
                        n.dataService
                          .uploadAttachment(e)
                          .then(function (e) {
                            i(e);
                          })
                          .catch(function (e) {
                            o(e);
                          });
                      else {
                        n._scrollToBottom();
                        var r =
                            "" +
                            (null === (s = e.name) || void 0 === s
                              ? void 0
                              : s.replace(
                                  /[\s:\'"\\/\[\]~,\.;^`()@#%\*+=$&!{}?<>|]/g,
                                  ""
                                )) +
                            Math.floor(1e4 + 9e4 * Math.random()) +
                            (Date.now() % 1e5),
                          a = n.utils.createElement("div");
                        (a.id = r),
                          n._attachmentDivs.push({
                            divId: r,
                            fileName: e.name,
                          }),
                          n.setTimestampHeaderIfNewDate({
                            date: new Date(),
                            isRead: !0,
                          }),
                          n._appendMessageToConversation(a),
                          n.updateRelativeTimestamp(N.SENDER_TYPE.USER);
                        var l = t ? t.maxSize : h.ATTACHMENT_MAX_SIZE;
                        if (e.size > l) {
                          n._scrollToBottom();
                          var u = l / (h.BYTE_MULTIPLIER * h.BYTE_MULTIPLIER),
                            p = u.toString();
                          d.isInteger(u) || (p = u.toFixed(3));
                          var g =
                            e.name +
                            " - " +
                            n._localeText.uploadFileSizeLimitExceeded.replace(
                              "{0}",
                              p
                            );
                          n.displayUploadError(g, r), o(new Error(g));
                        } else if (0 === e.size)
                          n._scrollToBottom(),
                            (g =
                              e.name +
                              " - " +
                              n._localeText.uploadFileSizeZeroByte),
                            n.displayUploadError(g, r),
                            o(new Error(g));
                        else {
                          var f = new T.LoadingMessageComponent(
                            e.name,
                            c.MESSAGE_SIDE.RIGHT,
                            n.utils,
                            n.settings
                          );
                          a.appendChild(f.render()),
                            n._scrollToBottom(),
                            n.dataService
                              .uploadAttachment(
                                e,
                                n._handleUploadError.bind(n),
                                r,
                                !0
                              )
                              .then(function (e) {
                                i(e);
                              })
                              .catch(function (e) {
                                o(e);
                              });
                        }
                      }
                    });
                    return (
                      i.catch(function (e) {
                        n._logger.error(e);
                      }),
                      i
                    );
                  }),
                  (t.prototype.cancelSpeechSynthesis = function () {
                    this._textToSpeechCancel();
                  }),
                  (t.prototype.getSuggestions = function (e) {
                    var t = this;
                    if (
                      !this.settings.enableAutocompleteClientCache ||
                      (this.settings.enableAutocompleteClientCache &&
                        !this.footer.getSuggestionsValid())
                    ) {
                      var n = h.Constants.SUGGESTIONS_COUNT_THRESHOLD,
                        i = a.createUserMessage(
                          {
                            query: e,
                            threshold: n,
                            type: g.PAYLOAD_TYPE.SUGGEST,
                          },
                          this.settings.userId,
                          new Date(),
                          !0
                        );
                      return new r.default(function (e, n) {
                        (t._suggestionsResolve = e),
                          t.dataService.getSuggestions(i),
                          setTimeout(function () {
                            n(
                              "Request timeout. Taking too long to get suggestions."
                            );
                          }, 1e4);
                      });
                    }
                    var o = this._filterSuggestions(
                      this.footer.getSuggestions(),
                      e
                    );
                    return (
                      null != this.footer && this.footer.displaySuggestions(o),
                      r.default.resolve(o)
                    );
                  }),
                  (t.prototype.setSkillResponseVoices = function (e) {
                    var t;
                    (null == e ? void 0 : e.length) &&
                      (null === (t = this._speechSynthesisService) ||
                        void 0 === t ||
                        t.setVoice(e));
                  }),
                  (t.prototype.setVoiceRecognitionService = function (e) {
                    this.footer.disableVoiceModeButton(!e, { src: "lang" });
                  }),
                  (t.prototype.enableSpeechSynthesisService = function (e) {
                    this.header.disableTTSButton(!e),
                      (this.isNarrationEnabled = e);
                  }),
                  (t.prototype.onShareLocation = function () {
                    this.shareUserLocation();
                  }),
                  (t.prototype.setPrimaryChatLanguage = function (e) {
                    var t;
                    null === (t = this.multiLangChat) ||
                      void 0 === t ||
                      t.setSelectedLanguage(e);
                  }),
                  (t.prototype.onLanguageUpdate = function (e) {
                    this.currentLocale = e;
                    var t = this.settings.i18n,
                      n = s(s({}, t[this.settings.locale]), t[e]);
                    (this._botButton.title = n.chatTitle),
                      this.header.setLocale(n),
                      this.footer.setLocale(n),
                      this.webViewComponent.setProps({
                        accessibilityTitle: n.webViewAccessibilityTitle,
                        closeButtonLabel: n.webViewClose,
                        errorInfoDismissLabel: n.webViewErrorInfoDismiss,
                        errorInfoText: n.webViewErrorInfoText,
                      }),
                      this.relativeTimestamp &&
                        this.relativeTimestamp.setLocale(n),
                      (this._localeText = n);
                  }),
                  (t.prototype.on = function (e, t) {
                    this.observer.bind(e, t);
                  }),
                  (t.prototype.off = function (e, t) {
                    this.observer.unbind(e, t);
                  }),
                  (t.prototype.showTypingIndicator = function () {
                    this.settings.showTypingIndicator &&
                      (this.typingIndicator.append(this._conversationContainer),
                      this._scrollToBottom());
                  }),
                  (t.prototype.hideTypingIndicator = function () {
                    this.settings.showTypingIndicator &&
                      this.typingIndicator.remove();
                  }),
                  (t.prototype.onChatServerStatusChange = function (e) {
                    if (
                      (this._isFirstConnect &&
                        this._loadPreviousConversations(),
                      Number.isInteger(e) && e !== l.CONNECTION_STATE.OPEN)
                    ) {
                      this.footer.isDisabled() ||
                        (this.footer.disable(),
                        this._logger.debug(
                          "WebSocket not open, send message button disabled"
                        )),
                        this._disableBotMessages(
                          this._currentSessionBotMessages
                        ),
                        this.hideTypingIndicator();
                      for (
                        var t = 0, n = this._attachmentDivs;
                        t < n.length;
                        t++
                      ) {
                        var i = n[t];
                        this._handleUploadError(i.fileName, 500, i.divId);
                      }
                    } else
                      (this.isFirstConnectionOpen = !0),
                        this._sendInitMessages(),
                        this.footer.isDisabled() &&
                          (this.footer.disable(!1),
                          this._logger.debug(
                            "Connection established, send message button enabled"
                          )),
                        this._enableBotMessages();
                    this.onConnectionStatusChange(e);
                  }),
                  (t.prototype.initMultiLangChat = function () {
                    this.multiLangChat = new R.MultiLangChatComponent(
                      this.settings.multiLangChat,
                      {
                        chatService: this.dataService,
                        chatWidget: this,
                        eventDispatcher: this._eventDispatcher,
                        settings: this.settings,
                        speechSynthesisService: this._speechSynthesisService,
                        storageService: new D.StorageService(
                          this.settings.storageType
                        ),
                        synthesisVoices: this.settings.skillVoices,
                        util: this.utils,
                        voiceRecognitionService: this._speechRecognitionService,
                      }
                    );
                    var e = this.multiLangChat.render();
                    e && this.header.addLanguageSelect(e);
                  }),
                  (t.prototype.shareUserLocation = function () {
                    var e = this;
                    if (
                      (this._disableBotMessages(this._previousBotMessage),
                      P.isLocationServiceAvailable())
                    ) {
                      var t = new T.LoadingMessageComponent(
                        this._localeText.requestLocation,
                        c.MESSAGE_SIDE.LEFT,
                        this.utils,
                        this.settings
                      );
                      this._appendMessageToConversation(t.render()),
                        this._scrollToBottom(),
                        P.getCurrentLocation().then(
                          function (n) {
                            var i = n.coords,
                              o = a.createUserMessage(
                                {
                                  location: {
                                    latitude: i.latitude,
                                    longitude: i.longitude,
                                    title: void 0,
                                  },
                                  type: g.PAYLOAD_TYPE.LOCATION,
                                },
                                e.settings.userId,
                                new Date(),
                                !0
                              );
                            t.remove(), e._sendMessageToServer(o);
                          },
                          function (n) {
                            var i;
                            switch (n.code) {
                              case n.PERMISSION_DENIED:
                                i =
                                  e._localeText.requestLocationDeniedPermission;
                                break;
                              case n.POSITION_UNAVAILABLE:
                                i =
                                  e._localeText
                                    .requestLocationDeniedUnavailable;
                                break;
                              case n.TIMEOUT:
                                i = e._localeText.requestLocationDeniedTimeout;
                                break;
                              default:
                                i =
                                  e._localeText.requestLocationDeniedPermission;
                            }
                            var o = new E.MessageStringComponent(
                              i,
                              c.MESSAGE_SIDE.LEFT,
                              e.utils,
                              e.settings
                            );
                            t.remove(),
                              e._appendMessageToConversation(
                                o.render(e.settings.errorIcon)
                              );
                          }
                        );
                    } else {
                      var n = new E.MessageStringComponent(
                        this._localeText.requestLocationDeniedUnavailable,
                        c.MESSAGE_SIDE.LEFT,
                        this.utils,
                        this.settings
                      );
                      this._appendMessageToConversation(
                        n.render(this.settings.errorIcon)
                      );
                    }
                  }),
                  (t.prototype._filterSuggestions = function (e, t) {
                    for (var n = [], i = 0, o = e; i < o.length; i++) {
                      var s = o[i];
                      -1 !== s.search(new RegExp(t, "i")) && n.push(s);
                    }
                    return n;
                  }),
                  (t.prototype._handleUploadError = function (e, t, n) {
                    var i;
                    switch (t) {
                      case h.Constants.ATTACHMENT_STATUS
                        .ERROR_FILE_SIZE_LIMIT_EXCEEDED:
                        i =
                          e +
                          " - " +
                          this._localeText.uploadFileSizeLimitExceeded.replace(
                            "{0}",
                            "25"
                          );
                        break;
                      case h.Constants.ATTACHMENT_STATUS
                        .ERROR_FILE_SIZE_ZERO_BYTE:
                        i = e + " - " + this._localeText.uploadFileSizeZeroByte;
                        break;
                      case h.Constants.ATTACHMENT_STATUS
                        .ERROR_UNSUPPORTED_FILE_TYPE:
                        i =
                          e +
                          " - " +
                          this._localeText.uploadUnsupportedFileType;
                        break;
                      default:
                        i = e + " - " + this._localeText.uploadFailed;
                    }
                    this.displayUploadError(i, n);
                  }),
                  (t.prototype.displayUploadError = function (e, t) {
                    var n = new E.MessageStringComponent(
                        e,
                        c.MESSAGE_SIDE.LEFT,
                        this.utils,
                        this.settings
                      ),
                      i = document.getElementById(t);
                    i.firstElementChild && i.removeChild(i.firstElementChild),
                      (this._attachmentDivs = this._attachmentDivs.filter(
                        function (e) {
                          return e.divId !== t;
                        }
                      )),
                      i.appendChild(n.render(this.settings.errorIcon));
                  }),
                  (t.prototype._makeButtonDraggable = function (e, t) {
                    var n,
                      i,
                      o = this,
                      s = !1,
                      r = !1,
                      a = 0,
                      c = 0,
                      l = 0,
                      h = 0,
                      u = 0,
                      d = 0,
                      p = function (e) {
                        var t, n;
                        e.target.classList.forEach(function (i) {
                          (i.indexOf("button-icon") || i.indexOf("button")) &&
                            ("touchstart" === e.type
                              ? ((t = e.touches[0].clientX),
                                (n = e.touches[0].clientY))
                              : ((t = e.clientX), (n = e.clientY)),
                            (a = t - l),
                            (c = n - h),
                            (u = t),
                            (d = n),
                            (s = !0));
                        });
                      },
                      g = function (p) {
                        var g, f;
                        if (s) {
                          "touchmove" === p.type
                            ? ((g = p.touches[0].clientX),
                              (f = p.touches[0].clientY))
                            : ((g = p.clientX), (f = p.clientY));
                          var m = g - u,
                            v = f - d;
                          (l = n = g - a),
                            (h = i = f - c),
                            (m >= 5 || v >= 5 || m <= -5 || v <= -5) &&
                              (e.classList.add(
                                o.utils.getCssClassWithPrefix("drag")
                              ),
                              (t.style.transform =
                                "translate3d(" + n + "px, " + i + "px, 0)"),
                              (t.onclick = null),
                              (r = !0));
                        }
                      },
                      f = function () {
                        r &&
                          (setTimeout(function () {
                            t.onclick = o.openChat.bind(o);
                          }, 10),
                          t.focus(),
                          (r = !1)),
                          (s = !1);
                      };
                    t.addEventListener("touchstart", p),
                      document.addEventListener("touchmove", g),
                      t.addEventListener("touchend", f),
                      t.addEventListener("mousedown", p),
                      document.addEventListener("mousemove", g),
                      t.addEventListener("mouseup", f);
                  }),
                  (t.prototype._createElement = function () {
                    var e,
                      n,
                      i,
                      o,
                      s,
                      r,
                      a = this,
                      c = this.utils.createElement(
                        "div",
                        this.settings.embedded ? [] : ["wrapper"]
                      );
                    c.addEventListener(
                      "click",
                      function () {
                        "speechSynthesis" in window &&
                          (window.speechSynthesis.cancel(),
                          window.speechSynthesis.resume(),
                          window.speechSynthesis.speak(
                            new window.SpeechSynthesisUtterance("")
                          ));
                      }.bind(this),
                      { once: !0 }
                    ),
                      (this.chatWidgetDiv = this.utils.createElement("div", [
                        "widget",
                      ])),
                      this.chatWidgetDiv.setAttribute("role", "region"),
                      this.chatWidgetDiv.setAttribute(
                        "aria-labelledby",
                        "oda-chat-title"
                      ),
                      (this.header = new _.ChatHeaderComponent(
                        this.utils,
                        this.settings,
                        this.closeChat.bind(this),
                        this.clearConversationHistory.bind(this),
                        this.onToggleNarration.bind(this),
                        this.dataService
                      )),
                      this.chatWidgetDiv.appendChild(this.header.element),
                      this.settings.embedTopStickyId &&
                        this.addCustomBanner(
                          this.settings.embedTopStickyId,
                          this.chatWidgetDiv,
                          ["embed-sticky-top"]
                        ),
                      (this.chatPane = new b.WidgetMainComponent(
                        this.utils,
                        this.settings
                      )),
                      (this.chatPane.element.id = t.CHAT_MESSAGES_PARENT_ID),
                      this.chatPane.element.addEventListener(
                        "scroll",
                        this._updateUnreadMessages.bind(this)
                      ),
                      (this._scrollContent = this.utils.createElement("div", [
                        "conversation-pane",
                      ])),
                      this.settings.embedTopScrollId &&
                        this.addCustomBanner(
                          this.settings.embedTopScrollId,
                          this._scrollContent,
                          ["embed-scroll-top"]
                        );
                    var l = this.utils.createElement(
                      "div",
                      "bottom" === this.settings.conversationBeginPosition
                        ? ["empty-conversation-div"]
                        : void 0
                    );
                    this._scrollContent.appendChild(l),
                      (this._conversationContainer = this.utils.createElement(
                        "div",
                        ["conversation-container"]
                      )),
                      this._conversationContainer.setAttribute("role", "log"),
                      this._conversationContainer.setAttribute(
                        "aria-live",
                        "polite"
                      ),
                      this._conversationContainer.setAttribute(
                        "aria-atomic",
                        "false"
                      ),
                      this._scrollContent.appendChild(
                        this._conversationContainer
                      ),
                      this.chatPane.element.appendChild(this._scrollContent),
                      this.settings.embedBottomScrollId &&
                        this.addCustomBanner(
                          this.settings.embedBottomScrollId,
                          this.chatPane.element,
                          ["embed-scroll-bottom"]
                        ),
                      this.chatWidgetDiv.appendChild(this.chatPane.element),
                      this.settings.embedBottomStickyId &&
                        this.addCustomBanner(
                          this.settings.embedBottomStickyId,
                          this.chatWidgetDiv,
                          ["embed-sticky-bottom"]
                        ),
                      (this.footer = new v.ChatFooterComponent(
                        this.utils,
                        this.sendMessage.bind(this),
                        this.uploadFile.bind(this),
                        this.settings,
                        this.getSuggestions.bind(this),
                        this.onSpeechToggle.bind(this),
                        this.shareUserLocation.bind(this),
                        this._eventDispatcher
                      )),
                      this.chatWidgetDiv.appendChild(this.footer.element),
                      (i = this.settings.webViewConfig).accessibilityTitle ||
                        (i.accessibilityTitle =
                          this._localeText.webViewAccessibilityTitle),
                      (o = this.settings.webViewConfig).closeButtonLabel ||
                        (o.closeButtonLabel = this._localeText.webViewClose),
                      (s = this.settings.webViewConfig).errorInfoDismissLabel ||
                        (s.errorInfoDismissLabel =
                          this._localeText.webViewErrorInfoDismiss),
                      (r = this.settings.webViewConfig).errorInfoText ||
                        (r.errorInfoText =
                          this._localeText.webViewErrorInfoText),
                      (this.webViewComponent = new L.default(
                        this.utils,
                        this.settings.webViewConfig
                      )),
                      this.chatWidgetDiv.appendChild(
                        this.webViewComponent.render()
                      );
                    var h = this;
                    if (
                      ((this.webviewLinkHandler = {
                        target: L.default.NAME,
                        onclick: function () {
                          h.webViewComponent.open(this.href);
                        },
                      }),
                      (null === (e = this.settings.linkHandler) || void 0 === e
                        ? void 0
                        : e.target) === L.default.NAME &&
                        (this.settings.linkHandler = this.webviewLinkHandler),
                      c.appendChild(this.chatWidgetDiv),
                      this.settings.embedded)
                    )
                      (this.isOpen = !0),
                        this.utils.addCSSClass(
                          c,
                          this.utils.getCssClassWithPrefix("open")
                        );
                    else {
                      (this._botButton = this.utils.createButton(["button"])),
                        (this._botButton.title = this._localeText.chatTitle),
                        (null === (n = this.settings.colors) || void 0 === n
                          ? void 0
                          : n.branding) &&
                          (u.SVG_SPRITE.icon_bot_button =
                            u.SVG_SPRITE.icon_bot_button.replace(
                              "#025e7e",
                              this.settings.colors.branding
                            ));
                      var p =
                        this.settings.botButtonIcon ||
                        u.SVG_SPRITE.icon_bot_button;
                      if (d.utils.isSvg(p)) {
                        var g = new Blob([p], { type: "image/svg+xml" });
                        p = URL.createObjectURL(g);
                      }
                      var f = this.utils.createImage(
                        p,
                        ["button-icon"],
                        this._localeText.chatTitle
                      );
                      this._botButton.appendChild(f),
                        (this._botButton.onclick = this.openChat.bind(this)),
                        (this._botNotificationBadge = this.utils.createElement(
                          "div",
                          ["notification-badge"]
                        )),
                        c.appendChild(this._botButton),
                        this.settings.openChatOnLoad
                          ? (this.utils.addCSSClass(
                              c,
                              this.utils.getCssClassWithPrefix("expanded")
                            ),
                            this.utils.addCSSClass(
                              this._botButton,
                              this.utils.getCssClassWithPrefix("none")
                            ),
                            setTimeout(function () {
                              return a.footer.focusTextArea();
                            }))
                          : (this.utils.addCSSClass(
                              c,
                              this.utils.getCssClassWithPrefix("collapsed")
                            ),
                            this.utils.addCSSClass(
                              this.chatWidgetDiv,
                              this.utils.getCssClassWithPrefix("none")
                            )),
                        this.settings.enableDraggableButton &&
                          this._makeButtonDraggable(c, this._botButton);
                    }
                    return c;
                  }),
                  (t.prototype._appendMessageToConversation = function (e) {
                    var t;
                    this._conversationContainer.appendChild(e),
                      (null === (t = this.typingIndicator) || void 0 === t
                        ? void 0
                        : t.isVisible()) &&
                        (this.hideTypingIndicator(),
                        this.showTypingIndicator());
                  }),
                  (t.prototype._scrollToBottom = function () {
                    var e = document.getElementById(t.CHAT_MESSAGES_PARENT_ID);
                    setTimeout(function () {
                      e && (e.scrollTop = e.scrollHeight);
                    }, h.Constants.CHAT_SCROLL_DELAY);
                  }),
                  (t.prototype.renderMessagesAndScroll = function (e, t) {
                    var n = this,
                      i = t.attachmentDivId;
                    return (null == e ? void 0 : e.length)
                      ? new r.default(function (t) {
                          n.authTokenService &&
                          n.settings.enableAttachmentSecurity
                            ? n.authTokenService
                                .getToken()
                                .then(function (o) {
                                  n._renderMessages(e, {
                                    attachmentDivId: i,
                                    authToken: o.token,
                                  }),
                                    t(),
                                    n._scrollToBottom();
                                })
                                .catch(function () {
                                  n._renderMessages(e, { attachmentDivId: i }),
                                    t(),
                                    n._scrollToBottom();
                                })
                            : (n._renderMessages(e, { attachmentDivId: i }),
                              t(),
                              n._scrollToBottom());
                        })
                      : (this._renderMessages(e, {}), r.default.resolve());
                  }),
                  (t.prototype._renderMessages = function (e, t) {
                    var n = this,
                      i = t.attachmentDivId,
                      o = t.authToken,
                      s = {
                        locale: this.currentLocale,
                        webviewLinkHandler: this.webviewLinkHandler,
                      };
                    (null == o ? void 0 : o.length) &&
                      ((s.authToken = o), (s.uri = this.settings.URI));
                    for (var r = 0, a = e; r < a.length; r++) {
                      var c = a[r],
                        l = C.MessageComponentFactory.fromMessage(
                          this.utils,
                          this.settings,
                          c,
                          this._markAsRead.bind(this),
                          s
                        );
                      if (
                        ((l.onActionClick =
                          this.onMessageActionClicked.bind(this)),
                        "none" !== this.settings.disablePastActions &&
                          (c.from
                            ? this._previousBotMessage.push(l)
                            : (this._disableBotMessages(
                                this._previousBotMessage
                              ),
                              (this._previousBotMessage = []))),
                        c.from
                          ? (this._currentSessionBotMessages.push(l),
                            this._consecutiveBotMessagesCount++)
                          : (this._consecutiveBotMessagesCount = 0),
                        i)
                      ) {
                        var h = document.getElementById(i);
                        h.removeChild(h.firstElementChild),
                          h.appendChild(l.render()),
                          (this._attachmentDivs = this._attachmentDivs.filter(
                            function (e) {
                              return e.divId !== i;
                            }
                          ));
                      } else {
                        this.setTimestampHeaderIfNewDate(c);
                        var u = l.render();
                        this._appendMessageToConversation(u),
                          this.updateRelativeTimestamp(
                            c.from ? N.SENDER_TYPE.BOT : N.SENDER_TYPE.USER
                          );
                        var d = { component: l, element: u };
                        this._markMessageAsReadIfVisible(d),
                          this._unreadMessages.push(d),
                          c.from && this.focusMessageFirstAction(l);
                      }
                    }
                    this.settings.embedded ||
                      this.isOpen ||
                      setTimeout(function () {
                        var e = n.getUnreadMessagesCount();
                        e > 0 &&
                          ((n._botNotificationBadge.innerText = "" + e),
                          n._botButton.appendChild(n._botNotificationBadge));
                      });
                  }),
                  (t.prototype.setTimestampHeaderIfNewDate = function (e) {
                    (!this.isFirstMessage &&
                      d.utils.isSameDay(this.currTimestampHeader, e.date)) ||
                      ((this.currTimestampHeader = new Date(e.date)),
                      this._appendMessageToConversation(
                        this.createTimestampHeader(this.currTimestampHeader)
                      ),
                      (this.isFirstMessage = !1));
                  }),
                  (t.prototype.createTimestampHeader = function (e) {
                    var t = this.utils.createElement("div", [
                      "timestamp-header",
                    ]);
                    return (
                      (t.textContent = d.formatDate(e, {
                        pattern: this.settings.timestampFormat,
                        fallback: this.timestampHeaderFormat,
                        locale: this.currentLocale || this.settings.locale,
                      })),
                      t
                    );
                  }),
                  (t.prototype.updateRelativeTimestamp = function (e) {
                    this.relativeTimestampElement ||
                      (this.relativeTimestampElement =
                        this.relativeTimestamp.render()),
                      this.relativeTimestampElement.remove(),
                      this.relativeTimestamp.refresh(e),
                      this._appendMessageToConversation(
                        this.relativeTimestampElement
                      );
                  }),
                  (t.prototype.focusMessageFirstAction = function (e) {
                    e.hasActions() &&
                      setTimeout(function () {
                        e.focusFirstAction();
                      }, 290);
                  }),
                  (t.prototype.addCustomBanner = function (e, t, n) {
                    var i = document.querySelector("#" + e);
                    if (i) {
                      var o = this.utils.createElement("div", n);
                      o.appendChild(i), t.appendChild(o);
                    } else
                      this._logger.error(
                        "Could not find element with ID '" +
                          e +
                          "'. No element embedded to the chat conversation pane."
                      );
                  }),
                  (t.prototype.onSpeechToggle = function (e) {
                    var t = this;
                    this._textToSpeechCancel(),
                      this._eventDispatcher.trigger(
                        I.ChatEvent.CLICK_VOICE_TOGGLE,
                        e
                      ),
                      this.settings.enableSpeech &&
                        (e
                          ? (this._removeNoSpeechStatusMessage(),
                            this._speechRecognitionService
                              .startRecording(
                                this.onSpeechRecognition.bind(this),
                                this.onSpeechNetworkChange.bind(this),
                                {
                                  onAnalyserFrequencies: function (e) {
                                    t.footer.updateVisualizer(Array.from(e));
                                  },
                                }
                              )
                              .then(function () {
                                t.footer.setVoiceRecording(!0),
                                  t._scrollToBottom();
                              })
                              .catch(function (e) {
                                t.footer.setVoiceRecording(!1);
                                var n = new w.StatusComponent(
                                  e.message,
                                  t.utils,
                                  t.settings.errorIcon
                                ).render();
                                t._appendMessageToConversation(n),
                                  setTimeout(function () {
                                    n.remove();
                                  }, t.NO_SPEECH_STATUS_TIMEOUT);
                              }))
                          : (this._speechRecognitionService.isRecording() &&
                              this._speechRecognitionService.stopRecording(),
                            this.footer.setVoiceRecording(!1)));
                  }),
                  (t.prototype.onSpeechRecognition = function (e) {
                    var t,
                      n,
                      i,
                      o = this;
                    if (e)
                      switch (e.event) {
                        case A.IVoiceRecognitionEvent.FINAL_RESULT:
                          (null === (t = null == e ? void 0 : e.nbest) ||
                          void 0 === t
                            ? void 0
                            : t.length) > 0
                            ? (s = e.nbest[0].utterance).length > 0
                              ? (this.footer.setUserInputText(s),
                                this.settings.enableSpeechAutoSend
                                  ? setTimeout(function () {
                                      var t = a.createUserTextMessage(
                                        o.footer.getUserInputText(),
                                        e.requestId
                                      );
                                      o.sendMessage(t),
                                        o.footer.setVoiceRecording(!1),
                                        o.footer.setUserInputText("");
                                    }, this.FINAL_RESULT_DISPLAY_TIMEOUT)
                                  : (this.speechFinalResult = {
                                      speechId: e.requestId,
                                      text: s.toLowerCase(),
                                    }))
                              : this.footer.setUserInputText("")
                            : ((null === (n = e.resultCode) || void 0 === n
                                ? void 0
                                : n.message) ===
                              A.SpeechRecognitionService.ERROR_MESSAGE
                                .TOO_MUCH_SPEECH_TIMEOUT
                                ? (this._noSpeechTimeoutStatus =
                                    new w.StatusComponent(
                                      this._localeText.errorSpeechTooMuchTimeout,
                                      this.utils,
                                      this.settings.errorIcon
                                    ).render())
                                : (this._noSpeechTimeoutStatus =
                                    new w.StatusComponent(
                                      this._localeText.noSpeechTimeout,
                                      this.utils,
                                      this.settings.errorIcon
                                    ).render()),
                              this._appendMessageToConversation(
                                this._noSpeechTimeoutStatus
                              ),
                              setTimeout(function () {
                                o._removeNoSpeechStatusMessage();
                              }, this.NO_SPEECH_STATUS_TIMEOUT));
                          break;
                        case A.IVoiceRecognitionEvent.PARTIAL_RESULT:
                          var s;
                          (null === (i = null == e ? void 0 : e.nbest) ||
                          void 0 === i
                            ? void 0
                            : i.length) > 0 &&
                            (s = e.nbest[0].utterance).length > 0 &&
                            this.footer.setUserInputText(s);
                      }
                  }),
                  (t.prototype.onSpeechNetworkChange = function (e) {
                    this.footer.setVoiceRecording(
                      e === l.CONNECTION_STATE.OPEN
                    );
                  }),
                  (t.prototype._disableBotMessages = function (e) {
                    for (var t = 0, n = e; t < n.length; t++)
                      n[t].disableActions();
                  }),
                  (t.prototype._enableBotMessages = function () {
                    var e = this._currentSessionBotMessages;
                    ("all" !== this.settings.disablePastActions &&
                      "postback" !== this.settings.disablePastActions) ||
                      e.splice(0, e.length - this._consecutiveBotMessagesCount);
                    for (var t = 0, n = e; t < n.length; t++)
                      n[t].enableActions();
                  }),
                  (t.prototype._markAsRead = function (e) {
                    this.dataService.markAsRead(e);
                  }),
                  (t.prototype._onMessageReceived = function (e, t) {
                    this._logger.debug("onMessageReceived", e),
                      this.hideTypingIndicator(),
                      this._scrollToBottom(),
                      this.renderMessagesAndScroll([e], { attachmentDivId: t }),
                      (null == e ? void 0 : e.from) &&
                        this._textToSpeechSpeak(
                          C.MessageComponentFactory.extractUtteranceText(
                            e,
                            this.settings.i18n[this.settings.locale]
                          )
                        );
                  }),
                  (t.prototype._onOriginalMessageReceived = function (e) {
                    this.receiveMessage(e);
                  }),
                  (t.prototype._onFinalMessageSent = function (e) {
                    this.sentMessage(e);
                  }),
                  (t.prototype._toggleNarration = function (e) {
                    e || this._textToSpeechCancel(),
                      (this.isNarrationMute = !e);
                  }),
                  (t.prototype._onSuggestionsReceived = function (e) {
                    var t;
                    (
                      null === (t = null == e ? void 0 : e.suggestions) ||
                      void 0 === t
                        ? void 0
                        : t.length
                    )
                      ? (this._suggestionsResolve &&
                          this._suggestionsResolve(e.suggestions),
                        null != this.footer &&
                          this.footer.displaySuggestions(e.suggestions))
                      : this._suggestionsResolve &&
                        this._suggestionsResolve([]);
                  }),
                  (t.prototype._removeNoSpeechStatusMessage = function () {
                    this._noSpeechTimeoutStatus &&
                      (this._noSpeechTimeoutStatus.remove(),
                      (this._noSpeechTimeoutStatus = void 0));
                  }),
                  (t.prototype._sendMessageToServer = function (e, t) {
                    this._scrollToBottom(), this._textToSpeechCancel();
                    var n = this.dataService.send(e, null, null, t);
                    return (
                      this.footer.focusTextArea(),
                      this.footer.getSuggestionsValid(),
                      n
                        ? this.showTypingIndicator()
                        : this.hideTypingIndicator(),
                      n
                    );
                  }),
                  (t.prototype._updateUnreadMessages = function () {
                    var e = this;
                    if (this.isOpen) {
                      var t = [];
                      this._unreadMessages.forEach(function (n) {
                        e._markMessageAsReadIfVisible(n) || t.push(n);
                      }),
                        (this._unreadMessages = t);
                    }
                  }),
                  (t.prototype._markMessageAsReadIfVisible = function (e) {
                    var t = !1;
                    return (
                      this.isOpen &&
                        d.utils.isDivVisible(
                          this.chatPane.element,
                          e.element
                        ) &&
                        (e.component.updateMarkAsRead(), (t = !0)),
                      t
                    );
                  }),
                  (t.prototype._loadPreviousConversations = function () {
                    var e = this;
                    if (
                      ((this._isFirstConnect = !1),
                      this.settings.enableLocalConversationHistory)
                    ) {
                      var t = this.dataService.loadChat();
                      (null == t ? void 0 : t.length) &&
                        this.renderMessagesAndScroll(t.slice(), {}).then(
                          function () {
                            (e._currentSessionBotMessages = []),
                              e.relativeTimestamp &&
                                (e.relativeTimestamp.setRelativeTime(
                                  new Date(t[t.length - 1].date)
                                ),
                                (e.relativeTimestampElement =
                                  e.relativeTimestamp.render()),
                                e._appendMessageToConversation(
                                  e.relativeTimestampElement
                                )),
                              e.settings.showPrevConvStatus &&
                                (e._appendMessageToConversation(
                                  new w.StatusComponent(
                                    e._localeText.previousChats,
                                    e.utils
                                  ).render()
                                ),
                                e._appendMessageToConversation(
                                  document.createElement("hr")
                                ));
                          }
                        );
                    }
                    (this.dataService.onMessage =
                      this._onMessageReceived.bind(this)),
                      (this.dataService.onOriginalMessage =
                        this._onOriginalMessageReceived.bind(this)),
                      (this.dataService.onFinalSentMessage =
                        this._onFinalMessageSent.bind(this)),
                      (this.dataService.onSuggestions =
                        this._onSuggestionsReceived.bind(this));
                  }),
                  (t.prototype._sendInitMessages = function () {
                    var e, t;
                    if (
                      !this.isInitMessageSent &&
                      this.isExpanded &&
                      this.isFirstConnectionOpen
                    ) {
                      var n = this.settings.initUserProfile;
                      if (n)
                        if (f.isUserProfileMessage(n) && !f.isIUserMessage(n)) {
                          var i = { profile: n.profile };
                          this.dataService.send(i, null, null, {
                            delegate: !1,
                          });
                        } else
                          this._logger.error(
                            'The object passed in "initUserProfile" setting must and only contain the "profile" object.'
                          );
                      if (this.settings.initUserHiddenMessage) {
                        var o = this.settings.initUserHiddenMessage,
                          s = void 0;
                        "string" == typeof o
                          ? (s = a.createUserTextMessage(o))
                          : ((g.isIMessagePayload(o) &&
                              (o.type === g.PAYLOAD_TYPE.TEXT ||
                                o.type === g.PAYLOAD_TYPE.LOCATION)) ||
                              (f.isIUserMessage(o) &&
                                ((null === (e = o.messagePayload) ||
                                void 0 === e
                                  ? void 0
                                  : e.type) === g.PAYLOAD_TYPE.TEXT ||
                                  (null === (t = o.messagePayload) ||
                                  void 0 === t
                                    ? void 0
                                    : t.type) === g.PAYLOAD_TYPE.LOCATION))) &&
                            (s = a.createUserMessage(
                              o,
                              this.settings.userId,
                              new Date(),
                              !0
                            )),
                          s && this._sendMessageToServer(s, { hidden: !0 });
                      }
                      this.isInitMessageSent = !0;
                    }
                  }),
                  (t.prototype._setupSpeechSynthesis = function () {
                    var e = this;
                    try {
                      (this._speechSynthesisService =
                        O.CoreSpeechSynthesisService.getInstance()),
                        d
                          .isAnyVoiceAvailable(
                            this._speechSynthesisService,
                            this.settings.skillVoices
                          )
                          .then(function (t) {
                            t || (e.settings.skillVoices = []),
                              (e.settings.skillVoices =
                                d.utils.syncTTSLocaleIfUnavailable({
                                  hasRecognition: e.settings.enableSpeech,
                                  hasSynthesis:
                                    e.settings.enableBotAudioResponse,
                                  recognitionLocale: e.settings.speechLocale,
                                  synthesisLocales: e.settings.skillVoices,
                                })),
                              e._speechSynthesisService.setVoice(
                                e.settings.skillVoices
                              );
                          });
                    } catch (e) {
                      this.isNarrationEnabled = !1;
                    }
                  }),
                  (t.prototype._textToSpeechSpeak = function (e) {
                    this.isNarrationEnabled &&
                      this._speechSynthesisService &&
                      !this.isNarrationMute &&
                      this._speechSynthesisService.speak(e);
                  }),
                  (t.prototype._textToSpeechCancel = function () {
                    this.isNarrationEnabled &&
                      this._speechSynthesisService &&
                      this._speechSynthesisService.cancel();
                  }),
                  (t.CHAT_MESSAGES_PARENT_ID = "chat_widget_main"),
                  t
                );
              })(y.Component);
            t.WidgetComponent = B;
          },
          3846: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ChatFooterComponent = void 0);
            var s,
              r,
              a,
              c = n(7642),
              l = n(1210),
              h = n(5076),
              u = n(3609),
              d = n(8216),
              p = n(248),
              g = n(9886);
            !(function (e) {
              (e.ARROW_DOWN = "ArrowDown"),
                (e.ARROW_UP = "ArrowUp"),
                (e.BACKSPACE = "Backspace"),
                (e.ENTER = "Enter"),
                (e.ESCAPE = "Escape");
            })(s || (s = {})),
              (function (e) {
                (e.ARROW_DOWN = "ArrowDown"),
                  (e.ARROW_UP = "ArrowUp"),
                  (e.ENTER = "Enter");
              })(r || (r = {})),
              (function (e) {
                (e[(e.KEYBOARD = 0)] = "KEYBOARD"),
                  (e[(e.VOICE = 1)] = "VOICE");
              })(a || (a = {}));
            var f = {
              AUDIO:
                ".aac, .amr, .m4a, .mp3, .mp4a, .mpga, .oga, .ogg, .wav, audio/*",
              FILE: ".7z, .csv, .doc, .docx, .eml, .ics, .key, .log, .neon, .numbers, .odt, .pages, .pdf, .pps, .ppsx, .ppt, .pptx, .rtf, .txt, .vcf, .xls, .xlsx, .xml, .yml, .yaml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              IMAGE:
                ".gif, .jfif, .jpeg, .jpg, .png, .svg, .tif, .tiff, .webp, image/*",
              VIDEO:
                ".3g2, .3gp, .avi, .m4v, .mov, .mp4, .mpeg, .mpg, .ogv, .qt, .webm, .wmv, video/*",
              ALL: "",
            };
            f.ALL = f.AUDIO + "," + f.FILE + "," + f.IMAGE + "," + f.VIDEO;
            var m = (function (e) {
              function t(t, n, i, o, s, r, c, h) {
                var u = e.call(this, t) || this;
                return (
                  (u.onSend = n),
                  (u.onUpload = i),
                  (u.settings = o),
                  (u.onQueryChange = s),
                  (u.onSpeechToggle = r),
                  (u.onShareLocation = c),
                  (u.eventDispatcher = h),
                  (u.SUGGESTION_REQUEST_TIMEOUT = 300),
                  (u.SUGGESTION_MINIMUM_INPUT_LENGTH = 3),
                  (u.SHARE_BUTTON_ID = "oda-chat-share-button"),
                  (u.SHARE_POPUP_MENU_ID = "oda-chat-share-popup-menu"),
                  (u.SHARE_ORDER = []),
                  (u.mode = void 0),
                  (u._isShareOpen = !1),
                  (u.fileMaxSize = l.ATTACHMENT_MAX_SIZE),
                  (u._navKeys = []),
                  (u.isDisabledVoiceButtonLang = !1),
                  (u.isDisabledVoiceButtonNetwork = !1),
                  (u.modeSwitchPreservedText = ""),
                  (u.recognitionRequested = !1),
                  (u.isFocusableDevice = !0),
                  (u.isTyping = !1),
                  (u.i18n = u.settings.i18n),
                  (u.locale = u.i18n[u.settings.locale]),
                  (u.isFocusableDevice = !d.isMobile()),
                  (u.element = u._createElement()),
                  u.setInputMode(a.KEYBOARD),
                  u.disable(!0),
                  u
                );
              }
              return (
                o(t, e),
                (t.prototype.setInputMode = function (e) {
                  e !== this.mode &&
                    (this.settings.enableSpeech
                      ? ((this.mode = e),
                        this.mode === a.KEYBOARD
                          ? this._showKeyboardMode()
                          : this._showVoiceMode())
                      : ((this.mode = a.KEYBOARD), this._showKeyboardMode()));
                }),
                (t.prototype.setUserInputText = function (e, t) {
                  void 0 === t && (t = !1),
                    this.mode === a.KEYBOARD
                      ? this._textArea &&
                        ((this._textArea.value = e),
                        this._textArea.setSelectionRange(e.length, e.length),
                        this.focusTextArea(),
                        this.updateSendButtonDisabledState())
                      : t ||
                        ((this._recognitionTextView.value =
                          this.modeSwitchPreservedText + e),
                        this._recognitionTextView.setSelectionRange(
                          e.length,
                          e.length
                        ),
                        (this._recognitionTextView.scrollLeft =
                          this._recognitionTextView.scrollWidth));
                }),
                (t.prototype.getUserInputText = function () {
                  return this.mode === a.KEYBOARD
                    ? this._textArea.value
                    : this._recognitionTextView.value;
                }),
                (t.prototype.setUserInputPlaceholder = function (e) {
                  this._textArea && S(this._textArea, e);
                }),
                (t.prototype.setVoiceRecording = function (e) {
                  this.settings.enableSpeech &&
                    (e && this.recognitionRequested
                      ? this.setInputMode(a.VOICE)
                      : e || this.setInputMode(a.KEYBOARD));
                }),
                (t.prototype.updateVisualizer = function (e) {
                  this.mode === a.VOICE && this._drawVisualizer(e);
                }),
                (t.prototype.focusTextArea = function () {
                  this.isFocusableDevice && this._textArea.focus(),
                    (this._textArea.scrollTop = this._textArea.scrollHeight);
                }),
                (t.prototype.render = function (e) {}),
                (t.prototype.disable = function (e) {
                  void 0 === e && (e = !0),
                    this.settings.enableAttachment &&
                      (this._closeSharePopup(),
                      (this._shareButton.disabled = e)),
                    e
                      ? (this.utils.addCSSClass(
                          this._textArea,
                          this.utils.getCssClassWithPrefix("disabled")
                        ),
                        this.settings.enableAutocomplete &&
                          (this._invalidateSuggestions(),
                          this._removeSuggestionsPopup()),
                        (this._sendButton.disabled = e))
                      : (this.utils.removeCSSClass(
                          this._textArea,
                          this.utils.getCssClassWithPrefix("disabled")
                        ),
                        this.updateSendButtonDisabledState()),
                    this.settings.enableSpeech &&
                      (this.setInputMode(a.KEYBOARD),
                      this.disableVoiceModeButton(e, { src: "network" })),
                    (this.isFooterDisabled = e);
                }),
                (t.prototype.isDisabled = function () {
                  return this.isFooterDisabled;
                }),
                (t.prototype.disableVoiceModeButton = function (e, t) {
                  var n = t.src;
                  if (this.settings.enableSpeech) {
                    switch (n) {
                      case "lang":
                        this.isDisabledVoiceButtonLang = e;
                        break;
                      case "network":
                        this.isDisabledVoiceButtonNetwork = e;
                    }
                    this.settings.multiLangChat &&
                    (this.isDisabledVoiceButtonLang ||
                      this.isDisabledVoiceButtonNetwork)
                      ? (this._switchToVoiceModeButton.disabled = !0)
                      : (this._switchToVoiceModeButton.disabled =
                          this.isDisabledVoiceButtonNetwork);
                  }
                }),
                (t.prototype.displaySuggestions = function (e) {
                  if ((this._removeSuggestionsPopup(), 0 === e.length))
                    (this._suggestions = e), (this._isSuggestionsValid = !1);
                  else if (this._textArea.value) {
                    (this._currentSuggestionFocus =
                      e.length > l.Constants.MAX_SUGGESTIONS_COUNT
                        ? l.Constants.MAX_SUGGESTIONS_COUNT
                        : e.length < l.Constants.MIN_SUGGESTIONS_COUNT
                        ? l.Constants.MIN_SUGGESTIONS_COUNT
                        : e.length),
                      (this._suggestions = e),
                      (this._isSuggestionsValid = !0);
                    var n = this.utils.createElement(
                      "div",
                      this.settings.enableAttachment
                        ? ["autocomplete-items"]
                        : ["autocomplete-items", "no-attach"]
                    );
                    n.setAttribute("role", "list");
                    var i = this._textArea.value.trim();
                    n.id = t.SUGGESTIONS_ID;
                    for (
                      var o = this._currentSuggestionFocus - 1;
                      o > -1;
                      o--
                    ) {
                      var s = this._createSuggestionListItem(e[o], i);
                      n.appendChild(s);
                    }
                    this.element.appendChild(n);
                  }
                }),
                (t.prototype.getSuggestions = function () {
                  return this._suggestions;
                }),
                (t.prototype.getSuggestionsValid = function () {
                  return this._isSuggestionsValid;
                }),
                (t.prototype.setLocale = function (e) {
                  if (((this.locale = e), this._shareButton)) {
                    var t = e.upload;
                    b(this._uploadFileInput, t),
                      this._sharePopup.firstElementChild.remove(),
                      this._sharePopup.appendChild(this.getPopup());
                  }
                  this.setUserInputPlaceholder(e.inputPlaceholder),
                    this._sendButton && C(this._sendButton, e.send),
                    this._switchToVoiceModeButton &&
                      C(this._switchToVoiceModeButton, e.speak),
                    this._recognitionTextView &&
                      y(
                        this._recognitionTextView,
                        e.recognitionTextPlaceholder
                      );
                }),
                (t.prototype._createElement = function () {
                  return this.utils.createElement("div", ["footer"]);
                }),
                (t.prototype._showKeyboardMode = function () {
                  var e;
                  if (
                    (this.utils.removeCSSClass(
                      this.element,
                      this.utils.getCssClassWithPrefix("mode-voice")
                    ),
                    this.utils.addCSSClass(
                      this.element,
                      this.utils.getCssClassWithPrefix("mode-keyboard")
                    ),
                    this.keyboardComponent ||
                      ((this.keyboardComponent =
                        this._createKeyboardComponent()),
                      this.element.appendChild(this.keyboardComponent)),
                    this._recognitionTextView)
                  ) {
                    var t = this._recognitionTextView.value.toString();
                    (this._textArea.value = t),
                      (this.modeSwitchPreservedText = ""),
                      (this._recognitionTextView.value = "");
                  }
                  this.updateSendButtonDisabledState(),
                    this.settings.enableAutocomplete &&
                      (null === (e = this._textArea.value) || void 0 === e
                        ? void 0
                        : e.trim().length) >=
                        this.SUGGESTION_MINIMUM_INPUT_LENGTH &&
                      this._setSuggestionsRequestTimer();
                }),
                (t.prototype._showVoiceMode = function () {
                  var e, t;
                  if (
                    (this.utils.removeCSSClass(
                      this.element,
                      this.utils.getCssClassWithPrefix("mode-keyboard")
                    ),
                    this.utils.addCSSClass(
                      this.element,
                      this.utils.getCssClassWithPrefix("mode-voice")
                    ),
                    this.voiceComponent ||
                      ((this.voiceComponent = this._createVoiceComponent()),
                      this.element.appendChild(this.voiceComponent)),
                    this._textArea)
                  ) {
                    var n =
                      null !==
                        (t =
                          null === (e = this._textArea.value) || void 0 === e
                            ? void 0
                            : e.trim().toString()) && void 0 !== t
                        ? t
                        : "";
                    (this.modeSwitchPreservedText = n ? n + " " : ""),
                      (this._recognitionTextView.value =
                        this.modeSwitchPreservedText),
                      this._removeSuggestionsPopup(),
                      (this._textArea.value = "");
                  }
                }),
                (t.prototype._createKeyboardComponent = function () {
                  var e = this.utils.createElement("div", [
                    "footer-mode-keyboard",
                  ]);
                  if (this.settings.enableAttachment) {
                    var t = this._createShareComponent();
                    e.appendChild(t);
                  }
                  (this._textArea = this._createInputTextArea()),
                    e.appendChild(this._textArea);
                  var n = this._createSendMessageButton();
                  return (
                    (this._sendButton = n),
                    e.appendChild(n),
                    this.settings.enableSpeech &&
                      ((this._switchToVoiceModeButton =
                        this._createVoiceSwitchButton()),
                      e.appendChild(this._switchToVoiceModeButton)),
                    e
                  );
                }),
                (t.prototype._createShareComponent = function () {
                  var e = this,
                    t = this.utils.createElement("div"),
                    n = v({
                      css: ["button-upload"],
                      customIcon: this.settings.attachmentIcon,
                      defaultIcon: u.SVG_SPRITE.icon_bot_attach,
                      title: this.locale.upload,
                    });
                  (n.id = this.SHARE_BUTTON_ID),
                    (n.type = "menu"),
                    n.setAttribute("aria-haspopup", "true"),
                    n.setAttribute("aria-controls", this.SHARE_POPUP_MENU_ID),
                    (n.onclick = this._onClickShareButton.bind(this)),
                    (n.onkeydown = this._onShareButtonKeyDown.bind(this)),
                    (n.onblur = function () {
                      e._isShareOpen &&
                        setTimeout(function () {
                          var t,
                            n =
                              null === (t = document.activeElement) ||
                              void 0 === t
                                ? void 0
                                : t.id;
                          (n &&
                            (e.SHARE_ORDER.indexOf(n) >= 0 ||
                              n === e.SHARE_BUTTON_ID)) ||
                            e._closeSharePopup();
                        }, 0);
                    }),
                    (this._shareButton = n),
                    t.appendChild(n);
                  var i = this._getSharePopup();
                  return (
                    t.appendChild(i),
                    (this._uploadFileInput = this.utils.createInput(
                      ["none"],
                      "file"
                    )),
                    (this._uploadFileInput.onchange =
                      this._uploadDocument.bind(this)),
                    this._uploadFileInput.setAttribute("aria-hidden", "true"),
                    b(this._uploadFileInput, this.locale.upload),
                    t.appendChild(this._uploadFileInput),
                    document.addEventListener(
                      "deviceready",
                      function () {
                        var t = globalThis
                          ? globalThis.device
                          : window
                          ? window.device
                          : void 0;
                        "Android" === (null == t ? void 0 : t.platform) &&
                          e._uploadFileInput.removeAttribute("accept");
                      },
                      !1
                    ),
                    t
                  );
                }),
                (t.prototype._createInputTextArea = function () {
                  var e = this,
                    t = ["user-input"];
                  this.settings.enableSpeech &&
                    t.push("user-input-inline-send");
                  var n = this.utils.createElement("textarea", t);
                  return (
                    y(n, this.locale.inputPlaceholder),
                    (n.autofocus = this.isFocusableDevice),
                    (n.rows = 1),
                    (n.onkeydown = this.onInputKeyDown.bind(this)),
                    (n.onkeyup = this.onInputKeyUp.bind(this)),
                    (n.oninput = this._expand.bind(this)),
                    n.addEventListener("paste", function () {
                      setTimeout(e.updateSendButtonDisabledState.bind(e));
                    }),
                    n
                  );
                }),
                (t.prototype._createSendMessageButton = function () {
                  var e = this,
                    t = ["button-send"];
                  this.settings.enableSpeech && t.push("button-send-inline");
                  var n = v({
                    css: t,
                    customIcon: this.settings.sendIcon,
                    defaultIcon: u.SVG_SPRITE.icon_bot_send,
                    title: this.locale.send,
                  });
                  return (
                    (n.onclick = function () {
                      var t, i;
                      e._isUserInputEmpty() ||
                        ((e._previousInputValue = void 0),
                        (e._textArea.value =
                          null ===
                            (i =
                              null === (t = e._textArea) || void 0 === t
                                ? void 0
                                : t.value.trim()) || void 0 === i
                            ? void 0
                            : i.replace("\n", "")),
                        e.settings.enableAutocomplete &&
                          (e._invalidateSuggestions(),
                          e._removeSuggestionsPopup()),
                        e._onSend(),
                        (n.disabled = !0));
                    }),
                    n
                  );
                }),
                (t.prototype._createVoiceSwitchButton = function () {
                  var e = this,
                    t = v({
                      css: ["button-switch-voice"],
                      customIcon: this.settings.micIcon,
                      defaultIcon: u.SVG_SPRITE.icon_bot_mic,
                      title: this.locale.speak,
                    });
                  return (
                    (t.onclick = function () {
                      e.onSpeechToggle(!0), (e.recognitionRequested = !0);
                    }),
                    t
                  );
                }),
                (t.prototype._createVoiceComponent = function () {
                  var e = this.utils.createElement("div", [
                      "footer-mode-voice",
                    ]),
                    t = this.utils.createElement("div", [
                      "footer-visualizer-wrapper",
                    ]),
                    n = this.utils.createElement("div", [
                      "footer-recognition-wrapper",
                    ]);
                  if (
                    ((this._visualizerCanvas =
                      document.createElement("canvas")),
                    (this._visualizerCanvas.width = 244),
                    (this._visualizerCanvas.height = 32),
                    t.appendChild(this._visualizerCanvas),
                    (this._recognitionTextView =
                      this._createRecognitionTextView()),
                    n.appendChild(this._recognitionTextView),
                    this.settings.enableSpeech)
                  ) {
                    var i = this._createKeyboardSwitchButton();
                    n.appendChild(i);
                  }
                  return e.appendChild(t), e.appendChild(n), e;
                }),
                (t.prototype._createRecognitionTextView = function () {
                  var e = this.utils.createInput(["recognition-text-view"]);
                  return (
                    (e.readOnly = !0),
                    (e.type = "text"),
                    y(e, this.locale.recognitionTextPlaceholder),
                    e
                  );
                }),
                (t.prototype._createKeyboardSwitchButton = function () {
                  var e = this,
                    t = v({
                      css: ["button-switch-kbd"],
                      customIcon: this.settings.keyboardIcon,
                      defaultIcon: u.SVG_SPRITE.icon_bot_keyboard,
                      title: this.locale.inputPlaceholder,
                    });
                  return (
                    (t.onclick = function () {
                      (e.recognitionRequested = !1), e.onSpeechToggle(!1);
                    }),
                    t
                  );
                }),
                (t.prototype.updateSendButtonDisabledState = function () {
                  this._sendButton &&
                    (this._sendButton.disabled = !(
                      this._textArea &&
                      this._textArea.value &&
                      this._textArea.value.trim().length
                    ));
                }),
                (t.prototype._drawVisualizer = function (e) {
                  var t = this._visualizerCanvas.height,
                    n = this._visualizerCanvas.width,
                    i = Math.floor(t / 2);
                  (e = this._getGroupedFrequencyValues(e, 31)),
                    (e = this._getScaledFrequencyValues(e, t / 255));
                  var o = this._visualizerCanvas.getContext("2d");
                  (o.fillStyle = this.settings.colors.visualizer),
                    o.clearRect(0, 0, n, t),
                    o.save();
                  var s = 0;
                  e.forEach(function (e) {
                    var t = Math.ceil(e / 2) + 1;
                    o.fillRect(s, i - t, 4, 2 * t), (s += 8);
                  }),
                    o.save();
                }),
                (t.prototype._getGroupedFrequencyValues = function (e, t) {
                  for (
                    var n = Math.ceil(t / 2),
                      i = e.length / n,
                      o = [],
                      s = [],
                      r = 0;
                    r < e.length;
                    r += i
                  ) {
                    var a = e.slice(r, r + i).reduce(function (e, t) {
                      return e + t;
                    }, 0);
                    o.push(a / i), s.unshift(a / i);
                  }
                  return o.splice(0, 1), s.concat(o);
                }),
                (t.prototype._getScaledFrequencyValues = function (e, t) {
                  return e.map(function (e) {
                    return e * t;
                  });
                }),
                (t.prototype._isUserInputEmpty = function () {
                  return (
                    !this._textArea || 0 === this._textArea.value.trim().length
                  );
                }),
                (t.prototype._uploadDocument = function (e) {
                  e.target.files &&
                    e.target.files.length > 0 &&
                    this._onUpload(e.target.files[0]);
                }),
                (t.prototype.onInputKeyDown = function (e) {
                  var t;
                  this.isDisabled() ||
                    e.isComposing ||
                    229 === e.keyCode ||
                    (e.key === s.ENTER &&
                      !e.shiftKey &&
                      (null === (t = this._textArea.value) || void 0 === t
                        ? void 0
                        : t.trim().length) > 0 &&
                      (e.preventDefault(), this._sendButton.click()));
                }),
                (t.prototype.onInputKeyUp = function (e) {
                  var t,
                    n = this;
                  if (this.isDisabled())
                    return (
                      this._invalidateSuggestions(),
                      void this._removeSuggestionsPopup()
                    );
                  this.isTyping ||
                    ((this.isTyping = !0),
                    this.eventDispatcher.trigger(
                      c.ChatEvent.TYPING,
                      this.isTyping
                    )),
                    clearTimeout(this.typingTimer),
                    (this.typingTimer = window.setTimeout(function () {
                      (n.isTyping = !1),
                        n.eventDispatcher.trigger(
                          c.ChatEvent.TYPING,
                          n.isTyping
                        );
                    }, 1e3));
                  var i =
                    null === (t = this._textArea.value) || void 0 === t
                      ? void 0
                      : t.trim();
                  if (
                    (this.updateSendButtonDisabledState(),
                    !e.isComposing && this.settings.enableAutocomplete)
                  ) {
                    if (this._onNavigateSuggestion(e)) return;
                    e.key === s.BACKSPACE &&
                      ((this._previousInputValue = void 0),
                      this._invalidateSuggestions(),
                      this._removeSuggestionsPopup(),
                      clearTimeout(this._suggestionsRequest)),
                      this._getNavKeys().indexOf(e.key) < 0 &&
                        (i.length >= this.SUGGESTION_MINIMUM_INPUT_LENGTH
                          ? this._previousInputValue !== this._textArea.value &&
                            ((this._previousInputValue = this._textArea.value),
                            clearTimeout(this._suggestionsRequest),
                            this._setSuggestionsRequestTimer())
                          : ((this._previousInputValue = void 0),
                            this._removeSuggestionsPopup(),
                            clearTimeout(this._suggestionsRequest)));
                  }
                }),
                (t.prototype._expand = function () {
                  this._textArea.style.height = null;
                  var e = this._textArea.scrollHeight;
                  this._textArea.style.height = e + "px";
                }),
                (t.prototype._onNavigateSuggestion = function (e) {
                  var n = !1,
                    i = document.getElementById(t.SUGGESTIONS_ID);
                  if (i) {
                    var o = i.getElementsByTagName("div");
                    e.key === s.ARROW_DOWN
                      ? (e.preventDefault(),
                        this._currentSuggestionFocus < o.length - 1
                          ? (this._currentSuggestionFocus++, this._addActive(o))
                          : (this._removeActive(o),
                            (this._textArea.value = this._currentInputValue
                              ? this._currentInputValue
                              : this._textArea.value),
                            (this._currentSuggestionFocus = o.length)),
                        (n = !0))
                      : e.key === s.ARROW_UP &&
                        (e.preventDefault(),
                        this._currentSuggestionFocus === o.length &&
                          (this._currentInputValue = this._textArea.value),
                        this._currentSuggestionFocus > 0 &&
                          this._currentSuggestionFocus--,
                        this._addActive(o),
                        (n = !0));
                  }
                  return n;
                }),
                (t.prototype._addActive = function (e) {
                  if (!e) return !1;
                  this._removeActive(e),
                    this.utils.addCSSClass(
                      e[this._currentSuggestionFocus],
                      this.utils.getCssClassWithPrefix("autocomplete-active")
                    ),
                    e[this._currentSuggestionFocus].scrollIntoView(),
                    (this._textArea.value =
                      e[this._currentSuggestionFocus].innerText);
                }),
                (t.prototype._removeActive = function (e) {
                  for (var t = 0, n = e; t < n.length; t++) {
                    var i = n[t];
                    this.utils.removeCSSClass(
                      i,
                      this.utils.getCssClassWithPrefix("autocomplete-active")
                    );
                  }
                }),
                (t.prototype._removeSuggestionsPopup = function () {
                  var e = document.getElementById(t.SUGGESTIONS_ID);
                  e && e.remove();
                }),
                (t.prototype._onSend = function () {
                  this.onSend(this._textArea.value),
                    (this._textArea.value = ""),
                    (this._textArea.innerText = ""),
                    setTimeout(this._expand.bind(this));
                }),
                (t.prototype._getSharePopup = function () {
                  if (!this._sharePopup) {
                    var e = this.getPopup();
                    (this._sharePopup = this.utils.createElement("div", [
                      "share-popup",
                    ])),
                      this._sharePopup.appendChild(e),
                      (this._sharePopup.onclick = function (e) {
                        e.stopPropagation(), e.preventDefault();
                      }),
                      (this._sharePopupMenu = e);
                  }
                  return this._sharePopup;
                }),
                (t.prototype.getPopup = function () {
                  var e,
                    t = this,
                    n = this.locale,
                    i = document.createElement("ul");
                  (i.id = this.SHARE_POPUP_MENU_ID),
                    i.setAttribute("role", "menu"),
                    i.setAttribute("aria-labelledby", this.SHARE_BUTTON_ID),
                    i.setAttribute(
                      "aria-activedescendant",
                      "oda-chat-share-visual"
                    ),
                    this.utils.addCSSClass(
                      i,
                      this.utils.getCssClassWithPrefix("share-popup-list")
                    ),
                    (i.onkeydown = this._onShareKeyUp.bind(this)),
                    i.addEventListener(
                      "blur",
                      function () {
                        t._isShareOpen &&
                          setTimeout(function () {
                            var e,
                              n =
                                null === (e = document.activeElement) ||
                                void 0 === e
                                  ? void 0
                                  : e.id;
                            (n &&
                              (t.SHARE_ORDER.indexOf(n) >= 0 ||
                                n === t.SHARE_BUTTON_ID)) ||
                              t._closeSharePopup();
                          }, 100);
                      },
                      !0
                    );
                  var o = new Set();
                  if (
                    ((null === (e = this.settings.shareMenuItems) ||
                    void 0 === e
                      ? void 0
                      : e.length) ||
                      (this.settings.shareMenuItems = [
                        g.ShareCategory.AUDIO,
                        g.ShareCategory.FILE,
                        g.ShareCategory.LOCATION,
                        g.ShareCategory.VISUAL,
                      ]),
                    this.settings.shareMenuItems.forEach(function (e) {
                      "string" == typeof e && o.add(e.toLowerCase());
                    }),
                    o.has(g.ShareCategory.VISUAL))
                  ) {
                    var s = _(
                      "oda-chat-share-visual",
                      n.shareVisual,
                      u.SVG_SPRITE.icon_bot_share_media,
                      function () {
                        t._closeSharePopup(),
                          (t._uploadFileInput.accept = f.IMAGE + "," + f.VIDEO),
                          t._uploadFileInput.click();
                      }
                    );
                    i.appendChild(s),
                      this.SHARE_ORDER.push("oda-chat-share-visual");
                  }
                  if (o.has(g.ShareCategory.AUDIO)) {
                    var r = _(
                      "oda-chat-share-audio",
                      n.shareAudio,
                      u.SVG_SPRITE.icon_bot_share_audio,
                      function () {
                        t._closeSharePopup(),
                          (t._uploadFileInput.accept = f.AUDIO),
                          t._uploadFileInput.click();
                      }
                    );
                    i.appendChild(r),
                      this.SHARE_ORDER.push("oda-chat-share-audio");
                  }
                  if (o.has(g.ShareCategory.FILE)) {
                    var a = _(
                      "oda-chat-share-file",
                      n.shareFile,
                      u.SVG_SPRITE.icon_bot_share_file,
                      function () {
                        t._closeSharePopup(),
                          (t._uploadFileInput.accept = f.FILE),
                          t._uploadFileInput.click();
                      }
                    );
                    i.appendChild(a),
                      this.SHARE_ORDER.push("oda-chat-share-file");
                  }
                  if (o.has(g.ShareCategory.LOCATION)) {
                    var c = _(
                      "oda-chat-share-location",
                      n.shareLocation,
                      u.SVG_SPRITE.icon_bot_share_location,
                      function () {
                        t._closeSharePopup(), t.onShareLocation();
                      }
                    );
                    i.appendChild(c),
                      this.SHARE_ORDER.push("oda-chat-share-location");
                  }
                  return (
                    this.settings.shareMenuItems
                      .filter(function (e) {
                        return (
                          "string" != typeof e && "string" == typeof e.type
                        );
                      })
                      .map(function (e) {
                        var i = e.type.toLowerCase(),
                          o =
                            "share_" +
                            (i.indexOf("*") >= 0
                              ? "all"
                              : i.replace(/ /g, "_")),
                          s = "oda-chat-" + o,
                          r = n[o] || e.label,
                          a = e.icon || u.SVG_SPRITE.icon_bot_share_file,
                          c =
                            e.maxSize && e.maxSize >= 1
                              ? Math.min(
                                  e.maxSize * l.BYTE_MULTIPLIER,
                                  l.ATTACHMENT_MAX_SIZE
                                )
                              : l.ATTACHMENT_MAX_SIZE,
                          h =
                            i.indexOf("*") >= 0
                              ? f.ALL
                              : i
                                  .split(" ")
                                  .filter(function (e) {
                                    return f.ALL.indexOf(e) >= 0;
                                  })
                                  .map(function (e) {
                                    return "." + e + " ";
                                  })
                                  .join(",");
                        return (
                          t.SHARE_ORDER.push(s),
                          _(s, r, a, function () {
                            (t.fileMaxSize = c),
                              t._closeSharePopup(),
                              (t._uploadFileInput.accept = h),
                              t._uploadFileInput.click();
                          })
                        );
                      })
                      .forEach(function (e) {
                        i.appendChild(e);
                      }),
                    i
                  );
                }),
                (t.prototype._onClickShareButton = function (e) {
                  this._removeSuggestionsPopup(),
                    this._isShareOpen
                      ? this._closeSharePopup()
                      : this._openSharePopup(),
                    e.stopPropagation(),
                    e.preventDefault();
                }),
                (t.prototype._openSharePopup = function (e) {
                  var t = this;
                  if ((void 0 === e && (e = 0), !this._isShareOpen)) {
                    switch (
                      ((this._isShareOpen = !0),
                      this.utils.addCSSClass(
                        this._sharePopup,
                        this.utils.getCssClassWithPrefix("share-popup-expand")
                      ),
                      this._shareButton.setAttribute("aria-expanded", "true"),
                      e)
                    ) {
                      case -1:
                        this._focusMenuitemLast();
                        break;
                      default:
                        this._focusMenuitemFirst();
                    }
                    document.addEventListener(
                      "click",
                      function () {
                        t._closeSharePopup();
                      },
                      { once: !0 }
                    );
                  }
                }),
                (t.prototype._closeSharePopup = function () {
                  this._isShareOpen &&
                    (this.utils.removeCSSClass(
                      this._sharePopup,
                      this.utils.getCssClassWithPrefix("share-popup-expand")
                    ),
                    this._shareButton.removeAttribute("aria-expanded"),
                    (this._isShareOpen = !1));
                }),
                (t.prototype._onShareButtonKeyDown = function (e) {
                  var t = !1,
                    n =
                      "true" ===
                      this._shareButton.getAttribute("aria-expanded");
                  switch (e.key) {
                    case s.ARROW_DOWN:
                      n ? this._focusMenuitemFirst() : this._openSharePopup(0),
                        (t = !0);
                      break;
                    case s.ARROW_UP:
                      n ? this._focusMenuitemLast() : this._openSharePopup(-1),
                        (t = !0);
                      break;
                    case s.ESCAPE:
                      this._closeSharePopup();
                  }
                  t && (e.stopPropagation(), e.preventDefault());
                }),
                (t.prototype._onShareKeyUp = function (e) {
                  var t = !1;
                  switch (e.key) {
                    case s.ESCAPE:
                      this._closeSharePopup(), (t = !0);
                      break;
                    case s.ARROW_UP:
                      this._focusMenuitemPrevious(), (t = !0);
                      break;
                    case s.ARROW_DOWN:
                      this._focusMenuitemNext(), (t = !0);
                  }
                  t && (e.stopPropagation(), e.preventDefault());
                }),
                (t.prototype._focusMenuitem = function (e) {
                  this._isShareOpen &&
                    (document.getElementById(e).focus(),
                    this._sharePopupMenu.setAttribute(
                      "aria-activedescendant",
                      e
                    ));
                }),
                (t.prototype._focusMenuitemFirst = function () {
                  this._focusMenuitem(this.SHARE_ORDER[0]);
                }),
                (t.prototype._focusMenuitemLast = function () {
                  this._focusMenuitem(
                    this.SHARE_ORDER[this.SHARE_ORDER.length - 1]
                  );
                }),
                (t.prototype._focusMenuitemPrevious = function () {
                  var e = this._sharePopupMenu.getAttribute(
                      "aria-activedescendant"
                    ),
                    t = this.SHARE_ORDER.indexOf(e) - 1,
                    n =
                      this.SHARE_ORDER[t < 0 ? this.SHARE_ORDER.length - 1 : t];
                  this._focusMenuitem(n);
                }),
                (t.prototype._focusMenuitemNext = function () {
                  var e = this._sharePopupMenu.getAttribute(
                      "aria-activedescendant"
                    ),
                    t =
                      this.SHARE_ORDER[
                        (this.SHARE_ORDER.indexOf(e) + 1) %
                          this.SHARE_ORDER.length
                      ];
                  this._focusMenuitem(t);
                }),
                (t.prototype._onUpload = function (e) {
                  var t = this.fileMaxSize;
                  (this.fileMaxSize = l.ATTACHMENT_MAX_SIZE),
                    this.onUpload(e, { maxSize: t }),
                    (this._uploadFileInput.value = "");
                }),
                (t.prototype._onQueryChange = function () {
                  this.onQueryChange(this._textArea.value.trim()).catch(
                    function () {}
                  );
                }),
                (t.prototype._setSuggestionsRequestTimer = function () {
                  var e = this;
                  this._suggestionsRequest = setTimeout(function () {
                    e._onQueryChange();
                  }, this.SUGGESTION_REQUEST_TIMEOUT);
                }),
                (t.prototype._invalidateSuggestions = function () {
                  (this._suggestions = null), (this._isSuggestionsValid = !1);
                }),
                (t.prototype._getNavKeys = function () {
                  if (!this._navKeys.length)
                    for (var e = 0, t = Object.keys(r); e < t.length; e++) {
                      var n = t[e];
                      this._navKeys.push(r[n]);
                    }
                  return this._navKeys;
                }),
                (t.prototype._createSuggestionListItem = function (e, t) {
                  var n = this,
                    i = this.utils.createElement("div");
                  i.setAttribute("role", "listitem"),
                    (i.onclick = function () {
                      (n._textArea.value = i.innerText),
                        n._removeSuggestionsPopup(),
                        n._sendButton.click();
                    });
                  var o = new RegExp(t, "i"),
                    s = e.match(o);
                  if (s) {
                    if (0 !== s.index) {
                      var r = this.utils.createElement("span");
                      (r.textContent = e.substr(0, s.index)), i.appendChild(r);
                    }
                    var a = document.createElement("strong");
                    if (
                      ((a.textContent = e.substr(s.index, t.length)),
                      i.appendChild(a),
                      s.index + t.length !== e.length)
                    ) {
                      var c = this.utils.createElement("span");
                      (c.textContent = e.substr(s.index + t.length)),
                        i.appendChild(c);
                    }
                  } else i.textContent = e;
                  return i;
                }),
                (t.SUGGESTIONS_ID = "chat_widget_suggestions"),
                t
              );
            })(p.Component);
            t.ChatFooterComponent = m;
            var v = function (e) {
                var t = e.css,
                  n = e.customIcon,
                  i = e.defaultIcon,
                  o = e.title,
                  s = "footer-button",
                  r = n || i,
                  a = [d.isSVG(r) ? s + "-svg-icon" : s + "-icon"];
                return h.createIconButton({
                  css: [s].concat(t),
                  icon: r,
                  iconCss: a,
                  title: o,
                });
              },
              _ = function (e, t, n, i) {
                var o = "share-popup-item",
                  s = h.createIconButton({
                    css: [o],
                    icon: n,
                    iconCss: [o + "-icon"],
                    title: t,
                  });
                (s.id = e),
                  (s.tabIndex = -1),
                  s.setAttribute("role", "menuitem");
                var r = h.createElement("span", ["share-popup-item-text"]);
                (r.textContent = t), s.appendChild(r), C(s, t), (s.onclick = i);
                var a = document.createElement("li");
                return (
                  a.dir ? (a.dir = "auto") : a.setAttribute("dir", "auto"),
                  a.setAttribute("role", "none"),
                  a.appendChild(s),
                  a
                );
              };
            function b(e, t) {
              C(e, t), T(e, t);
            }
            function y(e, t) {
              S(e, t), T(e, t);
            }
            function C(e, t) {
              e.title = t;
            }
            function S(e, t) {
              e.placeholder = t;
            }
            function T(e, t) {
              e.setAttribute("aria-label", t);
            }
          },
          9549: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ChatHeaderComponent = void 0);
            var s = n(8216),
              r = n(248),
              a = n(983),
              c = n(3609),
              l = n(7605),
              h = n(2158),
              u = (function (e) {
                function t(t, n, i, o, s, r) {
                  var a = e.call(this, t) || this;
                  return (
                    (a.settings = n),
                    (a.onClose = i),
                    (a.onClearMessage = o),
                    (a.onAudioToggle = s),
                    (a.chatService = r),
                    (a.logger = new l.Logger("ChatHeaderComponent")),
                    (a.i18n = a.settings.i18n),
                    (a.element = a._createElement()),
                    a.settings.showConnectionStatus &&
                      a.chatService.on(
                        h.ChatServerEvent.STATUS,
                        a.updateStatusMessage.bind(a)
                      ),
                    a
                  );
                }
                return (
                  o(t, e),
                  (t.prototype.render = function (e) {}),
                  (t.prototype.addLanguageSelect = function (e) {
                    this.languageSelect
                      ? (this.languageSelect = e)
                      : ((this.languageSelect = e),
                        this.actionsContainer.prepend(this.languageSelect));
                  }),
                  (t.prototype.closeWidgetPopup = function () {
                    this.onClose();
                  }),
                  (t.prototype.clearHistory = function () {
                    this.onClearMessage();
                  }),
                  (t.prototype.disableTTSButton = function (e) {
                    this.audioButton && (this.audioButton.disabled = e);
                  }),
                  (t.prototype.setLocale = function (e) {
                    this.currentTranslations = e;
                    var t = e.chatTitle;
                    t &&
                      ((this.title.innerText = this.title.title = t),
                      this.logo && (this.logo.title = t));
                    var n = e.chatSubtitle;
                    if (
                      (n
                        ? (this.subtitle.innerText = this.subtitle.title = n)
                        : this.settings.showConnectionStatus &&
                          this.updateStatusMessage(this.chatStatus),
                      this.clearButton)
                    ) {
                      var i = e.clear;
                      this.clearButton.title = i;
                    }
                    if (this.audioButton) {
                      var o = this._audioButtonOn
                        ? e.audioResponseOn
                        : e.audioResponseOff;
                      this.audioButton.title = o;
                    }
                    if (this.closeButton) {
                      var s = e.close;
                      this.closeButton.title = s;
                    }
                  }),
                  (t.prototype._createElement = function () {
                    var e,
                      t,
                      n = this,
                      i = this.utils.createElement("div", ["header"]),
                      o = this.utils.createElement("div", [
                        "header-info-wrapper",
                      ]),
                      r = this.utils.createElement("div", ["header-actions"]),
                      a = this.settings.locale,
                      l = this.i18n[a],
                      h = l.chatTitle,
                      u = l.chatSubtitle;
                    if (this.settings.logoIcon) {
                      var d = this.utils.createImage(
                        this.settings.logoIcon,
                        ["logo"],
                        h
                      );
                      i.appendChild(d), (this.logo = d);
                    }
                    if (h) {
                      var p = this.utils.createElement("div", ["title"]);
                      (p.id = "oda-chat-title"),
                        (p.innerText = h),
                        (p.title = h),
                        o.appendChild(p),
                        (this.title = p);
                    }
                    if (u) {
                      var g = this.utils.createElement("div", ["subtitle"]);
                      (g.innerText = u),
                        (g.title = u),
                        o.appendChild(g),
                        (this.settings.showConnectionStatus = !1),
                        (this.subtitle = g);
                    } else
                      this.settings.showConnectionStatus &&
                        ((this.networkStatus = this.utils.createElement("div", [
                          "connection-status",
                          "disconnected",
                        ])),
                        (this.networkStatus.innerText = l.connecting),
                        (this.networkStatus.title =
                          this.networkStatus.innerText),
                        o.appendChild(this.networkStatus));
                    if (
                      (i.appendChild(o), this.settings.customHeaderElementId)
                    ) {
                      var f = document.getElementById(
                        this.settings.customHeaderElementId
                      );
                      if (f) {
                        var m = this.utils.createElement("div", [
                          "header-custom-element",
                        ]);
                        m.appendChild(f), i.appendChild(m);
                      } else
                        this.logger.error(
                          "Could not find element with ID '" +
                            this.settings.customHeaderElementId +
                            "'. No custom element added to the chat header."
                        );
                    }
                    if (this.settings.enableClearMessage) {
                      var v = this.utils.createButton([
                        "header-button",
                        "button-clear",
                      ]);
                      v.title = l.clear;
                      var _ =
                        null !== (e = this.settings.clearMessageIcon) &&
                        void 0 !== e
                          ? e
                          : c.SVG_SPRITE.icon_bot_clear;
                      if (s.utils.isSvg(_)) {
                        var b = this.utils.createElementFromString(_, [
                          "header-button-icon",
                        ]);
                        b.setAttribute("role", "img"),
                          b.setAttribute("aria-label", v.title),
                          v.appendChild(b);
                      } else {
                        var y = this.utils.createImage(
                          _,
                          ["header-button-img-icon"],
                          v.title
                        );
                        v.appendChild(y);
                      }
                      (v.onclick = this.clearHistory.bind(this)),
                        r.appendChild(v),
                        (this.clearButton = v);
                    }
                    if (
                      this.settings.enableBotAudioResponse &&
                      window.speechSynthesis
                    ) {
                      this._audioButtonOn = !this.settings.initBotAudioMuted;
                      var C,
                        S,
                        T = this.utils.createButton([
                          "header-button",
                          "button-narration",
                        ]),
                        E = function () {
                          var e,
                            t,
                            i = n.currentTranslations || l;
                          T.innerHTML = "";
                          var o = n._audioButtonOn
                              ? i.audioResponseOn
                              : i.audioResponseOff,
                            r = n._audioButtonOn
                              ? null !== (e = n.settings.audioResponseOnIcon) &&
                                void 0 !== e
                                ? e
                                : c.SVG_SPRITE.icon_bot_speech_unmute
                              : null !==
                                  (t = n.settings.audioResponseOffIcon) &&
                                void 0 !== t
                              ? t
                              : c.SVG_SPRITE.icon_bot_speech_mute;
                          s.utils.isSvg(r)
                            ? ((S = n.utils.createElementFromString(r, [
                                "header-button-icon",
                              ])).setAttribute("role", "img"),
                              S.setAttribute("aria-label", o),
                              T.appendChild(S))
                            : ((C = n.utils.createImage(
                                r,
                                ["header-button-img-icon"],
                                o
                              )),
                              T.appendChild(C)),
                            (T.title = o);
                        };
                      E(),
                        (T.onclick = function () {
                          (n._audioButtonOn = !n._audioButtonOn),
                            E(),
                            n.onAudioToggle(n._audioButtonOn);
                        }),
                        r.appendChild(T),
                        (this.audioButton = T);
                    }
                    if (!this.settings.embedded) {
                      var w = this.utils.createButton([
                        "header-button",
                        "button-close",
                      ]);
                      if (
                        ((w.title = l.close),
                        (_ =
                          null !== (t = this.settings.closeIcon) && void 0 !== t
                            ? t
                            : c.SVG_SPRITE.icon_bot_collapse),
                        s.utils.isSvg(_))
                      ) {
                        var x = this.utils.createElementFromString(_, [
                          "header-button-icon",
                        ]);
                        x.setAttribute("role", "img"),
                          x.setAttribute("aria-label", w.title),
                          w.appendChild(x);
                      } else {
                        var A = this.utils.createImage(
                          _,
                          ["header-button-img-icon"],
                          w.title
                        );
                        w.appendChild(A);
                      }
                      (w.onclick = this.closeWidgetPopup.bind(this)),
                        r.appendChild(w),
                        (this.closeButton = w);
                    }
                    return i.appendChild(r), (this.actionsContainer = r), i;
                  }),
                  (t.prototype.updateStatusMessage = function (e) {
                    (this.networkStatus.className =
                      this.utils.getCssClassWithPrefix("connection-status")),
                      (this.chatStatus = e);
                    var t =
                      this.currentTranslations ||
                      this.i18n[this.settings.locale];
                    switch (e) {
                      case a.CONNECTION_STATE.OPEN:
                        (this.networkStatus.innerText = t.connected),
                          this.utils.removeCSSClass(
                            this.networkStatus,
                            this.utils.getCssClassWithPrefix("connecting"),
                            this.utils.getCssClassWithPrefix("disconnected")
                          ),
                          this.utils.addCSSClass(
                            this.networkStatus,
                            this.utils.getCssClassWithPrefix("connected")
                          );
                        break;
                      case a.CONNECTION_STATE.CLOSED:
                        (this.networkStatus.innerText = t.disconnected),
                          this.utils.removeCSSClass(
                            this.networkStatus,
                            this.utils.getCssClassWithPrefix("connecting"),
                            this.utils.getCssClassWithPrefix("connected")
                          ),
                          this.utils.addCSSClass(
                            this.networkStatus,
                            this.utils.getCssClassWithPrefix("disconnected")
                          );
                        break;
                      case a.CONNECTION_STATE.CLOSING:
                        (this.networkStatus.innerText = t.closing),
                          this.utils.removeCSSClass(
                            this.networkStatus,
                            this.utils.getCssClassWithPrefix("connected"),
                            this.utils.getCssClassWithPrefix("disconnected")
                          ),
                          this.utils.addCSSClass(
                            this.networkStatus,
                            this.utils.getCssClassWithPrefix("connecting")
                          );
                        break;
                      case a.CONNECTION_STATE.CONNECTING:
                        (this.networkStatus.innerText = t.connecting),
                          this.utils.removeCSSClass(
                            this.networkStatus,
                            this.utils.getCssClassWithPrefix("connected"),
                            this.utils.getCssClassWithPrefix("disconnected")
                          ),
                          this.utils.addCSSClass(
                            this.networkStatus,
                            this.utils.getCssClassWithPrefix("connecting")
                          );
                    }
                    this.networkStatus.title = this.networkStatus.innerText;
                  }),
                  t
                );
              })(r.Component);
            t.ChatHeaderComponent = u;
          },
          7825: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.WidgetMainComponent = void 0);
            var s = (function (e) {
              function t(t, n) {
                var i = e.call(this, t) || this;
                return (i.settings = n), (i.element = i._createElement()), i;
              }
              return (
                o(t, e),
                (t.prototype.render = function (e) {}),
                (t.prototype._createElement = function () {
                  return this.utils.createElement("div", ["conversation"]);
                }),
                t
              );
            })(n(248).Component);
            t.WidgetMainComponent = s;
          },
          9401: function (e, t, n) {
            "use strict";
            var i =
              (this && this.__assign) ||
              function () {
                return (i =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                      for (var o in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }).apply(this, arguments);
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.MultiLangChatComponent = void 0);
            var o = n(9886),
              s = n(983),
              r = n(1210),
              a = n(7642),
              c = n(8216),
              l = n(2158),
              h = n(3289),
              u = (function () {
                function e(e, t) {
                  var n,
                    i = this;
                  (this.langOptions = e),
                    (this.config = t),
                    (this.isFirstConnection = !0),
                    (this.isWidgetOpen = !1),
                    (this.isTTSEnabled = !0),
                    (this.isVoiceEnabled = !0),
                    (this.recognitionLocaleMap = {}),
                    (this.synthesisLocaleVoiceMap = {}),
                    (this.localizedText = t.settings.i18n[t.settings.locale]),
                    this.config.chatService.on(
                      l.ChatServerEvent.STATUS,
                      this.onChatNetworkChange.bind(this)
                    ),
                    (t.settings.initMessageOptions &&
                      "expand" !== t.settings.initMessageOptions.sendAt) ||
                    t.settings.openChatOnLoad ||
                    t.settings.embedded
                      ? (this.isWidgetOpen = !0)
                      : this.config.chatWidget.on(
                          a.ChatEvent.WIDGET_OPENED,
                          this.onChatExpand.bind(this)
                        ),
                    c.getValues(o.SPEECH_LOCALE).forEach(function (e) {
                      i.recognitionLocaleMap[e.substring(0, 2)] = e;
                    }),
                    this.setPreferredLocale(
                      o.SPEECH_LOCALE.EN_GB,
                      this.recognitionLocaleMap
                    ),
                    this.setPreferredLocale(
                      o.SPEECH_LOCALE.EN_AU,
                      this.recognitionLocaleMap
                    ),
                    e.supportedLangs.forEach(function (e) {
                      (e.lang = e.lang.toLowerCase()),
                        (e.label =
                          e.label ||
                          i.localizedText["language_" + e.lang] ||
                          e.lang);
                    }),
                    e.primary && (e.primary = e.primary.toLowerCase()),
                    (null === (n = t.synthesisVoices) || void 0 === n
                      ? void 0
                      : n.length) &&
                      e.supportedLangs.forEach(function (e) {
                        var n = t.synthesisVoices.find(function (t) {
                          return t.lang.indexOf(e.lang) >= 0;
                        });
                        n && (i.synthesisLocaleVoiceMap[e.lang] = n);
                      }),
                    e.supportedLangs.length > 1
                      ? e.supportedLangs.unshift({
                          lang: "und",
                          label: this.localizedText.language_detect,
                        })
                      : (e.primary = e.supportedLangs[0].lang),
                    (this.supportedLangList =
                      this.langOptions.supportedLangs.map(function (e) {
                        return e.lang;
                      })),
                    t.speechSynthesisService ||
                      (this.updateSynthesis = function () {}),
                    t.voiceRecognitionService ||
                      (this.updateRecognition = function () {});
                }
                return (
                  (e.prototype.render = function () {
                    var e = this;
                    return this.langOptions.supportedLangs.length < 2
                      ? null
                      : (this.component ||
                          ((this.component = this.config.util.createElement(
                            "select",
                            ["language-selection"]
                          )),
                          this.component.setAttribute(
                            "aria-label",
                            this.localizedText.languageSelectDropdown
                          ),
                          this.setComponentDisabled(!1),
                          this.langOptions.supportedLangs.forEach(function (t) {
                            var n = e.config.util.createElement("option", [
                              "language-selection-option",
                            ]);
                            (n.innerText = t.label),
                              (n.value = t.lang),
                              e.component.appendChild(n);
                          }),
                          this.component.addEventListener(
                            "change",
                            function () {
                              e.selectLanguage(e.component.value);
                            }
                          )),
                        this.component);
                  }),
                  (e.prototype.setSelectedLanguage = function (e) {
                    "string" == typeof e &&
                      e.length &&
                      ((e = e.toLowerCase()),
                      this.component && (this.component.value = e),
                      this.supportedLangList.indexOf(e) >= 0
                        ? this.selectLanguage(e)
                        : this.selectLanguage("und"));
                  }),
                  (e.prototype.selectLanguage = function (e) {
                    "und" === e && (e = null),
                      this.updateProfile(e),
                      this.config.storageService.setItem(
                        this.getStorageKey(),
                        e
                      ),
                      this.updateSynthesis(e),
                      this.updateRecognition(e),
                      this.config.chatWidget.onLanguageUpdate(e),
                      this.setLocale(e),
                      this.config.eventDispatcher.trigger(
                        a.ChatEvent.CHAT_LANG,
                        e
                      );
                  }),
                  (e.prototype.updateProfile = function (e) {
                    if (this.config.chatService.isConnectionOpen()) {
                      var t = { profile: { languageTag: e } };
                      e || (t.profile.locale = e),
                        this.config.chatService.updateUser(t, { delegate: !1 });
                    } else this.pendingProfileLanguage = e;
                  }),
                  (e.prototype.updateSynthesis = function (e) {
                    if (e) {
                      this.isTTSEnabled ||
                        (this.config.chatWidget.enableSpeechSynthesisService(
                          !0
                        ),
                        (this.isTTSEnabled = !0));
                      var t = this.synthesisLocaleVoiceMap[e] || e;
                      this.config.speechSynthesisService.setVoice([
                        { lang: t },
                      ]);
                    } else
                      (this.isTTSEnabled = !1),
                        this.config.speechSynthesisService.cancel(),
                        this.config.chatWidget.enableSpeechSynthesisService(!1);
                  }),
                  (e.prototype.updateRecognition = function (e) {
                    var t = this.recognitionLocaleMap[e];
                    t
                      ? (this.isVoiceEnabled ||
                          (this.config.chatWidget.setVoiceRecognitionService(
                            !0
                          ),
                          (this.isVoiceEnabled = !0)),
                        this.config.voiceRecognitionService.isInitialized() &&
                          this.config.voiceRecognitionService.setSpeechLocale(
                            t
                          ))
                      : ((this.isVoiceEnabled = !1),
                        this.config.voiceRecognitionService.isRecording() &&
                          this.config.voiceRecognitionService.stopRecording(),
                        this.config.voiceRecognitionService.isInitialized() &&
                          this.config.voiceRecognitionService.setSpeechLocale(
                            null
                          ),
                        this.config.chatWidget.setVoiceRecognitionService(!1));
                  }),
                  (e.prototype.setComponentDisabled = function (e) {
                    this.component && (this.component.disabled = e);
                  }),
                  (e.prototype.setLocale = function (e) {
                    var t = i(
                        i({}, this.localizedText),
                        this.config.settings.i18n[e]
                      ),
                      n = this.langOptions.supportedLangs.map(function (e) {
                        return t["language_" + e.lang] || e.label || e.lang;
                      });
                    this.component.setAttribute(
                      "aria-label",
                      t.languageSelectDropdown
                    );
                    for (var o = 0; o < this.component.childElementCount; o++) {
                      var s = this.component.children[o];
                      s.innerText = 0 !== o ? n[o] : t.language_detect;
                    }
                  }),
                  (e.prototype.onChatNetworkChange = function (e) {
                    e === s.CONNECTION_STATE.OPEN
                      ? (this.setComponentDisabled(!1),
                        this.initFirstLanguageSelection(),
                        this.pendingProfileLanguage &&
                          (this.updateProfile(this.pendingProfileLanguage),
                          (this.pendingProfileLanguage = null)))
                      : this.setComponentDisabled(!0);
                  }),
                  (e.prototype.onChatExpand = function () {
                    this.isWidgetOpen ||
                      ((this.isWidgetOpen = !0),
                      this.initFirstLanguageSelection());
                  }),
                  (e.prototype.initFirstLanguageSelection = function () {
                    if (this.isFirstConnection && this.isWidgetOpen) {
                      var e = this.config.storageService.getItem(
                        this.getStorageKey()
                      );
                      (e && "null" !== e) ||
                        (e = this.langOptions.primary) ||
                        (e = "und"),
                        this.setSelectedLanguage(e),
                        (this.isFirstConnection = !1);
                    }
                  }),
                  (e.prototype.getStorageKey = function () {
                    return (
                      r.Constants.SDK_NAME +
                      "-" +
                      this.config.settings.channelId +
                      "-" +
                      this.config.settings.userId
                    );
                  }),
                  (e.prototype.setPreferredLocale = function (e, t) {
                    h.getBrowserLocale() === e && (t[e.substring(0, 2)] = e);
                  }),
                  e
                );
              })();
            t.MultiLangChatComponent = u;
          },
          248: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Component = void 0);
            var n = (function () {
              function e(e) {
                this.utils = e;
              }
              return (
                (e.prototype.addClass = function (e) {
                  this.utils.addCSSClass(
                    this.element,
                    this.utils.getCssClassWithPrefix(e)
                  );
                }),
                (e.prototype.hide = function (e) {
                  void 0 === e && (e = !0),
                    e
                      ? ((this._orgDisplayStyle = this.element.style.display),
                        (this.element.style.display = "none"))
                      : (this.element.style.display = this._orgDisplayStyle);
                }),
                (e.prototype.remove = function () {
                  this.element.remove();
                }),
                (e.prototype.appendToElement = function (e) {
                  e.appendChild(this.element);
                }),
                (e.prototype.prependToElement = function (e) {
                  var t = e.firstChild;
                  t
                    ? e.insertBefore(this.element, t)
                    : e.appendChild(this.element);
                }),
                (e.prototype.appendContentChildElement = function (e) {
                  this._getContentElement().appendChild(e);
                }),
                (e.prototype.appendContentChild = function (e) {
                  this._getContentElement().appendChild(e.element);
                }),
                (e.prototype._getContentElement = function () {
                  return this.element;
                }),
                e
              );
            })();
            t.Component = n;
          },
          6545: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.defaultSettings = void 0);
            var i = n(9886);
            t.defaultSettings = {
              badgePosition: { right: "-5px", top: "-5px" },
              chatBubbleIconHeight: "42px",
              chatBubbleIconWidth: "56px",
              clientAuthEnabled: !1,
              conversationBeginPosition: "top",
              disablePastActions: "all",
              displayActionsAsPills: !1,
              embedded: !1,
              embeddedVideo: !0,
              enableAttachment: !0,
              enableAttachmentSecurity: !1,
              enableAutocomplete: !1,
              enableAutocompleteClientCache: !1,
              enableBotAudioResponse: !1,
              enableClearMessage: !1,
              enableHeadless: !1,
              enableLocalConversationHistory: !1,
              enableLongPolling: !1,
              enableSecureConnection: !0,
              enableSpeech: !1,
              enableSpeechAutoSend: !0,
              enableTimestamp: !0,
              errorIcon:
                "data:image/svg+xml,%3Csvg%20id%3D%22Layer_1%22%20data-name%3D%22Layer%201%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Ctitle%3Estat_error_16%3C%2Ftitle%3E%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%228%22%20fill%3D%22%23e4001e%22%2F%3E%3Cpath%20d%3D%22M11.686%2C5.817a1.063%2C1.063%2C0%2C0%2C0-1.5-1.5L8%2C6.5%2C5.818%2C4.314a1.063%2C1.063%2C0%2C0%2C0-1.5%2C1.5L6.5%2C8%2C4.314%2C10.183a1.063%2C1.063%2C0%2C0%2C0%2C1.5%2C1.5L8%2C9.5l2.183%2C2.183a1.063%2C1.063%2C0%2C0%2C0%2C1.5-1.5L9.5%2C8Z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E",
              fileIcon:
                "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%2341bfec%22%20d%3D%22M6%202c-1.1%200-1.99.9-1.99%202L4%2020c0%201.1.89%202%201.99%202H18c1.1%200%202-.9%202-2V8l-6-6H6zm7%207V3.5L18.5%209H13z%22%2F%3E%3C%2Fsvg%3E",
              focusOnNewMessage: "input",
              font: '16px "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontFamily:
                '"Oracle Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
              height: "620px",
              i18n: {
                en: {
                  attachmentAudioFallback:
                    "Your browser does not support embedded audio. However you can {0}download it{/0}.",
                  attachmentVideoFallback:
                    "Your browser does not support embedded video. However you can {0}download it{/0}.",
                  audioResponseOff: "Turn audio response on",
                  audioResponseOn: "Turn audio response off",
                  card: "Card",
                  cardImagePlaceholder: "Card image",
                  cardNavNext: "Next card",
                  cardNavPrevious: "Previous card",
                  chatTitle: "Chat",
                  clear: "Clear conversation",
                  close: "Close widget",
                  closing: "Closing",
                  connected: "Connected",
                  connecting: "Connecting",
                  disconnected: "Disconnected",
                  errorSpeechInvalidUrl:
                    "Speech server URL not set. Can't start recording.",
                  errorSpeechMultipleConnection:
                    "A voice recognition connection is live. Can't start another connection.",
                  errorSpeechTooMuchTimeout:
                    "Too much voice input to recognize. Can't generate recognized text.",
                  errorSpeechUnavailable:
                    "Microphone is not accessible in this browser. Can't start recording.",
                  errorSpeechUnsupportedLocale:
                    "The set speech locale is not supported. Can't start recording.",
                  inputPlaceholder: "Type a message",
                  language_ar: "Arabic",
                  language_de: "German",
                  language_detect: "Detect Language",
                  language_en: "English",
                  language_es: "Spanish",
                  language_fr: "French",
                  language_it: "Italian",
                  language_nl: "Dutch",
                  language_pt: "Portuguese",
                  languageSelectDropdown: "Select chat language",
                  noSpeechTimeout:
                    "Could not detect the voice, no message sent.",
                  openMap: "Open Map",
                  previousChats: "Previous conversations",
                  recognitionTextPlaceholder: "Speak your message",
                  relTimeDay: "{0}d ago",
                  relTimeHr: "{0}hr ago",
                  relTimeMin: "{0}min ago",
                  relTimeMoment: "A few seconds ago",
                  relTimeMon: "{0}mth ago",
                  relTimeNow: "Now",
                  relTimeYr: "{0}yr ago",
                  requestLocation: "Requesting location",
                  requestLocationDeniedPermission:
                    "Location permission denied. Please allow access to share your location, or else type in your location.",
                  requestLocationDeniedTimeout:
                    "Taking too long to get your current location. Please try again, or else type in your location.",
                  requestLocationDeniedUnavailable:
                    "Your current location is unavailable. Please try again, or else type in your location.",
                  retryMessage: "Try again",
                  send: "Send message",
                  shareAudio: "Share Audio",
                  shareFailureMessage:
                    "Sorry, sharing is not available on this device.",
                  shareFile: "Share File",
                  shareLocation: "Share Location",
                  shareVisual: "Share Image/Video",
                  skillMessage: "Skill says",
                  speak: "Speak a message",
                  typingIndicator: "Waiting for response",
                  upload: "Share popup",
                  uploadFailed: "Upload Failed.",
                  uploadFileSizeLimitExceeded:
                    "Upload Failed. File size should not be more than {0}MB.",
                  uploadFileSizeZeroByte:
                    "Upload Failed. Files of size zero bytes can't be uploaded.",
                  uploadUnsupportedFileType:
                    "Upload Failed. Unsupported file type.",
                  userMessage: "I say",
                  utteranceGeneric: "Message from skill.",
                  webViewAccessibilityTitle:
                    "In-widget WebView to display links",
                  webViewClose: "Done",
                  webViewErrorInfoDismiss: "Dismiss",
                  webViewErrorInfoText:
                    "Don’t see the page? {0}Click here{/0} to open it in a browser.",
                },
              },
              imageIcon:
                "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%2341bfec%22%20d%3D%22M6%202c-1.1%200-1.99.9-1.99%202L4%2020c0%201.1.89%202%201.99%202H18c1.1%200%202-.9%202-2V8l-6-6H6zm7%207V3.5L18.5%209H13z%22%2F%3E%3C%2Fsvg%3E",
              initBotAudioMuted: !0,
              isDebugMode: !1,
              locale: "en",
              logoIcon:
                "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23fff%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M18%2C16.99H11.733L8%2C21.125a1.119%2C1.119%2C0%2C0%2C1-1.021-1.36V16.99H6a5.849%2C5.849%2C0%2C0%2C1-6-5.87A6.061%2C6.061%2C0%2C0%2C1%2C6%2C5H18a6.061%2C6.061%2C0%2C0%2C1%2C6%2C6.12A5.849%2C5.849%2C0%2C0%2C1%2C18%2C16.99ZM6%2C9a2%2C2%2C0%2C1%2C0%2C2%2C2A2%2C2%2C0%2C0%2C0%2C6%2C9Zm6%2C0a2%2C2%2C0%2C1%2C0%2C2%2C2A2%2C2%2C0%2C0%2C0%2C12%2C9Zm6%2C0a2%2C2%2C0%2C1%2C0%2C2%2C2A2%2C2%2C0%2C0%2C0%2C18%2C9Z%22%2F%3E%3C%2Fsvg%3E",
              messageCacheSizeLimit: 2e3,
              openChatOnLoad: !1,
              openLinksInNewWindow: !1,
              readMark: "✓",
              reconnectInterval: 5,
              reconnectMaxAttempts: 50,
              reconnectTimeout: 300,
              shareMenuItems: [
                i.ShareCategory.AUDIO,
                i.ShareCategory.FILE,
                i.ShareCategory.LOCATION,
                i.ShareCategory.VISUAL,
              ],
              showConnectionStatus: !1,
              showPrevConvStatus: !0,
              showTypingIndicator: !0,
              speechLocale: i.SPEECH_LOCALE.EN_US,
              theme: i.IWidgetTheme.DEFAULT,
              timestampMode: "default",
              typingIndicatorTimeout: 20,
              upgradeToWebSocketInterval: 300,
              videoIcon:
                "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%2341bfec%22%20d%3D%22M6%202c-1.1%200-1.99.9-1.99%202L4%2020c0%201.1.89%202%201.99%202H18c1.1%200%202-.9%202-2V8l-6-6H6zm7%207V3.5L18.5%209H13z%22%2F%3E%3C%2Fsvg%3E",
              webViewConfig: {},
              width: "375px",
            };
          },
          2004: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ActionComponentFactory = void 0);
            var i = n(911),
              o = n(6784),
              s = n(2703),
              r = n(7002),
              a = n(4610),
              c = n(1886),
              l = n(7605),
              h = (function () {
                function e() {}
                return (
                  (e.fromActionPayload = function (t, n, l, h, u, d) {
                    switch (n.type) {
                      case i.ACTION_TYPE.POSTBACK:
                        return new r.PostbackActionComponent(t, n);
                      case i.ACTION_TYPE.URL:
                        return new c.UrlActionComponent(t, n, l, u);
                      case i.ACTION_TYPE.WEBVIEW:
                        return new c.UrlActionComponent(
                          t,
                          n,
                          l,
                          d.webviewLinkHandler
                        );
                      case i.ACTION_TYPE.LOCATION:
                        return new s.LocationActionComponent(t, n);
                      case i.ACTION_TYPE.CALL:
                        return new o.CallActionComponent(t, n);
                      case i.ACTION_TYPE.SHARE:
                        return new a.ShareActionComponent(t, n, h);
                      default:
                        return (
                          e.logger.error(
                            "Payload contains wrong action type:" + n.type
                          ),
                          null
                        );
                    }
                  }),
                  (e.logger = new l.Logger("ActionComponentFactory")),
                  e
                );
              })();
            t.ActionComponentFactory = h;
          },
          2777: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.MessageComponentFactory = void 0);
            var i = n(4255),
              o = n(5431),
              s = n(3068),
              r = n(1819),
              a = n(4261),
              c = n(9171),
              l = n(8843),
              h = n(8407),
              u = n(8216),
              d = (function () {
                function e() {}
                return (
                  (e.fromMessage = function (e, t, n, u, d) {
                    var p, g, f, m;
                    switch (
                      (n.from
                        ? ((g = c.MESSAGE_SIDE.LEFT),
                          (f =
                            null !== (p = n.source) && void 0 !== p
                              ? p
                              : i.ISkillMessageSource.BOT),
                          (m = n.messagePayload))
                        : ((g = c.MESSAGE_SIDE.RIGHT), (m = n.messagePayload)),
                      m.type)
                    ) {
                      case o.PAYLOAD_TYPE.TEXT:
                        return new h.TextMessageComponent(
                          e,
                          t,
                          m,
                          g,
                          n.date,
                          u,
                          f,
                          d
                        );
                      case o.PAYLOAD_TYPE.ATTACHMENT:
                        return new s.AttachmentMessageComponent(
                          e,
                          t,
                          m,
                          g,
                          n.date,
                          u,
                          f,
                          d
                        );
                      case o.PAYLOAD_TYPE.CARD:
                        return new r.CardMessageComponent(
                          e,
                          t,
                          m,
                          g,
                          n.date,
                          u,
                          f,
                          d
                        );
                      case o.PAYLOAD_TYPE.LOCATION:
                        return new a.LocationMessageComponent(
                          e,
                          t,
                          m,
                          g,
                          n.date,
                          u,
                          f,
                          d
                        );
                      case o.PAYLOAD_TYPE.RAW:
                        return new l.RawMessageComponent(
                          e,
                          t,
                          m,
                          g,
                          n.date,
                          u,
                          f,
                          d
                        );
                      default:
                        throw Error("Wrong message payload type:" + m.type);
                    }
                  }),
                  (e.extractUtteranceText = function (e, t) {
                    var n = (e.from, e.messagePayload),
                      i = "";
                    switch (n.type) {
                      case o.PAYLOAD_TYPE.ATTACHMENT:
                        i = this._extractUtteranceAttachment(n, t);
                        break;
                      case o.PAYLOAD_TYPE.CARD:
                        i = this._extractUtteranceCard(n, t);
                        break;
                      case o.PAYLOAD_TYPE.LOCATION:
                        i = this._extractUtteranceLocation(n);
                        break;
                      case o.PAYLOAD_TYPE.RAW:
                        i = this._extractUtteranceRaw(n);
                        break;
                      case o.PAYLOAD_TYPE.TEXT:
                        i = this._extractUtteranceText(n);
                        break;
                      default:
                        i = t.utteranceGeneric;
                    }
                    return this.stripHTMLFromText(i);
                  }),
                  (e._getUtterance = function (e, t) {
                    var n = this.stripHTMLFromText(e.headerText),
                      i = this.stripHTMLFromText(e.footerText);
                    return (
                      (null != n ? n : "") +
                      (n && t ? this.PAUSE : "") +
                      (null != t ? t : "") +
                      this._parseActionsUtterance(e.actions) +
                      (i ? this.PAUSE + i : "") +
                      this._parseActionsUtterance(e.globalActions)
                    );
                  }),
                  (e._parseActionsUtterance = function (e) {
                    var t = this,
                      n = "";
                    return (
                      e &&
                        e.forEach(function (e) {
                          e.label && (n = n.concat(t.PAUSE).concat(e.label));
                        }),
                      n
                    );
                  }),
                  (e._extractUtteranceAttachment = function (e, t) {
                    return this._getUtterance(
                      e,
                      t[e.type + "-" + e.attachment.type]
                    );
                  }),
                  (e._extractUtteranceCard = function (e, t) {
                    var n = this,
                      i = "";
                    return (
                      e.cards &&
                        e.cards.forEach(function (e, o) {
                          i && (i += n.PAUSE),
                            (i = i.concat(t.card + " " + (o + 1))),
                            e.title && (i = i.concat(n.PAUSE).concat(e.title)),
                            e.description &&
                              (i = i.concat(n.PAUSE).concat(e.description)),
                            e.actions &&
                              (i = i.concat(
                                n._parseActionsUtterance(e.actions)
                              ));
                        }),
                      this._getUtterance(e, i)
                    );
                  }),
                  (e._extractUtteranceLocation = function (e) {
                    return this._getUtterance(
                      e,
                      e.location.title ? e.location.title : ""
                    );
                  }),
                  (e._extractUtteranceRaw = function (e) {
                    return this._getUtterance(e, e.payload);
                  }),
                  (e._extractUtteranceText = function (e) {
                    return this._getUtterance(e, e.text);
                  }),
                  (e.stripHTMLFromText = function (t) {
                    return (t =
                      null ==
                      (t =
                        null ==
                        (t =
                          null == t
                            ? void 0
                            : t.replace(
                                u.resetRegex(e.REGEX_ENCODED_TEXT),
                                function (e, t) {
                                  return String.fromCharCode(t);
                                }
                              ))
                          ? void 0
                          : t.replace(
                              u.resetRegex(e.REGEX_ENCODED_HEX_TEXT),
                              function (e, t) {
                                return (t = "0x" + t), String.fromCharCode(t);
                              }
                            ))
                        ? void 0
                        : t.replace(u.resetRegex(e.REGEX_HTML), ""));
                  }),
                  (e.PAUSE = "; "),
                  (e.REGEX_HTML = /<[^>]+>/g),
                  (e.REGEX_ENCODED_TEXT = /&#(\d+);/g),
                  (e.REGEX_ENCODED_HEX_TEXT = /&#[xX]([\da-fA-F]+);/g),
                  e
                );
              })();
            t.MessageComponentFactory = d;
          },
          5320: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.JWT = void 0);
            var n = (function () {
              function e(e) {
                this.token = e;
                var t = this.token.split(".");
                (this.header = JSON.parse(atob(t[0]))),
                  (this.payload = JSON.parse(atob(t[1])));
              }
              return (
                (e.prototype.getClaim = function (e) {
                  return this.payload[e];
                }),
                e
              );
            })();
            t.JWT = n;
          },
          7605: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Logger = void 0);
            var n = (function () {
              function e(e) {
                this.module = e;
              }
              return (
                (e.prototype.debug = function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  this._log(e.LOG_LEVEL.DEBUG, t);
                }),
                (e.prototype.error = function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  this._log(e.LOG_LEVEL.ERROR, t);
                }),
                (e.prototype.info = function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  this._log(e.LOG_LEVEL.INFO, t);
                }),
                (e.prototype.warn = function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  this._log(e.LOG_LEVEL.WARN, t);
                }),
                (e.prototype._log = function (t, n) {
                  if (e.logLevel >= t) {
                    n.unshift(
                      "[" +
                        e.appName +
                        "." +
                        e.appVersion +
                        "." +
                        this.module +
                        "]"
                    );
                    var i = void 0;
                    switch (e.logLevel) {
                      case e.LOG_LEVEL.ERROR:
                        i = console.error;
                        break;
                      case e.LOG_LEVEL.WARN:
                        i = console.warn;
                        break;
                      case e.LOG_LEVEL.INFO:
                        i = console.info;
                        break;
                      case e.LOG_LEVEL.DEBUG:
                        i = console.debug;
                    }
                    e.historyEnabled &&
                      (e.history.push(Object.assign({}, n, { level: t })),
                      e._historySize <= e.history.length && e.history.shift()),
                      i.apply(console, n);
                  }
                }),
                (e.LOG_LEVEL = {
                  DEBUG: 4,
                  ERROR: 1,
                  INFO: 3,
                  NONE: 0,
                  WARN: 2,
                }),
                (e.logLevel = e.LOG_LEVEL.ERROR),
                (e.history = []),
                (e.historyEnabled = !1),
                (e._historySize = 100),
                e
              );
            })();
            t.Logger = n;
          },
          9886: function (e, t) {
            "use strict";
            var n, i, o, s;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ShareCategory =
                t.StorageType =
                t.SPEECH_LOCALE =
                t.IWidgetTheme =
                  void 0),
              (function (e) {
                (e.SESSION = "sessionStorage"), (e.LOCAL = "localStorage");
              })(n || (n = {})),
              (t.StorageType = n),
              (function (e) {
                (e.CLASSIC = "classic"),
                  (e.DEFAULT = "default"),
                  (e.REDWOOD_DARK = "redwood-dark");
              })(i || (i = {})),
              (t.IWidgetTheme = i),
              (function (e) {
                (e.AUDIO = "audio"),
                  (e.FILE = "file"),
                  (e.LOCATION = "location"),
                  (e.VISUAL = "visual");
              })(o || (o = {})),
              (t.ShareCategory = o),
              (function (e) {
                (e.DE_DE = "de-de"),
                  (e.EN_AU = "en-au"),
                  (e.EN_GB = "en-gb"),
                  (e.EN_US = "en-us"),
                  (e.ES_ES = "es-es"),
                  (e.FR_FR = "fr-fr"),
                  (e.IT_IT = "it-it"),
                  (e.PT_BR = "pt-br");
              })(s || (s = {})),
              (t.SPEECH_LOCALE = s);
          },
          368: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.StorageService = void 0);
            var i = n(3289),
              o = function (e) {
                var t = this;
                (this.getItem = function (e) {
                  return t.isInternalStorage
                    ? t.memoryStorage[e]
                    : t.windowStorage.getItem(e);
                }),
                  (this.setItem = function (e, n) {
                    t.isInternalStorage
                      ? (t.memoryStorage[e] = n)
                      : t.windowStorage.setItem(e, n);
                  }),
                  (this.removeItem = function (e) {
                    t.isInternalStorage
                      ? delete t.memoryStorage[e]
                      : t.windowStorage.removeItem(e);
                  }),
                  i.isStorageAvailable(e)
                    ? ((this.isInternalStorage = !1),
                      (this.windowStorage = window[e]))
                    : ((this.isInternalStorage = !0),
                      (this.memoryStorage = {}));
              };
            t.StorageService = o;
          },
          2772: function (e, t, n) {
            "use strict";
            var i =
              (this && this.__spreadArrays) ||
              function () {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                  e += arguments[t].length;
                var i = Array(e),
                  o = 0;
                for (t = 0; t < n; t++)
                  for (
                    var s = arguments[t], r = 0, a = s.length;
                    r < a;
                    r++, o++
                  )
                    i[o] = s[r];
                return i;
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.Utils = void 0);
            var o = n(1210),
              s = n(8216),
              r = (function () {
                function e() {}
                return (
                  (e.prototype.clone = function (e) {
                    return JSON.parse(JSON.stringify(e));
                  }),
                  (e.prototype.linkify = function (t, n) {
                    var i,
                      o = this;
                    return (
                      (n = n || {}).embeddedHTML || (t = s.sanitizeText(t)),
                      (i =
                        null ==
                        (i =
                          null == t
                            ? void 0
                            : t.replace(
                                s.resetRegex(e.REGEX_HTTPS),
                                function (e, t, i) {
                                  if (t) return e;
                                  var s = n.embeddedVideo
                                    ? o.getYouTubeVideoId(i)
                                    : null;
                                  return s
                                    ? o.getEmbeddedYouTubeVideoString(s)
                                    : '<a href="' +
                                        i +
                                        '" target="_blank">' +
                                        i +
                                        "</a>";
                                }
                              ))
                          ? void 0
                          : i.replace(
                              s.resetRegex(e.REGEX_WWW),
                              function (e, t, i, s) {
                                if (t || i) return e;
                                var r = n.embeddedVideo
                                  ? o.getYouTubeVideoId("https://" + i)
                                  : null;
                                return r
                                  ? o.getEmbeddedYouTubeVideoString(r)
                                  : '<a href="' +
                                      s +
                                      '" target="_blank">' +
                                      s +
                                      "</a>";
                              }
                            ))
                    );
                  }),
                  (e.prototype.getYouTubeVideoId = function (t) {
                    var n = null;
                    return (
                      t.replace(
                        s.resetRegex(e.REGEX_YOUTUBE),
                        function (e, t, i) {
                          return (null == i ? void 0 : i.length) && (n = i), e;
                        }
                      ),
                      n
                    );
                  }),
                  (e.prototype.getEmbeddedYouTubeVideoString = function (e) {
                    return (
                      '<iframe width="100%" src="https://www.youtube.com/embed/' +
                      e +
                      '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                    );
                  }),
                  (e.prototype.getCssClassWithPrefix = function (e) {
                    return o.Constants.SDK_NAME + "-" + e;
                  }),
                  (e.prototype.createButton = function (e) {
                    var t = this.createElement("button", e);
                    return (t.type = "button"), t;
                  }),
                  (e.prototype.createAnchor = function (e, t, n, i, o) {
                    void 0 === i && (i = !1);
                    var s = this.createElement("a", n);
                    s.rel = "noreferrer noopener";
                    var r = !1;
                    return (
                      e && (s.href = e),
                      o &&
                        (o.onclick &&
                          ((s.onclick = o.onclick.bind(s)), (r = !0)),
                        o.target && ((s.target = o.target), (r = !0))),
                      r ||
                        (i
                          ? s.addEventListener("click", function (t) {
                              return (
                                window.open(
                                  e,
                                  "",
                                  "height=450px,width=800px,menubar,toolbar,personalbar,status,resizable,noopener,noreferrer"
                                ),
                                t.preventDefault(),
                                t.stopPropagation(),
                                !1
                              );
                            })
                          : (s.target = "_blank")),
                      t ? (s.innerText = t) : e && (s.innerText = e),
                      s
                    );
                  }),
                  (e.prototype.createElementFromString = function (e, t) {
                    var n = this,
                      o = document.createElement("div");
                    o.innerHTML = e.trim();
                    var s = o.firstElementChild;
                    return (
                      t &&
                        this.addCSSClass.apply(
                          this,
                          i(
                            [o.firstElementChild],
                            t.map(function (e) {
                              return n.getCssClassWithPrefix(e);
                            })
                          )
                        ),
                      s
                    );
                  }),
                  (e.prototype.createElement = function (e, t) {
                    var n = document.createElement(e);
                    return this.addClasses(n, t), n;
                  }),
                  (e.prototype.createInput = function (e, t) {
                    var n = this.createElement("input", e);
                    return t && (n.type = t), n;
                  }),
                  (e.prototype.createImage = function (e, t, n) {
                    var i = this.createElement("img", t);
                    return (
                      e && (i.src = e),
                      n && (i.alt = n),
                      i.setAttribute("draggable", "false"),
                      i
                    );
                  }),
                  (e.prototype.createAudio = function (e, t, n) {
                    var i = this.createElement("audio", t);
                    return (
                      e && (i.src = e), (i.autoplay = void 0 !== n && n), i
                    );
                  }),
                  (e.prototype.createVideo = function (e, t, n) {
                    var i = this.createElement("video", t);
                    return (
                      e && (i.src = e), (i.autoplay = void 0 !== n && n), i
                    );
                  }),
                  (e.prototype.createWrappedSvg = function (e, t) {
                    var n = this.createElement("div", t);
                    return n.appendChild(e), n;
                  }),
                  (e.prototype.createHTML = function (e) {
                    var t = this.createElement("div");
                    return (t.innerHTML = e), t;
                  }),
                  (e.prototype.createLabel = function (e, t) {
                    var n = this.createElement("label", t);
                    return (n.textContent = e), n;
                  }),
                  (e.prototype.createIFrame = function (e, t) {
                    var n = this.createElement("iframe", t);
                    return (n.name = e), n;
                  }),
                  (e.prototype.createStyle = function (e) {
                    var t = this.createElement("style");
                    return (
                      (t.type = "text/css"),
                      t.appendChild(document.createTextNode(e)),
                      t
                    );
                  }),
                  (e.prototype.addStyleToHTML = function (e) {
                    window && document.head.appendChild(e);
                  }),
                  (e.prototype.addCSSClass = function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                    e.classList
                      ? t.forEach(function (t) {
                          return e.classList.add(t);
                        })
                      : e.setAttribute(
                          "class",
                          t.reduce(function (e, t) {
                            return e + " " + t;
                          }, "")
                        );
                  }),
                  (e.prototype.removeCSSClass = function (e) {
                    for (var t, n, i = [], o = 1; o < arguments.length; o++)
                      i[o - 1] = arguments[o];
                    if (e.classList)
                      i.forEach(function (t) {
                        return e.classList.remove(t);
                      });
                    else {
                      var s =
                        null !==
                          (n =
                            null === (t = e.getAttribute("class")) ||
                            void 0 === t
                              ? void 0
                              : t.split(" ")) && void 0 !== n
                          ? n
                          : [];
                      if (s.length) {
                        var r = s
                          .filter(function (e) {
                            return i.indexOf(e) < 0;
                          })
                          .join(" ");
                        e.setAttribute("class", r);
                      }
                    }
                  }),
                  (e.prototype.addClasses = function (e, t) {
                    var n = this;
                    return (
                      e.dir ? (e.dir = "auto") : e.setAttribute("dir", "auto"),
                      e.setAttribute("dir", "auto"),
                      t &&
                        this.addCSSClass.apply(
                          this,
                          i(
                            [e],
                            t.map(function (e) {
                              return n.getCssClassWithPrefix(e);
                            })
                          )
                        ),
                      e
                    );
                  }),
                  (e.REGEX_HTTPS =
                    /((?:href|src)\s*=\s*['"])?(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim),
                  (e.REGEX_WWW =
                    /((?:href|src)\s*=\s*['"])?(\/\/)?(\bwww\.[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim),
                  (e.REGEX_YOUTUBE =
                    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/gi),
                  e
                );
              })();
            t.Utils = r;
          },
          3733: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ActionComponent = void 0);
            var i = n(911),
              o = (function () {
                function e(e, t) {
                  (this.utils = e),
                    (this._disabled = !1),
                    (this._actionId = t.actionId),
                    (this._type = t.type),
                    (this._label = t.label),
                    (this._imageUrl = t.imageUrl);
                }
                return (
                  (e.prototype.render = function () {
                    if (
                      ((this._htmlElement = this.utils.createButton()),
                      (this._htmlElement.onclick =
                        this.handleOnClick.bind(this)),
                      this._imageUrl)
                    ) {
                      var e = this.utils.createImage(
                        this._imageUrl,
                        ["action-image"],
                        this._label || ""
                      );
                      this._htmlElement.appendChild(e);
                    }
                    if (this._label) {
                      var t = this.utils.linkify(this._label, {
                          embeddedHTML: !0,
                        }),
                        n = this.utils.createElement("div");
                      (n.innerHTML = t),
                        this._htmlElement.appendChild(n),
                        (this._htmlElement.title =
                          this._htmlElement.textContent);
                    }
                    return (
                      this._disabled &&
                        this.utils.addCSSClass(
                          this._htmlElement,
                          this.utils.getCssClassWithPrefix("disabled")
                        ),
                      this._htmlElement
                    );
                  }),
                  (e.prototype.handleOnClick = function (e) {
                    if (this.onActionClick && !this._disabled) {
                      var t = {
                        getPayload: this.getEventPayload.bind(this),
                        label: this._label,
                        type: this._type,
                      };
                      this.onActionClick(t);
                    }
                    (this._type !== i.ACTION_TYPE.POSTBACK &&
                      this._type !== i.ACTION_TYPE.LOCATION &&
                      this._type !== i.ACTION_TYPE.SHARE) ||
                      (e.preventDefault(), e.stopPropagation());
                  }),
                  (e.prototype.disable = function () {
                    (this._disabled = !0),
                      this._htmlElement &&
                        (this.utils.addCSSClass(
                          this._htmlElement,
                          this.utils.getCssClassWithPrefix("disabled")
                        ),
                        (this._htmlElement.disabled = !0));
                  }),
                  (e.prototype.enable = function () {
                    (this._disabled = !1),
                      this._htmlElement &&
                        (this.utils.removeCSSClass(
                          this._htmlElement,
                          this.utils.getCssClassWithPrefix("disabled")
                        ),
                        (this._htmlElement.disabled = !1));
                  }),
                  (e.prototype.getActionType = function () {
                    return this._type;
                  }),
                  e
                );
              })();
            t.ActionComponent = o;
          },
          6784: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.CallActionComponent = void 0);
            var s = n(9297),
              r = (function (e) {
                function t(t, n) {
                  var i = e.call(this, t, n) || this;
                  return (i._phoneNumber = n.phoneNumber), i;
                }
                return (
                  o(t, e),
                  (t.prototype.render = function () {
                    var t = e.prototype.render.call(this);
                    this.utils.addCSSClass(
                      t,
                      this.utils.getCssClassWithPrefix("action-postback"),
                      this.utils.getCssClassWithPrefix("action-call")
                    );
                    var n = this.utils.createAnchor("tel:" + this._phoneNumber);
                    return (
                      (this.onActionClick = function () {
                        n.click();
                      }),
                      t
                    );
                  }),
                  (t.prototype.getEventPayload = function () {
                    return s.default.resolve(this._phoneNumber);
                  }),
                  t
                );
              })(n(3733).ActionComponent);
            t.CallActionComponent = r;
          },
          2703: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.LocationActionComponent = void 0);
            var s = n(9297),
              r = (function (e) {
                function t(t, n) {
                  return e.call(this, t, n) || this;
                }
                return (
                  o(t, e),
                  (t.prototype.render = function () {
                    var t = e.prototype.render.call(this);
                    return (
                      this.utils.addCSSClass(
                        t,
                        this.utils.getCssClassWithPrefix("action-postback"),
                        this.utils.getCssClassWithPrefix("action-location")
                      ),
                      t
                    );
                  }),
                  (t.prototype.getEventPayload = function () {
                    return this.getCurrentPosition();
                  }),
                  (t.prototype.getCurrentPosition = function () {
                    return new s.default(function (e, t) {
                      setTimeout(function () {
                        navigator.geolocation.getCurrentPosition(
                          function (t) {
                            e({
                              latitude: t.coords.latitude,
                              longitude: t.coords.longitude,
                            });
                          },
                          function (e) {
                            t(e);
                          }
                        );
                      });
                    });
                  }),
                  t
                );
              })(n(3733).ActionComponent);
            t.LocationActionComponent = r;
          },
          7002: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PostbackActionComponent = void 0);
            var s = n(9297),
              r = (function (e) {
                function t(t, n) {
                  var i = e.call(this, t, n) || this;
                  return (i._postback = n.postback), i;
                }
                return (
                  o(t, e),
                  (t.prototype.render = function () {
                    var t = e.prototype.render.call(this);
                    return (
                      this.utils.addCSSClass(
                        t,
                        this.utils.getCssClassWithPrefix("action-postback")
                      ),
                      t
                    );
                  }),
                  (t.prototype.getEventPayload = function () {
                    return s.default.resolve(this._postback);
                  }),
                  t
                );
              })(n(3733).ActionComponent);
            t.PostbackActionComponent = r;
          },
          4610: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ShareActionComponent = void 0);
            var s = n(9297),
              r = (function (e) {
                function t(t, n, i) {
                  var o = e.call(this, t, n) || this;
                  return (o.shareText = i), o;
                }
                return (
                  o(t, e),
                  (t.prototype.render = function () {
                    var t = e.prototype.render.call(this);
                    return (
                      this.utils.addCSSClass(
                        t,
                        this.utils.getCssClassWithPrefix("action-postback"),
                        this.utils.getCssClassWithPrefix("action-share")
                      ),
                      t
                    );
                  }),
                  (t.prototype.getEventPayload = function () {
                    return s.default.resolve(this.shareText);
                  }),
                  t
                );
              })(n(3733).ActionComponent);
            t.ShareActionComponent = r;
          },
          1886: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.UrlActionComponent = void 0);
            var s = n(9297),
              r = (function (e) {
                function t(t, n, i, o) {
                  void 0 === i && (i = !1);
                  var s = e.call(this, t, n) || this;
                  return (
                    (s._openInWindow = i),
                    (s._linkHandler = o),
                    (s._url = n.url),
                    s
                  );
                }
                return (
                  o(t, e),
                  (t.prototype.render = function () {
                    var t = e.prototype.render.call(this);
                    if (
                      (this.utils.addCSSClass(
                        t,
                        this.utils.getCssClassWithPrefix("action-url"),
                        this.utils.getCssClassWithPrefix("action-postback")
                      ),
                      this._url)
                    ) {
                      var n = this.utils.createAnchor(
                        this._url,
                        null,
                        [],
                        this._openInWindow,
                        this._linkHandler
                      );
                      t.onclick = function () {
                        n.click();
                      };
                    }
                    return t;
                  }),
                  (t.prototype.getEventPayload = function () {
                    return s.default.resolve(this._url);
                  }),
                  t
                );
              })(n(3733).ActionComponent);
            t.UrlActionComponent = r;
          },
          3068: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.AttachmentMessageComponent = void 0);
            var s = n(749),
              r = n(9153),
              a = n(5672),
              c = n(2115),
              l = n(6490),
              h = (function (e) {
                function t(n, i, o, s, r, a, c, l) {
                  var h = e.call(this, n, i, o, s, r, a, c, l) || this;
                  return (
                    (h._date = r),
                    (h._attachment = t.fromPayload(n, i, o.attachment, s, l)),
                    h
                  );
                }
                return (
                  o(t, e),
                  (t.fromPayload = function (e, t, n, i, o) {
                    if (
                      o &&
                      o.authToken &&
                      o.uri &&
                      n.url.indexOf(o.uri) >= 0 &&
                      !this.tokenRegex.test(n.url)
                    ) {
                      var h = null == o ? void 0 : o.authToken;
                      (null == h ? void 0 : h.length) &&
                        (n.url = n.url + "?token=" + h);
                    }
                    switch (n.type) {
                      case s.ATTACHMENT_TYPE.IMAGE:
                        return new c.ImageAttachmentComponent(e, t, n);
                      case s.ATTACHMENT_TYPE.VIDEO:
                        return new l.VideoAttachmentComponent(e, t, n, i);
                      case s.ATTACHMENT_TYPE.AUDIO:
                        return new r.AudioAttachmentComponent(e, t, n, i);
                      case s.ATTACHMENT_TYPE.FILE:
                        return new a.FileAttachmentComponent(e, t, n, i);
                      default:
                        throw Error("Payload contains wrong attachment type");
                    }
                  }),
                  (t.prototype.getContent = function () {
                    return this._attachment.render();
                  }),
                  (t.tokenRegex = /token=[a-z\.\d]+/i),
                  t
                );
              })(n(9171).MessageComponent);
            t.AttachmentMessageComponent = h;
          },
          889: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.AttachmentComponent = void 0);
            var n = (function () {
              function e(t, n) {
                (this.utils = n), (this._title = e.capitalize(t.type));
              }
              return (
                (e.capitalize = function (e) {
                  return e.charAt(0).toUpperCase() + e.slice(1);
                }),
                (e.prototype.createMessageElement = function (e, t) {
                  var n = this.utils.createElement("div", [
                      "attachment-message",
                    ]),
                    i = this.utils.createElement("div", ["attachment-icon"]);
                  i.style.backgroundImage = "url('" + e + "')";
                  var o = this.utils.createElement("div", [
                      "attachment-fileName",
                    ]),
                    s = this.utils.createElement("span", ["attachment-file"]);
                  return (
                    (s.textContent = t),
                    o.appendChild(s),
                    n.appendChild(i),
                    n.appendChild(o),
                    n
                  );
                }),
                e
              );
            })();
            t.AttachmentComponent = n;
          },
          9153: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.AudioAttachmentComponent = void 0);
            var s = n(8216),
              r = n(9171),
              a = (function (e) {
                function t(t, n, i, o) {
                  var s = e.call(this, i, t) || this;
                  return (
                    (s.settings = n),
                    (s.payload = i),
                    (s.side = o),
                    (s._url = i.url),
                    s
                  );
                }
                return (
                  o(t, e),
                  (t.prototype.render = function () {
                    var e = this,
                      t = this.utils.createAudio(this._url, [
                        "attachment-audio",
                      ]);
                    (t.controls = !0),
                      r.MESSAGE_SIDE.RIGHT === this.side &&
                        t.setAttribute("controlsList", "nodownload");
                    var n = '<a href="' + this._url + '">',
                      i = this.settings.i18n[
                        this.settings.locale
                      ].attachmentAudioFallback
                        .replace("{0}", n)
                        .replace("{/0}", "</a>");
                    return (
                      (t.innerHTML = i),
                      this.settings.linkHandler
                        ? s.utils.setEmbeddedLinksHandler(
                            t,
                            this.settings.linkHandler
                          )
                        : this.settings.openLinksInNewWindow &&
                          s.utils.setLinksOpenInNewWindow(t),
                      (t.onerror = function () {
                        var n = t.parentElement;
                        t.remove(),
                          n.appendChild(
                            e.createMessageElement(
                              e.settings.audioIcon,
                              e.payload.fileName || e.payload.title
                            )
                          );
                      }),
                      t
                    );
                  }),
                  t
                );
              })(n(889).AttachmentComponent);
            t.AudioAttachmentComponent = a;
          },
          5672: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.FileAttachmentComponent = void 0);
            var s = n(9171),
              r = (function (e) {
                function t(t, n, i, o) {
                  var s = e.call(this, i, t) || this;
                  return (
                    (s.settings = n),
                    (s.payload = i),
                    (s.side = o),
                    (s._url = i.url),
                    s
                  );
                }
                return (
                  o(t, e),
                  (t.prototype.render = function () {
                    return s.MESSAGE_SIDE.RIGHT === this.side
                      ? this.createMessageElement(
                          this.settings.fileIcon,
                          this.payload.fileName || this.payload.title
                        )
                      : this.utils.createAnchor(
                          this._url,
                          this.payload.fileName || this.payload.title,
                          ["attachment-file"],
                          this.settings.openLinksInNewWindow,
                          this.settings.linkHandler
                        );
                  }),
                  t
                );
              })(n(889).AttachmentComponent);
            t.FileAttachmentComponent = r;
          },
          2115: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ImageAttachmentComponent = void 0);
            var s = (function (e) {
              function t(t, n, i) {
                var o = e.call(this, i, t) || this;
                return (o.settings = n), (o.payload = i), (o._url = i.url), o;
              }
              return (
                o(t, e),
                (t.prototype.render = function () {
                  var e = this,
                    t = this.utils.createImage(
                      this._url,
                      ["attachment-image"],
                      this.payload.fileName || this.payload.title
                    );
                  return (
                    (t.onerror = function () {
                      t.parentElement.appendChild(
                        e.createMessageElement(
                          e.settings.imageIcon,
                          e.payload.fileName || e.payload.title
                        )
                      ),
                        t.remove();
                    }),
                    t
                  );
                }),
                t
              );
            })(n(889).AttachmentComponent);
            t.ImageAttachmentComponent = s;
          },
          6490: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.VideoAttachmentComponent = void 0);
            var s = n(8216),
              r = n(9171),
              a = (function (e) {
                function t(t, n, i, o) {
                  var s = e.call(this, i, t) || this;
                  return (
                    (s.settings = n),
                    (s.payload = i),
                    (s.side = o),
                    (s._url = i.url),
                    s
                  );
                }
                return (
                  o(t, e),
                  (t.prototype.render = function () {
                    var e = this;
                    if (this.utils.getYouTubeVideoId(this._url)) {
                      var t = this.utils.createElement("span");
                      return (
                        (t.innerHTML = this.utils.linkify(this._url, {
                          embeddedHTML: !0,
                          embeddedVideo: this.settings.embeddedVideo,
                        })),
                        t
                      );
                    }
                    var n = this.utils.createVideo(this._url, [
                      "attachment-video",
                    ]);
                    (n.controls = !0),
                      r.MESSAGE_SIDE.RIGHT === this.side &&
                        n.setAttribute("controlsList", "nodownload");
                    var i = '<a href="' + this._url + '">',
                      o = this.settings.i18n[
                        this.settings.locale
                      ].attachmentVideoFallback
                        .replace("{0}", i)
                        .replace("{/0}", "</a>");
                    return (
                      (n.innerHTML = o),
                      this.settings.linkHandler
                        ? s.utils.setEmbeddedLinksHandler(
                            n,
                            this.settings.linkHandler
                          )
                        : this.settings.openLinksInNewWindow &&
                          s.utils.setLinksOpenInNewWindow(n),
                      (n.onerror = function () {
                        var t = n.parentElement;
                        n.remove(),
                          t.appendChild(
                            e.createMessageElement(
                              e.settings.videoIcon,
                              e.payload.fileName || e.payload.title
                            )
                          );
                      }),
                      n
                    );
                  }),
                  t
                );
              })(n(889).AttachmentComponent);
            t.VideoAttachmentComponent = a;
          },
          1819: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.CardMessageComponent = void 0);
            var s = n(3609),
              r = n(4255),
              a = n(1836),
              c = n(5626),
              l = n(9171),
              h = (function (e) {
                function t(t, n, i, o, s, r, a, l) {
                  var h = e.call(this, t, n, i, o, s, r, a, l) || this;
                  (h.cards = []),
                    (h.layout = i.layout),
                    (h.numCards = i.cards.length);
                  for (var u = 0, d = 0, p = i.cards; d < p.length; d++) {
                    var g = p[d];
                    u++,
                      h.cards.push(
                        new c.CardComponent(h.utils, h.settings, g, u, l)
                      );
                  }
                  return h;
                }
                return (
                  o(t, e),
                  (t.prototype.render = function () {
                    var e,
                      t = this,
                      n = this.settings.botIcon;
                    this.source === r.ISkillMessageSource.AGENT &&
                      (n =
                        null !== (e = this.settings.agentAvatar) && void 0 !== e
                          ? e
                          : this.settings.botIcon);
                    var i =
                        this.side === l.MESSAGE_SIDE.LEFT
                          ? n
                          : this.settings.personIcon,
                      o = ["message", "card-message-" + this.layout, this.side];
                    i && o.push("has-message-icon");
                    var s = this.utils.createElement("div", o),
                      c =
                        this.side === l.MESSAGE_SIDE.LEFT
                          ? this.translations.skillMessage
                          : this.translations.userMessage,
                      h = this.utils.createElement("span", [
                        "screen-reader-only",
                      ]);
                    (h.textContent = c), s.appendChild(h);
                    var u = this.utils.createElement("div", [
                      "message-wrapper",
                    ]);
                    if (i) {
                      var d = this.utils.createElement("div", ["icon-wrapper"]);
                      d.appendChild(
                        this.utils.createImage(i, ["message-icon"])
                      ),
                        u.appendChild(d);
                    }
                    var p = this.utils.createElement(
                      "div",
                      i ? ["content-wrapper", "with-icon"] : ["content-wrapper"]
                    );
                    if (this.headerText) {
                      var g = this.utils.createElement("div", [
                        "message-bubble",
                        "message-header",
                      ]);
                      (g.innerHTML = this.utils.linkify(this.headerText, {
                        embeddedHTML: this.side === l.MESSAGE_SIDE.LEFT,
                        embeddedVideo: !0,
                      })),
                        p.appendChild(g);
                    }
                    (this.content = this.utils.createElement("div", [
                      "card-message-content",
                    ])),
                      (this.cardsWrapper = this.utils.createElement("div", [
                        "card-message-cards",
                      ]));
                    for (
                      var f, m = !0, v = 0, _ = this.cards;
                      v < _.length;
                      v++
                    ) {
                      var b = _[v];
                      b.onActionClick = this.handleOnActionClick.bind(this);
                      var y = b.render();
                      m &&
                        b.hasActions() &&
                        ((this.firstActionButton = b.getFirstActionButton()),
                        (m = !1)),
                        this.cardsWrapper.appendChild(y);
                    }
                    if (
                      (this.content.appendChild(this.cardsWrapper),
                      this.layout === a.LAYOUT.HORIZONTAL &&
                        this.numCards > 1 &&
                        (this.content.appendChild(this.getNextButton()),
                        (this.activeCard = 0),
                        this.cardsWrapper.addEventListener(
                          "scroll",
                          function () {
                            window.clearTimeout(f),
                              (f = window.setTimeout(function () {
                                for (var e = 0, n = 0; n < t.numCards; n++) {
                                  var i = t.cardsWrapper.children[n];
                                  if (
                                    t.cardsWrapper.scrollLeft <=
                                    i.offsetLeft + 5
                                  ) {
                                    e = n;
                                    break;
                                  }
                                }
                                e !== t.activeCard &&
                                  ((t.activeCard = e),
                                  t.updateCardsScrollState());
                              }, 100));
                          }
                        )),
                      p.appendChild(this.content),
                      this.footerText)
                    ) {
                      var C = this.utils.createElement("div", [
                        "message-bubble",
                        "message-footer",
                      ]);
                      (C.innerHTML = this.utils.linkify(this.footerText, {
                        embeddedHTML: this.side === l.MESSAGE_SIDE.LEFT,
                        embeddedVideo: !0,
                      })),
                        p.appendChild(C);
                    }
                    return (
                      u.appendChild(p),
                      s.appendChild(u),
                      this.appendGlobalActions(s, this.actions),
                      this.appendGlobalActions(s, this.globalActions),
                      s
                    );
                  }),
                  (t.prototype.hasActions = function () {
                    return (
                      this.cards[0].hasActions() ||
                      this.actions.length > 0 ||
                      this.globalActions.length > 0
                    );
                  }),
                  (t.prototype.disableActions = function () {
                    e.prototype.disableActions.call(this),
                      this.cards.forEach(function (e) {
                        return e.disableActions();
                      });
                  }),
                  (t.prototype.enableActions = function () {
                    e.prototype.enableActions.call(this);
                    for (var t = 0, n = this.cards; t < n.length; t++)
                      n[t].enableActions();
                  }),
                  (t.prototype.getNextButton = function () {
                    if (!this.nextButton) {
                      var e = this.translations.cardNavNext;
                      (this.nextButton = this.utils.createButton([
                        "round",
                        "next",
                      ])),
                        (this.nextButton.title = e),
                        this.nextButton.setAttribute("aria-label", e);
                      var t = this.utils.createElementFromString(
                        s.SVG_SPRITE.icon_bot_next
                      );
                      t.setAttribute("role", "img"),
                        t.setAttribute("aria-label", e),
                        this.nextButton.appendChild(t),
                        (this.nextButton.onclick =
                          this.showNextCard.bind(this));
                    }
                    return this.nextButton;
                  }),
                  (t.prototype.getPreviousButton = function () {
                    if (!this.prevButton) {
                      var e = this.translations.cardNavPrevious;
                      (this.prevButton = this.utils.createButton([
                        "round",
                        "previous",
                      ])),
                        (this.prevButton.title = e),
                        this.prevButton.setAttribute("aria-label", e);
                      var t = this.utils.createElementFromString(
                        s.SVG_SPRITE.icon_bot_previous
                      );
                      t.setAttribute("role", "img"),
                        t.setAttribute("aria-label", e),
                        this.prevButton.appendChild(t),
                        (this.prevButton.onclick =
                          this.showPrevCard.bind(this));
                    }
                    return this.prevButton;
                  }),
                  (t.prototype.showNextCard = function () {
                    this.activeCard < this.numCards &&
                      (this.activeCard++, this.updateCardsScrollState());
                  }),
                  (t.prototype.showPrevCard = function () {
                    this.activeCard > 0 &&
                      (this.activeCard--, this.updateCardsScrollState());
                  }),
                  (t.prototype.updateCardsScrollState = function () {
                    var e,
                      t,
                      n,
                      i,
                      o = this.cardsWrapper.children[this.activeCard];
                    (this.cardsWrapper.scrollLeft = o.offsetLeft),
                      0 === this.activeCard
                        ? null === (e = this.prevButton) ||
                          void 0 === e ||
                          e.remove()
                        : (null === (t = this.prevButton) || void 0 === t
                            ? void 0
                            : t.parentElement) ||
                          this.content.prepend(this.getPreviousButton()),
                      this.activeCard === this.numCards - 1
                        ? null === (n = this.nextButton) ||
                          void 0 === n ||
                          n.remove()
                        : (null === (i = this.nextButton) || void 0 === i
                            ? void 0
                            : i.parentElement) ||
                          this.content.appendChild(this.getNextButton());
                  }),
                  t
                );
              })(l.MessageComponent);
            t.CardMessageComponent = h;
          },
          5626: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.CardComponent = void 0);
            var i = n(911),
              o = n(8216),
              s = n(2004),
              r = (function () {
                function e(e, t, n, i, o) {
                  var r;
                  if (
                    ((this.utils = e),
                    (this.settings = t),
                    (this.options = o),
                    (this._actions = []),
                    (this._title = n.title),
                    (this._description = n.description),
                    (this._imageUrl = n.imageUrl),
                    (this._url = n.url),
                    n.actions)
                  )
                    for (var a = 0, c = 0, l = n.actions; c < l.length; c++) {
                      var h = l[c],
                        u =
                          (this._title ? this._title + " - " : "") +
                          (this._description ? this._description + " - " : "") +
                          (null !== (r = this._url) && void 0 !== r ? r : "");
                      a++, (h.actionId = "card" + i + "Action" + a);
                      var d = s.ActionComponentFactory.fromActionPayload(
                        e,
                        h,
                        this.settings.openLinksInNewWindow,
                        u,
                        t.linkHandler,
                        o
                      );
                      d &&
                        ((d.onActionClick =
                          this.handleOnActionClick.bind(this)),
                        this._actions.push(d));
                    }
                }
                return (
                  (e.prototype.handleOnActionClick = function (e) {
                    this.onActionClick && this.onActionClick(e);
                  }),
                  (e.prototype.handleOnActionTrigger = function (e) {
                    var t = +e.match(/\d+/g)[1];
                    return this._actions[t - 1];
                  }),
                  (e.prototype.render = function () {
                    var e = this.utils.createElement("div", ["card"]),
                      t = this._url
                        ? this.utils.createAnchor(
                            this._url,
                            "",
                            ["card-content"],
                            this.settings.openLinksInNewWindow,
                            this.settings.linkHandler
                          )
                        : this.utils.createElement("div", ["card-content"]),
                      n = this.settings.locale;
                    if ((this._url && (t.innerText = ""), this._imageUrl)) {
                      var i = this.settings.i18n,
                        s = i[n].cardImagePlaceholder;
                      this.options &&
                        this.options.locale &&
                        (s = i[this.options.locale].cardImagePlaceholder || s),
                        t.appendChild(
                          this.utils.createImage(
                            this._imageUrl,
                            ["card-image"],
                            s
                          )
                        );
                    }
                    var r = this.utils.createElement("div", ["card-title"]);
                    if (
                      ((r.innerHTML = this.utils.linkify(this._title, {
                        embeddedHTML: !0,
                        embeddedVideo: !0,
                      })),
                      t.appendChild(r),
                      this._description)
                    ) {
                      var a = this.utils.createElement("div", [
                        "card-description",
                      ]);
                      (a.innerHTML = this.utils.linkify(this._description, {
                        embeddedHTML: !0,
                        embeddedVideo: !0,
                      })),
                        t.appendChild(a);
                    }
                    if (
                      (e.appendChild(t),
                      this.settings.linkHandler
                        ? o.utils.setEmbeddedLinksHandler(
                            t,
                            this.settings.linkHandler
                          )
                        : this.settings.openLinksInNewWindow &&
                          o.utils.setLinksOpenInNewWindow(t),
                      o.setEmbeddedWebViewLinksHandler(
                        t,
                        this.options.webviewLinkHandler
                      ),
                      this._actions.length > 0)
                    ) {
                      for (
                        var c = this.utils.createElement(
                            "div",
                            this.settings.displayActionsAsPills
                              ? ["card-actions", "card-actions-pill"]
                              : ["card-actions"]
                          ),
                          l = !0,
                          h = 0,
                          u = this._actions;
                        h < u.length;
                        h++
                      ) {
                        var d = u[h].render();
                        l && ((this.firstActionButton = d), (l = !1)),
                          c.appendChild(d);
                      }
                      e.appendChild(c);
                    }
                    return e;
                  }),
                  (e.prototype.hasActions = function () {
                    return this._actions.length > 0;
                  }),
                  (e.prototype.disableActions = function () {
                    "postback" === this.settings.disablePastActions
                      ? this._actions.forEach(function (e) {
                          var t = e.getActionType();
                          (t !== i.ACTION_TYPE.POSTBACK &&
                            t !== i.ACTION_TYPE.LOCATION) ||
                            e.disable();
                        })
                      : this._actions.forEach(function (e) {
                          return e.disable();
                        });
                  }),
                  (e.prototype.enableActions = function () {
                    for (var e = 0, t = this._actions; e < t.length; e++)
                      t[e].enable();
                  }),
                  (e.prototype.getFirstActionButton = function () {
                    return this.firstActionButton;
                  }),
                  e
                );
              })();
            t.CardComponent = r;
          },
          1082: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.LoadingMessageComponent = void 0);
            var i = n(158),
              o = n(9171),
              s = (function () {
                function e(e, t, n, i) {
                  (this.text = e),
                    (this.side = t),
                    (this.utils = n),
                    (this.settings = i);
                }
                return (
                  (e.prototype.render = function () {
                    this._element = this.utils.createElement("div", [
                      "message",
                      this.side,
                    ]);
                    var e = this.utils.createElement("div", [
                        "message-wrapper",
                      ]),
                      t = this.utils.createElement("div", ["message-bubble"]),
                      n = this.utils.createElement("div", [
                        "message-content",
                        "loading-icon",
                      ]),
                      s =
                        this.side === o.MESSAGE_SIDE.LEFT
                          ? this.settings.botIcon
                          : this.settings.personIcon;
                    if (s) {
                      var r = this.utils.createElement("div", ["icon-wrapper"]);
                      r.appendChild(
                        this.utils.createImage(s, ["message-icon"])
                      ),
                        e.appendChild(r);
                    }
                    var a = this.utils.createElement("div", ["message-text"]);
                    return (
                      (a.innerText = this.text),
                      n.appendChild(
                        new i.SpinnerComponent(this.utils).render()
                      ),
                      n.appendChild(a),
                      t.appendChild(n),
                      e.appendChild(t),
                      this._element.appendChild(e),
                      this._element
                    );
                  }),
                  (e.prototype.remove = function () {
                    this._element.remove();
                  }),
                  e
                );
              })();
            t.LoadingMessageComponent = s;
          },
          158: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.SpinnerComponent = void 0);
            var n = (function () {
              function e(e) {
                this.utils = e;
              }
              return (
                (e.prototype.render = function () {
                  var e = this.utils.createElement("div", ["spinner"]);
                  return (
                    (e.innerHTML =
                      '<svg viewBox="0 0 64 64"><circle transform="translate(32,32)" r="26"></circle></svg>'),
                    e
                  );
                }),
                e
              );
            })();
            t.SpinnerComponent = n;
          },
          4261: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.LocationMessageComponent = void 0);
            var s = n(911),
              r = n(1886),
              a = (function (e) {
                function t(t, n, i, o, s, r, a, c) {
                  var l = e.call(this, t, n, i, o, s, r, a, c) || this;
                  return (
                    (l._title = i.location.title),
                    (l._url = i.location.url),
                    (l._longitude = i.location.longitude),
                    (l._latitude = i.location.latitude),
                    (l._date = s),
                    l
                  );
                }
                return (
                  o(t, e),
                  (t.prototype.render = function () {
                    if (0 === this.actions.length) {
                      var t = {
                        actionId: "locationAction1",
                        label: this.translations.openMap,
                        type: s.ACTION_TYPE.URL,
                        url:
                          this._url ||
                          "http://www.google.com/maps?z=12&t=m&q=loc:" +
                            this._latitude +
                            "+" +
                            this._longitude,
                      };
                      this.actions.push(
                        new r.UrlActionComponent(
                          this.utils,
                          t,
                          this.settings.openLinksInNewWindow,
                          this.settings.linkHandler
                        )
                      );
                    }
                    return e.prototype.render.call(this);
                  }),
                  (t.prototype.getContent = function () {
                    var e = this.utils.createElement("span");
                    return (
                      this._title
                        ? (e.innerText = this._title)
                        : (e.innerText =
                            this._latitude.toFixed(6) +
                            ", " +
                            this._longitude.toFixed(6)),
                      e
                    );
                  }),
                  t
                );
              })(n(9171).MessageComponent);
            t.LocationMessageComponent = a;
          },
          1809: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.MessageStringComponent = void 0);
            var i = n(9171),
              o = (function () {
                function e(e, t, n, i) {
                  (this.text = e),
                    (this.side = t),
                    (this.utils = n),
                    (this.settings = i);
                }
                return (
                  (e.prototype.render = function (e) {
                    this._element = this.utils.createElement("div", [
                      "message",
                      this.side,
                    ]);
                    var t = this.utils.createElement("div", [
                        "message-wrapper",
                      ]),
                      n = this.utils.createElement("div", ["content-wrapper"]),
                      o = this.utils.createElement("div", ["message-bubble"]),
                      s = this.utils.createElement("div", ["message-content"]),
                      r =
                        this.side === i.MESSAGE_SIDE.LEFT
                          ? this.settings.botIcon
                          : this.settings.personIcon;
                    if (r) {
                      var a = this.utils.createElement("div", ["icon-wrapper"]);
                      a.appendChild(
                        this.utils.createImage(r, ["message-icon"])
                      ),
                        t.appendChild(a);
                    }
                    if (e) {
                      this.utils.addCSSClass(
                        s,
                        this.utils.getCssClassWithPrefix("message-with-icon")
                      );
                      var c = this.utils.createElement("div", ["error-icon"]);
                      c.appendChild(this.utils.createImage(e, [], "")),
                        s.appendChild(c);
                    }
                    var l = this.utils.createElement("div", ["message-text"]);
                    return (
                      (l.innerText = this.text),
                      s.appendChild(l),
                      o.appendChild(s),
                      n.appendChild(o),
                      t.appendChild(n),
                      this._element.appendChild(t),
                      this._element
                    );
                  }),
                  e
                );
              })();
            t.MessageStringComponent = o;
          },
          9171: function (e, t, n) {
            "use strict";
            var i =
              (this && this.__assign) ||
              function () {
                return (i =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                      for (var o in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }).apply(this, arguments);
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.MESSAGE_SIDE = t.MessageComponent = void 0);
            var o,
              s = n(2004),
              r = n(4255),
              a = n(5431),
              c = n(911),
              l = n(8216);
            !(function (e) {
              (e.LEFT = "left"), (e.RIGHT = "right");
            })(o || (o = {})),
              (t.MESSAGE_SIDE = o);
            var h = (function () {
              function e(e, t, n, o, r, c, l, h) {
                (this.utils = e),
                  (this.settings = t),
                  (this.side = o),
                  (this.markAsRead = c),
                  (this.source = l),
                  (this.actions = []),
                  (this.globalActions = []),
                  (this.dateFormat = {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: !0,
                  }),
                  (this.locale = this.settings.locale),
                  (this.translations = this.settings.i18n[this.locale]),
                  h &&
                    h.locale &&
                    ((this.locale = h.locale),
                    (this.translations = i(
                      i({}, this.translations),
                      this.settings.i18n[h.locale]
                    ))),
                  (this.date = r);
                var u = "";
                switch (n.type) {
                  case a.PAYLOAD_TYPE.CARD:
                    n.cards.forEach(function (e) {
                      var t;
                      u +=
                        (e.title ? e.title + " - " : "") +
                        (e.description ? e.description + " - " : "") +
                        (null !== (t = e.url) && void 0 !== t ? t : "") +
                        "\n";
                    });
                    break;
                  case a.PAYLOAD_TYPE.TEXT:
                    u = n.text;
                    break;
                  case a.PAYLOAD_TYPE.ATTACHMENT:
                    u = n.attachment.url;
                    break;
                  case a.PAYLOAD_TYPE.LOCATION:
                    var d = n.location;
                    u =
                      (d.title ? d.title + " - " : "") +
                      d.latitude +
                      ", " +
                      d.longitude;
                }
                if (n.actions)
                  for (var p = 0, g = 0, f = n.actions; g < f.length; g++) {
                    p++, ((y = f[g]).actionId = "action" + p);
                    var m = s.ActionComponentFactory.fromActionPayload(
                      e,
                      y,
                      this.settings.openLinksInNewWindow,
                      u,
                      t.linkHandler,
                      h
                    );
                    m &&
                      ((m.onActionClick = this.handleOnActionClick.bind(this)),
                      this.actions.push(m));
                  }
                if (n.globalActions)
                  for (
                    var v = 0, _ = 0, b = n.globalActions;
                    _ < b.length;
                    _++
                  ) {
                    var y;
                    v++, ((y = b[_]).actionId = "globalAction" + v);
                    var C = s.ActionComponentFactory.fromActionPayload(
                      e,
                      y,
                      this.settings.openLinksInNewWindow,
                      u,
                      t.linkHandler
                    );
                    C &&
                      ((C.onActionClick = this.handleOnActionClick.bind(this)),
                      this.globalActions.push(C));
                  }
                (this.headerText = n.headerText),
                  (this.footerText = n.footerText);
              }
              return (
                (e.prototype.handleOnActionClick = function (e) {
                  if (this.onActionClick) {
                    var t = e;
                    (t.messageComponent = this), this.onActionClick(t);
                  }
                }),
                (e.prototype.handleOnActionTrigger = function (e) {
                  var t = +e.match(/\d+/g)[0];
                  return "action" === e.match(/[a-zA-Z]+/g)[0]
                    ? this.actions.length >= t
                      ? this.actions[t - 1]
                      : null
                    : this.globalActions.length >= t
                    ? this.globalActions[t - 1]
                    : null;
                }),
                (e.prototype.render = function (e) {
                  return this._renderMessage(
                    e,
                    this.actions,
                    this.globalActions
                  );
                }),
                (e.prototype.updateMarkAsRead = function () {
                  return (
                    this.renderMsgReadStatus(!0), this.markAsRead(this.date)
                  );
                }),
                (e.prototype.hasActions = function () {
                  return (
                    this.actions.length > 0 || this.globalActions.length > 0
                  );
                }),
                (e.prototype.focusFirstAction = function () {
                  var e;
                  null === (e = this.firstActionButton) ||
                    void 0 === e ||
                    e.focus();
                }),
                (e.prototype.appendActions = function (e, t) {
                  this.renderActionButtons(e, t, ["message-actions"]);
                }),
                (e.prototype.appendGlobalActions = function (e, t) {
                  if (t.length > 0) {
                    var n = ["message-global-actions"];
                    this.settings.botIcon && n.push("has-message-icon"),
                      this.renderActionButtons(e, t, n);
                  }
                }),
                (e.prototype.getContent = function () {
                  throw new Error("Method not implemented.");
                }),
                (e.prototype.disableActions = function () {
                  "postback" === this.settings.disablePastActions
                    ? (this.disablePostActions(this.actions),
                      this.disablePostActions(this.globalActions))
                    : (this.actions.forEach(function (e) {
                        return e.disable();
                      }),
                      this.globalActions.forEach(function (e) {
                        return e.disable();
                      }));
                }),
                (e.prototype.enableActions = function () {
                  for (var e = 0, t = this.actions; e < t.length; e++)
                    t[e].enable();
                  for (var n = 0, i = this.globalActions; n < i.length; n++)
                    i[n].enable();
                }),
                (e.prototype.renderMsgReadStatus = function (e) {
                  if (this._chatDate) {
                    var t = this.date ? new Date(this.date) : new Date(),
                      n = e ? this.settings.readMark : "",
                      i = l.formatDate(t, {
                        pattern: this.settings.timestampFormat,
                        fallback: this.dateFormat,
                        locale: this.locale,
                      });
                    this._chatDate.textContent = i + " " + n;
                  }
                }),
                (e.prototype.disablePostActions = function (e) {
                  for (var t = 0, n = e; t < n.length; t++) {
                    var i = n[t],
                      o = i.getActionType();
                    (o !== c.ACTION_TYPE.POSTBACK &&
                      o !== c.ACTION_TYPE.LOCATION) ||
                      i.disable();
                  }
                }),
                (e.prototype._renderMessage = function (e, t, n) {
                  var i,
                    s = this.utils.createElement("div", ["message", this.side]);
                  s.lang = this.locale;
                  var a =
                      this.side === o.LEFT
                        ? this.translations.skillMessage
                        : this.translations.userMessage,
                    c = this.utils.createElement("span", [
                      "screen-reader-only",
                    ]);
                  (c.textContent = a), s.appendChild(c);
                  var l = this.utils.createElement("div", ["message-wrapper"]);
                  s.appendChild(l);
                  var h = this.settings.botIcon;
                  this.source === r.ISkillMessageSource.AGENT &&
                    (h =
                      null !== (i = this.settings.agentAvatar) && void 0 !== i
                        ? i
                        : this.settings.botIcon);
                  var u = this.side === o.LEFT ? h : this.settings.personIcon;
                  if (u) {
                    var d = this.utils.createElement("div", ["icon-wrapper"]);
                    d.appendChild(
                      this.utils.createImage(u, ["message-icon"], "")
                    ),
                      l.appendChild(d);
                  }
                  var p = this.utils.createElement("div", ["content-wrapper"]),
                    g = this.utils.createElement("div", ["message-bubble"]);
                  g.style.padding =
                    this.settings.messagePadding || g.style.padding;
                  var f = this.utils.createElement("div", ["message-content"]);
                  if (
                    (f.appendChild(e || this.getContent()),
                    g.appendChild(f),
                    t &&
                      (this.settings.displayActionsAsPills
                        ? this.appendGlobalActions(s, t)
                        : this.appendActions(g, t)),
                    this.settings.enableTimestamp &&
                      "default" === this.settings.timestampMode &&
                      ((this._chatDate = this.utils.createElement("div", [
                        "message-date",
                      ])),
                      this._chatDate.setAttribute("aria-live", "off"),
                      this._chatDate.setAttribute("aria-hidden", "true"),
                      this.renderMsgReadStatus(!1),
                      g.appendChild(this._chatDate)),
                    p.appendChild(g),
                    this.headerText &&
                      this.utils.addCSSClass(
                        p.firstElementChild,
                        this.utils.getCssClassWithPrefix("has-header")
                      ),
                    this.footerText &&
                      this.utils.addCSSClass(
                        p.firstElementChild,
                        this.utils.getCssClassWithPrefix("has-footer")
                      ),
                    this.headerText)
                  ) {
                    var m = this.utils.createElement("div", [
                      "message-bubble",
                      "message-header",
                    ]);
                    (m.innerHTML = this.utils.linkify(this.headerText, {
                      embeddedHTML: this.side === o.LEFT,
                      embeddedVideo: !0,
                    })),
                      p.prepend(m);
                  }
                  if (this.footerText) {
                    var v = this.utils.createElement("div", [
                      "message-bubble",
                      "message-footer",
                    ]);
                    (v.innerHTML = this.utils.linkify(this.footerText, {
                      embeddedHTML: this.side === o.LEFT,
                      embeddedVideo: !0,
                    })),
                      p.appendChild(v);
                  }
                  return (
                    l.appendChild(p), n && this.appendGlobalActions(s, n), s
                  );
                }),
                (e.prototype.renderActionButtons = function (e, t, n) {
                  var i = this;
                  if (t.length > 0) {
                    var o = this.utils.createElement("div", n),
                      s = !this.firstActionButton;
                    t.forEach(function (e) {
                      var t = e.render();
                      s && ((i.firstActionButton = t), (s = !1)),
                        o.appendChild(t);
                    }),
                      e.appendChild(o);
                  }
                }),
                e
              );
            })();
            t.MessageComponent = h;
          },
          8843: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.RawMessageComponent = void 0);
            var s = (function (e) {
              function t(t, n, i, o, s, r, a, c) {
                var l = e.call(this, t, n, i, o, s, r, a, c) || this;
                return (
                  (l._date = s), (l._payload = JSON.stringify(i.payload)), l
                );
              }
              return (
                o(t, e),
                (t.prototype.getContent = function () {
                  var e = this.utils.createElement("span");
                  return (e.innerText = this._payload), e;
                }),
                t
              );
            })(n(9171).MessageComponent);
            t.RawMessageComponent = s;
          },
          7120: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.RelativeTimestampComponent = void 0);
            var i = n(5170),
              o = window.setTimeout,
              s = window.setInterval,
              r = 36e5,
              a = 864e5,
              c = "relTimeNow",
              l = "relTimeMoment",
              h = "relTimeMin",
              u = "relTimeHr",
              d = (function () {
                function e(e, t) {
                  (this.utils = e),
                    (this.i18n = t.i18n[t.locale]),
                    (this.positionSkill =
                      e.getCssClassWithPrefix("left") +
                      " " +
                      (t.botIcon
                        ? e.getCssClassWithPrefix("has-message-icon")
                        : "")),
                    (this.positionUser =
                      e.getCssClassWithPrefix("right") +
                      " " +
                      (t.personIcon
                        ? e.getCssClassWithPrefix("has-message-icon")
                        : ""));
                }
                return (
                  Object.defineProperty(e.prototype, "time", {
                    get: function () {
                      return this._time;
                    },
                    set: function (e) {
                      (this._time = e), this.render();
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (e.prototype.render = function () {
                    var e = this.element;
                    return (
                      e || (e = this.utils.createElement("div")),
                      e.setAttribute("aria-live", "off"),
                      e.setAttribute("aria-hidden", "true"),
                      (e.className =
                        this.utils.getCssClassWithPrefix("relative-timestamp") +
                        " " +
                        this.positionalClassNames),
                      (e.textContent = this.time),
                      (this.element = e),
                      e
                    );
                  }),
                  (e.prototype.setLocale = function (e) {
                    if (((this.i18n = e), this.key))
                      switch (this.key) {
                        case c:
                        case l:
                          this.time = this.i18n[this.key];
                          break;
                        case h:
                        case u:
                          this.time = this.i18n[this.key].replace(
                            "{0}",
                            "" + this.counter
                          );
                      }
                  }),
                  (e.prototype.setRelativeTime = function (e) {
                    var t = new Date().getTime() - e.getTime(),
                      n = Math.floor(t / 1e3),
                      i = Math.floor(n / 60),
                      o = Math.floor(i / 60),
                      s = Math.floor(o / 24),
                      r = Math.floor(s / 30),
                      a = Math.floor(r / 12);
                    a > 0
                      ? this.setYears(a)
                      : r > 0
                      ? this.setMonths(r)
                      : s > 0
                      ? this.setDays(s)
                      : o > 0
                      ? this.setHours(o)
                      : i > 0
                      ? this.setMinutes(i)
                      : this.setMoments(n);
                  }),
                  (e.prototype.refresh = function (e) {
                    (this.positionalClassNames =
                      e === i.SENDER_TYPE.BOT
                        ? this.positionSkill
                        : this.positionUser),
                      this.setNow();
                  }),
                  (e.prototype.remove = function () {
                    var e;
                    (null === (e = this.element) || void 0 === e
                      ? void 0
                      : e.parentElement) && this.element.remove();
                  }),
                  (e.prototype.resetTimer = function () {
                    clearTimeout(this.updateTimer),
                      clearInterval(this.updateTimer);
                  }),
                  (e.prototype.setNow = function () {
                    var e = this;
                    this.resetTimer(),
                      (this.time = this.i18n[c]),
                      (this.key = c),
                      (this.updateTimer = o(function () {
                        e.setMoments();
                      }, 1e4));
                  }),
                  (e.prototype.setMoments = function (e) {
                    var t = this;
                    void 0 === e && (e = 10),
                      this.resetTimer(),
                      (e *= 1e3),
                      (this.time = this.i18n[l]),
                      (this.key = l),
                      (this.updateTimer = o(function () {
                        t.setMinutes();
                      }, 6e4 - e));
                  }),
                  (e.prototype.setMinutes = function (e) {
                    var t = this;
                    void 0 === e && (e = 1),
                      this.resetTimer(),
                      (this.time = this.i18n.relTimeMin.replace("{0}", "" + e)),
                      (this.key = h),
                      (this.counter = e),
                      (this.updateTimer = s(function () {
                        e++,
                          (t.counter = e),
                          e >= 60
                            ? (clearInterval(t.updateTimer), t.setHours())
                            : (t.time = t.i18n.relTimeMin.replace(
                                "{0}",
                                "" + e
                              ));
                      }, 6e4));
                  }),
                  (e.prototype.setHours = function (e) {
                    var t = this;
                    void 0 === e && (e = 1),
                      this.resetTimer(),
                      (this.time = this.i18n[u].replace("{0}", "" + e)),
                      (this.key = u),
                      (this.counter = e),
                      (this.updateTimer = s(function () {
                        e++,
                          (t.counter = e),
                          e >= 24
                            ? (clearInterval(t.updateTimer), t.setDays())
                            : (t.time = t.i18n.relTimeHr.replace(
                                "{0}",
                                "" + e
                              ));
                      }, r));
                  }),
                  (e.prototype.setDays = function (e) {
                    var t = this;
                    void 0 === e && (e = 1),
                      this.resetTimer(),
                      (this.time = this.i18n.relTimeDay.replace("{0}", "" + e)),
                      (this.updateTimer = s(function () {
                        ++e >= 30
                          ? (clearInterval(t.updateTimer), t.setMonths())
                          : (t.time = t.i18n.relTimeDay.replace("{0}", "" + e));
                      }, a));
                  }),
                  (e.prototype.setMonths = function (e) {
                    var t = this;
                    void 0 === e && (e = 1),
                      this.resetTimer(),
                      (this.time = this.i18n.relTimeMon.replace("{0}", "" + e)),
                      (this.updateTimer = s(function () {
                        ++e >= 12
                          ? (clearInterval(t.updateTimer), t.setYears())
                          : (t.time = t.i18n.relTimeMon.replace("{0}", "" + e));
                      }, 2592e6));
                  }),
                  (e.prototype.setYears = function (e) {
                    var t = this;
                    void 0 === e && (e = 1),
                      this.resetTimer(),
                      (this.time = this.i18n.relTimeYr.replace("{0}", "" + e)),
                      (this.updateTimer = s(function () {
                        e++, (t.time = t.i18n.relTimeYr.replace("{0}", "" + e));
                      }, 31536e6));
                  }),
                  e
                );
              })();
            t.RelativeTimestampComponent = d;
          },
          6127: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.StatusComponent = void 0);
            var n = (function () {
              function e(e, t, n) {
                (this.message = e),
                  (this.utils = t),
                  (this.image = n),
                  (this._element = t.createElement("div", [
                    "status-message-container",
                  ])),
                  this._element.setAttribute("role", "alert");
                var i = t.createElement("div", ["status-message-wrapper"]);
                if (n) {
                  var o = t.createImage(n, ["status-image"], "");
                  i.appendChild(o);
                }
                var s = t.createElement("div", ["status-message"]);
                (s.textContent = e),
                  i.appendChild(s),
                  this._element.appendChild(i);
              }
              return (
                (e.prototype.remove = function () {
                  this._element.remove();
                }),
                (e.prototype.render = function () {
                  return this._element;
                }),
                e
              );
            })();
            t.StatusComponent = n;
          },
          8407: function (e, t, n) {
            "use strict";
            var i,
              o =
                (this && this.__extends) ||
                ((i = function (e, t) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    })(e, t);
                }),
                function (e, t) {
                  function n() {
                    this.constructor = e;
                  }
                  i(e, t),
                    (e.prototype =
                      null === t
                        ? Object.create(t)
                        : ((n.prototype = t.prototype), new n()));
                });
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.TextMessageComponent = void 0);
            var s = n(8216),
              r = n(9171),
              a = (function (e) {
                function t(t, n, i, o, s, r, a, c) {
                  var l = e.call(this, t, n, i, o, s, r, a, c) || this;
                  return (l.options = c), (l._text = i.text), (l._date = s), l;
                }
                return (
                  o(t, e),
                  (t.prototype.getContent = function () {
                    var e = this.utils.createElement("div");
                    return (
                      (e.innerHTML = this.utils.linkify(this._text, {
                        embeddedHTML: this.side === r.MESSAGE_SIDE.LEFT,
                        embeddedVideo: !0,
                      })),
                      this.settings.linkHandler
                        ? s.utils.setEmbeddedLinksHandler(
                            e,
                            this.settings.linkHandler
                          )
                        : this.settings.openLinksInNewWindow &&
                          s.utils.setLinksOpenInNewWindow(e),
                      s.setEmbeddedWebViewLinksHandler(
                        e,
                        this.options.webviewLinkHandler
                      ),
                      e
                    );
                  }),
                  t
                );
              })(r.MessageComponent);
            t.TextMessageComponent = a;
          },
          6204: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.TypingIndicatorComponent = void 0);
            var i = n(3609),
              o = n(8216),
              s = n(2772),
              r = (function () {
                function e(e, t) {
                  var n, o;
                  (this.side = e),
                    (this.settings = t),
                    (this.svgString = i.SVG_SPRITE.icon_bot_message_bubble),
                    (null === (n = this.settings.colors) || void 0 === n
                      ? void 0
                      : n.conversationBackground) &&
                      (this.svgString = this.svgString.replace(
                        /#fff/gi,
                        this.settings.colors.conversationBackground
                      )),
                    (null === (o = this.settings.colors) || void 0 === o
                      ? void 0
                      : o.typingIndicator) &&
                      (this.svgString = this.svgString.replace(
                        /#d1d1d1/gi,
                        this.settings.colors.typingIndicator
                      )),
                    (this.utils = new s.Utils()),
                    (this.element = this.render()),
                    (this.visible = !1);
                }
                return (
                  (e.prototype.append = function (e) {
                    var t = this;
                    this.isVisible() ||
                      (e.appendChild(this.element),
                      (this.visible = !0),
                      this.timeoutID && clearTimeout(this.timeoutID),
                      (this.timeoutID = window.setTimeout(function () {
                        t.remove();
                      }, 1e3 * this.settings.typingIndicatorTimeout)));
                  }),
                  (e.prototype.remove = function () {
                    this.isVisible() &&
                      (this.element.remove(), (this.visible = !1));
                  }),
                  (e.prototype.isVisible = function () {
                    return this.visible;
                  }),
                  (e.prototype.render = function () {
                    var e,
                      t,
                      n = this.utils.createElement("div", [
                        "message",
                        this.side,
                      ]),
                      i = this.utils.createElement("div", ["bubble-wrapper"]);
                    i.setAttribute("aria-live", "off"),
                      i.setAttribute("aria-hidden", "true");
                    var s =
                        null !== (e = this.settings.chatBubbleIcon) &&
                        void 0 !== e
                          ? e
                          : this.svgString,
                      r =
                        this.settings.i18n[this.settings.locale]
                          .typingIndicator;
                    return (
                      o.utils.isSvg(s)
                        ? ((t =
                            this.utils.createElementFromString(s)).setAttribute(
                            "role",
                            "img"
                          ),
                          t.setAttribute("aria-label", r))
                        : (t = this.utils.createImage(s, [], r)),
                      (t.style.height =
                        this.settings.chatBubbleIconHeight || t.style.height),
                      (t.style.width =
                        this.settings.chatBubbleIconWidth || t.style.width),
                      i.appendChild(t),
                      n.appendChild(i),
                      n
                    );
                  }),
                  e
                );
              })();
            t.TypingIndicatorComponent = r;
          },
          1123: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.css = void 0);
            var i = n(9158),
              o = n(5192),
              s = n(6097),
              r = n(2146),
              a = n(6819),
              c = n(9238),
              l = n(8167),
              h = n(120),
              u = n(4121),
              d =
                "" +
                i +
                r +
                o +
                s +
                a +
                c +
                l +
                h +
                n(4243) +
                u +
                n(8114) +
                n(1920) +
                n(8826) +
                n(5109);
            t.css = d;
          },
          6576: function (e, t, n) {
            "use strict";
            var i =
              (this && this.__assign) ||
              function () {
                return (i =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                      for (var o in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }).apply(this, arguments);
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.StyleComponent = void 0);
            var o = n(1210),
              s = n(9886),
              r = n(1123),
              a = (function () {
                function e(e, t) {
                  (this.utils = e), (this.settings = t), this.setWidgetTheme();
                }
                return (
                  (e.prototype.addStyle = function (t) {
                    e.STYLE = e.STYLE + t;
                  }),
                  (e.prototype.setWidgetCssClasses = function () {
                    var e,
                      t,
                      n,
                      i,
                      o,
                      s,
                      r = ":focus:enabled",
                      a = ":hover:enabled",
                      c = "wrapper",
                      l = "widget",
                      h = "button",
                      u = "notification-badge",
                      d = "header-button",
                      p = "message-actions .action-postback",
                      g = "message-global-actions .action-postback",
                      f = "card-actions .action-postback",
                      m = "round",
                      v = [],
                      _ = [],
                      b = [],
                      y = [],
                      C = [],
                      S = [],
                      T = [],
                      E = [],
                      w = [],
                      x = [],
                      A = [],
                      O = [],
                      I = [],
                      M = [],
                      P = [],
                      L = [],
                      k = [],
                      N = [],
                      R = [],
                      D = [],
                      B = [],
                      U = [],
                      H = [],
                      F = [],
                      V = [],
                      W = [],
                      Y = [],
                      z = [],
                      j = [],
                      G = [],
                      K = [],
                      q = [],
                      X = [],
                      Z = [],
                      J = [],
                      Q = [],
                      $ = "background-color: ",
                      ee = "border-color: ",
                      te = "bottom: ",
                      ne = "fill: ",
                      ie = "outline-color: ",
                      oe = "left: ",
                      se = "right: ",
                      re = "color: ",
                      ae = "top: ",
                      ce = function (e, t) {
                        var n = "";
                        return (
                          (null == t ? void 0 : t.length) > 0 &&
                            ((n = "." + e + " {\n"),
                            t.forEach(function (e) {
                              n += "  " + e + ";\n";
                            }),
                            (n += "}\n\n")),
                          n
                        );
                      },
                      le = function (e) {
                        return ce(e, ["display: none"]);
                      },
                      he = "",
                      ue = "@media screen and (min-width: 426px) {\n";
                    if (this.settings.enableHeadless)
                      return (
                        (he += le(c)),
                        (he += le(l)),
                        (he += le(h)),
                        (he += le(u))
                      );
                    if (this.settings.colors) {
                      var de = this.settings.colors;
                      if (
                        ((de.recognitionViewButtonFill =
                          de.recognitionViewButtonFill || de.footerButtonFill),
                        de.actionsBackground &&
                          I.push($ + de.actionsBackground),
                        de.actionsBackgroundFocus &&
                          M.push($ + de.actionsBackgroundFocus),
                        de.actionsBackgroundHover &&
                          P.push($ + de.actionsBackgroundHover),
                        de.actionsBorder
                          ? (I.push(ee + de.actionsBorder),
                            I.push("border-style: solid"),
                            I.push("border-width: 1px"))
                          : I.push("border-style: none"),
                        de.actionsText && I.push(re + de.actionsText),
                        de.actionsTextFocus && M.push(re + de.actionsTextFocus),
                        de.actionsTextHover && P.push(re + de.actionsTextHover),
                        de.botMessageBackground &&
                          (A.push($ + de.botMessageBackground),
                          V.push($ + de.botMessageBackground)),
                        de.botText)
                      ) {
                        var pe = re + de.botText;
                        A.push(pe), R.push(pe), W.push(pe);
                      }
                      if (de.branding) {
                        var ge = [ie + de.branding];
                        (he += ce("footer-button:focus:enabled", ge)),
                          b.push($ + de.branding),
                          K.push(ne + de.branding),
                          j.push("caret-color: " + de.branding),
                          de.visualizer || (de.visualizer = de.branding);
                      }
                      de.cardBackground && R.push($ + de.cardBackground),
                        de.cardNavButton && B.push($ + de.cardNavButton),
                        de.cardNavButtonFocus &&
                          U.push($ + de.cardNavButtonFocus),
                        de.cardNavButtonHover &&
                          H.push($ + de.cardNavButtonHover),
                        de.conversationBackground &&
                          x.push($ + de.conversationBackground),
                        de.footerBackground &&
                          (z.push($ + de.footerBackground),
                          de.inputBackground || j.push($ + de.footerBackground),
                          de.footerBackground === de.conversationBackground &&
                            z.push("border-top: 1px solid #dadada")),
                        de.footerButtonFill && G.push(ne + de.footerButtonFill),
                        de.footerInlineButtonFill &&
                          J.push(ne + de.footerInlineButtonFill),
                        de.globalActionsBackground &&
                          (L.push($ + de.globalActionsBackground),
                          L.push("border-style: solid"),
                          L.push("border-width: 1px")),
                        de.globalActionsBackgroundFocus &&
                          k.push($ + de.globalActionsBackgroundFocus),
                        de.globalActionsBackgroundHover &&
                          N.push($ + de.globalActionsBackgroundHover),
                        de.globalActionsBorder &&
                          L.push(ee + de.globalActionsBorder),
                        de.globalActionsText &&
                          L.push(re + de.globalActionsText),
                        de.globalActionsTextFocus &&
                          k.push(re + de.globalActionsBackgroundFocus),
                        de.globalActionsTextHover &&
                          N.push(re + de.globalActionsTextHover),
                        de.headerBackground ||
                          (de.headerBackground = de.branding),
                        de.headerBackground &&
                          ((pe = $ + de.headerBackground),
                          C.push(pe),
                          S.push(pe),
                          w.push(pe),
                          de.recognitionViewBackground ||
                            (X.push(pe), Z.push(pe))),
                        de.headerButtonFill &&
                          (T.push(ne + de.headerButtonFill),
                          (he += ce("header-button:focus:enabled", [
                            ie + de.headerButtonFill,
                          ])),
                          w.push(ie + de.headerButtonFill)),
                        de.headerText &&
                          (E.push(re + de.headerText),
                          w.push(re + de.headerText)),
                        de.inputBackground
                          ? j.push($ + de.inputBackground)
                          : de.footerBackground &&
                            j.push($ + de.footerBackground),
                        de.inputText && j.push(re + de.inputText),
                        de.links && F.push(re + de.links),
                        de.notificationBadgeBackground &&
                          y.push($ + de.notificationBadgeBackground),
                        de.notificationBadgeText &&
                          y.push(re + de.notificationBadgeText),
                        de.recognitionViewBackground &&
                          (X.push($ + de.recognitionViewBackground),
                          Z.push($ + de.recognitionViewBackground)),
                        de.recognitionViewButtonFill &&
                          Q.push(ne + de.recognitionViewButtonFill),
                        de.recognitionViewText &&
                          Z.push(re + de.recognitionViewText),
                        de.text &&
                          ((pe = re + de.text),
                          v.push(pe),
                          de.botText || A.push(pe),
                          de.userText || O.push(pe),
                          de.recognitionViewText || Z.push(pe)),
                        de.textLight && D.push(re + de.textLight),
                        de.timestamp && Y.push(re + de.timestamp),
                        de.userMessageBackground &&
                          (O.push($ + de.userMessageBackground),
                          de.visualizerContainerBackground ||
                            q.push($ + de.userMessageBackground)),
                        de.userText && O.push(re + de.userText),
                        de.visualizerContainerBackground &&
                          q.push($ + de.visualizerContainerBackground);
                    }
                    if (this.settings.font) {
                      var fe = "font: " + this.settings.font;
                      Z.push(fe), v.push(fe), A.push(fe), O.push(fe);
                    }
                    if (this.settings.fontFamily) {
                      var me = "font-family: " + this.settings.fontFamily;
                      j.push(me),
                        Z.push(me),
                        v.push(me),
                        A.push(me),
                        O.push(me),
                        I.push(me),
                        L.push(me);
                    }
                    return (
                      this.settings.embedded ||
                        ((null === (e = this.settings.position) || void 0 === e
                          ? void 0
                          : e.bottom) &&
                          (v.push(te + this.settings.position.bottom),
                          _.push("bottom: -" + this.settings.position.bottom)),
                        (null === (t = this.settings.position) || void 0 === t
                          ? void 0
                          : t.right) &&
                          (v.push(se + this.settings.position.right),
                          _.push("right: -" + this.settings.position.right)),
                        this.settings.badgePosition.bottom &&
                          y.push(te + this.settings.badgePosition.bottom),
                        this.settings.badgePosition.left &&
                          y.push(oe + this.settings.badgePosition.left),
                        this.settings.badgePosition.right &&
                          y.push(se + this.settings.badgePosition.right),
                        this.settings.badgePosition.top &&
                          y.push(ae + this.settings.badgePosition.top)),
                      (he += ce(c, v)),
                      (he += ce(l, _)),
                      (he += ce(h, b)),
                      (he += ce(u, y)),
                      (he += ce("header", C)),
                      (he += ce(d, S)),
                      (he += ce("header-button svg", T)),
                      (he += ce("header, .title, .subtitle", E)),
                      (he += ce("language-selection", w)),
                      (he += ce("conversation", x)),
                      (he += ce(
                        "left .message-bubble, .left .message-header, .left .message-footer",
                        A
                      )),
                      (he += ce("right .message-bubble", O)),
                      (he += ce(p, I)),
                      (he += ce(p + r, M)),
                      (he += ce(p + a, P)),
                      (he += ce(g, L)),
                      (he += ce(g + r, k)),
                      (he += ce(g + a, N)),
                      (he += ce("card", R)),
                      (he += ce("card-description", D)),
                      (he += ce(f, I)),
                      (he += ce(f + r, M)),
                      (he += ce(f + a, P)),
                      (he += ce(m, B)),
                      (he += ce("round:focus:enabled", U)),
                      (he += ce("round:hover:enabled", H)),
                      (he += ce("message-content a", F)),
                      (he += ce("card-message-content a", F)),
                      (he += ce("status-message-wrapper", V)),
                      (he += ce("status-message", W)),
                      (he += ce("relative-timestamp, .timestamp-header", Y)),
                      (he += ce("footer", z)),
                      (he += ce("user-input", j)),
                      (he += ce("footer-button svg", G)),
                      (he += ce(
                        "footer-button:hover:enabled .footer-button-svg-icon",
                        K
                      )),
                      (he += ce(
                        "share-popup-item:hover:enabled .share-popup-item-icon",
                        K
                      )),
                      (he += ce(
                        "share-popup-item:focus:enabled .share-popup-item-icon",
                        K
                      )),
                      (he += ce("footer-visualizer-wrapper", q)),
                      (he += ce("footer-recognition-wrapper", X)),
                      (he += ce("recognition-text-view", Z)),
                      (he += ce("footer-button.button-send-inline svg", J)),
                      (he += ce(
                        "button-switch-kbd .footer-button-svg-icon",
                        Q
                      )),
                      v.splice(0, v.length),
                      _.splice(0, _.length),
                      this.settings.embedded ||
                        (_.push("border-radius: 4px"),
                        (null === (n = this.settings.position) || void 0 === n
                          ? void 0
                          : n.bottom) &&
                          (v.push(te + this.settings.position.bottom),
                          _.push("bottom: 0"),
                          _.push(
                            "max-height: calc(100vh - " +
                              this.settings.position.bottom +
                              " - 60px)"
                          )),
                        (null === (i = this.settings.position) || void 0 === i
                          ? void 0
                          : i.left) && v.push(oe + this.settings.position.left),
                        (null === (o = this.settings.position) || void 0 === o
                          ? void 0
                          : o.right) &&
                          (v.push(se + this.settings.position.right),
                          _.push("right: 0"),
                          _.push(
                            "max-width: calc(100vw - " +
                              this.settings.position.right +
                              ")"
                          )),
                        (null === (s = this.settings.position) || void 0 === s
                          ? void 0
                          : s.top) && v.push(ae + this.settings.position.top),
                        this.settings.height &&
                          _.push("height: " + this.settings.height),
                        this.settings.width &&
                          _.push("width: " + this.settings.width)),
                      (ue += ce(c, v)),
                      (ue += ce(l, _)),
                      he + (ue += "}\n")
                    );
                  }),
                  (e.prototype.render = function () {
                    return this.utils.createStyle(
                      e.STYLE.replace(
                        /(\.)([a-zA-Z_-]+)(?=[^}]+{)/gi,
                        "$1" + o.Constants.SDK_NAME + "-$2"
                      )
                    );
                  }),
                  (e.prototype.setWidgetTheme = function () {
                    switch ((this.preInitColors(), this.settings.theme)) {
                      case s.IWidgetTheme.CLASSIC:
                        this.settings.colors = i(
                          i({}, e.THEME_CLASSIC),
                          this.settings.colors
                        );
                        break;
                      case s.IWidgetTheme.DEFAULT:
                        this.settings.colors = i(
                          i({}, e.THEME_DEFAULT),
                          this.settings.colors
                        );
                        break;
                      case s.IWidgetTheme.REDWOOD_DARK:
                        this.settings.colors = i(
                          i({}, e.THEME_REDWOOD_DARK),
                          this.settings.colors
                        );
                        break;
                      default:
                        this.settings.colors = i(
                          i({}, e.THEME_DEFAULT),
                          this.settings.colors
                        );
                    }
                  }),
                  (e.prototype.preInitColors = function () {
                    var e, t, n, i;
                    this.settings.colors.branding &&
                      (this.settings.colors.headerBackground =
                        null !== (e = this.settings.colors.headerBackground) &&
                        void 0 !== e
                          ? e
                          : this.settings.colors.branding),
                      this.settings.colors.text &&
                        ((this.settings.colors.inputText =
                          null !== (t = this.settings.colors.inputText) &&
                          void 0 !== t
                            ? t
                            : this.settings.colors.text),
                        (this.settings.colors.botText =
                          null !== (n = this.settings.colors.botText) &&
                          void 0 !== n
                            ? n
                            : this.settings.colors.text),
                        (this.settings.colors.userText =
                          null !== (i = this.settings.colors.userText) &&
                          void 0 !== i
                            ? i
                            : this.settings.colors.text));
                  }),
                  (e.STYLE = r.css),
                  (e.THEME_REDWOOD_DARK = {
                    branding: "#c0533f",
                    text: "#161513",
                    textLight: "#fcfbfa",
                    headerBackground: "#201e1c",
                    headerButtonFill: "#fff",
                    headerText: "#fff",
                    conversationBackground: "#3a3631",
                    timestamp: "#fcfbfa",
                    typingIndicator: "#fff",
                    botMessageBackground: "#655f5c",
                    botText: "#fff",
                    userMessageBackground: "#fff",
                    userText: "#161513",
                    cardBackground: "#655f5c",
                    cardNavButton: "#d5b364",
                    cardNavButtonFocus: "#f7e0a1",
                    cardNavButtonHover: "#b39554",
                    actionsBackground: "#655f5c",
                    actionsBackgroundFocus: "rgba(22, 21, 19, 0.5)",
                    actionsBackgroundHover: "rgba(22, 21, 19, 0.3)",
                    actionsBorder: "#fff",
                    actionsText: "#fff",
                    globalActionsBackground: "#3a3631",
                    globalActionsBackgroundFocus: "rgba(22, 21, 19, 0.3)",
                    globalActionsBackgroundHover: "rgba(32, 30, 28, 0.3)",
                    globalActionsBorder: "#fff",
                    globalActionsText: "#fff",
                    links: "#f7e0a1",
                    footerBackground: "#201e1c",
                    footerButtonFill: "#fff",
                    footerInlineButtonFill: "#1a1816",
                    inputBackground: "#fcfbfa",
                    inputText: "#161513",
                    recognitionViewText: "#fff",
                    visualizer: "#cbe9d6",
                    visualizerContainerBackground: "#312d2a",
                    notificationBadgeBackground: "#312d2a",
                    notificationBadgeText: "#fff",
                  }),
                  (e.THEME_DEFAULT = {
                    branding: "#025e7e",
                    text: "#161513",
                    textLight: "#3a3631",
                    headerBackground: "#025e7e",
                    headerButtonFill: "#fff",
                    headerText: "#fff",
                    conversationBackground: "#fff",
                    timestamp: "#5b5652",
                    typingIndicator: "#227e9e",
                    botMessageBackground: "#e5f1ff",
                    userMessageBackground: "#ececec",
                    cardBackground: "#fcfbfa",
                    cardNavButton: "#4190ac",
                    cardNavButtonFocus: "#5fa2ba",
                    cardNavButtonHover: "#0e7295",
                    actionsBackground: "#025e7e",
                    actionsBackgroundFocus: "#053242",
                    actionsBackgroundHover: "#06485f",
                    actionsBorder: "#025e7e",
                    actionsText: "#fff",
                    globalActionsBackground: "#fff",
                    globalActionsBackgroundFocus: "#053242",
                    globalActionsBackgroundHover: "#025e7e",
                    globalActionsBorder: "#0e7295",
                    globalActionsText: "#0e7295",
                    links: "#0e7295",
                    footerBackground: "#fff",
                    inputBackground: "#fff",
                    inputText: "#161513",
                    recognitionViewButtonFill: "#fff",
                    recognitionViewText: "#fff",
                    notificationBadgeBackground: "#9a0007",
                    notificationBadgeText: "#fff",
                  }),
                  (e.THEME_CLASSIC = {
                    branding: "#1b8fd2",
                    text: "#212121",
                    textLight: "#737373",
                    conversationBackground: "#fff",
                    footerBackground: "#fff",
                    headerButtonFill: "#fff",
                    timestamp: "#5b5652",
                    botMessageBackground: "#e5f1ff",
                    userMessageBackground: "#ececec",
                    actionsBackground: "#0099ff",
                    actionsBackgroundHover: "#005c99",
                    globalActionsBackground: "#fff",
                    globalActionsBackgroundHover: "#0099ff",
                    globalActionsBorder: "#0099ff",
                    globalActionsText: "#0099ff",
                    globalActionsTextHover: "#fff",
                    links: "#0770bf",
                    cardNavButtonHover: "#0099ff",
                    recognitionViewButtonFill: "#fff",
                    recognitionViewText: "#fff",
                  }),
                  e
                );
              })();
            t.StyleComponent = a;
          },
          5049: function (e, t, n) {
            "use strict";
            var i =
              (this && this.__assign) ||
              function () {
                return (i =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                      for (var o in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }).apply(this, arguments);
              };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = n(3609),
              s = n(8216),
              r = [
                "no-referrer",
                "no-referrer-when-downgrade",
                "origin",
                "origin-when-cross-origin",
                "same-origin",
                "strict-origin",
                "strict-origin-when-cross-origin",
                "unsafe-url",
              ],
              a = [
                "allow-downloads-without-user-activation",
                "allow-downloads",
                "allow-forms",
                "allow-modals",
                "allow-orientation-lock",
                "allow-pointer-lock",
                "allow-popups",
                "allow-popups-to-escape-sandbox",
                "allow-presentation",
                "allow-same-origin",
                "allow-scripts",
                "allow-storage-access-by-user-activation",
                "allow-top-navigation",
                "allow-top-navigation-by-user-activation",
              ],
              c = "oda-chat-none",
              l = (function () {
                function e(e, t) {
                  (this.utils = e),
                    (this.heightRatio = 0.8),
                    (this.props = {
                      closeButtonIcon: o.SVG_SPRITE.icon_bot_close,
                      closeButtonType: "icon",
                      errorInfoBar: !0,
                      referrerPolicy: "no-referrer-when-downgrade",
                      sandbox: [],
                      size: "tall",
                    }),
                    (this.isOpen = !1),
                    (this.isErrorViewOpen = !1),
                    this.setProps(t || {});
                }
                return (
                  (e.prototype.setProps = function (e) {
                    var t, n, o;
                    Array.isArray(e.sandbox) &&
                      e.sandbox.length &&
                      (e.sandbox = e.sandbox
                        .map(function (e) {
                          return e.toLowerCase();
                        })
                        .filter(function (e) {
                          return -1 !== a.indexOf(e);
                        })),
                      (this.props = i(i({}, this.props), e)),
                      (t = this.props).closeButtonType ||
                        (t.closeButtonType = "icon"),
                      (o = this.props.referrerPolicy),
                      r.indexOf(null == o ? void 0 : o.toLowerCase()) >= 0 ||
                        (this.props.referrerPolicy =
                          "no-referrer-when-downgrade"),
                      (n = this.props).size || (n.size = "tall"),
                      (this.heightRatio = "full" === this.props.size ? 1 : 0.8),
                      this.render();
                  }),
                  (e.prototype.open = function (e) {
                    var t = this;
                    this.component &&
                      ((this.component.style.height =
                        100 * this.heightRatio + "%"),
                      this.utils.removeCSSClass(
                        this.component,
                        "oda-chat-webview-container-close",
                        c
                      ),
                      this.utils.addCSSClass(
                        this.component,
                        "oda-chat-webview-container-open"
                      ),
                      this.component.insertBefore(
                        this.progressBar,
                        this.webView
                      ),
                      (this.webView.onload = function () {
                        t.progressBar.remove(),
                          t.utils.removeCSSClass(t.webView, c);
                      }),
                      this.props.errorInfoBar &&
                        setTimeout(function () {
                          t.isOpen &&
                            !t.isErrorViewOpen &&
                            (t.errorView || (t.errorView = t.createErrorView()),
                            e && (t.errorAltLink.href = e),
                            t.utils.removeCSSClass(t.errorView, c),
                            t.component.appendChild(t.errorView),
                            (t.isErrorViewOpen = !0));
                        }, 1e3),
                      (this.isOpen = !0));
                  }),
                  (e.prototype.close = function () {
                    var e = this;
                    (this.isOpen = !1),
                      this.utils.removeCSSClass(
                        this.component,
                        "oda-chat-webview-container-open"
                      ),
                      this.utils.addCSSClass(
                        this.component,
                        "oda-chat-webview-container-close"
                      ),
                      this.removeErrorView(),
                      this.webView.setAttribute("src", ""),
                      setTimeout(function () {
                        e.utils.addCSSClass(e.component, c),
                          e.utils.removeCSSClass(e.webView, c);
                      }, 400);
                  }),
                  (e.prototype.render = function () {
                    var t = this;
                    switch (
                      (this.component ||
                        ((this.component = this.utils.createElement("div", [
                          "webview-container",
                        ])),
                        (this.header = this.utils.createElement("div", [
                          "header",
                          "webview-header",
                        ])),
                        (this.title = this.utils.createElement("div", [
                          "title",
                          "webview-title",
                        ])),
                        (this.closeButton = this.utils.createButton([
                          "webview-button-close",
                          "title",
                        ])),
                        (this.progressBar = this.createProgressBar()),
                        (this.webView = this.utils.createIFrame(e.NAME, [
                          "webview",
                        ])),
                        (this.closeButton.onclick = function () {
                          t.close();
                        }),
                        this.header.appendChild(this.title),
                        this.header.appendChild(this.closeButton),
                        this.component.appendChild(this.header),
                        this.component.appendChild(this.webView)),
                      this.props.title &&
                        (this.title.textContent = this.props.title),
                      (this.closeButton.innerHTML = ""),
                      this.props.closeButtonType)
                    ) {
                      case "icon":
                        this.setImageButton(
                          this.closeButton,
                          this.props.closeButtonLabel,
                          this.props.closeButtonIcon
                        );
                        break;
                      case "label":
                        this.closeButton.appendChild(
                          document.createTextNode(this.props.closeButtonLabel)
                        );
                        break;
                      case "iconWithLabel":
                        this.setImageButton(
                          this.closeButton,
                          this.props.closeButtonLabel,
                          this.props.closeButtonIcon
                        ),
                          this.closeButton.appendChild(
                            document.createTextNode(this.props.closeButtonLabel)
                          );
                    }
                    return (
                      this.webView.setAttribute(
                        "referrerpolicy",
                        this.props.referrerPolicy
                      ),
                      this.props.sandbox.length &&
                        this.props.sandbox.forEach(function (e) {
                          return t.webView.sandbox.add(e);
                        }),
                      (this.closeButton.title = this.props.closeButtonLabel),
                      this.utils.addCSSClass(this.component, c),
                      this.component
                    );
                  }),
                  (e.prototype.setImageButton = function (e, t, n) {
                    if (((e.innerHTML = ""), (e.title = t), s.utils.isSvg(n))) {
                      var i = this.utils.createElementFromString(n);
                      i.setAttribute("role", "img"),
                        i.setAttribute("aria-label", t),
                        this.utils.addCSSClass(
                          i,
                          this.utils.getCssClassWithPrefix(
                            "webview-button-close-icon"
                          )
                        ),
                        e.appendChild(i);
                    } else {
                      var o = this.utils.createImage(
                        n,
                        ["webview-button-close-icon"],
                        t
                      );
                      e.appendChild(o);
                    }
                    return e;
                  }),
                  (e.prototype.createProgressBar = function () {
                    var e = this.utils.createElement("div", ["progress-bar"]),
                      t = this.utils.createElement("div", [
                        "progress-bar-overlay",
                      ]);
                    return e.appendChild(t), e;
                  }),
                  (e.prototype.createErrorView = function () {
                    var e = this.utils.createElement("div", ["webview-error"]);
                    (this.errorInfoText = this.utils.createElement("div", [
                      "webview-error-text",
                    ])),
                      e.appendChild(this.errorInfoText),
                      this.setErrorTextWithLink(this.props.errorInfoText);
                    var t = this.utils.createButton([
                      "webview-error-button-close",
                      "webview-button-close",
                    ]);
                    return (
                      (t.title = this.props.errorInfoDismissLabel),
                      (t.onclick = this.removeErrorView.bind(this)),
                      this.setImageButton(
                        t,
                        this.props.errorInfoDismissLabel,
                        this.props.closeButtonIcon
                      ),
                      e.appendChild(t),
                      e
                    );
                  }),
                  (e.prototype.setErrorTextWithLink = function (e) {
                    var t, n;
                    e = s.sanitizeText(e);
                    var i = /\{0\}(.*)\{\/0\}/g,
                      o =
                        null === (t = i.exec(e)) || void 0 === t
                          ? void 0
                          : t[1];
                    if (o) {
                      var r = this.utils.createAnchor("", o, [
                        "webview-alt-link",
                      ]);
                      n = e.replace(s.resetRegex(i), r.outerHTML);
                    } else
                      n = this.utils.createAnchor("", e, [
                        "webview-alt-link",
                      ]).outerHTML;
                    (this.errorInfoText.innerHTML = n),
                      (this.errorAltLink =
                        this.errorInfoText.querySelector("a"));
                  }),
                  (e.prototype.removeErrorView = function () {
                    var e = this;
                    this.isErrorViewOpen &&
                      (this.utils.addCSSClass(this.errorView, c),
                      setTimeout(function () {
                        e.component.removeChild(e.errorView),
                          (e.isErrorViewOpen = !1);
                      }, 600));
                  }),
                  (e.NAME = "oda-chat-webview"),
                  e
                );
              })();
            t.default = l;
          },
          4255: function (e, t) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ISkillMessageSource = void 0),
              (function (e) {
                (e.AGENT = "AGENT"), (e.BOT = "BOT");
              })(n || (n = {})),
              (t.ISkillMessageSource = n);
          },
          5610: function (e, t, n) {
            "use strict";
            var i =
              (this && this.__rest) ||
              function (e, t) {
                var n = {};
                for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) &&
                    t.indexOf(i) < 0 &&
                    (n[i] = e[i]);
                if (
                  null != e &&
                  "function" == typeof Object.getOwnPropertySymbols
                ) {
                  var o = 0;
                  for (i = Object.getOwnPropertySymbols(e); o < i.length; o++)
                    t.indexOf(i[o]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(e, i[o]) &&
                      (n[i[o]] = e[i[o]]);
                }
                return n;
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createUserTextMessage =
                t.createUserMessage =
                t.createBotMessage =
                  void 0);
            var o = n(5431);
            (t.createBotMessage = function (e, t, n, i) {
              return { date: n, from: e, isRead: i, messagePayload: t };
            }),
              (t.createUserMessage = function (e, t, n, o) {
                var s, r;
                if (
                  (e.type
                    ? (r = { date: n, isRead: o, messagePayload: e })
                    : e.messagePayload &&
                      (((r = e).date = r.date || n),
                      (r.isRead = void 0 !== r.isRead ? r.isRead : o)),
                  (r.userId = t),
                  null === (s = r.messagePayload) || void 0 === s
                    ? void 0
                    : s.metadata)
                ) {
                  var a = r.messagePayload,
                    c = a.metadata,
                    l = i(a, ["metadata"]);
                  (r.messagePayload = l), (r.metadata = c);
                }
                return r;
              }),
              (t.createUserTextMessage = function (e, t) {
                var n = { text: e, type: o.PAYLOAD_TYPE.TEXT },
                  i = { date: new Date(), isRead: !0, messagePayload: n };
                return t && (i.sdkMetadata = { speechId: t }), i;
              });
          },
          911: function (e, t) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ACTION_TYPE = void 0),
              (function (e) {
                (e.CALL = "call"),
                  (e.LOCATION = "location"),
                  (e.POSTBACK = "postback"),
                  (e.SHARE = "share"),
                  (e.URL = "url"),
                  (e.WEBVIEW = "webview");
              })(n || (n = {})),
              (t.ACTION_TYPE = n);
          },
          749: function (e, t) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ATTACHMENT_TYPE = void 0),
              (function (e) {
                (e.IMAGE = "image"),
                  (e.VIDEO = "video"),
                  (e.AUDIO = "audio"),
                  (e.FILE = "file");
              })(n || (n = {})),
              (t.ATTACHMENT_TYPE = n);
          },
          1836: function (e, t) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.LAYOUT = void 0),
              (function (e) {
                (e.HORIZONTAL = "horizontal"), (e.VERTICAL = "vertical");
              })(n || (n = {})),
              (t.LAYOUT = n);
          },
          5431: function (e, t) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.isIMessagePayload = t.PAYLOAD_TYPE = void 0),
              (function (e) {
                (e.TEXT = "text"),
                  (e.CARD = "card"),
                  (e.ATTACHMENT = "attachment"),
                  (e.LOCATION = "location"),
                  (e.RAW = "raw"),
                  (e.POSTBACK = "postback"),
                  (e.PROFILE = "profile"),
                  (e.ERROR = "error"),
                  (e.SUGGEST = "suggest");
              })(n || (n = {})),
              (t.PAYLOAD_TYPE = n),
              (t.isIMessagePayload = function (e) {
                return "type" in e;
              });
          },
          828: function (e, t) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.TOKEN_TYPE = void 0),
              (function (e) {
                e.JWT = "jwt";
              })(n || (n = {})),
              (t.TOKEN_TYPE = n);
          },
          7381: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.PONG_DELIVERY_CONFIRMATION_INTERVAL =
                t.PING_PONG_INTERVAL =
                t.isPongMessage =
                t.buildPingMessage =
                t.buildAuthTokenMessage =
                  void 0);
            var i = n(4829);
            (t.buildAuthTokenMessage = function (e, t) {
              return {
                state: { token: t, tokenType: e, type: i.STATE_TYPE.AUTH },
              };
            }),
              (t.buildPingMessage = function () {
                return { state: { type: i.STATE_TYPE.PING } };
              }),
              (t.isPongMessage = function (e) {
                return (
                  e.state && e.state.type && e.state.type === i.STATE_TYPE.PONG
                );
              }),
              (t.PING_PONG_INTERVAL = 3e4),
              (t.PONG_DELIVERY_CONFIRMATION_INTERVAL = 5e3);
          },
          4829: function (e, t) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.STATE_TYPE = void 0),
              (function (e) {
                (e.AUTH = "auth"), (e.PING = "ping"), (e.PONG = "pong");
              })(n || (n = {})),
              (t.STATE_TYPE = n);
          },
          5170: function (e, t) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.SENDER_TYPE = void 0),
              (function (e) {
                (e.BOT = "bot"), (e.USER = "user");
              })(n || (n = {})),
              (t.SENDER_TYPE = n);
          },
          6521: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.isUserProfileMessage = t.isIUserMessage = void 0),
              (t.isIUserMessage = function (e) {
                return "messagePayload" in e;
              }),
              (t.isUserProfileMessage = function (e) {
                return "profile" in e;
              });
          },
          2324: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.AuthTokenService = void 0);
            var i = n(9297),
              o = n(8216),
              s = n(5320),
              r = function (e) {
                return new Error("Invalid Token. " + e);
              },
              a = function (e) {
                var t = Math.floor((Date.now() + 2e5) / 1e3);
                return e.getClaim("exp") > t;
              },
              c = function (e, t, n) {
                if (null == n) throw r("Claim '" + e + "' is not passed.");
                if (typeof n !== t)
                  throw r("Claim '" + e + "' must be of type '" + t + "'.");
                if ("number" == typeof n) {
                  if (n <= 0)
                    throw r(
                      "Value passed for claim '" + e + "' must be positive."
                    );
                } else if (!n.length)
                  throw r(
                    "String passed for claim '" + e + "' can not be empty."
                  );
              },
              l = (function () {
                function e() {}
                return (
                  (e.getInstance = function () {
                    return e.service || (e.service = new e()), e.service;
                  }),
                  (e.prototype.getToken = function () {
                    var e = this;
                    return this.currentToken && a(this.currentToken)
                      ? i.default.resolve(this.currentToken)
                      : new i.default(function (t, n) {
                          i.default.resolve(e.method()).then(function (i) {
                            e.currentToken = new s.JWT(i);
                            try {
                              if (
                                ((function (e) {
                                  if (!e) throw r("No token passed.");
                                  var t = e.getClaim("iat");
                                  c("iat", "number", t);
                                  var n = e.getClaim("exp");
                                  if ((c("exp", "number", n), n <= t))
                                    throw r(
                                      "Value of claim 'exp' must be greater than that of claim 'iat'."
                                    );
                                  var i = e.getClaim("channelId");
                                  c("channelId", "string", i);
                                  var o = e.getClaim("userId");
                                  c("userId", "string", o);
                                })(e.currentToken),
                                !a(e.currentToken))
                              )
                                throw r("Token is expired.");
                              t(e.currentToken);
                            } catch (e) {
                              n(e);
                            }
                          });
                        });
                  }),
                  (e.prototype.resetToken = function () {
                    this.currentToken = void 0;
                  }),
                  (e.prototype.setFetchMethod = function (e) {
                    if (!o.isFunction(e))
                      throw (
                        ((this.getToken = function () {
                          return i.default.reject(
                            new Error("JWT generator is not a function.")
                          );
                        }),
                        new Error(
                          "'generateAuthToken' is not a function. Create a function that returns a Promise that resolves to a new JWT when called."
                        ))
                      );
                    this.method = e;
                  }),
                  e
                );
              })();
            t.AuthTokenService = l;
          },
          9069: function (e, t, n) {
            "use strict";
            var i =
              (this && this.__assign) ||
              function () {
                return (i =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                      for (var o in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }).apply(this, arguments);
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ChatServerService = void 0);
            var o = n(9297),
              s = n(983),
              r = n(1210),
              a = n(8971),
              c = n(8216),
              l = n(3289),
              h = n(6545),
              u = n(7605),
              d = n(9886),
              p = n(5610),
              g = n(749),
              f = n(5431),
              m = n(5170),
              v = n(368),
              _ = n(2324),
              b = n(9871),
              y = n(2158),
              C = (function () {
                function e(e, t, n) {
                  var i = this;
                  if (
                    ((this._speechService = n),
                    (this._uploadRequest = []),
                    (this._requestId = 0),
                    (this._logger = new u.Logger("ChatServerService")),
                    (this.onMessage = function (e, t) {}),
                    (this.onStatusChange = function (e) {}),
                    (this.onSuggestions = function (e) {}),
                    (this.onOriginalMessage = function (e) {}),
                    (this.onFinalSentMessage = function (e) {}),
                    (this._config = this._mergeSettings(h.defaultSettings, e)),
                    this._configureLinkHandler(),
                    this._configureStorage(),
                    this._configureLocale(),
                    (this._i18nText = this._config.i18n[this._config.locale]),
                    (u.Logger.logLevel = this._config.isDebugMode
                      ? u.Logger.LOG_LEVEL.DEBUG
                      : u.Logger.LOG_LEVEL.ERROR),
                    (u.Logger.appName = r.Constants.SDK_NAME),
                    (u.Logger.appVersion = r.Constants.SDK_VERSION),
                    window.addEventListener("online", function () {
                      return i.openConnection();
                    }),
                    window.addEventListener("offline", function () {
                      return i.closeConnection();
                    }),
                    t)
                  ) {
                    this._authTokenService = _.AuthTokenService.getInstance();
                    try {
                      this._authTokenService.setFetchMethod(t);
                    } catch (e) {
                      this._logger.error(e);
                    }
                  }
                  this.eventDispatcher = a.generateEventDispatcher();
                }
                return (
                  (e.prototype.on = function (e, t) {
                    this.eventDispatcher.bind(e, t);
                  }),
                  (e.prototype.connect = function () {
                    var e = this;
                    if (this._config.clientAuthEnabled)
                      return this._authTokenService
                        .getToken()
                        .then(function (t) {
                          try {
                            e._configureParams(t);
                          } catch (e) {
                            return o.default.reject(e.message);
                          }
                          return (e._url = e._setupWebSocketURI()), e._open();
                        })
                        .catch(function (t) {
                          throw (e._logger.error(t.message), t);
                        });
                    try {
                      this._configureParams();
                    } catch (e) {
                      return o.default.reject(e.message);
                    }
                    return (
                      (this._url = this._setupWebSocketURI()), this._open()
                    );
                  }),
                  (e.prototype.uploadAttachment = function (e, t, n, i) {
                    var s = this;
                    return new o.default(function (o, a) {
                      if (s._config.enableAttachment) {
                        s._logger.debug("upload attachment to chat server", e);
                        var c = new FormData();
                        c.append("attachment", e);
                        var l = new XMLHttpRequest(),
                          h = s._requestId++;
                        s._uploadRequest.push({ id: h, request: l }),
                          (l.onreadystatechange = function () {
                            if (4 === l.readyState)
                              switch (l.status) {
                                case r.Constants.ATTACHMENT_STATUS.OK:
                                  var c = JSON.parse(l.responseText),
                                    u = {
                                      attachment: {
                                        type: s._getAttachmentType(
                                          c.type.split("/")[0].toLowerCase()
                                        ),
                                        url: c.url,
                                      },
                                      type: f.PAYLOAD_TYPE.ATTACHMENT,
                                    },
                                    d = p.createUserMessage(
                                      u,
                                      s._config.userId,
                                      new Date(),
                                      !0
                                    );
                                  s.send(d, n, c.fileName), o(c);
                                  break;
                                case r.Constants.ATTACHMENT_STATUS
                                  .ERROR_FILE_SIZE_LIMIT_EXCEEDED:
                                  t && t(e.name, l.status, n),
                                    a(s._i18nText.uploadFileSizeLimitExceeded);
                                  break;
                                case r.Constants.ATTACHMENT_STATUS
                                  .ERROR_UNSUPPORTED_FILE_TYPE:
                                  t && t(e.name, l.status, n),
                                    a(s._i18nText.uploadUnsupportedFileType);
                                  break;
                                default:
                                  i
                                    ? s
                                        ._retryUploadingFile(e, t, n)
                                        .then(function (e) {
                                          o(e);
                                        })
                                        .catch(function (e) {
                                          a(e);
                                        })
                                    : (t && t(e.name, l.status, n),
                                      a(s._i18nText.uploadFailed));
                              }
                            s._uploadRequest = s._uploadRequest.filter(
                              function (e) {
                                return e.id !== h;
                              }
                            );
                          }),
                          s.isConnectionOpen()
                            ? s._config.clientAuthEnabled
                              ? s._authTokenService.getToken().then(
                                  function (t) {
                                    s._configureParams(t),
                                      s._pushUpload(l, e, c, t);
                                  },
                                  function (i) {
                                    t && t(e.name, l.status, n),
                                      s._logger.error(
                                        "Upload failed. Could not get valid token.",
                                        i
                                      ),
                                      a(
                                        "Upload failed. Could not get valid token."
                                      );
                                  }
                                )
                              : s._pushUpload(l, e, c)
                            : (t && t(e.name, l.status, n),
                              a("Upload failed. Not connected to server."));
                      } else t && t(e.name, null, n), a("Upload Failed. The enableAttachment feature is disabled.");
                    });
                  }),
                  (e.prototype.cancelUploadAttachments = function () {
                    this._uploadRequest.forEach(function (e) {
                      e.request.abort();
                    });
                  }),
                  (e.prototype.getSuggestions = function (e) {
                    if (
                      (this._logger.debug(
                        "Get suggestions from chat server",
                        e
                      ),
                      this._ws.readyState === s.CONNECTION_STATE.OPEN)
                    ) {
                      if ((this._ws.send(e), e.profile)) return;
                    } else
                      this._logger.error(
                        "Can't get suggestions for the user query, WebSocket status - " +
                          r.Constants.WEBSOCKET_READY_STATE[
                            this._ws.readyState
                          ],
                        e
                      );
                  }),
                  (e.prototype.getMessages = function () {
                    var e = this._storageService.getItem(this._chatStorageId);
                    return e ? JSON.parse(e) : [];
                  }),
                  (e.prototype.loadChat = function () {
                    var e = this.getMessages();
                    return (
                      e.length &&
                        (e.forEach(function (e) {
                          e.isRead = !0;
                        }),
                        this._storageService.setItem(
                          this._chatStorageId,
                          JSON.stringify(e)
                        )),
                      e
                    );
                  }),
                  (e.prototype.getUnreadMessagesCount = function () {
                    return this.getMessages().filter(function (e) {
                      return e.from && !e.isRead;
                    }).length;
                  }),
                  (e.prototype.send = function (e, t, n, i) {
                    var o = !1;
                    if (this._wsSend(e, i)) {
                      if (((o = !0), e.profile)) return o;
                      if (
                        e.messagePayload &&
                        e.messagePayload.type === f.PAYLOAD_TYPE.POSTBACK
                      ) {
                        var s = p.createUserMessage(
                          {
                            text: e.messagePayload.text,
                            type: f.PAYLOAD_TYPE.TEXT,
                          },
                          this._config.userId,
                          new Date(),
                          !0
                        );
                        (s.userId = this._config.userId),
                          (null == i ? void 0 : i.hidden) ||
                            (this._saveMessage(s), this.onMessage(s));
                      } else
                        n && (e.messagePayload.attachment.fileName = n),
                          (null == i ? void 0 : i.hidden) ||
                            (this._saveMessage(e), this.onMessage(e, t));
                    } else this._logger.error("Can't send message");
                    return o;
                  }),
                  (e.prototype.markAsRead = function (e) {
                    for (
                      var t,
                        n =
                          (null === (t = e.getTime) || void 0 === t
                            ? void 0
                            : t.call(e)) || new Date(e).getTime(),
                        i = this.getMessages(),
                        o = 0,
                        s = 0,
                        r = i;
                      s < r.length;
                      s++
                    ) {
                      var a = r[s];
                      if (!a.isRead && n === new Date(a.date).getTime()) {
                        (a.isRead = !0), (i[o] = a);
                        break;
                      }
                      o++;
                    }
                    this._storageService.setItem(
                      this._chatStorageId,
                      JSON.stringify(i)
                    );
                  }),
                  (e.prototype.markAllAsRead = function () {
                    var e = this.getMessages().map(function (e) {
                      return (e.isRead = !0), e;
                    });
                    this._storageService.setItem(
                      this._chatStorageId,
                      JSON.stringify(e)
                    );
                  }),
                  (e.prototype.retryMessage = function (e) {
                    var t = e.messagePayload;
                    if (this._latestUserMessage)
                      (this._latestUserMessage.date = new Date()),
                        this.send(this._latestUserMessage);
                    else if (t && t.postback.text) {
                      var n = {
                          text: t.postback.text,
                          type: f.PAYLOAD_TYPE.TEXT,
                        },
                        i = p.createUserMessage(
                          n,
                          this._config.userId,
                          new Date(),
                          !0
                        );
                      this.send(i);
                    }
                  }),
                  (e.prototype.getChatConfiguration = function () {
                    return this._config;
                  }),
                  (e.prototype.setSettingsProperty = function (e, t) {
                    this._config[e] = t;
                  }),
                  (e.prototype.isConnectionOpen = function () {
                    var e;
                    return (
                      (null === (e = this._ws) || void 0 === e
                        ? void 0
                        : e.readyState) === s.CONNECTION_STATE.OPEN
                    );
                  }),
                  (e.prototype.isConnectionClosed = function () {
                    return (
                      !this._ws ||
                      this._ws.readyState === s.CONNECTION_STATE.CLOSED
                    );
                  }),
                  (e.prototype.openConnection = function () {
                    return (
                      this.isConnectionOpen() && this.closeConnection(),
                      this.connect()
                    );
                  }),
                  (e.prototype.closeConnection = function (e, t) {
                    var n;
                    null === (n = this._ws) || void 0 === n || n.close(e, t);
                  }),
                  (e.prototype.updateUser = function (e, t) {
                    this.send(e, null, null, t);
                  }),
                  (e.prototype.clearMessages = function (e, t) {
                    var n = r.Constants.SDK_NAME + "-" + e + "-messages";
                    (t ? window[t] : this._storageService).getItem(n) &&
                      this._storageService.removeItem(n);
                  }),
                  (e.prototype.clearAllMessage = function () {
                    var e =
                        null === window || void 0 === window
                          ? void 0
                          : window.localStorage,
                      t = (null == e ? void 0 : e.length) || 0;
                    if (t)
                      for (var n = /oda-chat-.*-messages/g, i = 0; i < t; i++) {
                        var o = e.key(i);
                        (null == o ? void 0 : o.match(n)) && e.removeItem(o);
                      }
                  }),
                  (e.prototype._configureParams = function (e) {
                    if (
                      (this._config.clientAuthEnabled
                        ? ((this._config.channelId = e.getClaim("channelId")),
                          (this._config.userId = e.getClaim("userId")))
                        : (this._config.userId =
                            this._config.userId || this._generateUserId()),
                      (this._searchParams = {
                        channelId: this._config.channelId,
                        userId: this._config.userId,
                      }),
                      !this._config.URI)
                    )
                      throw new Error("URI not provided.");
                    if (!this._config.channelId)
                      throw new Error("channelId not provided.");
                    if (!this._config.userId)
                      throw new Error("userId not provided.");
                    this._chatStorageId =
                      r.Constants.SDK_NAME +
                      "-" +
                      this._config.userId +
                      "-messages";
                  }),
                  (e.prototype._open = function () {
                    var e = this;
                    return new o.default(function (t, n) {
                      var i,
                        o = !1;
                      (e._ws = new b.ReconnectingWebSocket(
                        e._url,
                        e._config.clientAuthEnabled
                          ? e._authTokenService
                          : void 0,
                        e._config.reconnectInterval,
                        e._config.reconnectMaxAttempts,
                        e._config.reconnectTimeout,
                        e._config.enableLongPolling,
                        e._config.upgradeToWebSocketInterval,
                        e._setupLongPollingURI()
                      )),
                        (e._ws.onopen = function () {
                          if (
                            (e._logger.debug("Connection established"),
                            e._config.enableSpeech)
                          ) {
                            var n = {
                              channelId: e._config.channelId,
                              host: e._config.URI,
                              locale: e._config.speechLocale,
                              protocol: e._config.enableSecureConnection
                                ? "wss://"
                                : "ws:/",
                              userId: e._config.userId,
                            };
                            e._config.clientAuthEnabled
                              ? e._authTokenService
                                  .getToken()
                                  .then(function (t) {
                                    e._configureParams(t),
                                      e._speechService.init(
                                        e._config,
                                        n,
                                        e._authTokenService
                                      );
                                  })
                              : e._speechService.init(e._config, n);
                          }
                          (i = setTimeout(function () {
                            (o = !0), e.closeConnection();
                          }, r.Constants.TIME.MIN_FIFTY)),
                            t();
                        }),
                        (e._ws.onmessage = e._wsMessage.bind(e)),
                        (e._ws.onclose = function (t) {
                          e._logger.debug("Connection closed"),
                            clearTimeout(i),
                            o && (e.openConnection(), (o = !1));
                          var s = (null == t ? void 0 : t.reason)
                            ? t.reason
                            : "Connection to chat server could not be established. Closing the connection.";
                          n(s);
                        }),
                        (e._ws.onstatuschange = function (t) {
                          e.eventDispatcher.trigger(
                            y.ChatServerEvent.STATUS,
                            t
                          ),
                            e.onStatusChange(t);
                        }),
                        e._ws.open();
                    });
                  }),
                  (e.prototype._pushUpload = function (e, t, n, i) {
                    var o = this._setupAttachmentURI();
                    e.open("POST", o),
                      e.setRequestHeader(
                        r.Constants.ATTACHMENT_HEADER.FILE_SIZE,
                        t.size.toString()
                      ),
                      this._config.clientAuthEnabled &&
                        (e.setRequestHeader(
                          r.Constants.ATTACHMENT_HEADER.AUTHORIZATION,
                          "Bearer " + i.token
                        ),
                        this._config.enableAttachmentSecurity &&
                          (e.setRequestHeader(
                            r.Constants.ATTACHMENT_HEADER.FILE_IS_PROTECTED,
                            "True"
                          ),
                          e.setRequestHeader(
                            r.Constants.ATTACHMENT_HEADER.FILE_AUTH_TYPE,
                            "ChannelClientAuth"
                          ))),
                      e.send(n);
                  }),
                  (e.prototype._retryUploadingFile = function (e, t, n) {
                    return this.uploadAttachment(e, t, n);
                  }),
                  (e.prototype._getAttachmentType = function (e) {
                    switch (e) {
                      case g.ATTACHMENT_TYPE.IMAGE:
                      case g.ATTACHMENT_TYPE.VIDEO:
                      case g.ATTACHMENT_TYPE.AUDIO:
                        return e;
                      default:
                        return g.ATTACHMENT_TYPE.FILE;
                    }
                  }),
                  (e.prototype._generateUserId = function () {
                    return (
                      "user" +
                      Math.floor(1e4 + 9e4 * Math.random()) +
                      (Date.now() % 1e5)
                    );
                  }),
                  (e.prototype._setupLongPollingURI = function () {
                    var e =
                      (this._config.enableSecureConnection
                        ? "https://"
                        : "http://") +
                      this._config.URI +
                      "/chat/v1/chats/message";
                    return c.utils.setSearchParams(e, this._searchParams);
                  }),
                  (e.prototype._setupWebSocketURI = function () {
                    var e =
                      (this._config.enableSecureConnection
                        ? "wss://"
                        : "ws://") +
                      this._config.URI +
                      "/chat/v1/chats/sockets/websdk";
                    return c.utils.setSearchParams(e, this._searchParams);
                  }),
                  (e.prototype._setupAttachmentURI = function () {
                    var e =
                      (this._config.enableSecureConnection
                        ? "https://"
                        : "http://") +
                      this._config.URI +
                      "/chat/v1/attachments";
                    return c.utils.setSearchParams(e, this._searchParams);
                  }),
                  (e.prototype._wsSend = function (t, n) {
                    this._logger.debug(
                      "Message to chat server",
                      t.messagePayload
                    );
                    var i = !1;
                    if (
                      (void 0 === (n = n || {}).delegate && (n.delegate = !0),
                      n.delegate && this._config.delegate && t.messagePayload)
                    )
                      if (
                        e.USER_PAYLOAD_TYPES.indexOf(t.messagePayload.type) >=
                          0 &&
                        this._config.delegate.beforeSend &&
                        c.isFunction(this._config.delegate.beforeSend)
                      ) {
                        if (
                          !(t = this._executeSendDelegate(
                            t,
                            this._config.delegate.beforeSend
                          ))
                        )
                          return i;
                      } else if (
                        t.messagePayload.type === f.PAYLOAD_TYPE.POSTBACK &&
                        this._config.delegate.beforePostbackSend &&
                        c.isFunction(
                          this._config.delegate.beforePostbackSend
                        ) &&
                        !(t = this._executeSendDelegate(
                          t,
                          this._config.delegate.beforePostbackSend
                        ))
                      )
                        return i;
                    return (
                      (this._latestUserMessage = t),
                      this._ws.readyState === s.CONNECTION_STATE.OPEN
                        ? (i = this._ws.send(
                            this._sanitizeText(this._latestUserMessage)
                          ))
                        : this._logger.error(
                            "Can't send message, WebSocket status - " +
                              r.Constants.WEBSOCKET_READY_STATE[
                                this._ws.readyState
                              ],
                            t
                          ),
                      t.messagePayload &&
                        this.onFinalSentMessage(this._latestUserMessage),
                      i
                    );
                  }),
                  (e.prototype._sanitizeText = function (e) {
                    var t,
                      n = JSON.parse(JSON.stringify(e));
                    if (
                      (null === (t = e.messagePayload) || void 0 === t
                        ? void 0
                        : t.type) === f.PAYLOAD_TYPE.TEXT
                    ) {
                      var i = n.messagePayload;
                      (i.text = c.sanitizeText(i.text)), (n.messagePayload = i);
                    }
                    return n;
                  }),
                  (e.prototype._executeSendDelegate = function (e, t) {
                    var n,
                      i,
                      o = JSON.parse(JSON.stringify(e)),
                      s = JSON.parse(JSON.stringify(e));
                    e.messagePayload.type === f.PAYLOAD_TYPE.TEXT &&
                      (null === (n = e.sdkMetadata) || void 0 === n
                        ? void 0
                        : n.speechId) &&
                      (i = (e.messagePayload.text || "").toLowerCase());
                    try {
                      s = t(o);
                    } catch (e) {
                      this._logger.error(e);
                    }
                    if (
                      ((s && s.messagePayload) || (s = null),
                      s &&
                        !c.utils.isValidUserMessage(s) &&
                        (this._logger.error(
                          "The generated delegate message is invalid. Sending original message instead."
                        ),
                        (s = e)),
                      i && s)
                    )
                      if (s.messagePayload)
                        if (s.messagePayload.type === f.PAYLOAD_TYPE.TEXT) {
                          var r = s.messagePayload.text;
                          (null == r ? void 0 : r.toLowerCase().indexOf(i)) <
                            0 && delete s.sdkMetadata;
                        } else delete s.sdkMetadata;
                      else delete s.sdkMetadata;
                    return s;
                  }),
                  (e.prototype._wsMessage = function (e) {
                    var t, n, i, o;
                    this._logger.info("Message received: ", e);
                    try {
                      var s = JSON.parse(e);
                      if (
                        (s.suggestions ? (o = !0) : ((o = !1), (i = s.type)),
                        o || this.onOriginalMessage(JSON.parse(e)),
                        !o &&
                          (null === (t = this._config.delegate) || void 0 === t
                            ? void 0
                            : t.beforeDisplay) &&
                          c.isFunction(this._config.delegate.beforeDisplay))
                      ) {
                        var r = JSON.parse(e),
                          a = JSON.parse(e);
                        try {
                          a = this._config.delegate.beforeDisplay(r);
                        } catch (e) {
                          this._logger.error(e);
                        }
                        if (!a || !a.messagePayload)
                          return void this.onMessage(void 0);
                        c.utils.isValidSkillMessage(a)
                          ? (s = a)
                          : this._logger.error(
                              "The generated delegate message is invalid. Displaying original message instead."
                            );
                      }
                      n = s;
                    } catch (t) {
                      ((n = { date: new Date(), isRead: !1 }).text = e),
                        (i = "error");
                    }
                    if (o) this.onSuggestions(n);
                    else {
                      if (
                        ((n.from = { type: m.SENDER_TYPE.BOT }),
                        n && (n.text || n.choices))
                      ) {
                        var l = p.createBotMessage(
                          n.from,
                          {
                            actions: [],
                            text: n.text,
                            type: f.PAYLOAD_TYPE.TEXT,
                          },
                          new Date(),
                          !1
                        );
                        if ("error" === i) {
                          var h =
                            this._config.i18n[
                              this._config.locale ? this._config.locale : "en"
                            ].retryMessage;
                          l.messagePayload.actions.push({
                            actionId: "Retry",
                            label: h,
                            postback: this._latestUserMessage.messagePayload,
                            text: h,
                            type: "postback",
                          });
                        }
                        if (n.choices)
                          for (var u = 0, d = n.choices; u < d.length; u++) {
                            var g = d[u];
                            l.messagePayload.actions.push({
                              label: g,
                              postback: g,
                              type: "postback",
                            });
                          }
                        n = l;
                      } else n.from && n.to && delete n.from;
                      (n.date = new Date()),
                        (n.isRead = !1),
                        this._saveMessage(n),
                        this.onMessage(n);
                    }
                  }),
                  (e.prototype._saveMessage = function (e) {
                    var t = this.getMessages();
                    t.length >= this._config.messageCacheSizeLimit &&
                      t.splice(
                        0,
                        t.length - (this._config.messageCacheSizeLimit - 1)
                      ),
                      t.push(e),
                      this._storageService.setItem(
                        this._chatStorageId,
                        JSON.stringify(t)
                      );
                  }),
                  (e.prototype._mergeSettings = function (e, t) {
                    var n = i(i({}, e), t);
                    if (t.i18n && Object.keys(t.i18n).length) {
                      (e.i18n = this._convertKeysToLowerCase(e.i18n)),
                        (t.i18n = this._convertKeysToLowerCase(t.i18n));
                      var o = new Set();
                      Object.keys(e.i18n).forEach(function (e) {
                        o.add(e);
                      }),
                        Object.keys(t.i18n).forEach(function (e) {
                          o.add(e);
                        }),
                        (n.i18n = {}),
                        o.forEach(function (o) {
                          n.i18n[o] = i(
                            i(i({}, e.i18n.en), e.i18n[o]),
                            t.i18n[o]
                          );
                        });
                    }
                    return (n.colors = i(i({}, e.colors), t.colors)), n;
                  }),
                  (e.prototype._convertKeysToLowerCase = function (e) {
                    for (
                      var t = {}, n = 0, i = Object.keys(e);
                      n < i.length;
                      n++
                    ) {
                      var o = i[n];
                      t[o.toLowerCase()] = e[o];
                    }
                    return t;
                  }),
                  (e.prototype._configureStorage = function () {
                    this._config.userId
                      ? this._config.storageType !== d.StorageType.LOCAL &&
                        this._config.storageType !== d.StorageType.SESSION &&
                        (this._config.storageType = d.StorageType.LOCAL)
                      : (this._config.storageType = d.StorageType.SESSION),
                      (this._storageService = new v.StorageService(
                        this._config.storageType
                      ));
                  }),
                  (e.prototype.isLinkHandler = function (e) {
                    var t = !1;
                    return e && (e.target || e.onclick) && (t = !0), t;
                  }),
                  (e.prototype._configureLinkHandler = function () {
                    var e = this._config.linkHandler,
                      t = !0;
                    this.isLinkHandler(e) &&
                      (e.onclick && "function" == typeof e.onclick
                        ? (t = !1)
                        : (this._config.linkHandler.onclick = void 0),
                      e.target && "string" == typeof e.target && e.target.length
                        ? (t = !1)
                        : (this._config.linkHandler.target = void 0)),
                      t && (this._config.linkHandler = void 0);
                  }),
                  (e.prototype._configureLocale = function () {
                    var e = [];
                    this._config.locale &&
                      e.push(this._config.locale.toLowerCase()),
                      (e = e.concat(l.getLocales())).indexOf("en") < 0 &&
                        e.push("en");
                    for (var t = 0, n = e; t < n.length; t++) {
                      var i = n[t];
                      if (
                        this._isLocaleTranslationExactMatch(
                          i,
                          this._config.i18n
                        )
                      ) {
                        this._config.locale = i;
                        break;
                      }
                      if (
                        this._isLocaleTranslationCloseMatch(
                          i,
                          this._config.i18n
                        )
                      ) {
                        this._config.locale = i.split("-")[0];
                        break;
                      }
                    }
                    this._config.speechLocale &&
                      (this._config.speechLocale =
                        this._config.speechLocale.toLowerCase());
                  }),
                  (e.prototype._isLocaleTranslationExactMatch = function (
                    e,
                    t
                  ) {
                    for (var n in ((e = e.toLowerCase()), t))
                      if (e === n.toLowerCase()) return !0;
                    return !1;
                  }),
                  (e.prototype._isLocaleTranslationCloseMatch = function (
                    e,
                    t
                  ) {
                    for (var n in ((e = e.toLowerCase().split("-")[0]), t))
                      if (e === n.toLowerCase()) return !0;
                    return !1;
                  }),
                  (e.USER_PAYLOAD_TYPES = [
                    f.PAYLOAD_TYPE.TEXT,
                    f.PAYLOAD_TYPE.LOCATION,
                    f.PAYLOAD_TYPE.ATTACHMENT,
                  ]),
                  e
                );
              })();
            t.ChatServerService = C;
          },
          2158: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ChatServerEvent = void 0),
              (function (e) {
                e.STATUS = "status";
              })(t.ChatServerEvent || (t.ChatServerEvent = {}));
          },
          5795: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.SpeechRecognitionService = t.IVoiceRecognitionEvent = void 0);
            var i,
              o = n(9297),
              s = n(9012),
              r = n(983),
              a = n(8216),
              c = n(3289),
              l = n(9886);
            !(function (e) {
              (e.FINAL_RESULT = "finalResult"),
                (e.PARTIAL_RESULT = "partialResult");
            })(i || (i = {})),
              (t.IVoiceRecognitionEvent = i);
            var h = (function () {
              function e() {
                (this.speechRoute = "/voice/stream/recognize"),
                  (this.speechDomain = "generic"),
                  (this.started = !1),
                  (this.BUFF_SIZE = 4096),
                  (this.microphoneStreamBuffer = []),
                  (this.connectionStatus = r.CONNECTION_STATE.CLOSED),
                  (this.isFirstFrame = !0),
                  (this.filterBuffer = []),
                  (this.LP_48000_TO_16000_FIR = [
                    -25033838264794034e-21, -3645156113737857e-20,
                    -11489993827892933e-21, 393243788874656e-19,
                    6998419352067277e-20, 37556691270439976e-21,
                    -476966455345305e-19, -0.00011379935461751734,
                    -8400957697117619e-20, 4208817777607469e-20,
                    0.00016391587447478332, 0.00015508372993570357,
                    -1253765788919669e-20, -0.00021258262011091092,
                    -0.0002524059896175195, -51874329668708116e-21,
                    0.0002479230009768214, 0.00037351534477673157,
                    0.00016157590781788105, -0.0002541085239198603,
                    -0.000510486865332593, -0.0003246104617540939,
                    0.00021219136947965464, 0.0006488877825604561,
                    0.0005444416935293036, -0.0001016639071691704,
                    -0.0007673001147209819, -0.0008176720912938691,
                    -972696982411551e-19, 0.0008376185852528038,
                    0.0011319450250252222, 0.0004008193339799052,
                    -0.0008262743020160207, -0.0014643282305934196,
                    -0.0008183365045047033, 0.0006964471772153777,
                    0.001780467922489105, 0.0013489288090360295,
                    -0.00041122152287042, -0.0020347535966250413,
                    -0.0019782994815083733, -6247794246099269e-20,
                    0.002171643809964705, 0.0026761621389245617,
                    0.00074944268608935, -0.00212817775887288,
                    -0.003394541347147186, -0.0016615884301227524,
                    0.001837545335885159, 0.004067170702246546,
                    0.0027936171643976352, -0.001233420727213658,
                    -0.004610035314537476, -0.004119319153202972,
                    0.00025459137646049936, 0.00492286494534436,
                    0.005588805700369816, 0.001150762425755883,
                    -0.004891042781491068, -0.0071267634777626675,
                    -0.003021979039818941, 0.00438688631315642,
                    0.008631467181982988, 0.005385139236634672,
                    -0.003268406079325266, -0.009973661255235284,
                    -0.008256256502745316, 0.0013719935383757782,
                    0.010993210336541666, 0.011651337116264694,
                    0.0015082475865128093, -0.01148872195209017,
                    -0.015609515327517686, -0.005671504441670989,
                    0.011188303272599716, 0.02024519058502148,
                    0.011637590928971467, -0.009667754909210324,
                    -0.025878090076785515, -0.020500381603699786,
                    0.006098908137700642, 0.033428666116203716,
                    0.03513487017573178, 0.001719739622764723,
                    -0.046085580848361105, -0.06623078150315037,
                    -0.023349941728869696, 0.08292213207159124,
                    0.21069217442624302, 0.2973829711397418, 0.2973829711397419,
                    0.21069217442624305, 0.08292213207159124,
                    -0.023349941728869693, -0.06623078150315037,
                    -0.046085580848361105, 0.0017197396227647225,
                    0.03513487017573178, 0.033428666116203716,
                    0.006098908137700641, -0.020500381603699783,
                    -0.025878090076785508, -0.009667754909210326,
                    0.011637590928971469, 0.020245190585021472,
                    0.011188303272599716, -0.00567150444167099,
                    -0.015609515327517682, -0.01148872195209017,
                    0.001508247586512809, 0.011651337116264699,
                    0.010993210336541666, 0.0013719935383757782,
                    -0.008256256502745314, -0.009973661255235283,
                    -0.0032684060793252657, 0.00538513923663467,
                    0.008631467181982988, 0.004386886313156419,
                    -0.0030219790398189413, -0.0071267634777626675,
                    -0.0048910427814910715, 0.0011507624257558842,
                    0.005588805700369813, 0.00492286494534436,
                    0.00025459137646049936, -0.004119319153202973,
                    -0.004610035314537475, -0.0012334207272136583,
                    0.002793617164397636, 0.004067170702246546,
                    0.0018375453358851592, -0.0016615884301227509,
                    -0.0033945413471471847, -0.0021281777588728797,
                    0.0007494426860893505, 0.0026761621389245612,
                    0.0021716438099647056, -6247794246099253e-20,
                    -0.001978299481508373, -0.0020347535966250404,
                    -0.00041122152287042, 0.0013489288090360292,
                    0.0017804679224891048, 0.0006964471772153777,
                    -0.0008183365045047026, -0.00146432823059342,
                    -0.0008262743020160207, 0.0004008193339799063,
                    0.0011319450250252222, 0.0008376185852528037,
                    -9726969824115494e-20, -0.0008176720912938694,
                    -0.0007673001147209783, -0.00010166390716916983,
                    0.0005444416935293033, 0.0006488877825604562,
                    0.0002121913694796546, -0.00032461046175409424,
                    -0.000510486865332593, -0.00025410852391986036,
                    0.0001615759078178811, 0.0003735153447767315,
                    0.00024792300097682137, -5187432966870808e-20,
                    -0.0002524059896175194, -0.00021258262011091095,
                    -1253765788919669e-20, 0.0001550837299357036,
                    0.0001639158744747833, 42088177776074685e-21,
                    -8400957697117623e-20, -0.00011379935461751733,
                    -4769664553453051e-20, 3755669127044002e-20,
                    699841935206728e-19, 393243788874656e-19,
                    -11489993827892933e-21, -3645156113737856e-20,
                    -2503383826479402e-20,
                  ]),
                  (this.LP_44100_TO_16000_FIR = [
                    -5044267067893139e-21, 5738740247594612e-21,
                    1611195555688156e-20, 10560179594562795e-21,
                    -1242816862904201e-20, -3084430704328611e-20,
                    -18160396924882423e-21, 2303124169528074e-20,
                    5216612702894834e-20, 2806026886746509e-20,
                    -389608521587068e-19, -8174245278012476e-20,
                    -4037543061985353e-20, 619375276294956e-19,
                    0.00012143092661620545, 55083199655424166e-21,
                    -9401891583478883e-20, -0.00017326981522755043,
                    -7198069055926206e-20, 0.0001376274218691789,
                    0.00023946132645647525, 9064030545698025e-20,
                    -0.00019557611633250834, -0.0003223511502826996,
                    -0.00011036322783022617, 0.0002710935667931249,
                    0.00042440564349633953, 0.00013013140955365376,
                    -0.00036784896615780913, -0.0005481886438481025,
                    -0.00014855826094166272, 0.0004899798946967381,
                    0.000696340560985472, 0.00016383778624615643,
                    -0.0006421263408051642, -0.0008715631880363658,
                    -0.00017369118859371453, 0.000829476349448821,
                    0.0010766146787146871, 0.00017530890385814463,
                    -0.0010578310750603923, -0.001314320458073489,
                    -0.0001652844648711556, 0.0013337004262191077,
                    0.0015876076783199174, 0.000139534308084411,
                    -0.0016644454627712116, -0.001899573527380014,
                    -9319422024995832e-20, 0.002058491185395933,
                    0.0022536018141979036, 20477911370491685e-21,
                    -0.0025256449668619525, -0.0026535487754524955,
                    8552498376473957e-20, 0.0030775744811722015,
                    0.0031040297261921, -0.00023314744969763122,
                    -0.003728529808331677, -0.003610856230113392,
                    0.000432598472497653, 0.0044964472481822506,
                    0.004181705019767344, -0.0006966685466235378,
                    -0.005404666489478738, -0.00482715710731867,
                    0.0010418556659416306, 0.006484667519607787,
                    0.00556235368742558, -0.0014902159613265254,
                    -0.007780573986407925, -0.0064097301786953595,
                    0.002072517010858728, 0.009356870546119134,
                    0.0074037416266333166, -0.00283386009764953,
                    -0.011312323822665827, -0.008599512596140524,
                    0.003844300507349054, 0.013806774337071994,
                    0.01008985372973804, -0.005220460312862638,
                    -0.01711716324115331, -0.01204196749753927,
                    0.007174046245357611, 0.021768247992024713,
                    0.01478690833035584, -0.010136389804721707,
                    -0.02888735624896028, -0.019078400739739057,
                    0.015146805312378952, 0.041410446665863104,
                    0.027068163980255515, -0.025512027260482153,
                    -0.07011218378743589, -0.04829678433503421,
                    0.06041368701604651, 0.21199607414538668,
                    0.3213532652447261, 0.3213532652447261, 0.21199607414538668,
                    0.060413687016046526, -0.04829678433503422,
                    -0.07011218378743589, -0.025512027260482153,
                    0.027068163980255515, 0.041410446665863104,
                    0.015146805312378952, -0.019078400739739057,
                    -0.02888735624896028, -0.010136389804721703,
                    0.01478690833035584, 0.021768247992024713,
                    0.007174046245357611, -0.01204196749753927,
                    -0.01711716324115331, -0.005220460312862639,
                    0.010089853729738038, 0.013806774337071994,
                    0.0038443005073490553, -0.008599512596140524,
                    -0.011312323822665827, -0.0028338600976495314,
                    0.007403741626633317, 0.009356870546119134,
                    0.002072517010858727, -0.006409730178695359,
                    -0.007780573986407925, -0.001490215961326526,
                    0.005562353687425577, 0.006484667519607787,
                    0.0010418556659416256, -0.004827157107318673,
                    -0.005404666489478739, -0.0006966685466235378,
                    0.004181705019767345, 0.004496447248182251,
                    0.0004325984724976533, -0.003610856230113392,
                    -0.003728529808331677, -0.0002331474496976315,
                    0.0031040297261921003, 0.003077574481172201,
                    8552498376473897e-20, -0.002653548775452496,
                    -0.002525644966861952, 2047791137049164e-20,
                    0.002253601814197904, 0.002058491185395933,
                    -9319422024995909e-20, -0.001899573527380014,
                    -0.0016644454627712118, 0.00013953430808441038,
                    0.0015876076783199174, 0.0013337004262191077,
                    -0.0001652844648711556, -0.0013143204580734896,
                    -0.0010578310750603925, 0.00017530890385814333,
                    0.0010766146787146878, 0.0008294763494488195,
                    -0.00017369118859371463, -0.00087156318803637,
                    -0.0006421263408051633, 0.00016383778624615698,
                    0.0006963405609854716, 0.0004899798946967381,
                    -0.00014855826094166245, -0.0005481886438481027,
                    -0.00036784896615780924, 0.00013013140955365368,
                    0.00042440564349633964, 0.00027109356679312505,
                    -0.00011036322783022619, -0.0003223511502826996,
                    -0.00019557611633250842, 9064030545698017e-20,
                    0.00023946132645647525, 0.00013762742186917883,
                    -7198069055926207e-20, -0.0001732698152275505,
                    -9401891583478886e-20, 5508319965542416e-20,
                    0.00012143092661620549, 6193752762949557e-20,
                    -4037543061985352e-20, -8174245278012477e-20,
                    -38960852158706805e-21, 28060268867465078e-21,
                    52166127028948336e-21, 2303124169528077e-20,
                    -18160396924882423e-21, -30844307043286126e-21,
                    -12428168629042018e-21, 10560179594562806e-21,
                    1611195555688157e-20, 5738740247594605e-21,
                    -5044267067893138e-21,
                  ]),
                  c.setAudioContext(),
                  c.polyfillUserMedia();
              }
              return (
                (e.getInstance = function () {
                  return (
                    this._service || (this._service = new e()), this._service
                  );
                }),
                (e.prototype.init = function (e, t, n) {
                  var i = this;
                  return (
                    (this.settings = e),
                    (this.authTokenService = n),
                    (this.serverConfig = t),
                    (this.isClientAuthEnabled = !!n),
                    new o.default(function (e, t) {
                      i.buildSpeechRequestUrl()
                        .then(function (t) {
                          (i.requestUrl = t), e();
                        })
                        .catch(function (e) {
                          t(e);
                        });
                    })
                  );
                }),
                (e.prototype.startRecording = function (e, t, n) {
                  var i,
                    h = this.settings.i18n[this.settings.locale];
                  return (
                    this.requestUrl
                      ? a
                          .getValues(l.SPEECH_LOCALE)
                          .indexOf(this.serverConfig.locale) < 0
                        ? (i = h.errorSpeechUnsupportedLocale)
                        : !this.connection ||
                          (this.connection.readyState !==
                            r.CONNECTION_STATE.CLOSING &&
                            this.connection.readyState !==
                              r.CONNECTION_STATE.CONNECTING) ||
                          (i = h.errorSpeechMultipleConnection)
                      : (i = h.errorSpeechInvalidUrl),
                    i
                      ? o.default.reject(new Error(i))
                      : ((this.onSpeechRecognition = this.getCallbackImpl(e)),
                        (this.onSpeechNetworkChange = this.getCallbackImpl(t)),
                        (this.onAnalyserReady = this.getCallbackImpl(
                          null == n ? void 0 : n.onAnalyserReady
                        )),
                        (this.onAnalyserFrequencies = this.getCallbackImpl(
                          null == n ? void 0 : n.onAnalyserFrequencies
                        )),
                        (this.microphoneStreamBuffer = []),
                        this.isRecording()
                          ? o.default.resolve()
                          : c.isUserMediaAvailable()
                          ? this.startRecordingWeb()
                          : s.isAudioInputAvailable()
                          ? this.startRecordingCordova()
                          : o.default.reject(
                              new Error(h.errorSpeechUnavailable)
                            ))
                  );
                }),
                (e.prototype.stopRecording = function () {
                  this.connection
                    ? (this.stopMicrophone(),
                      this.connection.readyState === r.CONNECTION_STATE.OPEN &&
                        this.connection.close())
                    : this.setConnectionStatus(r.CONNECTION_STATE.CLOSED);
                }),
                (e.prototype.setSpeechLocale = function (e) {
                  var t = this;
                  this.serverConfig &&
                    ((this.serverConfig.locale = e),
                    this.buildSpeechRequestUrl().then(function (e) {
                      t.requestUrl = e;
                    }));
                }),
                (e.prototype.isInitialized = function () {
                  return !!this.settings;
                }),
                (e.prototype.isRecording = function () {
                  return this.started;
                }),
                (e.prototype.getCallbackImpl = function (e) {
                  return e && "function" == typeof e ? e : function () {};
                }),
                (e.prototype.startRecordingWeb = function () {
                  var e = this;
                  return new o.default(function (t, n) {
                    navigator.mediaDevices
                      .getUserMedia({ audio: !0 })
                      .then(function (n) {
                        (e.audioContext = new AudioContext()),
                          (e.microphoneStream =
                            e.audioContext.createMediaStreamSource(n)),
                          e.startMicrophone(),
                          t();
                      })
                      .catch(function (e) {
                        n(e);
                      });
                  });
                }),
                (e.prototype.startRecordingCordova = function () {
                  var e = this;
                  return new o.default(function (t, n) {
                    s.stopAudioInput()
                      .then(function () {
                        return s
                          .getAudioInputUserMedia({
                            audioSourceType:
                              s.AudioInputSourceType.VOICE_RECOGNITION,
                            bufferSize: 4096,
                            streamToWebAudio: !0,
                          })
                          .then(function (n) {
                            (e.audioContext = s
                              .getAudioInput()
                              .getAudioContext()),
                              (e.microphoneStream = n),
                              e.startMicrophone(),
                              t();
                          });
                      })
                      .catch(function (e) {
                        n(e);
                      });
                  });
                }),
                (e.prototype.setRequestUrl = function () {
                  var e = this.serverConfig,
                    t = e.protocol,
                    n = e.host,
                    i = e.channelId,
                    o = e.userId,
                    s = e.locale,
                    r =
                      t +
                      n +
                      this.speechRoute +
                      "/" +
                      s +
                      "/" +
                      this.speechDomain,
                    c = { channelId: i, encoding: "audio/raw", userId: o };
                  return (
                    this.isClientAuthEnabled && (c.jwtInBody = "true"),
                    encodeURI(a.utils.setSearchParams(r, c))
                  );
                }),
                (e.prototype.buildSpeechRequestUrl = function () {
                  var e = this;
                  return new o.default(function (t, n) {
                    e.isClientAuthEnabled
                      ? e.authTokenService
                          .getToken()
                          .then(function (n) {
                            (e.serverConfig.channelId =
                              n.getClaim("channelId")),
                              (e.serverConfig.userId = n.getClaim("userId")),
                              t(e.setRequestUrl());
                          })
                          .catch(function () {
                            n(
                              Error(
                                "Unable to fetch JWT token. Can not use speech service."
                              )
                            );
                          })
                      : t(e.setRequestUrl());
                  });
                }),
                (e.prototype.connectToWebSocket = function (e) {
                  var t = new WebSocket(e);
                  return (
                    (t.onopen = this.connectionOnOpen.bind(this)),
                    (t.onclose = this.connectionOnClose.bind(this)),
                    (t.onmessage = this.connectionOnMessage.bind(this)),
                    (t.onerror = this.connectionOnError.bind(this)),
                    t
                  );
                }),
                (e.prototype.connectionOnOpen = function () {
                  var e = this;
                  this.authTokenService
                    ? this.authTokenService.getToken().then(function (t) {
                        e.connection.send("Bearer " + t.token),
                          e.setConnectionStatus(r.CONNECTION_STATE.OPEN),
                          e.dumpVoiceBuffer();
                      })
                    : (this.setConnectionStatus(r.CONNECTION_STATE.OPEN),
                      this.dumpVoiceBuffer());
                }),
                (e.prototype.connectionOnClose = function (e) {
                  this.setConnectionStatus(r.CONNECTION_STATE.CLOSED),
                    this.isRecording() && this.stopMicrophone();
                }),
                (e.prototype.connectionOnMessage = function (e) {
                  try {
                    var t = JSON.parse(e.data);
                    if (!t.event && t.code) throw e;
                    this.onSpeechRecognition && this.onSpeechRecognition(t),
                      (null == t ? void 0 : t.event) === i.FINAL_RESULT &&
                        this.stopRecording();
                  } catch (e) {
                    this.stopRecording();
                  }
                }),
                (e.prototype.connectionOnError = function (e) {
                  this.connection.readyState === r.CONNECTION_STATE.OPEN &&
                    this.connection.close();
                }),
                (e.prototype.connectionSendMessage = function (e) {
                  this.getConnectionStatus() !== r.CONNECTION_STATE.OPEN ||
                  this.connection.readyState !== r.CONNECTION_STATE.OPEN ||
                  this.microphoneStreamBuffer.length
                    ? this.microphoneStreamBuffer.push(e)
                    : this.connection.send(e);
                }),
                (e.prototype.setConnectionStatus = function (e) {
                  var t;
                  (this.connectionStatus = e),
                    null === (t = this.onSpeechNetworkChange) ||
                      void 0 === t ||
                      t.call(this, e);
                }),
                (e.prototype.getConnectionStatus = function () {
                  return this.connectionStatus;
                }),
                (e.prototype.dumpVoiceBuffer = function () {
                  var e;
                  if (
                    (null === (e = this.connection) || void 0 === e
                      ? void 0
                      : e.readyState) === r.CONNECTION_STATE.OPEN
                  )
                    for (; this.microphoneStreamBuffer.length > 0; )
                      this.connection.send(this.microphoneStreamBuffer.shift());
                }),
                (e.prototype.lanczosWindow = function (e, t) {
                  if (0 === t) return 1;
                  if (t >= e || t <= -e) return 0;
                  var n = Math.PI * t;
                  return (e * Math.sin(n) * Math.sin(n / e)) / (n * n);
                }),
                (e.prototype.downsampleBuffer = function (e, t, n) {
                  if (n === t) return e;
                  if (n > t)
                    throw new Error(
                      "Input sample rate (" +
                        t +
                        " kHz) is lower than output sample rate(" +
                        n +
                        " kHz) : Use case not handled."
                    );
                  var i = [];
                  if (48e3 === t) i = this.LP_48000_TO_16000_FIR;
                  else {
                    if (44100 !== t)
                      throw new Error(
                        t + " kHz is not an expected input sampling frequency"
                      );
                    i = this.LP_44100_TO_16000_FIR;
                  }
                  var o,
                    s,
                    r,
                    a = t / n;
                  this.isFirstFrame
                    ? ((o = Math.floor(e.length % a)),
                      (s = e.length - o),
                      (r = 0 === o ? Array.from(e) : e.slice(0, s)))
                    : ((o = Math.floor(
                        (e.length + this.filterBuffer.length - i.length) % a
                      )),
                      (s = e.length + this.filterBuffer.length - i.length - o),
                      (r = new Float32Array(this.filterBuffer.length + s)).set(
                        this.filterBuffer
                      ),
                      r.set(e.slice(0, s), this.filterBuffer.length));
                  var c = Math.floor(s / a),
                    l = new Int16Array(c);
                  if (48e3 === t)
                    for (var h = i.length; h < r.length; h += a) {
                      for (var u = 0, d = 0; d < i.length; d++)
                        u += r[h - d] * i[d];
                      var p = 32767 * Math.max(Math.min(u, 1), -1);
                      l[(h - i.length) / a] = p;
                    }
                  else {
                    var g = [];
                    for (h = i.length; h < r.length; h++) {
                      for (u = 0, d = 0; d < i.length; d++)
                        u += r[h - d] * i[d];
                      g[h - i.length] = u;
                    }
                    for (var f = 0; f < c; f++) {
                      var m = f * a,
                        v = Math.floor(m) - 3 + 1,
                        _ = Math.floor(m) + 3;
                      for (u = 0, h = v; h <= _; h++)
                        u +=
                          (h < 0
                            ? g[0]
                            : h >= g.length
                            ? g[g.length - 1]
                            : g[h]) * this.lanczosWindow(3, m - h);
                      l[f] = 32767 * Math.max(Math.min(u, 1), -1);
                    }
                  }
                  return (
                    this.isFirstFrame
                      ? (this.filterBuffer = e.slice(
                          s - i.length - this.filterBuffer.length
                        ))
                      : (this.filterBuffer = e.slice(
                          s - i.length - (this.filterBuffer.length - i.length)
                        )),
                    (this.isFirstFrame = !1),
                    l.buffer
                  );
                }),
                (e.prototype.processAudioBuffer = function (e) {
                  var t = e.inputBuffer.getChannelData(0),
                    n = e.inputBuffer.sampleRate,
                    i = this.downsampleBuffer(t, n, 16e3);
                  this.processAnalyser(), this.connectionSendMessage(i);
                }),
                (e.prototype.processAnalyser = function () {
                  if (this.analyser) {
                    var e = new Uint8Array(this.analyser.frequencyBinCount);
                    this.analyser.getByteFrequencyData(e),
                      this.onAnalyserFrequencies(e);
                  }
                }),
                (e.prototype.startMicrophone = function () {
                  (this.connection = this.connectToWebSocket(this.requestUrl)),
                    (this.analyser = this.audioContext.createAnalyser()),
                    (this.analyser.smoothingTimeConstant = 0.8),
                    (this.analyser.fftSize = 256),
                    this.onAnalyserReady(this.analyser),
                    (this.processor = this.audioContext.createScriptProcessor(
                      this.BUFF_SIZE,
                      1,
                      1
                    )),
                    (this.processor.onaudioprocess =
                      this.processAudioBuffer.bind(this)),
                    this.microphoneStream.connect(this.analyser),
                    this.analyser.connect(this.processor),
                    this.processor.connect(this.audioContext.destination),
                    (this.started = !0);
                }),
                (e.prototype.stopMicrophone = function () {
                  (this.started = !1),
                    this.connection &&
                      (this.connection.readyState === r.CONNECTION_STATE.OPEN &&
                        this.connectionSendMessage("Done"),
                      this.processor && this.processor.disconnect(),
                      this.analyser && this.analyser.disconnect(),
                      s.getAudioInput()
                        ? s.stopAudioInput()
                        : this.cleanupWeb(),
                      (this.processor = null),
                      (this.analyser = null),
                      (this.audioContext = null),
                      (this.microphoneStreamBuffer = []),
                      (this.filterBuffer = []),
                      (this.isFirstFrame = !0));
                }),
                (e.prototype.cleanupWeb = function () {
                  this.microphoneStream &&
                    (this.microphoneStream &&
                      this.microphoneStream.mediaStream &&
                      this.microphoneStream.mediaStream
                        .getAudioTracks()
                        .forEach(function (e) {
                          return e.stop();
                        }),
                    this.microphoneStream.disconnect(),
                    (this.microphoneStream = null)),
                    this.audioContext && this.audioContext.close();
                }),
                (e.ERROR_MESSAGE = {
                  NO_SPEECH_TIMEOUT: "no_speech_timeout",
                  TOO_MUCH_SPEECH_TIMEOUT: "too_much_speech_timeout",
                }),
                e
              );
            })();
            t.SpeechRecognitionService = h;
          },
          9994: function (e, t, n) {
            "use strict";
            var i =
              (this && this.__assign) ||
              function () {
                return (i =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                      for (var o in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }).apply(this, arguments);
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.CoreSpeechSynthesisService = void 0);
            var o = n(9297),
              s = n(8216),
              r = 1,
              a = 1,
              c = 1,
              l = window,
              h = l.speechSynthesis,
              u = l.SpeechSynthesisUtterance,
              d = (function () {
                function e() {
                  var e = this;
                  if (!l || !h || !u)
                    throw new Error(
                      "Web SpeechSynthesis API is not available on this client."
                    );
                  p()
                    .then(function (e) {
                      if (navigator && navigator.language) {
                        var t = e.filter(function (e) {
                          return e.lang === navigator.language;
                        })[0];
                        if (t) return t;
                      }
                      var n = e.filter(function (e) {
                        return e.default;
                      })[0];
                      return n || e[0];
                    })
                    .then(function (t) {
                      e.voice = t;
                    }),
                    l.addEventListener("beforeunload", function (t) {
                      h.cancel(), clearTimeout(e.pauser), delete t.returnValue;
                    });
                }
                return (
                  (e.getInstance = function () {
                    return (
                      this.service || (this.service = new e()), this.service
                    );
                  }),
                  (e.prototype.speak = function (e) {
                    var t = this,
                      n = new u(e);
                    (n.voice = this.voice),
                      (n.pitch = r),
                      (n.rate = a),
                      (n.volume = c),
                      h.paused && h.resume(),
                      h.speak(n),
                      this.voice.localService ||
                        (clearTimeout(this.pauser),
                        f(function (e) {
                          return (t.pauser = e);
                        }));
                  }),
                  (e.prototype.cancel = function () {
                    h.speaking && (h.cancel(), clearTimeout(this.pauser));
                  }),
                  (e.prototype.getVoices = function () {
                    return p();
                  }),
                  (e.prototype.setVoice = function (e) {
                    var t,
                      n,
                      o,
                      l = this;
                    return ((t = e),
                    (n = this.voice),
                    (o = t.map(function (e) {
                      return i({ lang: "", name: "" }, e);
                    })),
                    p().then(function (e) {
                      for (var t = 0, i = o; t < i.length; t++)
                        for (var r = i[t], a = 0, c = e; a < c.length; a++) {
                          var l = c[a];
                          if (
                            s.matchStringIgnoreCase(r.lang, l.lang) &&
                            s.matchStringIgnoreCase(r.name, l.name)
                          )
                            return l;
                        }
                      for (var h = 0, u = o; h < u.length; h++) {
                        r = u[h];
                        for (var d = 0, p = e; d < p.length; d++) {
                          var g = p[d];
                          if (s.matchStringIgnoreCase(r.lang, g.lang)) return g;
                        }
                      }
                      for (var f = 0, m = o; f < m.length; f++) {
                        r = m[f];
                        for (var v = 0, _ = e; v < _.length; v++) {
                          var b = _[v];
                          if (b.lang.indexOf(r.lang) >= 0) return b;
                        }
                      }
                      return n;
                    })).then(function (e) {
                      (l.voice = e),
                        (r = e.pitch || 1),
                        (a = e.rate || 1),
                        (c = e.volume || 1);
                    });
                  }),
                  (e.prototype.getVoice = function () {
                    return this.voice;
                  }),
                  e
                );
              })();
            function p() {
              return new o.default(function (e) {
                g(e),
                  h.addEventListener("voiceschanged", function () {
                    g(e);
                  });
              });
            }
            function g(e) {
              var t = h.getVoices();
              t.length &&
                e(
                  (function (e) {
                    return Array.isArray(e) ? e : e._list;
                  })(t)
                );
            }
            function f(e) {
              var t = l.setTimeout(function () {
                h.speaking && (h.pause(), h.resume(), f(e));
              }, 1e4);
              e(t);
            }
            t.CoreSpeechSynthesisService = d;
          },
          9871: function (e, t, n) {
            "use strict";
            var i =
              (this && this.__rest) ||
              function (e, t) {
                var n = {};
                for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) &&
                    t.indexOf(i) < 0 &&
                    (n[i] = e[i]);
                if (
                  null != e &&
                  "function" == typeof Object.getOwnPropertySymbols
                ) {
                  var o = 0;
                  for (i = Object.getOwnPropertySymbols(e); o < i.length; o++)
                    t.indexOf(i[o]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(e, i[o]) &&
                      (n[i[o]] = e[i[o]]);
                }
                return n;
              };
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ReconnectingWebSocket = void 0);
            var o = n(9297),
              s = n(983),
              r = n(1210),
              a = n(7926),
              c = n(8216),
              l = n(7605),
              h = n(828),
              u = n(7381),
              d = (function () {
                function e(e, t, n, i, o, r, a, h, u) {
                  (this._url = e),
                    (this._authTokenService = t),
                    (this._reconnectInterval = n),
                    (this._reconnectMaxAttempts = i),
                    (this._reconnectTimeout = o),
                    (this._configLongPolling = r),
                    (this._upgradeToWebSocketInterval = a),
                    (this._pollingUrl = h),
                    (this._protocols = u),
                    (this._readyState = s.CONNECTION_STATE.CLOSED),
                    (this._forcedClose = !1),
                    (this._onlyTokenSent = !1),
                    (this._reconnectAttempt = 0),
                    (this._isLongPollingEnabled = !1),
                    (this._webSocketUpgradeInterval = 300),
                    (this._logger = new l.Logger("ReconnectingWebSocket")),
                    (this.onclose = function (e) {}),
                    (this.onerror = function (e) {}),
                    (this.onmessage = function (e) {}),
                    (this.onopen = function (e) {}),
                    (this.onconnecting = function () {}),
                    (this.onstatuschange = function (e) {}),
                    this._logger.debug(
                      "WebSocket creation",
                      this._url,
                      "reconnectInterval: " + this._reconnectInterval,
                      "reconnectMaxAttempts: " + this._reconnectMaxAttempts,
                      "reconnectTimeout: " + this._reconnectTimeout
                    ),
                    this._configLongPolling &&
                      ((this._reconnectInterval = 2),
                      (this._reconnectMaxAttempts = 3)),
                    (this._reconnectInterval = c.utils.secToMillisec(n)),
                    (this._reconnectTimeout = c.utils.secToMillisec(o)),
                    (this._webSocketUpgradeInterval = c.utils.secToMillisec(
                      this._upgradeToWebSocketInterval
                    ));
                }
                return (
                  Object.defineProperty(e.prototype, "url", {
                    get: function () {
                      return this._url;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "protocol", {
                    get: function () {
                      return this._ws.protocol;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "bufferedAmount", {
                    get: function () {
                      return this._ws.bufferedAmount;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "extensions", {
                    get: function () {
                      return this._ws.extensions;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "readyState", {
                    get: function () {
                      return this._readyState;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "CLOSED", {
                    get: function () {
                      return s.CONNECTION_STATE.CLOSED;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "CLOSING", {
                    get: function () {
                      return s.CONNECTION_STATE.CLOSING;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "CONNECTING", {
                    get: function () {
                      return s.CONNECTION_STATE.CONNECTING;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "OPEN", {
                    get: function () {
                      return s.CONNECTION_STATE.OPEN;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "binaryType", {
                    get: function () {
                      return this._ws.binaryType;
                    },
                    set: function (e) {
                      this._ws.binaryType = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (e.prototype.open = function () {
                    navigator.onLine
                      ? this._connect()
                      : this._setReadyState(s.CONNECTION_STATE.CLOSED);
                  }),
                  (e.prototype.close = function (e, t) {
                    var n;
                    void 0 === e && (e = 1e3),
                      void 0 === t && (t = ""),
                      (this._forcedClose = !0),
                      (null === (n = this._ws) || void 0 === n
                        ? void 0
                        : n.readyState) !== s.CONNECTION_STATE.CLOSED
                        ? (this._setReadyState(s.CONNECTION_STATE.CLOSING),
                          this._ws.close(e, t))
                        : this._isLongPollingEnabled &&
                          (this._setReadyState(s.CONNECTION_STATE.CLOSING),
                          (this._isLongPollingEnabled = !1),
                          clearInterval(this._upgradeWebSocketTimer),
                          this._setReadyState(s.CONNECTION_STATE.CLOSED));
                  }),
                  (e.prototype.send = function (e) {
                    e.isRead, e.date;
                    var t,
                      n = i(e, ["isRead", "date"]),
                      o = !1;
                    if (
                      (null === (t = this._ws) || void 0 === t
                        ? void 0
                        : t.readyState) === s.CONNECTION_STATE.OPEN
                    ) {
                      this._onlyTokenSent = !1;
                      try {
                        this._ws.send(JSON.stringify(n)), (o = !0);
                      } catch (e) {
                        o = !1;
                      }
                    } else
                      this._isLongPollingEnabled
                        ? (o = this._longPollSendMessage(n))
                        : this._logger.error(
                            "Connection closed, can not send message."
                          );
                    return o;
                  }),
                  (e.prototype.addEventListener = function (e, t, n) {
                    this._ws && this._ws.addEventListener(e, t, n);
                  }),
                  (e.prototype.dispatchEvent = function (e) {
                    return !!this._ws && this._ws.dispatchEvent(e);
                  }),
                  (e.prototype.removeEventListener = function (e, t, n) {
                    this._ws && this._ws.removeEventListener(e, t, n);
                  }),
                  (e.prototype._connect = function () {
                    var e,
                      t,
                      n = this;
                    if (window.WebSocket) {
                      if (
                        (this._logger.debug(
                          "Initiating connection to server",
                          this._url
                        ),
                        this._isLongPollingEnabled ||
                          this._setReadyState(s.CONNECTION_STATE.CONNECTING),
                        !this._ws ||
                          this._ws.readyState === s.CONNECTION_STATE.CLOSED)
                      ) {
                        (this._ws = new WebSocket(this._url, this._protocols)),
                          (this._ws.onmessage = function (e) {
                            n._logger.debug(
                              "WebSocket onmessage",
                              n._url,
                              e.data
                            );
                            try {
                              var t = JSON.parse(e.data);
                              if (u.isPongMessage(t))
                                return void (n.lastPongReceived = !0);
                              n.onmessage(e.data);
                            } catch (t) {
                              console.error(
                                "Error in parsing message ",
                                e.data
                              );
                            }
                          }),
                          (this._ws.onerror = function (e) {
                            n._logger.debug("WebSocket onerror", n._url, e),
                              n.onerror(e);
                          });
                        var i = function (i) {
                          (t = n._startPingPong()),
                            clearTimeout(e),
                            clearInterval(n._upgradeWebSocketTimer),
                            (e = null),
                            (n._reconnectAttempt = 0),
                            (n._isLongPollingEnabled = !1),
                            (n._forcedClose = !1),
                            n._setReadyState(s.CONNECTION_STATE.OPEN),
                            n.onopen(i);
                        };
                        (this._ws.onopen = function (e) {
                          n._logger.debug("WebSocket opened", n._url),
                            n._authTokenService
                              ? ((n._onlyTokenSent = !0),
                                n._authTokenService
                                  .getToken()
                                  .then(function (t) {
                                    n._ws.send(
                                      JSON.stringify(
                                        u.buildAuthTokenMessage(
                                          h.TOKEN_TYPE.JWT,
                                          t.token
                                        )
                                      )
                                    ),
                                      setTimeout(function () {
                                        return (n._onlyTokenSent = !1);
                                      }, 2e4),
                                      i(e);
                                  }))
                              : i(e);
                        }),
                          (this._ws.onclose = function (i) {
                            clearInterval(t),
                              n._forcedClose
                                ? (clearTimeout(e),
                                  n._setReadyState(s.CONNECTION_STATE.CLOSED),
                                  n.onclose(i))
                                : n._authTokenService &&
                                  n._onlyTokenSent &&
                                  i.code !==
                                    r.Constants.WEBSOCKET_CLOSE_EVENT.CODE
                                      .ABNORMAL_CLOSURE
                                ? (n._logger.error(
                                    "Token authentication failed, connection closed."
                                  ),
                                  n._setReadyState(s.CONNECTION_STATE.CLOSED),
                                  n.onclose(i))
                                : (e = setTimeout(function () {
                                    n._reconnectAttempt >=
                                    n._reconnectMaxAttempts
                                      ? n._configLongPolling
                                        ? n._longPollInit()
                                        : (n._logger.debug(
                                            "Reconnection attempts limit reached"
                                          ),
                                          n._setReadyState(
                                            s.CONNECTION_STATE.CLOSED
                                          ),
                                          n.onclose(i))
                                      : n._ws &&
                                        n._ws.readyState ===
                                          s.CONNECTION_STATE.CLOSED &&
                                        (n._reconnectAttempt++,
                                        n._logger.debug(
                                          "Reconnection attempt",
                                          n._reconnectAttempt
                                        ),
                                        n._connect());
                                  }, n._reconnectInterval));
                          });
                      }
                    } else
                      this._configLongPolling
                        ? this._longPollInit()
                        : (this._setReadyState(s.CONNECTION_STATE.CLOSED),
                          this.onclose(
                            new CloseEvent("WebSocket unavailable", {
                              code: 3e3,
                              reason:
                                "WebSocket is disabled or unavailable on this client. Can not connect to chat server.",
                            })
                          ));
                  }),
                  (e.prototype._longPollInit = function () {
                    var e = this;
                    this._isLongPollingEnabled ||
                      (this._setReadyState(s.CONNECTION_STATE.CONNECTING),
                      this._longPollConnect()
                        .then(function () {
                          e._setReadyState(s.CONNECTION_STATE.OPEN),
                            e.onopen(null),
                            (e._isLongPollingEnabled = !0),
                            (e._upgradeWebSocketTimer =
                              e._startUpgradeToWebSocketTimer()),
                            e._longPollServerPolling();
                        })
                        .catch(function () {
                          (e._isLongPollingEnabled = !1),
                            e._setReadyState(s.CONNECTION_STATE.CLOSED),
                            e.onclose(null);
                        }));
                  }),
                  (e.prototype._longPollConnect = function () {
                    var e = this;
                    return new o.default(function (t, n) {
                      var i = new XMLHttpRequest();
                      i.open("POST", e._pollingUrl),
                        i.setRequestHeader("Content-Type", "application/json"),
                        (i.onload = function () {
                          (null == i ? void 0 : i.status) >= 200 &&
                          (null == i ? void 0 : i.status) < 300
                            ? t()
                            : n();
                        }),
                        e._authTokenService
                          ? e._authTokenService
                              .getToken()
                              .then(function (e) {
                                i.setRequestHeader(
                                  "Authorization",
                                  "Bearer " + e.token
                                ),
                                  i.send(JSON.stringify(u.buildPingMessage()));
                              })
                              .catch(function () {
                                e._logger.error(
                                  "Can not connect to server, token invalid."
                                ),
                                  n();
                              })
                          : i.send(JSON.stringify(u.buildPingMessage()));
                    });
                  }),
                  (e.prototype._longPollServerPolling = function () {
                    var e = this;
                    if (this._isLongPollingEnabled) {
                      var t = new XMLHttpRequest();
                      t.open("GET", this._pollingUrl),
                        (t.onload = function () {
                          t.status &&
                            t.status === a.Response.STATUS.OK &&
                            e._longPollOnMessage(t.responseText),
                            e._longPollServerPolling();
                        }),
                        this._authTokenService
                          ? this._authTokenService
                              .getToken()
                              .then(function (e) {
                                t.setRequestHeader(
                                  "Authorization",
                                  "Bearer " + e.token
                                ),
                                  t.send();
                              })
                              .catch(function (t) {
                                e._logger.error(
                                  "Can not connect to server, token invalid."
                                );
                              })
                          : t.send();
                    } else
                      this._ws ||
                        (this._setReadyState(s.CONNECTION_STATE.CLOSED),
                        this.onclose(null));
                  }),
                  (e.prototype._longPollSendMessage = function (e) {
                    var t = this,
                      n = new XMLHttpRequest();
                    return (
                      n.open("POST", this._pollingUrl),
                      n.setRequestHeader("Content-Type", "application/json"),
                      this._authTokenService
                        ? this._authTokenService
                            .getToken()
                            .then(function (t) {
                              n.setRequestHeader(
                                "Authorization",
                                "Bearer " + t.token
                              ),
                                n.send(JSON.stringify(e));
                            })
                            .catch(function (e) {
                              t._logger.error(
                                "Can not send message, token invalid."
                              );
                            })
                        : n.send(JSON.stringify(e)),
                      !0
                    );
                  }),
                  (e.prototype._longPollOnMessage = function (e) {
                    var t = this;
                    try {
                      JSON.parse(e).forEach(function (e) {
                        t.onmessage(e);
                      });
                    } catch (t) {
                      this._logger.error("Unable to parse response", e);
                    }
                  }),
                  (e.prototype._setReadyState = function (e) {
                    (this._readyState = e),
                      this.triggerNewConnection &&
                      e === s.CONNECTION_STATE.CLOSED
                        ? ((this.triggerNewConnection = !1), this.open())
                        : this.onstatuschange(e);
                  }),
                  (e.prototype._startPingPong = function () {
                    var e = this;
                    return (
                      (this.triggerNewConnection = !1),
                      window.setInterval(function () {
                        var t;
                        (null === (t = e._ws) || void 0 === t
                          ? void 0
                          : t.readyState) === s.CONNECTION_STATE.OPEN &&
                          ((e.lastPongReceived = !1),
                          e._ws.send(JSON.stringify(u.buildPingMessage())),
                          setTimeout(function () {
                            e.readyState !== s.CONNECTION_STATE.OPEN ||
                              e.lastPongReceived ||
                              (e.close(), (e.triggerNewConnection = !0));
                          }, u.PONG_DELIVERY_CONFIRMATION_INTERVAL));
                      }, u.PING_PONG_INTERVAL)
                    );
                  }),
                  (e.prototype._startUpgradeToWebSocketTimer = function () {
                    var e = this;
                    return window.setInterval(function () {
                      (e._reconnectAttempt = 0), e._connect();
                    }, this._webSocketUpgradeInterval);
                  }),
                  e
                );
              })();
            t.ReconnectingWebSocket = d;
          },
          9158: function (e, t, n) {
            var i = n(6432);
            e.exports = "string" == typeof i ? i : i.toString();
          },
          5192: function (e, t, n) {
            var i = n(909);
            e.exports = "string" == typeof i ? i : i.toString();
          },
          6097: function (e, t, n) {
            var i = n(5464);
            e.exports = "string" == typeof i ? i : i.toString();
          },
          2146: function (e, t, n) {
            var i = n(9192);
            e.exports = "string" == typeof i ? i : i.toString();
          },
          6819: function (e, t, n) {
            var i = n(4068);
            e.exports = "string" == typeof i ? i : i.toString();
          },
          9238: function (e, t, n) {
            var i = n(5311);
            e.exports = "string" == typeof i ? i : i.toString();
          },
          8167: function (e, t, n) {
            var i = n(773);
            e.exports = "string" == typeof i ? i : i.toString();
          },
          120: function (e, t, n) {
            var i = n(8371);
            e.exports = "string" == typeof i ? i : i.toString();
          },
          4121: function (e, t, n) {
            var i = n(8566);
            e.exports = "string" == typeof i ? i : i.toString();
          },
          4243: function (e, t, n) {
            var i = n(8274);
            e.exports = "string" == typeof i ? i : i.toString();
          },
          8114: function (e, t, n) {
            var i = n(9244);
            e.exports = "string" == typeof i ? i : i.toString();
          },
          1920: function (e, t, n) {
            var i = n(7519);
            e.exports = "string" == typeof i ? i : i.toString();
          },
          8826: function (e, t, n) {
            var i = n(93);
            e.exports = "string" == typeof i ? i : i.toString();
          },
          5109: function (e, t, n) {
            var i = n(6069);
            e.exports = "string" == typeof i ? i : i.toString();
          },
        },
        t = {};
      function n(i) {
        if (t[i]) return t[i].exports;
        var o = (t[i] = { id: i, exports: {} });
        return e[i].call(o.exports, o, o.exports, n), o.exports;
      }
      (n.d = function (e, t) {
        for (var i in t)
          n.o(t, i) &&
            !n.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
        (n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var i = {};
      return (
        (function () {
          "use strict";
          var e = i;
          n(2574), n(4514), n(9164);
          var t = n(9297),
            o = n(9012),
            s = n(7642),
            r = n(983),
            a = n(8971),
            c = n(8216),
            l = n(3289),
            h = n(2362),
            u = n(7605),
            d = n(9886),
            p = n(2772),
            g = n(6576),
            f = n(2324),
            m = n(9069),
            v = n(5795),
            _ = n(9994);
          function b(e, n) {
            var i,
              b,
              y,
              C,
              S,
              T,
              E,
              w,
              x,
              A = this,
              O = new u.Logger("main"),
              I = c.getValues(d.SPEECH_LOCALE),
              M = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n];
                1 === t.length
                  ? O.error(
                      "Parameter " +
                        t +
                        " was not passed for " +
                        e +
                        " call. No action processed."
                    )
                  : O.error(
                      "Parameters " +
                        t.join(", ") +
                        " were not passed for " +
                        e +
                        " call. No action processed."
                    );
              },
              P = function (e) {
                w.trigger(s.ChatEvent.MESSAGE_SENT, e),
                  w.trigger(s.ChatEvent.MESSAGE, e);
              },
              L = function (e) {
                w.trigger(s.ChatEvent.MESSAGE_RECEIVED, e),
                  w.trigger(s.ChatEvent.MESSAGE, e);
              },
              k = function (e) {
                w.trigger(s.ChatEvent.NETWORK, e);
              },
              N = function (e) {
                if (
                  ((i = new h.WidgetComponent(
                    y,
                    b,
                    A.openChat.bind(A),
                    A.closeChat.bind(A),
                    L.bind(A),
                    P.bind(A),
                    A.getUnreadMessagesCount.bind(A),
                    k.bind(A),
                    C,
                    S,
                    x,
                    w
                  )),
                  e)
                )
                  try {
                    i.embedInElement(b.targetElement);
                  } catch (e) {
                    O.error("Target Element not specified", e);
                  }
                else i.appendToElement(document.body);
              },
              R = function (e, t) {
                if (
                  null === document || void 0 === document
                    ? void 0
                    : document.head
                ) {
                  var n = document.getElementById(e);
                  if (n) n.textContent = t;
                  else {
                    var i = y.createStyle(t);
                    (i.id = e), document.head.appendChild(i);
                  }
                }
              },
              D = function () {
                w.trigger(s.ChatEvent.READY), (D = function () {});
              },
              B = function (e, t, n) {
                "string" == typeof e &&
                  e.length &&
                  C.setSettingsProperty("URI", e),
                  "string" == typeof t &&
                    t.length &&
                    C.setSettingsProperty("channelId", t),
                  "string" == typeof n &&
                    n.length &&
                    C.setSettingsProperty("userId", n);
              };
            (this.connect = function (e) {
              var n = void 0 === e ? {} : e,
                i = n.URI,
                o = n.channelId,
                a = n.userId;
              if ((b.clientAuthEnabled && x.resetToken(), A.isConnected())) {
                if (
                  (function (e, t, n) {
                    var i = !1;
                    return (
                      ((e && e !== b.URI) ||
                        (t && t !== b.channelId) ||
                        (n && n !== b.userId)) &&
                        (i = !0),
                      i
                    );
                  })(i, o, a)
                ) {
                  var c = b.URI !== i;
                  return (
                    B(i, o, a),
                    !b.clientAuthEnabled || c
                      ? new t.default(function (e, t) {
                          var n = !0,
                            i = function (o) {
                              o === r.CONNECTION_STATE.CLOSED &&
                                n &&
                                (A.off(s.ChatEvent.NETWORK, i),
                                C.openConnection().then(e, t),
                                (n = !1));
                            };
                          C.closeConnection(), A.on(s.ChatEvent.NETWORK, i);
                        })
                      : t.default.resolve()
                  );
                }
                return t.default.resolve();
              }
              B(i, o, a);
              var l = C.openConnection();
              return (
                l
                  .then(function () {
                    D();
                  })
                  .catch(function () {
                    D();
                  }),
                l
              );
            }),
              (this.disconnect = function (e, n) {
                return new t.default(function (t) {
                  var o = !0,
                    a = function (e) {
                      e === r.CONNECTION_STATE.CLOSED &&
                        o &&
                        (A.off(s.ChatEvent.NETWORK, a), (o = !1), t());
                    };
                  A.on(s.ChatEvent.NETWORK, a),
                    C.closeConnection(e, n),
                    i.cancelSpeechSynthesis(),
                    b.enableSpeech && A.stopVoiceRecording(),
                    b.enableAttachment && C.cancelUploadAttachments(),
                    C.isConnectionClosed() && o && ((o = !1), t());
                });
              }),
              (this.isConnected = function () {
                return C.isConnectionOpen();
              }),
              (this.openChat = function () {
                i.isOpen || i.showChat(), w.trigger(s.ChatEvent.WIDGET_OPENED);
              }),
              (this.closeChat = function () {
                i.isOpen && i.onClose(), w.trigger(s.ChatEvent.WIDGET_CLOSED);
              }),
              (this.isChatOpened = function () {
                return i.isOpen;
              }),
              (this.destroy = function () {
                for (var e in (A.disconnect(),
                A.closeChat(),
                i.remove(),
                w.trigger(s.ChatEvent.DESTROY),
                A.off(),
                A))
                  A[e] && delete A[e];
              }),
              (this.on = function (e, t) {
                w.bind(e, t);
              }),
              (this.off = function (e, t) {
                w.unbind(e, t);
              }),
              (this.sendAttachment = function (e) {
                if (e) return i.uploadFile(e);
                M("sendAttachment", "file");
              }),
              (this.sendMessage = function (e, t) {
                if (e) return i.sendMessage(e, t);
                M("sendMessage", "message");
              }),
              (this.updateUser = function (e, t) {
                e ? C.updateUser(e, t) : M("updateUser", "userDetails");
              }),
              (this.setSkillVoices = function (e) {
                return b.enableBotAudioResponse
                  ? (e &&
                    !Array.isArray(e) &&
                    "string" == typeof (null == e ? void 0 : e.lang)
                      ? (n = [e])
                      : Array.isArray(e) && (n = e),
                    c
                      .isAnyVoiceAvailable(
                        A._speechSynthesisService,
                        A.settings.skillVoices
                      )
                      .then(function (e) {
                        return (
                          (b.skillVoices = c.utils.syncTTSLocaleIfUnavailable({
                            hasRecognition: b.enableSpeech,
                            hasSynthesis: b.enableBotAudioResponse,
                            isReset: e,
                            recognitionLocale: b.speechLocale,
                            synthesisLocales: n,
                          })),
                          T.setVoice(n)
                        );
                      }))
                  : t.default.reject({
                      message:
                        "enableBotAudioResponse is not true. The skill response narration feature is not enabled.",
                    });
                var n;
              }),
              (this.startVoiceRecording = function (e, n, i) {
                return b.enableSpeech
                  ? e
                    ? n
                      ? S.startRecording(e, n, i)
                      : t.default.reject(
                          new Error(
                            "Second callback parameter, onSpeechNetworkChange not provided. Can not start recording"
                          )
                        )
                    : t.default.reject(
                        new Error(
                          "First callback parameter, onSpeechRecognition not provided. Can not start recording."
                        )
                      )
                  : t.default.reject(
                      new Error(
                        "Speech-to-text feature is not enabled. Initialize the widget with enableSpeech: true to use the service."
                      )
                    );
              }),
              (this.stopVoiceRecording = function () {
                if (!b.enableSpeech)
                  throw new Error(
                    "Speech-to-text feature is not enabled. Speech recognition service is not running."
                  );
                return S.stopRecording();
              }),
              (this.setSpeechLocale = function (e) {
                if (!b.enableSpeech) return !1;
                e = e.toLowerCase();
                var t = I.indexOf(e) >= 0;
                if (
                  ((b.speechLocale = e),
                  (null == S ? void 0 : S.isInitialized()) &&
                    S.setSpeechLocale(e),
                  i.setVoiceRecognitionService(t),
                  t && b.enableBotAudioResponse)
                ) {
                  var n = c.utils.syncTTSLocaleIfUnavailable({
                    hasRecognition: b.enableSpeech,
                    hasSynthesis: b.enableBotAudioResponse,
                    recognitionLocale: b.speechLocale,
                    synthesisLocales: b.skillVoices,
                  });
                  n !== b.skillVoices &&
                    ((b.skillVoices = n),
                    i.setSkillResponseVoices(b.skillVoices));
                }
                return t;
              }),
              (this.setPrimaryChatLanguage = function (e) {
                if (!b.multiLangChat)
                  throw (
                    (((t = new Error(
                      "Multi-language chat feature is not enabled. Can not call setPrimaryChatLanguage."
                    )).name = "FeatureError"),
                    t)
                  );
                if (e) {
                  var t;
                  if ("string" != typeof e)
                    throw (t = new TypeError(
                      "languageTag parameter is not a string. Please pass a string value."
                    ));
                  A.isConnected()
                    ? i.setPrimaryChatLanguage(e)
                    : O.error(
                        "The instance is currently not connected to any skill or DA. Can not call setPrimaryChatLanguage."
                      );
                } else M("setPrimaryChatLanguage", "languageTag");
              }),
              (this.setDelegate = function (e) {
                b.delegate = e;
              }),
              (this.getConversationHistory = function () {
                var e = C.getMessages();
                return {
                  messages: e,
                  messagesCount: e.length,
                  unreadCount: C.getUnreadMessagesCount(),
                  userId: b.userId,
                };
              }),
              (this.clearConversationHistory = function (e, t) {
                void 0 === t && (t = !0),
                  e && "string" != typeof e
                    ? O.error(
                        "Argument passed in clearConversationHistory() is not of type string. Returning without execution."
                      )
                    : ((e && 0 !== e.length) || (e = b.userId),
                      t && e === b.userId
                        ? i.clearConversationHistory()
                        : C.clearMessages(e, d.StorageType.LOCAL));
              }),
              (this.clearAllConversationsHistory = function (e) {
                void 0 === e && (e = !0),
                  C.clearAllMessage(),
                  e && i.clearConversationHistory();
              }),
              (this.getSuggestions = function (e) {
                return b.enableAutocomplete
                  ? e
                    ? "string" != typeof e && "number" != typeof e
                      ? t.default.reject(
                          "Invalid query parameter type passed for the getSuggestions call."
                        )
                      : i.getSuggestions(e)
                    : t.default.reject(
                        "No query parameter passed for the getSuggestions call."
                      )
                  : t.default.reject("Autocomplete suggestions not enabled.");
              }),
              (this.getUnreadMessagesCount = function () {
                if (b.enableHeadless) return 0;
                var e = C.getUnreadMessagesCount();
                return (
                  e !== E && ((E = e), w.trigger(s.ChatEvent.UNREAD, e)), e
                );
              }),
              (this.setAllMessagesAsRead = function () {
                b.enableHeadless ||
                  (C.markAllAsRead(),
                  A.getUnreadMessagesCount(),
                  i.updateNotificationBadge(0));
              }),
              (this.showTypingIndicator = function () {
                if (!b.showTypingIndicator)
                  throw new Error(
                    "Typing indicator is configured not to be shown."
                  );
                if (b.enableHeadless)
                  throw new Error(
                    "Typing indicator cannot be shown in headless mode."
                  );
                A.isConnected() && i.showTypingIndicator();
              }),
              (this.setWebViewConfig = function (e) {
                if (b.enableHeadless)
                  throw new Error(
                    "WebView cannot be configured in headless mode."
                  );
                i.getWebViewComponent().setProps(e);
              }),
              (this.setUserInputMessage = function (e) {
                if (b.enableHeadless)
                  throw new Error("User input cannot be set in headless mode.");
                i.setUserInputMessage(e);
              }),
              (this.setUserInputPlaceholder = function (e) {
                if (b.enableHeadless)
                  throw new Error(
                    "Placeholder cannot be set in headless mode."
                  );
                e
                  ? i.setUserInputPlaceholder(e)
                  : M("setUserInputPlaceholder", "placeholder text");
              }),
              (this.setHeight = function (e) {
                if (e) {
                  var t = document.getElementsByClassName(
                    y.getCssClassWithPrefix("widget")
                  )[0];
                  t && ((t.style.height = e), (b.height = e));
                } else M("setHeight", "height");
              }),
              (this.setWidth = function (e) {
                if (e) {
                  var t = document.getElementsByClassName(
                    y.getCssClassWithPrefix("widget")
                  )[0];
                  t && ((t.style.width = e), (b.width = e));
                } else M("setWidth", "width");
              }),
              (this.setSize = function (e, t) {
                if (e || t) {
                  var n = document.getElementsByClassName(
                    y.getCssClassWithPrefix("widget")
                  )[0];
                  n &&
                    ((n.style.width = e),
                    (n.style.height = t),
                    (b.width = e),
                    (b.height = t));
                } else M("setSize", "width", "height");
              }),
              (this.setMessagePadding = function (e) {
                if (e)
                  for (
                    var t = 0,
                      n = document.getElementsByClassName(
                        y.getCssClassWithPrefix("message-bubble")
                      );
                    t < n.length;
                    t++
                  )
                    (n[t].style.padding = e), (b.messagePadding = e);
                else M("setMessagePadding", "padding");
              }),
              (this.setChatBubbleIconHeight = function (e) {
                if (e)
                  for (
                    var t = 0,
                      n = document.getElementsByClassName(
                        y.getCssClassWithPrefix("chat-bubble")
                      );
                    t < n.length;
                    t++
                  )
                    (n[t].style.height = e), (b.height = e);
                else M("setChatBubbleIconHeight", "height");
              }),
              (this.setChatBubbleIconWidth = function (e) {
                if (e)
                  for (
                    var t = 0,
                      n = document.getElementsByClassName(
                        y.getCssClassWithPrefix("chat-bubble")
                      );
                    t < n.length;
                    t++
                  )
                    (n[t].style.width = e), (b.width = e);
                else M("setChatBubbleIconWidth", "width");
              }),
              (this.setChatBubbleIconSize = function (e, t) {
                if (e || !t)
                  for (
                    var n = 0,
                      i = document.getElementsByClassName(
                        y.getCssClassWithPrefix("chat-bubble")
                      );
                    n < i.length;
                    n++
                  ) {
                    var o = i[n];
                    (o.style.width = e),
                      (o.style.height = t),
                      (b.width = e),
                      (b.height = t);
                  }
                else M("setChatBubbleIconSize", "width", "height");
              }),
              (this.setFont = function (e) {
                if (e) {
                  var t = ["font: " + e],
                    n =
                      c.utils.createCssClass(".oda-chat-wrapper", t) +
                      c.utils.createCssClass(
                        ".oda-chat-left .oda-chat-message-bubble, .oda-chat-left .oda-chat-message-header, .oda-chat-left .oda-chat-message-footer, .oda-chat-left .oda-chat-card",
                        t
                      ) +
                      c.utils.createCssClass(
                        ".oda-chat-right .oda-chat-message-bubble",
                        t
                      );
                  R("oda-chat-style-font", n), (b.font = e);
                } else M("setFont", "font");
              }),
              (this.setFontFamily = function (e) {
                if (e) {
                  var t = ["font-family: " + e],
                    n =
                      c.utils.createCssClass(".oda-chat-wrapper", t) +
                      c.utils.createCssClass(
                        ".oda-chat-left .oda-chat-message-bubble, .oda-chat-left .oda-chat-message-header, .oda-chat-left .oda-chat-message-footer, .oda-chat-left .oda-chat-card",
                        t
                      ) +
                      c.utils.createCssClass(
                        ".oda-chat-message-actions .oda-chat-action-postback, .oda-chat-card-actions .oda-chat-action-postback, .oda-chat-message-global-actions .oda-chat-action-postback",
                        t
                      ) +
                      c.utils.createCssClass(
                        ".oda-chat-right .oda-chat-message-bubble",
                        t
                      );
                  R("oda-chat-style-font-family", n), (b.fontFamily = e);
                } else M("setFontFamily", "fontFamily");
              }),
              (this.setFontSize = function (e) {
                if (e) {
                  var t = ["font-size: " + e],
                    n =
                      c.utils.createCssClass(".oda-chat-wrapper", t) +
                      c.utils.createCssClass(
                        ".oda-chat-left .oda-chat-message-bubble, .oda-chat-left .oda-chat-message-header, .oda-chat-left .oda-chat-message-footer, .oda-chat-left .oda-chat-card",
                        t
                      ) +
                      c.utils.createCssClass(
                        ".oda-chat-right .oda-chat-message-bubble",
                        t
                      );
                  R("oda-chat-style-font-size", n);
                } else M("setFontSize", "fontSize");
              }),
              (this.setTextColor = function (e) {
                if (e) {
                  var t = ["color: " + e],
                    n =
                      c.utils.createCssClass(".oda-chat-wrapper", t) +
                      c.utils.createCssClass(
                        ".oda-chat-left .oda-chat-message-bubble, .oda-chat-left .oda-chat-message-header, .oda-chat-left .oda-chat-message-footer, .oda-chat-left .oda-chat-card",
                        t
                      ) +
                      c.utils.createCssClass(
                        ".oda-chat-right .oda-chat-message-bubble",
                        t
                      );
                  R("oda-chat-style-text", n), (b.colors.text = e);
                } else M("setTextColor", "color");
              }),
              (this.setTextColorLight = function (e) {
                if (e) {
                  var t = c.utils.createCssClass(".oda-chat-card-description", [
                    "color: " + e,
                  ]);
                  R("oda-chat-style-text-light", t), (b.colors.textLight = e);
                } else M("setTextColor", "color");
              }),
              e.enableSpeech &&
                (window.WebSocket &&
                (o.isAudioInputAvailable() || l.isUserMediaAvailable())
                  ? (S = v.SpeechRecognitionService.getInstance())
                  : (e.enableSpeech = !1)),
              (C = new m.ChatServerService(e, n, S)),
              (b = C.getChatConfiguration()),
              (y = new p.Utils()),
              b.clientAuthEnabled && (x = f.AuthTokenService.getInstance()),
              (w = a.generateEventDispatcher());
            try {
              T = _.CoreSpeechSynthesisService.getInstance();
            } catch (e) {
              b.enableBotAudioResponse = !1;
            }
            !(function () {
              O.debug("onLoad", "load chat widget");
              var e = new g.StyleComponent(y, b);
              if (
                (e.addStyle(e.setWidgetCssClasses()),
                "undefined" != typeof window)
              ) {
                for (
                  var t = !1, n = document.head.children, i = 0;
                  i < n.length;
                  i++
                ) {
                  var o = n.item(i);
                  if ("style" === o.nodeName.toLowerCase()) {
                    document.head.insertBefore(e.render(), o), (t = !0);
                    break;
                  }
                }
                t || document.head.appendChild(e.render());
              }
              N(b.embedded);
            })(),
              c.utils.setObjectReadOnly(this);
          }
          (e.default = b),
            (b.EVENT = s.ChatEvent),
            (b.SPEECH_LOCALE = d.SPEECH_LOCALE),
            (b.THEME = d.IWidgetTheme),
            c.utils.deepFreeze(b);
        })(),
        (i = i.default)
      );
    })();
  }),
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.WebSDK = t())
    : (e.WebSDK = t());
