
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  cover: string;
  buyPrice: number;
  rentPrice: number;
  condition: string;
  onBuy: (id: string) => void;
  onRent: (id: string) => void;
}

const BookCard = ({ 
  id, 
  title, 
  author, 
  cover, 
  buyPrice, 
  rentPrice, 
  condition,
  onBuy,
  onRent
}: BookCardProps) => {
  return (
    <Card className="book-card w-full overflow-hidden">
      <div className="aspect-[2/3] w-full overflow-hidden">
        <img 
          src={cover} 
          alt={title} 
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
          <Badge variant={condition === 'Like New' ? 'default' : 'secondary'}>
            {condition}
          </Badge>
        </div>
        <CardDescription>{author}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex justify-between text-sm">
          <div>
            <p className="font-semibold">Buy:</p>
            <p className="text-bookstore-purple font-bold">₹{buyPrice}</p>
          </div>
          <div>
            <p className="font-semibold">Rent:</p>
            <p className="text-bookstore-orange font-bold">₹{rentPrice}/mo</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          variant="outline" 
          className="flex-1 border-bookstore-purple text-bookstore-purple hover:bg-bookstore-purple hover:text-white"
          onClick={() => onBuy(id)}
        >
          Buy
        </Button>
        <Button 
          className="flex-1 bg-bookstore-purple text-white hover:bg-bookstore-purple/90"
          onClick={() => onRent(id)}
        >
          Rent
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
