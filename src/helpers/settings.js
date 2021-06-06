'use strict';

// Set client auth mode - true to enable client auth, false to disable it
const isClientAuthEnabled = false;

/**
 * Initializes the SDK and sets a global field with passed name for which
 * it can be referred to later.
 *
 * @param {string} name Name by which the chat widget should be referred
 */
const initSdk = (name) => {
    if (!name) {
        name = 'Bots';          // Set default reference name to 'Bots'
    }
    let Bots;

    setTimeout(() => {
        /**
            * SDK configuration settings
            * Other than URI, all fields are optional with two exceptions for auth modes
            * In client auth disabled mode, 'channelId' must be passed, 'userId' is optional
            * In client auth enabled mode, 'clientAuthEnabled: true' must be passed
            */
        let chatWidgetSettings = {
            URI: 'oda-64f0f729ab9043ad921a96dc07b76491-da12.data.digitalassistant.oci.oraclecloud.com',
            clientAuthEnabled: isClientAuthEnabled,
            channelId: '3efc1734-1321-4306-bfe2-8923447ac291' 
        };

        // Initialize SDK
        if (isClientAuthEnabled) {
            Bots = new WebSDK(chatWidgetSettings, generateToken);
        } else {
            Bots = new WebSDK(chatWidgetSettings);
        }

        // Connect to the ODA
        Bots.connect();

        // Create global object to refer Bots
        window[name] = Bots;
    }, 0);
};