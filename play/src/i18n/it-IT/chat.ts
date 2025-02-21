import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const chat: DeepPartial<Translation["chat"]> = {
    intro: "Ecco la tua cronologia chat:",
    enter: "Inserisci il tuo messaggio...",
    menu: {
        visitCard: "Visita la scheda",
        addFriend: "Aggiungi amico",
    },
    loader: "Caricamento...",
    typing: "sta scrivendo...",
    users: "Utenti",
    chat: "Chat",
    userList: {
        disconnected: "Non connesso al mondo",
        isHere: "È su questa mappa",
        inAnotherMap: "In un'altra mappa",
        in: "In ",
        teleport: "Teletrasporto",
        search: "Cerca!",
        walkTo: "Cammina verso",
        teleporting: "Teletrasporto in corso...",
        businessCard: "Biglietto da visita",
        sendMessage: "Invia messaggio",
    },
    accept: "Accetta",
    decline: "Rifiuta",
    join: "Unisciti",
    connecting: "Connessione al server in corso...",
    waitingInit: "In attesa dell'inizializzazione del server...",
    waitingData: "In attesa dei dati dell'utente...",
    searchUser: "Cerca utente, mappa, ecc...",
    searchChat: "Cerca canale, messaggio, ecc...",
    people: "Persone",
    rooms: "Stanze",
    invitations: "Inviti",
    availableRooms: "Stanze disponibili",
    proximity: "Chat di prossimità",
    role: {
        admin: "Amministratore",
        member: "Membro",
        visitor: "Visitatore",
    },
    status: {
        online: "Online",
        away: "Assente",
        unavailable: "Non disponibile",
        back_in_a_moment: "Torno subito",
        do_not_disturb: "Non disturbare",
        busy: "Occupato",
        meeting: "In riunione",
        megaphone: "Usando il megafono",
    },
    logIn: "Accedi",
    signIn: "Registrati o accedi per godere di tutte le funzionalità della chat!",
    invite: "Invita",
    roomEmpty: "Questa stanza è vuota, invita un collega o un amico a unirsi a te!",
    userOnline: "utente online",
    usersOnline: "utenti online",
    open: "Apri",
    me: "Io",
    you: "Tu",
    ban: {
        title: "Ban",
        content: "Banna l'utente {userName} dal mondo in corso. Questo può essere annullato dall'amministrazione.",
        ban: "Banna questo utente",
    },
    loading: "Caricamento",
    loadingUsers: "Caricamento degli utenti...",
    load: "Carica",
    rankUp: "Promuovi",
    rankDown: "Retrocedi",
    reinit: "Reinizializza",
    enterText: "Inserisci un messaggio...",
    timeLine: {
        title: "La tua cronologia",
        open: "Apri la cronologia della tua timeline!",
        description: "Cronologia dei messaggi e degli eventi",
        incoming: "{userName} si è unito alla discussione",
        outcoming: "{userName} ha lasciato la discussione",
        youLeft: "Hai lasciato la discussione",
    },
    form: {
        placeholder: "Inserisci il tuo messaggio...",
        typing: " sta scrivendo...",
        application: {
            klaxoon: {
                title: "Klaxoon",
                description: "Invia Klaxoon incorporato nella chat!",
            },
            youtube: {
                title: "YouTube",
                description: "Invia video di YouTube incorporato nella chat!",
            },
            googleDocs: {
                title: "Google Docs",
                description: "Invia Google Docs incorporato nella chat!",
            },
            googleSlides: {
                title: "Google Slides",
                description: "Invia Google Slides incorporato nella chat!",
            },
            googleSheets: {
                title: "Google Sheets",
                description: "Invia Google Sheets incorporato nella chat!",
            },
            eraser: {
                title: "Eraser",
                description: "Invia Eraser incorporato nella chat!",
            },
            googleDrive: {
                title: "Google Drive",
                description: "Invia file da Google Drive incorporato nella chat!",
            },
            excalidraw: {
                title: "Excalidraw",
                description: "Invia Excalidraw incorporato nella chat!",
            },
            cards: {
                title: "Carte",
                description: "Invia carte incorporato nella chat!",
            },
            weblink: {
                error: "Inserisci un URL valido",
            },
        },
    },
    notification: {
        discussion: "vuole discutere con te",
        message: "invia un messaggio",
        forum: "sul forum",
    },
    see: "Vedi",
    show: "Mostra",
    less: "meno",
    more: "di più",
    sendBack: "Rimanda indietro",
    delete: "Elimina",
    messageDeleted: "Messaggio eliminato",
    emoji: {
        icon: "Icona per aprire o chiudere il popup di selezione emoji",
        search: "Cerca emoji...",
        categories: {
            recents: "Emoji recenti",
            smileys: "Faccine & Emozioni",
            people: "Persone & Corpo",
            animals: "Animali & Natura",
            food: "Cibo & Bevande",
            activities: "Attività",
            travel: "Viaggi & Luoghi",
            objects: "Oggetti",
            symbols: "Simboli",
            flags: "Bandiere",
            custom: "Personalizzato",
        },
        notFound: "Nessuna emoji trovata",
    },
    said: "ha detto:",
    reply: "Rispondi",
    react: "Reagisci",
    copy: "Copia",
    copied: "Copiato!",
    file: {
        fileContentNoEmbed: "Contenuto non disponibile per la visualizzazione. Si prega di scaricarlo",
        download: "scarica",
        openCoWebsite: "Apri nel co-sito",
        copy: "copia il link",
        tooBig: "{fileName} è troppo grande {maxFileSize}.",
        notLogged: "Devi essere loggato per caricare un file.",
    },
    needRefresh: "La tua connessione è scaduta, devi aggiornare la pagina per riconnetterti alla chat.",
    refresh: "Aggiorna",
    upgrade: "Aggiorna",
    upgradeToSeeMore: "Aggiorna per vedere più messaggi",
    disabled: "Questa funzione è disabilitata.",
    disabledByAdmin: "Questa funzione è disabilitata dall'amministratore.",
    anAdmin: "un amministratore",
    messageDeletedByYou: "Hai eliminato questo messaggio",
    messageEdited: "Modificato",
    messageEditedError: "Impossibile modificare il messaggio. Riprova.",
    waiting: "In attesa",
    nothingToDisplay: "Niente da visualizzare",
    showMore: "Mostra {number} di più",
    showLess: "Mostra meno",
    addRoomToFolderError: "Impossibile aggiungere la stanza alla cartella",
    createRoom: {
        title: "Crea nuova stanza",
        name: "Nome",
        visibility: {
            label: "Visibilità",
            private: "Privato",
            privateDescription: "Solo gli ospiti invitati potranno trovare e unirsi alla stanza.",
            public: "Pubblico",
            publicDescription: "Chiunque può trovare e unirsi alla stanza.",
            restricted: "Membro della cartella",
            restrictedDescription: "Visibile solo ai membri della cartella",
        },
        e2eEncryption: {
            label: "Attiva la crittografia end-to-end",
            description: "Non potrai disattivarla in seguito.",
        },
        users: "Utenti",
        historyVisibility: {
            label: "Chi può leggere la cronologia?",
            world_readable: "Chiunque",
            joined: "Solo i membri (da quando si sono uniti)",
            invited: "Solo i membri (da quando sono stati invitati)",
        },
        buttons: {
            create: "Crea",
            cancel: "Annulla",
        },
        error: "Errore nella creazione della stanza",
        loadingCreation: "Creazione della stanza in corso",
        creationSuccessNotification: "Stanza creata",
    },
    createFolder: {
        title: "Crea nuova cartella",
        name: "Nome",
        visibility: {
            label: "Visibilità",
            private: "Privato",
            privateDescription: "Solo gli ospiti invitati potranno trovare e unirsi alla stanza.",
            public: "Pubblico",
            publicDescription: "Chiunque può trovare e unirsi alla stanza.",
            restricted: "Membro della cartella",
            restrictedDescription: "Visibile solo ai membri della cartella",
        },
        description: {
            label: "Descrizione",
            placeholder: "Descrizione",
        },
        e2eEncryption: {
            label: "Attiva la crittografia end-to-end",
            description: "Non potrai disattivarla in seguito.",
        },
        users: "Utenti",
        historyVisibility: {
            label: "Chi può leggere la cronologia?",
            world_readable: "Chiunque",
            joined: "Solo i membri (da quando si sono uniti)",
            invited: "Solo i membri (da quando sono stati invitati)",
        },
        buttons: {
            create: "Crea",
            cancel: "Annulla",
        },
        error: "Errore nella creazione della stanza",
        loadingCreation: "Creazione della stanza in corso",
        creationSuccessNotification: "Stanza creata",
    },
    manageRoomUsers: {
        roomOption: "Partecipanti",
        error: "Impossibile inviare inviti",
        title: "Invita partecipanti",
        invitations: "Inviti",
        participants: "Partecipanti",
        join: "Unito",
        invite: "Invitato",
        ban: "Bannato",
        kick: "Espulso",
        leave: "Lasciato",
        buttons: {
            sendInvitations: "Invia inviti",
            cancel: "Annulla",
        },
        sendInvitationsSuccessNotification: "Inviti inviati con successo",
    },
    roomMenu: {
        leaveRoom: {
            label: "Lascia la stanza",
            notification: "Hai lasciato la stanza",
        },
        muteRoom: "Silenzia stanza",
        unmuteRoom: "Riattiva stanza",
    },
    e2ee: {
        encryptionNotConfigured: "Crittografia non configurata",
        createRecoveryKey: {
            title: "Creazione chiave di recupero chat",
            description:
                "Per utilizzare la crittografia end-to-end nella chat, è necessario creare una chiave di recupero. Inserisci la tua passphrase di recupero qui sotto, verrà creata una chiave di recupero.",
            privateKeyDescription:
                "Questa è la tua chiave di recupero, salvala da qualche parte per recuperare le discussioni crittografate dopo aver effettuato il logout.",
            error: "Qualcosa è andato storto nella generazione della chiave di recupero dalla passphrase",
            buttons: {
                generate: "Genera",
                continue: "Continua",
                cancel: "Annulla",
            },
        },
        interactiveAuth: {
            title: "Crittografia end-to-end per la chat",
            description:
                "Per motivi di sicurezza, una chiave deve essere caricata sul nostro server per verificare la tua identità. Confermando la tua identità, memorizzerai la chiave, che ti consente di leggere i messaggi crittografati da WA e altri client.",
            instruction: "Assicurati di completare la connessione SSO prima di fare clic sul pulsante Fine.",
            buttons: {
                cancel: "Annulla",
                continueSSO: "Continua con SSO",
                finish: "Fine",
            },
        },
        accessSecretStorage: {
            title: "Verifica della sessione chat",
            description:
                "Per verificare la tua sessione e recuperare i messaggi crittografati, devi inserire la tua chiave di recupero o passphrase.",
            passphrase: "Passphrase",
            recoveryKey: "Chiave di recupero",
            placeholder: "Inserisci il tuo",
            buttons: {
                cancel: "Annulla",
                usePassphrase: "Usa passphrase di recupero invece",
                useRecoveryKey: "Usa chiave di recupero invece",
                confirm: "Conferma",
            },
        },
    },
    connectionError: "Chat non disponibile",
    requiresLoginForChatModal: {
        title: "Accedi per sbloccare la chat!",
        content_1: "Per godere appieno di questa funzione di chat, devi essere loggato nel tuo account.",
        content_2: "Accedere ti dà accesso a tutte le opzioni e ti consente di continuare senza interruzioni.",
        content_3: " Per favore, accedi per procedere con l'esperienza.",
    },
    requiresLoginForChat: "Accedi per accedere ai messaggi della chat",
    fileAttachment: {
        title: "Allega file",
        description: "Allega un file alla tua chat",
        featureComingSoon: "Funzionalità in arrivo!",
    },
};

export default chat;
