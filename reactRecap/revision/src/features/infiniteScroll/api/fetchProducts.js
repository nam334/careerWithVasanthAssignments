export const fetchProducts = async ({ page, search }) => {
  let limit = 10;

  let skip = (page - 1) * 10;

  let url = "";
  if (search === "")
    url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
  else
    url = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`;
  const data = await fetch(url);
  const res = await data.json();
  return res.products;
};
