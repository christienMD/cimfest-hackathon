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
    <div className="w-full lg:w-[240px] select-scroll-fix">
      {/* Mobile Dropdown */}
      <div className="block lg:hidden lg:px-4">
        <h1 className="text-xl font-bold mb-4 text-[#FFF8F8]">Categories</h1>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[300px] bg-[#D4BBFF] text-[#000000] border-none">
            <SelectValue
              placeholder="Select a category"
              className="text-[#000000]"
            />
          </SelectTrigger>
          <SelectContent className="bg-[#D4BBFF] border-none max-h-[200px] w-[300px] overflow-y-auto">
            {categories.map((category) => (
              <SelectItem
                key={category.name}
                value={category.name}
                className="hover:bg-[#C4A2FF] focus:bg-[#C4A2FF] cursor-pointer"
              >
                <div className="flex items-center">
                  <CategoryIcon
                    category={category.name}
                    className="mr-2 h-4 w-4 text-[#411294]"
                  />
                  <span className="text-[#000000]">{category.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <h1 className="text-2xl font-bold mb-6 text-[#FFF8F8]">Categories</h1>
        <div className="flex flex-col space-y-2">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`w-full text-left py-3 px-4 rounded-md transition-all duration-200 flex items-center ${
                selectedCategory === category.name
                  ? "bg-[#D4BBFF] text-[#411294] font-semibold"
                  : "text-[#FFF8F8] hover:bg-[#411294]/20 hover:text-[#D4BBFF]"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <CategoryIcon
                category={category.name}
                className={`mr-3 h-5 w-5 ${
                  selectedCategory === category.name
                    ? "text-[#411294]"
                    : "text-[#D4BBFF]"
                }`}
              />
              <span className="text-base">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
