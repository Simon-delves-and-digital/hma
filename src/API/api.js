
const SERVER_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
  try {
    const response = await fetch(`${SERVER_URL}`);
    const json = await response.json();

    const productData = json.products.map(product => {
      const { id, title, price, thumbnail, description } = product;
      return { id, title, price, thumbnail, description };
    });
    return productData;
  } catch (error) {
    return null;
  }
};