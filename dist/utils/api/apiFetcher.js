export function fetchApiCreator(baseUrl, options) {
    return async (endpoint, body, urlParams, signal) => {
        return await doFetch(`${baseUrl}/${endpoint}`, options, body, urlParams, signal);
    };
}
export async function doFetch(url, options, body, urlParams, signal) {
    let finalUrl = url;
    if (urlParams && Object.keys(urlParams).length > 0) {
        const params = new URLSearchParams(urlParams).toString();
        finalUrl += (url.includes("?") ? "&" : "?") + params;
    }
    const response = await fetch(finalUrl, {
        method: "POST",
        credentials: options?.credentials || "include",
        headers: {
            "Content-Type": "application/json",
            ...(options?.headers || {}),
        },
        body: JSON.stringify(body),
        signal,
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json;
}
//# sourceMappingURL=apiFetcher.js.map