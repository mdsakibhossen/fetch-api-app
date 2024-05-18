import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import Loading from "../loading/Loading";

const UserDetails = () => {
  const { id } = useParams();

  const url = `https://api.freeapi.app/api/v1/public/randomusers/${id}`;
  const { data: user, isLoading, errorMsg } = useFetch(url, {});

  if (isLoading) {
    return <Loading />;
  }
  if (errorMsg) {
    // console.log(errorMsg);
    return <h1>errorMsg</h1>;
  }

  return (
    <section>
      <div className="container mx-auto px-3">
        <div className="details-card mx-auto shadow m-10 rounded-sm max-w-2xl">
          <div className="img flex justify-center p-5 bg-slate-400 mb-5 rounded">
            <img
              className="w-32 h-32 rounded-full cursor-pointer"
              src={user?.data?.picture.large}
              alt={`${user?.data?.name.title} ${user?.data?.name.first} ${user?.data?.name.last}`}
            />
          </div>
          <div className="info px-5 pb-5">
            <ul className="flex flex-col gap-2 text-lg">
              <li>
                <span className="font-medium">Name: </span>
                <span>{`${user?.data?.name.title} ${user?.data?.name.first} ${user?.data?.name.last}`}</span>
              </li>
              <li>
                <span className="font-medium">Email: </span>
                <Link
                  className="text-blue-400 hover:underline"
                  to={`mailto:${user?.data?.email}`}
                >
                  {user?.data?.email}
                </Link>
              </li>
              <li>
                <span className="font-medium">Age:</span>{" "}
                <span>{user?.data?.dob.age}</span>
              </li>
              <li>
                <span className="font-medium">Phone:</span>{" "}
                <Link
                  className="text-blue-400 hover:underline"
                  to={`tel:${user?.data?.phone}`}
                >
                  {user?.data?.phone}
                </Link>
              </li>
              <li>
                <span className="font-medium">Country:</span>{" "}
                <span>{user?.data?.location.country}</span>
              </li>
              <li>
                <span className="font-medium">City:</span>{" "}
                <span>{user?.data?.location.city}</span>
              </li>
              <li>
                <span className="font-medium">State:</span>{" "}
                <span>{user?.data?.location.state}</span>
              </li>
              <li>
                <span className="font-medium">Post Code:</span>{" "}
                <span>{user?.data?.location.postcode}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
