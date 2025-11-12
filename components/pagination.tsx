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

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams({
      ...searchParams,
      page: String(page),
    });
    return `${baseUrl}?${params.toString()}`;
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, curentPage - delta);
      i <= Math.min(totalPages - 1, curentPage + delta);
      i++
    ) {
      range.push(i);

      // If curentPage = 6, totalPages = 10, delta = 2 -> range = [ 4, 5, 6, 7, 8 ].
    }

    if (curentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (curentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(1);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <nav className="flex flex-wrap items-center justify-center gap-1">
      <Link
        href={getPageUrl(curentPage - 1)}
        className={`flex gap-1 items-center px-3 py-2 text-sm font-medium rounded-lg border ${
          curentPage <= 1
            ? 'text-gray-700/50 cursor-not-allowed bg-gray-100 border-transparent'
            : 'text-gray-700 bg-white hover:bg-gray-100 border-gray-300'
        }`}
        aria-disabled={curentPage <= 1}
      >
        <ChevronLeft className="size-4" /> Previous
      </Link>

      {visiblePages.map((page, key) => {
        if (page === '...') {
          return (
            <span
              key={key}
              className="px-3 py-2 text-sm rounded-lg text-center border border-transparent text-gray-500"
            >
              ...
            </span>
          );
        }

        const pageNumber = page as number;
        const isCurrentPage = pageNumber === curentPage;

        return (
          <Link
            href={getPageUrl(pageNumber)}
            key={key}
            className={`px-3 py-2 text-sm font-medium rounded-lg min-w-9.5 text-center border ${
              isCurrentPage
                ? 'bg-purple-600 text-white border-transparent'
                : 'text-gray-700 bg-white hover:bg-gray-100 border-gray-300'
            }`}
          >
            {pageNumber}
          </Link>
        );
      })}

      <Link
        href={getPageUrl(curentPage + 1)}
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
