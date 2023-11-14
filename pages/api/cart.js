export default async function handler(req, res) {
  const products = await fetch("https://dummyjson.com/carts/1");
  const productsJSON = await products.json();
  res.status(200).json({ productsJSON });
}
