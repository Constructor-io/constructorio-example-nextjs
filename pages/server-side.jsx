import { fetchResultsServerSide } from '../utils/helpers';

export default function Home(props) {
  return (
    <div>
      <p>{ props?.data?.response?.results?.[0]?.value }</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  const data = await fetchResultsServerSide(context);

  return { props: { data } }
}

