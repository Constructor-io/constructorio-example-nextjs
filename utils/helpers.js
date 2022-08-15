import ConstructorIONode from '@constructor-io/constructorio-node';
import { apiKey } from './constants';

export const fetchResultsServerSide = (context) => {
  const { req: { cookies, headers, connection } } = context;
  const { ConstructorioID_client_id, ConstructorioID_session_id } = cookies;
  const userAgent = headers['user-agent'];
  let userIp;

  if (headers["x-forwarded-for"]) {
    userIp = headers["x-forwarded-for"].split(',')[0]
  } else {
    userIp = connection.remoteAddress
  }

  const cioNode = new ConstructorIONode({
    apiKey,
    securityToken: '',
  });

  const userParameters = {
    sessionId: ConstructorioID_session_id || 1,
    clientId: ConstructorioID_client_id,
    userIp,
    userAgent,
  };

  return cioNode.search.getSearchResults('shoes', userParameters);
}

