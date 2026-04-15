export function generateRandomUUID() {
    const cryptoApi = globalThis.crypto

    if (cryptoApi?.randomUUID) {
        return cryptoApi.randomUUID()
    }

    const bytes = new Uint8Array(16)

    if (cryptoApi?.getRandomValues) {
        cryptoApi.getRandomValues(bytes)
    } else {
        for (let i = 0; i < bytes.length; i += 1) {
            bytes[i] = Math.floor(Math.random() * 256)
        }
    }

    // RFC 4122 section 4.4: set version (4) and variant (10xx).
    bytes[6] = (bytes[6] & 0x0f) | 0x40
    bytes[8] = (bytes[8] & 0x3f) | 0x80

    const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('')
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}
