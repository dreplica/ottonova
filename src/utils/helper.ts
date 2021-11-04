// import { iState } from '../state/appReducer'

/**
 * encodes data from object to string
 * @param {object} data - data to encode
 * @returns {string} - encoded data
 */
export function encodeData(data: Record<string, any>): string {
	const dataToEncode = JSON.stringify(data)
	return globalThis.btoa(dataToEncode)
}

/**
 * decodes data from asci to base64 to string
 * @param {string} data - data to encode
 * @returns {object} - encoded data
 */
export function decodeData(data: string): Record<string, any> {
	const dataToDecode = globalThis.atob(data)
	return JSON.parse(dataToDecode)
}

/**
 * save to local storage
 * @param {string} data - value to save
 * @param {string} name - key to save
 */
export function saveToCache(names: string, data: string): void {
	const encodedData = data
	localStorage.setItem(names, encodedData)
}

/**
 * gets properties from the cache
 * @param {array} names - keys to get
 */
export function getFromCache(names: string[] | string): Record<string, any> {
	if (!Array.isArray(names)) {
		const cache = localStorage.getItem(names)
		if (!cache) {
			return { [names]: false }
		}
		return { [names]: decodeData(cache) }
	}
	let cache = {}
	for (const name of names) {
		const value = getFromCache(name)
		cache = { ...cache, ...value }
	}
	return cache
}

export function clearCache(): void {
	return localStorage.clear()
}

export function checkDuplicateScore(scores: Record<string, any>[], id: string) {
	return scores.filter((score) => score.id.trim() === id.trim()).length > 1
}
