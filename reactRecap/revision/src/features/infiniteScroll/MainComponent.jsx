import React, { useEffect, useRef, useState } from "react";
import { useProducts } from "./hooks/useProducts";

const MainComponent = () => {
  const [search, setSearch] = useState("");
  const bottomRef = useRef();
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const { loading, error, data, increasePage } = useProducts(debouncedSearch);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        increasePage();
      }
    });

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, [increasePage]);

  console.log(data);

  //   if (error) return <div>Error: {error}</div>;

  return (
    <>
      {loading && <div>Loading.</div>}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ height: "20px", width: "300px" }}
      />
      <div style={{ padding: "20px" }}>
        <h2>Products</h2>

        <div>
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div ref={bottomRef} style={{ height: "20px" }}></div>
    </>
  );
};

export default MainComponent;
