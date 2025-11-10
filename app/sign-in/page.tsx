import { SignIn } from '@stackframe/stack';
import { CornerDownLeft, MoveLeft } from 'lucide-react';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-purple-100 flex items-center justify-center">
      <div className="max-w-md space-y-6">
        <SignIn />
        <div className="text-center">
          <Link
            href={'/'}
            className="underline font-medium text-sm flex gap-1 items-center justify-center"
          >
            <MoveLeft size={14} />
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
