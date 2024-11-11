import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Video, Music, Mic2, FileText, Layers } from "lucide-react";

const Sidemenu = () => {
  const categories = [
    { name: "All", icon: Layers },
    { name: "Video producer", icon: Video },
    { name: "Beat maker", icon: Music },
    { name: "Sound Engineer", icon: Mic2 },
    { name: "Song Writer", icon: FileText },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const CategoryIcon = ({
    category,
    className,
  }: {
    category: string;
    className: string;
  }) => {
    const Icon = categories.find((c) => c.name === category)?.icon || Layers;
    return <Icon className={className} />;
  };

  return (
    <div>
      {/* Dropdown for smaller screens */}
      <div className="lg:hidden mb-4">
        <h1 className="text-xl font-bold mb-4">Categories</h1>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-64">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.name} value={category.name}>
                <div className="flex items-center">
                  <CategoryIcon
                    category={category.name}
                    className="mr-2 h-3.5 w-3.5"
                  />
                  {category.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* Sidebar for larger screens */}
      <div className="w-[260px] px-4 pb-4 hidden lg:block rounded-sm mt-3">
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Categories</h1>
          <div className="flex flex-col space-y-2">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`text-left py-2 px-4 rounded-md transition-colors duration-200 flex items-center ${
                  selectedCategory === category.name
                    ? "bg-creator-bg-100 font-semibold"
                    : "hover:bg-creator-bg-100 hover:font-bold hover:text-black opacity-80"
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <CategoryIcon
                  category={category.name}
                  className="mr-2 h-5 w-5"
                />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
