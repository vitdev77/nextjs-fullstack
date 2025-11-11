import { LoaderIcon } from 'lucide-react';

export default function Loading() {
  // Stack uses React Suspense, which will render this page while user data is being frtched.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <div className="flex items-center space-x-1">
          <LoaderIcon className="size-4 animate-spin" />
          <span>Loading page...</span>
        </div>
      </div>
    </>
  );
}
