import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import Loading from "../../pages/loading/Loading";

const ItemsSection = (props) => {
  const {
    sectionTitle,
    sectionSubTitle,
    itemType,
    children,
    data,
    isLoading,
    errorMsg,
  } = props;

  // console.log(Object.keys(data).length)
  // console.log(data.data?.data);

  // *******************************
  // console.log("Array.isArray(children):", Array.isArray(children),"Type:",typeof children);

  /* ********** Adding Props to Children **********  */
  const myFun = (item) => {
    // console.log(React.cloneElement(children, { user: user }));
    return React.cloneElement(children, { [itemType]: item });

    /*const childrenWithProps = React.Children.map(children, (child) => {
    // `child` is each element in `props.children`
    if (React.isValidElement(child)) {
      // Clone and add the `data` prop
      return React.cloneElement(child, { user: user });
    }
    // Return the child unchanged if it's not a valid React element
    return child;
  });
  // console.log("childrenWithProps-type(isArray):", Array.isArray(childrenWithProps));*/

    // return childrenWithProps;
  };

  // *******************************
  if (isLoading) {
    return <Loading />;
  }
  if (errorMsg) {
    // console.log(errorMsg);
    return <h1>errorMsg</h1>;
  }
  return (
    <section className="pt-8">
      <div className="container mx-auto px-3">
        <div className="info">
          <h2 className="text-2xl text-center font-semibold text-purple-500 uppercase underline underline-offset-4">
            {sectionTitle}
          </h2>
          <p className="text-center italic text-slate-400 mt-3">
            {sectionSubTitle}
          </p>
        </div>
        <div
          className="items grid gap-5 mt-5 auto-rows-min"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(15rem,1fr))",
            // gridAutoRows: "1fr",
          }}
        >
          {data.data?.data &&
            data.data?.data.map((item) => (
              <Link key={item.id} to={`/${itemType}/${item.id}`}>
                {/* <UserCard item={item} /> */}
                {myFun(item)}
                {/* {children} */}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ItemsSection;
