import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { LayoutGrid } from "lucide-react";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="container mx-auto p-5">
      <Badge variant="heading">
        <LayoutGrid size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8 pt-5">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
