
export function generateConfig({
	clientId,
	clientSecret,
}) {
	return {
		prefix: '/auth',
    injectEndpoints: false,
		providers: [
			GitHub({
				clientId,
				clientSecret,
			}),
		],
	}
