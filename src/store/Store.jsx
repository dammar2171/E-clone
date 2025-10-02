import { createContext, useEffect, useState } from "react";

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
    {
      id: 2,
      brandName: "/ elfbar-luxe-30000-1",
      productName: "E-LFBAR Luxe 30000",
      images: {
        image1:
          "https://elfbar.ae/cdn/shop/files/Bubble-Gum-Mint_700x700.jpg?v=1757039517",
        image2:
          "https://vapdazzle.ae/wp-content/uploads/2025/04/Elfbar-E-Shisha-Luxe-Bubble-Gum-Mint-30000-Puffs.jpg",
        image3:
          "https://vaps.ae/uploads/wp-content/Elfbar-E-Shisha-Luxe-Bubble-Gum-Mint-30000-Puffs.jpg",
      },
      originalPrice: "60.50",
      paidPrice: "55.00",
      savedPrice: "5.50",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      flavour: {
        first: "mint",
        second: "apple",
        third: "banana",
      },
      availableOption: "1 of 1",
      available: "90",
    },
    {
      id: 3,
      brandName: "/ smok-gprive 1touch",
      productName: "SMOK GPRIVE 2 30W TOUCH",
      images: {
        image1:
          "https://vapebazaar.pk/wp-content/uploads/2018/01/Smok-G-Priv-2-Vape-Online-in-Pakistan..............................-600x600.jpg",
        image2:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnlUg4hQYnY1461HkFroqDl5sk-Q1MKaiET2wsT5fz4ySPr1kcVOZY4WxuesJ2dr_Qx3I&usqp=CAU",
        image3:
          "https://vapeafrica.co.za/wp-content/uploads/2018/11/SMOK-G-PRIV-2-KITS.jpg",
      },
      originalPrice: "90.50",
      paidPrice: "80.00",
      savedPrice: "10.50",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      flavour: {
        first: "mint",
        second: "apple",
        third: "banana",
      },
      availableOption: "1 of 1",
      available: "90",
    },
  ];

  const [bagQuantity, setBagQuantity] = useState(0);
  const [isOffCanvasAvailable, setIsOffCanvasAvailable] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);

  // ✅ Add item to cart (merge duplicates by id+flavour)
  const addToCart = (id, name, quantity, image, flavour, paidPrice) => {
    const existingItem = cartData.find(
      (item) => item.id === id && item.flavour === flavour
    );

    let newItemList;
    if (existingItem) {
      newItemList = cartData.map((item) =>
        item.id === id && item.flavour === flavour
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      const newItem = { id, name, quantity, image, flavour, paidPrice };
      newItemList = [...cartData, newItem];
    }

    setCartData(newItemList);

    const totalQuantity = newItemList.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setBagQuantity(totalQuantity);
  };

  // ✅ Update quantity of a specific item
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

  // ✅ Delete item and recalc bagQuantity
  const deleteCartItemQuantity = (id) => {
    const newItemData = cartData.filter((item) => item.id !== id);
    setCartData(newItemData);

    const totalQuantity = newItemData.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setBagQuantity(totalQuantity);
  };

  // ✅ Calculate total cost whenever cart changes
  useEffect(() => {
    const total = cartData.reduce(
      (sum, item) => sum + item.quantity * parseFloat(item.paidPrice),
      0
    );
    setTotalCost(total.toFixed(2));
  }, [cartData]);

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
        totalCost,
        isOpenSearchBar,
        setIsOpenSearchBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
