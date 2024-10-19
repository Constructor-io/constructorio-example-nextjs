import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto text-center max-w-[2000px] pt-4">
      <h1 className="my-4 text-2xl font-bold">
        Constructor.io Next.js Example
      </h1>
      <p>
        This repository showcases different options to integrate Constructor.io
        client libraries into a Next.js project.
      </p>
      <div className="flex justify-around mt-10">
        <div className="flex flex-col rounded-lg justify-between border border-2 border-gray-300 p-4 w-[30%]">
          <h3 className="text-lg font-bold mb-2">Client Side Rendering</h3>
          <p className="my-2">
            <strong>Recommended</strong> - This option is the simplest to
            implement, yields the fastest response times, and avoids the need to
            install multiple client libraries.
          </p>
          <p className="my-2">
            In this option, requests are made directly from the end user&apos;s
            browser to Constructor.io servers. As a result, the end to end
            response time is fastest.
          </p>
          <p className="my-2">
            <a
              className="text-blue-600"
              href="https://www.npmjs.com/package/@constructor-io/constructorio-client-javascript"
              rel="noreferrer"
              target="_blank"
            >
              constructorio-client-javascript
            </a>
          </p>
          <Link
            href="/client-side"
            className="block mt-4 rounded-lg px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white font-semibold tracking-wide"
          >
            Example
          </Link>
        </div>
        <div className="flex flex-col rounded-lg justify-between border border-2 border-gray-300 p-4 w-[30%]">
          <h3 className="text-lg font-bold mb-2">Server Side Rendering</h3>
          <p className="my-2">
            This option uses server-side rendering utilizing only the server
            side client library.
          </p>
          <p className="my-2">
            The data is fetched on the server and passed to the client through
            Next.js. Next Router can be used to refresh props (fetch new
            results) after user interacts with the page.
          </p>
          <p className="my-2">
            <a
              className="text-blue-600"
              href="https://www.npmjs.com/package/@constructor-io/constructorio-node"
              rel="noreferrer"
              target="_blank"
            >
              constructorio-node
            </a>
          </p>
          <Link
            href="/server-side"
            className="block mt-4 rounded-lg px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white font-semibold tracking-wide"
          >
            Example
          </Link>
        </div>
        <div className="flex flex-col rounded-lg justify-between border border-2 border-gray-300 rounded-lg p-4 w-[30%]">
          <h3 className="text-lg font-bold mb-2">
            Client + Server Side Rendering
          </h3>
          <p className="my-2">
            This option uses server side rendering for the initial page load and
            client side rendering for the subsequent requests.
          </p>
          <p className="my-2">
            It utilizes the appropriate Constructor.io client library depending
            on the context.
          </p>
          <p className="my-2">
            <a
              className="text-blue-600"
              href="https://www.npmjs.com/package/@constructor-io/constructorio-client-javascript"
              rel="noreferrer"
              target="_blank"
            >
              constructorio-client-javascript
            </a>
            <br />
            <a
              className="text-blue-600"
              href="https://www.npmjs.com/package/@constructor-io/constructorio-node"
              rel="noreferrer"
              target="_blank"
            >
              constructorio-node
            </a>
          </p>
          <Link
            href="/client-and-server-side"
            className="block mt-4 rounded-lg px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white font-semibold tracking-wide"
          >
            Example
          </Link>
        </div>
      </div>
    </div>
  );
}
