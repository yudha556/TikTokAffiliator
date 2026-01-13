import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="p-4 flex flex-col gap-3 hover:shadow-md transition">
      <div className="w-full aspect-square relative rounded-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-sm text-muted-foreground">
        {product.description}
      </p>

      <Button className="mt-auto">View Page</Button>
    </Card>
  );
}
