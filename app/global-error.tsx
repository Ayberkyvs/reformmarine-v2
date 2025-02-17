"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		Sentry.captureException(error);
	}, [error]);

	return (
		<html>
			<body>
				<div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
					<div className="text-center">
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<h1 className="text-6xl font-semibold text-primary-700 dark:text-gray-300">
								Hata
							</h1>
							<p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
								Bir şeyler yanlış gitti
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.5 }}
						>
							<Button
								variant="outline"
								onClick={reset}
								className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-base rounded-md text-black bg-neutral-200 hover:bg-neutral-300 hover:text-black"
							>
								<RefreshCcw className="mr-2 size-4" />
								Tekrar Dene
							</Button>
						</motion.div>
					</div>
				</div>
			</body>
		</html>
	);
}
