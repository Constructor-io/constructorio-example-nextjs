import { useEffect, useState } from 'react';
import useCioClient from '../hooks/useCioClient'
import { fetchResultsServerSide } from '../utils/helpers';
import SearchResults from '../components/SearchResults';

export default function ClientAndServerSide(props) {
  const [results, setResults] = useState(props?.data?.response?.results);
  const cioClient = useCioClient();

  useEffect(() => {
    const fetchResultsFromAPI = async () => {
      const data = await cioClient.search.getSearchResults('shoes');

      setResults(data?.response?.results);
    };

    if (cioClient?.search) fetchResultsFromAPI();
  }, [cioClient?.search]);

  return ( <SearchResults items={ results } /> )
}

export async function getServerSideProps(context) {
  const data = await fetchResultsServerSide(context);

  return { props: { data } }
}

