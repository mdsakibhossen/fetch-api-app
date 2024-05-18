import React from 'react'
import ItemsSection from '../../components/items-section/ItemsSection'
import UserCard from '../../components/items-section/user-card/UserCard';
import { useFetch } from '../../hooks/useFetch';

const Users = () => {
  const url = `https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=40`;
  const { data, isLoading, errorMsg } = useFetch(url, {});
  return (
    <ItemsSection
      sectionTitle={"Users"}
      sectionSubTitle={"Our All Users"}
      itemType="user"
      data={data}
      isLoading={isLoading}
      errorMsg={errorMsg}
    >
      <UserCard />
    </ItemsSection>
  );
}

export default Users