import React, { useState } from "react";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
import image6 from "../assets/img6.jpg";
import image7 from "../assets/img7.jpg";
import image8 from "../assets/img8.jpeg";
import image9 from "../assets/img9.jpg";
import image10 from "../assets/img10.jpg";
import image11 from "../assets/img11.jpg";
import image12 from "../assets/img12.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  const [searchProduct, setSearchProduct] = useState("");
  const products = [
    { id: 1, name: "Basic Tee", colour: "Black", price: 25, image: image1 },
    { id: 2, name: "Avance Tee", colour: "White", price: 45, image: image2 },
    { id: 3, name: "DyrectDeals", colour: "Black", price: 35, image: image3 },
    { id: 4, name: "KILLER", colour: "Red", price: 15, image: image4 },
    { id: 5, name: "VeBNoR", colour: "Black", price: 17, image: image5 },
    { id: 6, name: "Allen Solly", colour: "Black", price: 26, image: image6 },
    { id: 7, name: "Wrath", colour: "Black", price: 35, image: image7 },
    { id: 8, name: "KAJARU", colour: "Black", price: 45, image: image8 },
    { id: 9, name: "KOTTY", colour: "White", price: 48, image: image9 },
    { id: 10, name: "London Hills", colour: "White", price: 50, image: image10 },
    { id: 11, name: "Roadster", colour: "White", price: 44, image: image11 },
    { id: 12, name: "Roadster", colour: "Black", price: 48, image: image12 },
  ];

  const handleSearchChange = (e) => {
    setSearchProduct(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <section>
      <div className="relative w-full bg-white mt-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <img
              className="mx-auto h-10 w-auto pr-16 mt-4 -mb-4  sm:pr-10 sm:mt-2 max-[430px]:pr-3 max-[468px]:-mt-1 max-[468px]:-ml-6  max-[368px]:pr-0"
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              alt="Flipkart Company"
            />
          </div>
          <div className="hidden lg:block mt-2">
            <ul className="ml-12 inline-flex space-x-8">
              <li>
                <Link
                  to={"#"}
                  className="inline-flex items-center text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="inline-flex items-center text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="inline-flex items-center text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex grow justify-end">
            <input
              className="flex h-10 w-[250px] max-[468px]:w-[200px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search"
              value={searchProduct}
              onChange={handleSearchChange}
            />
          </div>
       
            <Link to="/login" className="ml-16 mt-2 hidden lg:block">
              <button className="w-20 p-2 -mt-1 rounded-md text-cyan-50 bg-blue-500">
                Login
              </button>
            </Link>
          
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
           Best of T-Shirt 
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <div className="group relative" key={product.id}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
                    alt={`Front of men's ${product.name} in black.`}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 font-medium">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.colour}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
