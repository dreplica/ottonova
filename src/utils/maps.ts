import * as Maps from '@googlemaps/js-api-loader'


export const MapLoader  = new Maps.Loader({
	apiKey: process.env.REACT_APP_MAP_API_KEY as string,
	version: 'weekly',
	libraries: ["places"]
})