
const SERVER_URL = "https://dummyjson.com/products"

export const getProducts = async () => {
  try {
    const response = await fetch(`${SERVER_URL}`);
    const json = await response.json();

    const productData = json.products.map( product => {
      const {title, price, images } = product;
      return {title, price, images }
    })
    return productData;
  } catch (error) {
    return null;
  }
}