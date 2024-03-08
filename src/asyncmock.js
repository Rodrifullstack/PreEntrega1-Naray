const products = [
  {
    id: "1",
    name: "Samsung S24+",
    price: 1200,
    category: "celular",
    img: "https://images.samsung.com/is/image/samsung/p6pim/latin/2401/gallery/latin-galaxy-s24-plus-sm-s926bzvkgto-thumb-539299753?$240_240_PNG$",
    stock: 26,
    description: "Descripcion Samsung S24+"
  },
  {
    id: "2",
    name: "Samsung S24 Ultra",
    price: 1400,
    category: "celular",
    img: "https://images.samsung.com/is/image/samsung/p6pim/latin/2401/gallery/latin-galaxy-s24-s928-sm-s928bztugto-thumb-539326308?$240_240_PNG$",
    stock: 8,
    description: "Descripcion Samsung S24 Ultra"
  },
  {
    id: "3",
    name: "Samsung S23FE",
    price: 1000,
    category: "celular",
    img: "https://images.samsung.com/is/image/samsung/p6pim/latin/sm-s711blgjgto/gallery/latin-galaxy-s23-fe-s711-sm-s711blgjgto-thumb-538820897?$240_240_PNG$",
    stock: 14,
    description: "Descripcion Samsung S23FE"
  },
  {
    id: "4",
    name: "Galaxy tab S9 FE+ 5G",
    price: 1200,
    category: "tablet",
    img: "https://images.samsung.com/is/image/samsung/p6pim/latin/sm-x616bzaagto/gallery/latin-galaxy-tab-s9-fe-plus-sm-x616-sm-x616bzaagto-thumb-538730478?$240_240_PNG$",
    stock: 30,
    description: "Descripcion Galaxy tab S9 FE+ 5G"
  },
  {
    id: "5",
    name: "Galaxy tab S9 Ultra",
    price: 1700,
    category: "tablet",
    img: "https://images.samsung.com/is/image/samsung/p6pim/latin/sm-x910nzadgto/gallery/latin-galaxy-tab-s9-ultra-wifi-x910-sm-x910nzadgto-thumb-537945469?$240_240_PNG$",
    stock: 7,
    description: "Descripcion Galaxy tab S9 Ultra"
  },
  {
    id: "6",
    name: "Galaxy Book3 Pro 360 (16'',i7,16GB)",
    price: 2800,
    category: "Computadora",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/np960qfg-ka1ar/gallery/ar-galaxy-book3-pro-360-16-inch-np960-np960qfg-ka1ar-thumb-539476330?$172_172_PNG$",
    stock: 60,
    description: "Descripcion Galaxy Book3 Pro 360 (16'',i7,16GB)"
  },
  {
    id: "7",
    name: "Galaxy Book3 Pro (14'',i5,16GB)",
    price: 1800,
    category: "Computadora",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/np940xfg-ka1ar/gallery/ar-galaxy-book3-pro-14-inch-np940-np940xfg-ka1ar-thumb-539486752?$172_172_PNG$",
    stock: 60,
    description: "Descripcion Galaxy Book3 Pro (14'',i5,16GB)"
  },
  {
    id: "8",
    name: "Galaxy Book2 Pro (14'',i5,16GB)",
    price: 1500,
    category: "Computadora",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/np940xfg-ka1ar/gallery/ar-galaxy-book3-pro-14-inch-np940-np940xfg-ka1ar-thumb-539486752?$172_172_PNG$",
    stock: 10,
    description: "Descripcion Galaxy Book2 Pro (14'',i5,16GB)"
  }
];


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    },1000);
  });
}


export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId))
    }, 1000);
  })
}

export const getProductById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productoId))
    }, 1000);
  })
}