
import Image from 'next/image';

const ProductsCard = () => {
  const products = [
    "/images/product1.png",
    "/images/product2.png",
    "/images/product3.png",
    "/images/product4.png",
    "/images/product5.png",
    "/images/product6.png",
    "/images/product7.png",
    "/images/product8.png",
    "/images/product9.png",
    "/images/product10.png",
    "/images/product11.png",
    "/images/product12.png",
  ];

  return (
    <div className="main-container flex flex-col gap-[48px] pt-[48px] pb-[48px] items-center mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
            <div className="h-[350px] w-full relative overflow-hidden">
              <Image
                src={product}
                alt={`Product ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="block font-semibold text-lg text-[#252b42]">Graphic Design</span>
              <span className="block text-sm text-[#727272]">English Department</span>
              <div className="flex justify-center gap-2 mt-2">
                <span className="text-xs line-through text-gray-500">$16.48</span>
                <span className="text-xs text-green-600">$6.48</span>
              </div>
            </div>
            <div className="flex justify-center gap-1 mt-3">
              <div className="w-4 h-4 bg-[url(/images/product1.png)] bg-cover rounded-full" />
              <div className="w-4 h-4 bg-[url(/images/product2.png)] bg-cover rounded-full" />
              <div className="w-4 h-4 bg-[url(/images/product3.png)] bg-cover rounded-full" />
              <div className="w-4 h-4 bg-[url(/images/product4.png)] bg-cover rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
