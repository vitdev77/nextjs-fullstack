import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface PaginationProps {
  curentPage: number;
  totalPages: number;
  baseUrl: string;
  searchParams: Record<string, string>;
}

export default function Pagination({
  curentPage,
  totalPages,
  baseUrl,
  searchParams,
}: PaginationProps) {
  if (totalPages <= 1) return null;
  return (
    <nav className="flex items-center justify-center gap-1">
      <Link
        href={''}
        className={`flex gap-1 items-center px-3 py-2 text-sm font-medium rounded-lg border ${
          curentPage <= 1
            ? 'text-gray-400 cursor-not-allowed bg-gray-100 border-transparent'
            : 'text-gray-700 bg-white hover:bg-gray-100 border-gray-300'
        }`}
        aria-disabled={curentPage <= 1}
      >
        <ChevronLeft className="size-4" /> Previous
      </Link>
      <Link
        href={''}
        className={`flex gap-1 items-center px-3 py-2 text-sm font-medium rounded-lg border ${
          curentPage >= totalPages
            ? 'text-gray-400 cursor-not-allowed bg-gray-100 border-transparent'
            : 'text-gray-700 bg-white hover:bg-gray-100 border-gray-300'
        }`}
        aria-disabled={curentPage >= totalPages}
      >
        Next <ChevronRight className="size-4" />
      </Link>
    </nav>
  );
}
