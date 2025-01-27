const products = [
  {
    id: 1,
    name: 'FOX BLACK LABEL SLIM BUZZER BARS',
    href: '#',
    imageSrc:
      'https://www.foxint.com/remote.axd/foxcdn1.blob.core.windows.net/fox-media/20347/cbb041_fox_black_label_slim_3_rod_buzz_bars_220mm_250mm_main.jpg?quality=80&width=399&height=399&bgcolor=fff',
    imageAlt: 'FOX BLACK LABEL SLIM BUZZER BARS',
    price: '$16.99',
    color: 'Black',
  },
  {
    id: 2,
    name: 'FLATLINER X BED',
    href: '#',
    imageSrc:
      'https://www.foxint.com/remote.axd/foxcdn1.blob.core.windows.net/fox-media/20546/cbc109_fox_flatliner_x_bedchair_main.jpg?quality=80&width=399&height=399&bgcolor=fff',
    imageAlt: 'FLATLINER X BED',
    price: '$399.99',
    color: 'Camo',
  },
  {
    id: 3,
    name: 'FOX FRONTIER LITE SYSTEM PACKAGE',
    href: '#',
    imageSrc:
      'https://www.foxint.com/remote.axd/foxcdn1.blob.core.windows.net/fox-media/20178/frontier-lite-system-package.jpg?quality=80&width=399&height=399&bgcolor=fff',
    imageAlt: 'FOX FRONTIER LITE SYSTEM PACKAGE',
    price: '$329.99',
    color: 'Camo',
  },
  {
    id: 4,
    name: 'FOX EOS 10000FD REEL',
    href: '#',
    imageSrc:
      'https://www.foxint.com/remote.axd/foxcdn1.blob.core.windows.net/fox-media/9624/eos-10000fd_with-line.jpg?quality=80&width=399&height=399&bgcolor=fff',
    imageAlt: 'FOX EOS 10000FD REEL',
    price: '$64.99',
    color: 'Black',
  },
  // More products...
];

export const ProductsList = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Best Sellers
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
