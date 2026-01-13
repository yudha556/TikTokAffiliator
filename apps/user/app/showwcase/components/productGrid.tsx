import ProductCard from "./product";

const dummy = Array.from({ length: 42 }).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: `Description ${i + 1}`,
  image: "https://github.com/shadcn.png",
}));

const PER_PAGE = 10;

export default function ProductGrid({ page }: { page: number }) {
  const start = (page - 1) * PER_PAGE;
  const end = start + PER_PAGE;

  const products = dummy.slice(start, end);

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export const totalPages = Math.ceil(dummy.length / PER_PAGE);
