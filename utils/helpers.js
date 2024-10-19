import ConstructorIONode from "@constructor-io/constructorio-node";
import { apiKey } from "./constants";

export const fetchResultsServerSide = (context) => {
  const { req: { cookies, headers, connection } } = context;
  const { ConstructorioID_client_id, ConstructorioID_session_id } = cookies;
  const userAgent = headers['user-agent'];
  let userIp;

  // Constructor.io Node package requires additional paramaters about the end user
  // More information can be found here: https://github.com/Constructor-io/constructorio-node/wiki/Additional-Information-For-Backend-Integrations
  if (headers["x-forwarded-for"]) {
    userIp = headers["x-forwarded-for"].split(',')[0]
  } else {
    userIp = connection.remoteAddress
  }

  const cioNode = new ConstructorIONode({
    apiKey,
    securityToken: '<<SECURITY_TOKEN>>',
  });

  const userParameters = {
    sessionId: ConstructorioID_session_id,
    clientId: ConstructorioID_client_id,
    userIp,
    userAgent,
  };

  return cioNode.search.getSearchResults("shoes", userParameters);
};

// https://nextjs.org/docs/app/api-reference/functions/headers#ip-address
/**
 * @param {import('next/headers').Headers} headers
 * @returns {string | undefined}
 */
export const getUserIp = (headers) => {
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0];
  }

  return headers().get("x-real-ip");
};
