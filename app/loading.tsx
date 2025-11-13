'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, Loader, Package, Plus, Settings } from 'lucide-react';

// Skeleton component for loading states
function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
  );
}

// Sidebar component for loading state
function LoadingSidebar() {
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'Inventory', href: '/inventory', icon: Package },
    { name: 'Add Product', href: '/add-product', icon: Plus },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="fixed left-0 top-0 bg-gray-900 text-white w-64 min-h-screen p-6 z-10">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <BarChart3 className="size-7" />
          <span className="text-lg font-semibold">Inventory App</span>
        </div>
      </div>

      <nav className="space-y-1">
        <div className="text-xs font-semibold text-gray-400 uppercase">
          {/* <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3"> */}
          Inventory
        </div>
        {navigation.map((item) => {
          const IconComponent = item.icon;
          const pathname = usePathname();
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center space-x-3 py-2 px-3 rounded-lg cursor-not-allowed ${
                  isActive
                    ? 'bg-purple-100 text-gray-800'
                    : 'hover:bg-gray-800 text-gray-300'
                }`}
            >
              <IconComponent className="size-5" />
              <span className="text-sm">{item.name}</span>
              {isActive && (
                <Loader className="size-4 animate-spin text-gray-400 ml-auto" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="absolute left-0 bottom-0 right-0 p-6 border-t border-gray-700">
        <div className="flex items-center gap-2 h-11">
          <Skeleton className="size-8.5 rounded-full bg-gray-800" />
          <div className="flex flex-col space-y-1">
            <Skeleton className="h-5 w-16 bg-gray-800" />
            <Skeleton className="h-4 w-34 bg-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Main content skeleton
function MainContentSkeleton({
  showSidebar = true,
}: {
  showSidebar?: boolean;
}) {
  return (
    <main className={showSidebar ? 'ml-64 p-6' : 'p-6'}>
      {/* Header skeleton */}
      <div className="mb-8">
        <Skeleton className="h-8 w-32 mb-1" />
        <Skeleton className="h-4 w-64" />
      </div>

      {/* Key Metrics skeleton */}
      <div className="grid grid-col-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-7 w-24" />
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <Skeleton className="h-8 w-30 mx-auto mb-1" />
                <Skeleton className="h-5 w-20 mx-auto mb-1" />
                <div className="flex items-center justify-center gap-1">
                  <Skeleton className="h-4 w-10" />
                  <Skeleton className="size-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-7 w-40" />
          </div>
          <Skeleton className="h-48 w-full" />
        </div>
      </div>

      {/* Bottom Row skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Stock levels skeleton */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-7 w-24" />
          </div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
              >
                <div className="flex items-center space-x-3">
                  <Skeleton className="size-3 rounded-full" />
                  <Skeleton className="h-5 w-24" />
                </div>
                <Skeleton className="h-5 w-12" />
              </div>
            ))}
          </div>
        </div>

        {/* Efficienty skeleton */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-7 w-20" />
          </div>
          <div className="flex items-center justify-center">
            <Skeleton className="size-48 rounded-full" />
          </div>
          <div className="mt-6 space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Skeleton className="size-3 rounded-full" />
                  <Skeleton className="h-5 w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Loading() {
  const pathname = usePathname();

  // Don't show sidebar on public routes
  const showSidebar = !['/', '/sign-in', '/sign-up'].includes(pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      {showSidebar && <LoadingSidebar />}
      <MainContentSkeleton showSidebar={showSidebar} />
    </div>
  );
}
