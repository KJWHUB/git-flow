function Product({ elementId }) {
  const list = [];

  const createProduct = (name, price) => {
    return {
      name,
      price,
    };
  };

  const add = (product) => {
    list.push(product);
  };
  const remove = (product) => {
    list.splice(list.indexOf(product), 1);
  };

  const setup = () => {
    console.group("Product setup");
    try {
      const element = document.getElementById(elementId);
      console.log("Element Check:", element);

      if (!element) {
        throw new Error("Element not found");
      }

      const products = Array.from({ length: 5 }, (_, i) => createProduct(`Product ${i + 1}`, 100 * (i + 1)));

      products.forEach((product) => {
        add(product);
      });

      console.log("Product List:", list);
    } catch (error) {
      console.error("Product Setup Fail:", error);
    }
    console.groupEnd();
  };

  return {
    setup,
  };
}

export default Product;
