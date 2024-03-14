const SERVER_URL = "http://127.0.0.1:3001";

/**
 * @param {string} endpoint
 * @param {RequestInit} config
 */
function server(
	endpoint,
	config = {}
) {
	/** @type {RequestInit} */
	const _config = {
		credentials: "include",
		method: config.method || (config.body ? "POST" : "GET"),
		...config,
	};

	return fetch(SERVER_URL.concat(endpoint), _config).then(
		async (response) => {
			if (!response.ok) {
				const errorMessage = await response.text();
				return Promise.reject(new Error(errorMessage));
			}

			const type = response.headers.get("Content-Type");

			if (type && type.includes("application/json")) {
				return response.json();
			}

			return response.text();
		}
	);
}

export async function login(data) {
	if (!data.email || !data.password) {
		throw new Error("email or password is not provided");
	}
	return server("/users/login", {
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			email: data.email,
			password: data.password
		})
	});
}

export async function currentUser() {
	return server("/users/current");
}