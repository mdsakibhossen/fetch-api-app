import React from 'react'
import ProductCard from '../../components/items-section/product-card/ProductCard';
import ItemsSection from '../../components/items-section/ItemsSection';
import { useFetch } from '../../hooks/useFetch';

const Products = () => {
  const url = `https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=40&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid`;
  const { data, isLoading, errorMsg } = useFetch(url, {});
//   console.log(data.data?.data);
  return (
    <ItemsSection
      sectionTitle={"Products"}
      sectionSubTitle={"Quality is First"}
      itemType="product"
      data={data}
      isLoading={isLoading}
      errorMsg={errorMsg}
    >
      <ProductCard />
    </ItemsSection>
  );
}

export default Products