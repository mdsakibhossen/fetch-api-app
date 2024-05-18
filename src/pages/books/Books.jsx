import React from 'react'
import ItemsSection from './../../components/items-section/ItemsSection';
import BookCard from './../../components/items-section/book-card/BookCard';
import { useFetch } from '../../hooks/useFetch';

const Books = () => {
  const url = `https://api.freeapi.app/api/v1/public/books?page=1&limit=20&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech`;
  const { data, isLoading, errorMsg } = useFetch(url, {});
//   console.log(data);
  return (
    <ItemsSection
      sectionTitle={"Books"}
      sectionSubTitle={"Books is Our Best Friends"}
      itemType="book"
      data={data}
      isLoading={isLoading}
      errorMsg={errorMsg}
    >
      <BookCard />
    </ItemsSection>
  );
}

export default Books