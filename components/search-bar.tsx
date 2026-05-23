"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/dist/client/components/navigation";
import { cn } from "@/lib/utils";

export function SearchBar() {
  const [query, setQuery] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/list?name=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative flex items-center">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none z-10" />
      <Input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "transition-all duration-300 ease-in-out pl-9 pr-4 rounded-md bg-background",
          isFocused ? "w-64" : "w-32"
        )}
      />
    </form>
  );
}
