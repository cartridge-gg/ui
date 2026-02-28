import { useCartridgeAPI } from "../../hooks";
import { fetchDataCreator } from "../fetcher";
export function useFetchData(query, options) {
    const { url, credentials, headers } = useCartridgeAPI();
    const fetchData = fetchDataCreator(url, {
        credentials: options?.credentials || credentials,
        headers: {
            ...headers,
            ...options?.headers,
        },
    });
    return (variables) => fetchData(query, variables);
}
//# sourceMappingURL=fetcher.js.map