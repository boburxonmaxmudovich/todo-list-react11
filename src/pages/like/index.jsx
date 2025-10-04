import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card";

const Like = () => {
  const { likes } = useSelector((state) => state.cartSlice);

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="text-2xl font-bold mb-6">Yoqtirilgan mahsulotlar</h2>

        {likes.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {likes.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Hozircha yoqtirilgan mahsulot yoq.</p>
        )}
      </div>
    </section>
  );
};

export default Like;
