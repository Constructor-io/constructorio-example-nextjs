import { cookies, headers } from "next/headers";
import ConstructorIONode from "@constructor-io/constructorio-node";
import { apiKey } from "../../utils/constants";
import SearchResults from "../../components/SearchResults";

const CLIENT_ID_COOKIE_NAME = "ConstructorioID_client_id";
const SESSION_ID_COOKIE_NAME = "ConstructorioID_session_id";

// https://nextjs.org/docs/app/api-reference/functions/headers#ip-address
function getUserIp() {
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0];
  }

  return headers().get("x-real-ip");
}

export default async function ServerComponentsExamplePage() {
  const cookieStore = cookies();

  const clientId = cookieStore.get(CLIENT_ID_COOKIE_NAME)?.value;
  const sessionId = cookieStore.get(SESSION_ID_COOKIE_NAME)?.value;
  const userIp = getUserIp();
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
    undefined,
    userParameters
  );

  const items = data?.response?.results;

  return (
    <>
      <SearchResults items={items} />
    </>
  );
}
