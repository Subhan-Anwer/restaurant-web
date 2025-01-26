// "use client"
// import { useRouter } from "next/router";

// const SearchPage = () => {
//     const router = useRouter();
//     const { query } = router.query; // Get the search query from URL
//     const searchQuery = query ? query.toString() : "";

//     // Sample products (replace with API call)
//     const products = [
//         { id: 1, name: "Product 1" },
//         { id: 2, name: "Product 2" },
//         { id: 3, name: "Another Product" },
//     ];

//     // Filter products based on the search query
//     const filteredProducts = products.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold mb-5">Search Results for &#34;{searchQuery}&#34;</h1>

//             {filteredProducts.length > 0 ? (
//                 <ul>
//                     {filteredProducts.map((product) => (
//                         <li key={product.id} className="mb-3">
//                             {product.name}
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No results found.</p>
//             )}
//         </div>
//     );
// };

// export default SearchPage;
