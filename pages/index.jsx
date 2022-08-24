import Link from 'next/link';

export default function Home() {
  return (
    <div className="homepage-container">
      <h1>Constructor.io Next.js Example</h1>
      <p>
        This is a repository that showcases different options to integrate Constructor.io SDKs into a Next.js project.
      </p>
      <div className="options">
        <div className="option">
          <h3>Client Side Rendering</h3>
          <p>
            This is the recommended option due to implementation simplicity and to prevent installing two different packages unless there is a specific need to do SSR.
            In this option, the requests are made directly from the end user&apos;s browser to Constructor.io servers so the end to end response time is faster.
          </p>
          <Link href="/client-side">
            <a>Example</a>
          </Link>
        </div>
        <div className="option">
          <h3>Server Side Rendering</h3>
          <p>
            This option uses server side rendering for all of the requests. It only uses the server side Constructor.io package (constructorio-node). The data is fetched on the server and passed to the
            client by Next.js. Next Router can be used to refresh props (fetch new results) after user interacts with the page.
          </p>
          <Link href="/server-side">
            <a>Server Side Rendering</a>
          </Link>
        </div>
        <div className="option">
          <h3>Client + Server Side Rendering</h3>
          <p>
            This option uses server side rendering for the initial page load and uses client side rendering for the subsequent requests. It uses appropriate Constructor.io package depending on the context.
          </p>
          <Link href="/client-and-server-side">
            <a>Client + Server Side Rendering</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

