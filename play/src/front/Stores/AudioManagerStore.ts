import { get, writable } from "svelte/store";
import PopUpSound from '../Components/PopUp/PopUpSound.svelte';
import { peerStore } from "./PeerStore";
import { popupStore } from "./PopupStore";

export interface audioManagerVolume {
    muted: boolean;
    volume: number;
    decreaseWhileTalking: boolean;
    volumeReduced: boolean;
    loop: boolean;
    talking: boolean;
}

function createAudioManagerVolumeStore() {
    const { subscribe, update } = writable<audioManagerVolume>({
        muted: false,
        volume: 1,
        decreaseWhileTalking: true,
        volumeReduced: false,
        loop: false,
        talking: false,
    });

    return {
        subscribe,
        setMuted: (newMute: boolean): void => {
            update((audioPlayerVolume: audioManagerVolume) => {
                audioPlayerVolume.muted = newMute;
                return audioPlayerVolume;
            });
        },
        setVolume: (newVolume: number): void => {
            update((audioPlayerVolume: audioManagerVolume) => {
                audioPlayerVolume.volume = newVolume;
                return audioPlayerVolume;
            });
        },
        setDecreaseWhileTalking: (newDecrease: boolean): void => {
            update((audioManagerVolume: audioManagerVolume) => {
                audioManagerVolume.decreaseWhileTalking = newDecrease;
                return audioManagerVolume;
            });
        },
        setVolumeReduced: (newVolumeReduced: boolean): void => {
            update((audioManagerVolume: audioManagerVolume) => {
                audioManagerVolume.volumeReduced = newVolumeReduced;
                return audioManagerVolume;
            });
        },
        setLoop: (newLoop: boolean): void => {
            update((audioManagerVolume: audioManagerVolume) => {
                audioManagerVolume.loop = newLoop;
                return audioManagerVolume;
            });
        },
        setTalking: (newTalk: boolean): void => {
            update((audioManagerVolume: audioManagerVolume) => {
                audioManagerVolume.talking = newTalk;
                return audioManagerVolume;
            });
        },
    };
}

function createAudioManagerFileStore() {
    const { subscribe, update } = writable<string>("");

    return {
        subscribe,
        playAudio: (url: string | number | boolean, mapUrl: string, volume: number | undefined, loop = false): void => {
            update((file: string) => {
                const audioPath = String(url);

                file = new URL(audioPath, mapUrl).toString();

                audioManagerVolumeStore.setVolume(
                    volume ? Math.min(volume, get(audioManagerVolumeStore).volume) : get(audioManagerVolumeStore).volume
                );
                audioManagerVolumeStore.setLoop(loop);

                return file;
            });
        },
        unloadAudio: () => {
            update(() => {
                audioManagerVolumeStore.setLoop(false);
                return "";
            });
        },
    };
}

export const audioManagerVisibilityStore = writable(false);
export const AudioManagerStorePopup = audioManagerVisibilityStore.subscribe((audioVisibility) => {
  if (audioVisibility === true) {
      popupStore.addPopup(PopUpSound, {},
      "popupsound");
  } else {
    popupStore.removePopup("popupsound");
  }
});

export const audioManagerVolumeStore = createAudioManagerVolumeStore();
export const audioManagerFileStore = createAudioManagerFileStore();

// Not unsubscribing is ok, this is a singleton.
//eslint-disable-next-line svelte/no-ignored-unsubscribe
peerStore.subscribe((peers) => {
  audioManagerVolumeStore.setTalking(peers.size > 0);
});
