import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";

export const metadata: Metadata = {
	title: "404",
};
export default function NotFound() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 ">
			<div className="text-center">
				<div>
					<h1 className="text-9xl font-semibold text-primary-700 ">404</h1>
					<p className="mt-4 text-xl text-gray-600">Page not found</p>
				</div>
				<div>
					<Link href="/">
						<Button
							variant="outline"
							className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-base rounded-md text-black bg-neutral-200 hover:bg-neutral-300 hover:text-black"
						>
							<ArrowLeft className="mr-2 h-4 w-4" />
							Go Home
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
