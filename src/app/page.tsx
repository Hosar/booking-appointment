"use client";

import { useSpotSelector } from "@/hooks/useSpotSelector";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Booking } from "@/screens/Booking";

export default function Home() {
  // const { data, error } = useGetAllQuery();
  // const [sportByDay, days, onNextDaysBatch, onPreviousDaysBatch] =
  //   useSpotSelector();

  // console.log("days", days);
  // console.log("SportByDay", sportByDay);
  // console.log("data", data);

  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
  });

  console.log("client", client);
  return (
    <ApolloProvider client={client}>
      <Booking />
    </ApolloProvider>
  );
}
