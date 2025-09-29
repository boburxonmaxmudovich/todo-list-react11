import React from "react";
import { useAxios } from "../../hooks/useAxios";
import Card from "../../components/card";
import { Skeleton } from "antd";
import SkeltonComponent from "../../components/skeleton";

const Home = () => {
  const { data, loading } = useAxios("products");
  console.log(data);
  return (
    <div className="grid grid-cols-5 gap-4 mt-5">
      {loading ? (
        <SkeltonComponent />
      ) : (
        data.map((value) => <Card key={value.id} {...value} />)
      )}
    </div>
  );
};

export default Home;
