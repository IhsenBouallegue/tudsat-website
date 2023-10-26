import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { CheckIcon, Expand } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { UseFormReturn } from "react-hook-form";
import { formSchema } from "./membership-form";

const studies = [
  { label: "Computer Science", value: "Computer Science" },
  { label: "Mechanical Engineering", value: "Mechanical Engineering" },
  { label: "Physics", value: "Physics" },
  { label: "Mathematics", value: "Mathematics" },
  { label: "Mechatronics", value: "Mechatronics" },
  { label: "Architecture", value: "Architecture" },
  { label: "Civil Engineering", value: "Civil Engineering" },
  { label: "High School", value: "High School" },
  { label: "Working", value: "Working" },
  { label: "Other", value: "other" },
] as const;

export default function StudiesField({
  form,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) {
  return (
    <FormField
      control={form.control}
      name="studies"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Studies</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-[200px] justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? studies.find((study) => study.value === field.value)
                        ?.label
                    : "Select studies"}
                  <Expand className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search studies..." />
                <CommandEmpty>No studies found.</CommandEmpty>
                <CommandGroup>
                  {studies.map((study) => (
                    <CommandItem
                      value={study.label}
                      key={study.value}
                      onSelect={() => {
                        form.setValue("studies", study.value);
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          study.value === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {study.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
