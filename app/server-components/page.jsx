import { cookies, headers } from "next/headers";
import ConstructorIONode from "@constructor-io/constructorio-node";
import {
  apiKey,
  clientIdCookieName,
  sessionIdCookieName,
} from "../../utils/constants";
import { getUserIp } from "../../utils/helpers";
import SearchResults from "../../components/SearchResults";

export default async function ServerComponentsExamplePage({ searchParams }) {
  const cookieStore = cookies();

  const clientId = cookieStore.get(clientIdCookieName)?.value;
  const sessionId = cookieStore.get(sessionIdCookieName)?.value;
  const userIp = getUserIp(headers);
  const userAgent = headers().get("user-agent");

  const userParameters = {
    sessionId,
    clientId,
    userIp,
    userAgent,
  };

  const cioNode = new ConstructorIONode({
    apiKey,
    securityToken: "<<SECURITY_TOKEN>>",
  });

  const data = await cioNode.search.getSearchResults(
    "shoes",
    undefined, // parameters
    userParameters
  );

  const items = data?.response?.results;

  return <SearchResults items={items} />;
}
