"use client";
import { ApolloProvider } from "@apollo/client";
import { useApolloClient } from "@/hooks/useApolloClient";
import { Booking } from "@/screens/Booking";

export default function Home() {
  const { client } = useApolloClient();
  return (
    <ApolloProvider client={client}>
      <Booking />
    </ApolloProvider>
  );
}
