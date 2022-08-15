import Link from 'next/link';

export default function Home(props) {
  return (
    <div>
      <p>Hello</p>
      <Link href="/client-side">
        <a>Client Side Rendering</a>
      </Link>
      <Link href="/server-side">
        <a>Server Side Rendering</a>
      </Link>
      <Link href="/client-and-server-side">
        <a>Client + Server Side Rendering</a>
      </Link>
    </div>
  )
}

