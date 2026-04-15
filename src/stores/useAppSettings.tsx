import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AppVersion = 'traditional' | 'aiSupported'

type AppSettingsState = {
    appVersion: AppVersion
    setAppVersion: (appVersion: AppVersion) => void
}

export const useAppSettings = create<AppSettingsState>()(
    persist(
        (set) => ({
            appVersion: 'traditional',
            setAppVersion: (appVersion) => set({ appVersion }),
        }),

        {
            name: 'app-settings',
        },
    ),
)
