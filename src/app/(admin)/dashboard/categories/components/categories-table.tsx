import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Prisma } from "@prisma/client";

interface CategoriesTablePops {
  categories: Prisma.CategoryGetPayload<{
    include: {
      products: {
        select: {
          id: true;
        };
      };
    };
  }>[];
}
const CategoriesTable = ({ categories }: CategoriesTablePops) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Pocentagem das vendas</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((categories) => (
          <TableRow key={categories.id}>
            <TableCell>{categories.name}</TableCell>
            <TableCell>{categories.products.length}</TableCell>
            <TableCell>0%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoriesTable;
