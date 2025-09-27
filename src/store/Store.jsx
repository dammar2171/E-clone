import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const detail = [
    {
      id: 1,
      brandName: "/ e-shisha-luxe-30000-1",
      productName: "E-Shisha Luxe 30000",
      images: {
        image1:
          "https://vape-reload.s3.us-east-1.amazonaws.com/products/1702e822-ad68-407a-a39a-d1a147b546e1.jpeg",
        image2:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzem51VMG1U64vee2BXMis8zvyoFuUTttGA&s",
        image3:
          "https://vapeuk.co.uk/media/catalog/product/cache/5d1bddd105e196f2d0b5e841d4b8c9d8/g/r/group--geekvape-sonder-q-pod-vape-kit.jpeg",
      },
      originalPrice: "49.50",
      paidPrice: "45.00",
      savedPrice: "4.50",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      flavour: {
        first: "mint",
        second: "apple",
        third: "banana",
      },
      availableOption: "1 of 1",
      available: "80",
    },
  ];

  const [bagQuantity, setBagQuantity] = useState(null);
  const [isOffCanvasAvailable, setIsOffCanvasAvailable] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [totalCost, setTotalCost] = useState();

  const addToCart = (name, quantity, image, flavour) => {
    const newItem = { name, quantity, image, flavour };
    const newItemList = [...cartData, newItem];
    setCartData(newItemList);
    setBagQuantity((prev) => prev + quantity);
  };

  const updateCartItemQuantity = (name, newQuantity) => {
    const updatedCart = cartData.map((item) =>
      item.name === name ? { ...item, quantity: newQuantity } : item
    );
    setCartData(updatedCart);

    const totalQuantity = updatedCart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setBagQuantity(totalQuantity);
  };

  const deleteCartItemQuantity = (name) => {
    const newItemData = cartData.filter((item) => item.name !== name);
    setCartData(newItemData);
  };

  const totalCostCartItem = (quantity, price) => {
    setTotalCost(quantity * price);
  };
  return (
    <AppContext.Provider
      value={{
        bagQuantity,
        setBagQuantity,
        isOffCanvasAvailable,
        setIsOffCanvasAvailable,
        cartData,
        setCartData,
        addToCart,
        updateCartItemQuantity,
        detail,
        deleteCartItemQuantity,
        totalCostCartItem,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
