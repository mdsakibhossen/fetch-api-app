import React from "react";
import ItemsSection from "../../components/items-section/ItemsSection";
import UserCard from "../../components/items-section/user-card/UserCard";
import ProductCard from "../../components/items-section/product-card/ProductCard";
import { useFetch } from "../../hooks/useFetch";
import BookCard from "../../components/items-section/book-card/BookCard";
import Hero from "../../components/hero/Hero";

const Home = () => {


  // Fetching Users
  const {
    data: usersObj,
    isLoading: isLoadingUsers,
    errorMsg: errorMsgUsers,
  } = useFetch(
    `https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=8`,
    {}
  );

  // Fetching Products
  const {
    data: productsObj,
    isLoading: isLoadingProducts,
    errorMsg: errorMsgProducts,
  } = useFetch(
    `https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=8&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid`,
    {}
  );

  // Fetching Books
  const {
    data: booksObj,
    isLoading: isLoadingBooks,
    errorMsg: errorMsgBooks,
  } = useFetch(
    `https://api.freeapi.app/api/v1/public/books?page=1&limit=8&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech`,
    {}
  );

  return (
    <>
      {/* <ItemsSection sectionTitle={"Users"} limit={8}/> */}
      {/* Hero Section Start */}
      <Hero />
      {/* Hero Section End */}
      {/* Users Section Start */}
      <ItemsSection
        sectionTitle={"Users"}
        sectionSubTitle={"Our All Users"}
        itemType="user"
        data={usersObj}
        isLoading={isLoadingUsers}
        errorMsg={errorMsgUsers}
      >
        <UserCard />
      </ItemsSection>
      {/* Users Section End */}

      {/* Products Section Start */}

      <ItemsSection
        sectionTitle={"Products"}
        sectionSubTitle={"Quality is First"}
        itemType="product"
        data={productsObj}
        isLoading={isLoadingProducts}
        errorMsg={errorMsgProducts}
      >
        <ProductCard />
      </ItemsSection>
      {/* Products Section End */}

      {/* Books Section Start */}

      <ItemsSection
        sectionTitle={"Books"}
        sectionSubTitle={"Books is Our Best Friends"}
        itemType="book"
        data={booksObj}
        isLoading={isLoadingBooks}
        errorMsg={errorMsgBooks}
      >
        <BookCard />
      </ItemsSection>
      {/* Books Section End */}
    </>
  );
};

export default Home;
