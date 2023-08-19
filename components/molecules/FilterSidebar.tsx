import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const FilterSidebar = () => {
  const availablity = [
    {
      name: "Include only In Stock",
    },
    {
      name: "Include out of Stock",
    },
  ];
  const brands = [
    {
      name: "Nike",
    },
    {
      name: "Adidas",
    },
    {
      name: "Puma",
    },
    {
      name: "Sketchers",
    },
  ];
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span>Price</span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col">
            <div className="flex justify-between mb-3">
              <span>Rs. 0</span>
              <span>Rs. 100000</span>
            </div>
          <Slider
            defaultValue={[50]}
            max={100000}
            min={0}
            step={1}
          />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <span>Brand</span>
        </AccordionTrigger>
        <AccordionContent>
          {brands.map((e, i) => (
            <div key={i} className="items-top flex space-x-2 p-1">
              <Checkbox id="terms1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {e.name}
                </label>
              </div>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <span>Availibility</span>
        </AccordionTrigger>
        <AccordionContent>
        <RadioGroup defaultValue="option-0">
          {availablity.map((e, i) => (
            <div  key={i} className="items-top flex space-x-2 p-1">
              <RadioGroupItem value={`option-${i}`}  id={`option-${i}`} />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {e.name}
                </label>
              </div>
            </div>
          ))}
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterSidebar;
