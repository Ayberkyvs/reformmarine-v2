import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};
export default function NotFound() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-start bg-gradient-to-b from-background to-primary-50">
        <div className="layout text-left">
          <div>
            <h1 className="mb-4 text-8xl font-semibold sm:text-9xl">404</h1>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Page not found
            </h2>
            <p className="max-w-2xl text-base text-foreground-muted sm:text-lg">
              The page you are looking for does not exist. It might have been
              removed, had its name changed, or is temporarily unavailable.
              Please check the URL and try again. If you think this is an error,
              please contact us. Thank you.
            </p>
          </div>
          <div>
            <Link href="/">
              <Button
                variant="outline"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-primary-300 px-4 py-2 text-base text-white hover:bg-primary-400 hover:text-white"
              >
                <ArrowLeft className="mr-2 size-4" />
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
