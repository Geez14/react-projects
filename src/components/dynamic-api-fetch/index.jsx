import { useCallback, useEffect, useState } from "react";
import "./style.css";

const DynamicLoad = ({ url, limit, max_fetch }) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMesssage] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${url}?limit=${limit}&skip=${page * limit}`
      );
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setProducts((prevproduct) => [...prevproduct, ...data.products]);
      }
    } catch (e) {
      setErrorMesssage(e.message);
    } finally {
      setLoading(false);
    }
  }, [url, limit, page]);

  function loadMore() {
    if (page < max_fetch) {
      setPage(page + 1);
    } else {
      setDisableButton(true);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <div className="product-container">Loading...</div>;
  }

  if (errorMessage != null) {
    return <div className="product-container">Error: {errorMessage}!</div>;
  }

  /**
   * product-container
   * |-catalog
   * |     |-products-cards
   * |     |    |-{multiple product cards}
   * |     |    |     |-ProductCard
   * |     |    |
   * |     |-loadMore Button
   */

  return (
    <div className="product-container">
      {products && products.length ? (
        // main page!
        <div className="catalog">
          {/* contain product images, and title! */}
          <div className="products-cards">
            {products.map((item) => (
              <ProductCard
                key={item.id}
                className="product-card"
                thumbnail={item.thumbnail}
                title={item.title}
                price={"$" + item.price}
              />
            ))}
          </div>
          {/* Load More Button */}
          <div>
            {/* disabled property to disable the button! */}
            <button disabled={disableButton} onClick={loadMore}>
              Load More
            </button>
          </div>
          {/* enclosing div! */}
          {disableButton ? <p>Cannot load more items</p> : null}
        </div>
      ) : (
        <div className="no-products-found">NO PRODUCT FOUND....</div>
      )}
    </div>
  );
};

function ProductCard({ className, thumbnail, title, price = "out of stock" }) {
  return (
    <div className={className}>
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}

// const FilterComponent = ({ onFilter }) => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [filteredData, setFilteredData] = useState([]);

//   const fetchCategories = useCallback(() => {
//     fetch("https://dummyjson.com/products/category-list")
//       .then((res) => res.json())
//       .then((res) => {
//         setFilteredData(res);
//       });
//   }, []);

//   useEffect(() => {
//     fetchCategories();
//   }, [fetchCategories]);

//   const handleCategoryChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedCategory(selectedValue);
//     //   // const filteredProducts = data.filter(
//     //   //   (product) => product.category === selectedValue || selectedValue === ""
//     //   // );
//     //   // setFilteredData(filteredProducts);
//     //   // if (onFilter) {
//     //   //   onFilter(filteredProducts);
//     //   // }
//   };

//   return (
//     <div className="filter-container">
//       <h2>Filter Products</h2>
//       <select value={selectedCategory} onChange={handleCategoryChange}>
//         <option value="">All Categories</option>
//         {filteredData.map((category) => (
//           <option key={category} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

export default DynamicLoad;
