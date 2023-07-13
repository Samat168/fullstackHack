export const getTokens = () => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const Authorization = `Bearer ${tokens.access}`;
  const config = {
    headers: {
      Authorization,
    },
  };
  return config;
};
export const calcTotalPrice = (products) => {
  return products.reduce((acc, curr) => {
    return (acc += curr.subPrice);
  }, 0);
};

export const calcSubPrice = (product) => {
  return +product.count * product.item.price;
};

export const getCountProductsInCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
};
