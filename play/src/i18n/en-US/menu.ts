import type { BaseTranslation } from "../i18n-types";

const menu: BaseTranslation = {
    title: "Menu",
    icon: {
        open: {
            menu: "Open menu",
            invite: "Show invite",
            register: "Register",
            chat: "Open chat",
            userlist: "User list",
            openEmoji: "Open emoji selected popup",
            closeEmoji: "Close emoji menu",
            mobile: "Open mobile menu",
        },
    },
    visitCard: {
        close: "Close",
        sendMessage: "Send message",
    },
    profile: {
        edit: {
            name: "Edit your name",
            woka: "Edit your WOKA",
            companion: "Edit your companion",
            camera: "Edit your camera",
        },
        login: "Sign in",
        logout: "Log out",
    },
    settings: {
        videoBandwidth: {
            title: "Video quality",
            low: "Low",
            recommended: "Recommended",
            unlimited: "Unlimited",
        },
        shareScreenBandwidth: {
            title: "Screen sharing quality",
            low: "Low",
            recommended: "Recommended",
            unlimited: "Unlimited",
        },
        language: {
            title: "Language",
        },
        privacySettings: {
            title: "Away mode",
            explanation:
                'While the WorkAdventure tab in your browser is not visible. WorkAdventure switches to "away mode"',
            cameraToggle: 'Keep camera active in "away mode"',
            microphoneToggle: 'Keep microphone active in "away mode"',
        },
        save: "Save",
        otherSettings: "Other settings",
        fullscreen: "Fullscreen",
        notifications: "Notifications",
        chatSounds: "Chat sounds",
        cowebsiteTrigger: "Always ask before opening websites and Jitsi Meet rooms",
        ignoreFollowRequest: "Ignore requests to follow other users",
        proximityDiscussionVolume: "Proximity discussion volume",
    },
    invite: {
        description: "Share the link of the room!",
        copy: "Copy",
        share: "Share",
        walkAutomaticallyToPosition: "Walk automatically to my position",
        selectEntryPoint: "Select an entry point",
    },
    globalMessage: {
        text: "Text",
        audio: "Audio",
        warning: "Broadcast to all rooms of the world",
        enter: "Enter your message here...",
        send: "Send",
    },
    globalAudio: {
        uploadInfo: "Upload a file",
        error: "No file selected. You need to upload a file before sending it.",
        errorUpload:
            "Uploading file error. Please check your file and try again. If the problem persists, contact the administrator.",
        dragAndDrop: "Drag and drop or click here to upload your file 🎧",
    },
    contact: {
        gettingStarted: {
            title: "Getting started",
            description:
                "WorkAdventure allows you to create an online space to communicate spontaneously with others. And it all starts with creating your own space. Choose from a large selection of prefabricated maps by our team.",
        },
        createMap: {
            title: "Create your map",
            description: "You can also create your own custom map by following the step of the documentation.",
        },
    },
    about: {
        mapInfo: "Information on the map",
        mapLink: "link to this map",
        copyrights: {
            map: {
                title: "Copyrights of the map",
                empty: "The map creator did not declare a copyright for the map.",
            },
            tileset: {
                title: "Copyrights of the tilesets",
                empty: "The map creator did not declare a copyright for the tilesets. This doesn't mean that those tilesets have no license.",
            },
            audio: {
                title: "Copyrights of audio files",
                empty: "The map creator did not declare a copyright for audio files. This doesn't mean that those audio files have no license.",
            },
        },
    },
    chat: {
        matrixIDLabel: "Your Matrix ID",
        settings: "Settings",
        resetKeyBackUpButtonLabel: "Reset your backup key",
        resetKeyBackupConfirmationModal: {
            title: "Backup key reset confirmation",
            content: "You are about to reset the backup key. Are you sure?",
            warning:
                "Resetting the backup key will remove your current session and all trusted users. You could lose access to some past messages, and you will no longer be recognized as a trusted user. Make sure you fully understand the consequences of this action before proceeding.",
            cancel: "Cancel",
            continue: "Continue",
        },
    },
    sub: {
        profile: "Profile",
        settings: "Settings",
        invite: "Invite",
        credit: "Credit",
        globalMessages: "Global Messages",
        contact: "Contact",
        report: "Report Issues",
        chat: "Chat",
    },
};

export default menu;
