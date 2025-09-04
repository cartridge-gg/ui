export function fetchDataCreator(url, options) {
    return async (query, variables, signal) => {
        const res = await fetch(url, {
            method: "POST",
            credentials: options?.credentials || "include",
            headers: {
                "Content-Type": "application/json",
                ...options?.headers,
            },
            body: JSON.stringify({
                query,
                variables,
            }),
            signal,
        });
        const json = await res.json();
        if (json.errors) {
            const { message } = json.errors[0];
            throw new Error(message);
        }
        return json.data;
    };
}
//# sourceMappingURL=fetcher.js.map