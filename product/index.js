function Product({ elementId }) {
  const list = [];

  const add = (product) => {
    list.push(product);
  };
  const remove = (product) => {
    list.splice(list.indexOf(product), 1);
  };

  const createProduct = (name, price) => {
    return {
      name,
      price,
    };
  };

  const createProductElement = (product) => {
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="product-card">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    `;
    return element;
  };

  const render = () => {
    const element = document.getElementById(elementId);
    element.innerHTML = "";
    list.forEach((product) => {
      const productElement = createProductElement(product);
      element.appendChild(productElement);
    });
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

      render();
      console.log("Product Rendered");
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
