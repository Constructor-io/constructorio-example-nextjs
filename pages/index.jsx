import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto text-center max-w-[2000px] pt-4">
      <h1 className="my-8 text-2xl font-bold">Constructor.io Next.js Example</h1>
      <p>
        This is a repository that showcases different options to integrate Constructor.io SDKs into a Next.js project.
      </p>
      <div className="flex justify-around mt-12">
        <div className="flex flex-col justify-between border border-2 border-gray-500 rounded-lg p-4 w-[30%]">
          <h3 className="text-lg font-bold">Client Side Rendering</h3>
          <p className="my-4">
            This is the recommended option due to implementation simplicity and to prevent installing two different packages unless there is a specific need to do SSR.
            In this option, the requests are made directly from the end user&apos;s browser to Constructor.io servers so the end to end response time is faster.
          </p>
          <Link href="/client-side">
            <a className="block mt-4 rounded-lg px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white font-semibold tracking-wide">Example</a>
          </Link>
        </div>
        <div className="flex flex-col justify-between border border-2 border-gray-500 rounded-lg p-4 w-[30%]">
          <h3 className="text-lg font-bold">Server Side Rendering</h3>
          <p className="my-4">
            This option uses server side rendering for all of the requests. It only uses the server side Constructor.io package (constructorio-node). The data is fetched on the server and passed to the
            client by Next.js. Next Router can be used to refresh props (fetch new results) after user interacts with the page.
          </p>
          <Link href="/server-side">
            <a className="block mt-4 rounded-lg px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white font-semibold tracking-wide">Example</a>
          </Link>
        </div>
        <div className="flex flex-col justify-between border border-2 border-gray-500 rounded-lg p-4 w-[30%]">
          <h3 className="text-lg font-bold">Client + Server Side Rendering</h3>
          <p className="my-4">
            This option uses server side rendering for the initial page load and uses client side rendering for the subsequent requests. It uses appropriate Constructor.io package depending on the context.
          </p>
          <Link href="/client-and-server-side">
            <a className="block mt-4 rounded-lg px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white font-semibold tracking-wide">Example</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

