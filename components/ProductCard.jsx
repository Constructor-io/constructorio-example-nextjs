import Image from 'next/image';

function ProductCard({ product }) {
  const imageTagClassesLoading = 'transition-opacity opacity-0 ml-auto mr-auto';
  const imageTagClassesLoaded = 'transition-opacity opacity-100 ml-auto mr-auto';

  return (
    <div
      className="product-card text-center"
      data-cnstrc-item-id={ product.data.id }
      data-cnstrc-item-name={ product.value }
      data-cnstrc-item-variation-id={ product.data?.variation_id }
    >
      <div className="mb-1 h-[225px]">
        <Image
          className={ imageTagClassesLoading }
          src={ product.data.image_url }
          alt={ product.value }
          onError={ (event) => { event.target.style.display = 'none'; } }
          onLoad={ (event) => { event.target.className = imageTagClassesLoaded; } }
          width="225"
          height="225"
          />
      </div>
      {product.value}
    </div>
  );
}

export default ProductCard;

