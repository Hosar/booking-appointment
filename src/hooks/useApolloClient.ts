import { useMemo } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export function useApolloClient() {
    const client = useMemo(() => new ApolloClient({
        uri: "http://localhost:3000/graphql",
        cache: new InMemoryCache(),
    }), []);

    return { client }
}
