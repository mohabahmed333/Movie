import React, { useCallback } from "react";
import { Search } from "lucide-react";
import { debounce } from "../../../helpers/debounce";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  const navigate = useNavigate();
  const changeSearch = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === "") return;
      onSearchChange(e.target.value);
      navigate(`/search/${e.target.value}`);
    }, 500),
    [],
  );
  return (
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        defaultValue={searchTerm}
        onChange={changeSearch}
        placeholder="Search for movies..."
        className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}
