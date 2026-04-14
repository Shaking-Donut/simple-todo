import { create } from 'zustand'

type AppVersion = 'traditional' | 'aiSupported'

type AppSettingsState = {
    appVersion: AppVersion
    setAppVersion: (appVersion: AppVersion) => void
}

export const useAppSettings = create<AppSettingsState>()((set) => ({
    appVersion: 'traditional',
    setAppVersion: (appVersion) => set({ appVersion }),
}))
