import { fetchDataCreator } from "../fetcher";
import { useIndexerAPI } from "../../hooks";
export function useFetchData(query, options) {
    const { indexerUrl, credentials, headers } = useIndexerAPI();
    if (!indexerUrl) {
        return () => Promise.reject("Indexer API is not ready");
    }
    const fetchData = fetchDataCreator(indexerUrl, {
        credentials: options?.credentials ?? credentials,
        headers: {
            ...headers,
            ...options?.headers,
        },
    });
    return (variables) => fetchData(query, variables);
}
//# sourceMappingURL=fetcher.js.map