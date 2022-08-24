import ProductCard from './ProductCard';

function SearchResults(props) {
  const { items } = props;

  return (
    <div className="flex flex-col grow mt-8">
      <div
        id="search-results"
        className="mb-4 flex flex-col sm:flex-row flex-wrap sm:grid sm:grid-cols-[repeat(2,225px)]
        lg:grid-cols-[repeat(4,225px)] auto-rows-max justify-between gap-y-6 place-content-center
        sm:place-content-start sm:justify-center gap-x-4 items-center"
      >
        { items.map((item) => <ProductCard key={ item.data.id } product={ item } />) }
      </div>
    </div>
  );
}

export default SearchResults;

