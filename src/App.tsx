import { useAppSettings } from '@/stores/useAppSettings'
import { TraditionalUI } from '@/screens/traditional'
import { AISupportedUI } from '@/screens/aiSupported'

function App() {
    const currentMode = useAppSettings((state) => state.appVersion)

    if (currentMode === 'traditional') {
        return <TraditionalUI />
    } else if (currentMode === 'aiSupported') {
        return <AISupportedUI />
    }

    return null
}

export default App
