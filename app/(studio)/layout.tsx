import type { Metadata } from "next";
import "easymde/dist/easymde.min.css";
import Logo from "../../components/Logo";

export const metadata: Metadata = {
  title: "Studio",
  description: "Studio page for Reform Marine",
  robots: "noindex, nofollow",
};

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-fit w-full border-b border-gray-800 bg-transparent p-2">
        <Logo className="h-[50px] w-[90px] text-white" />
      </div>
      <div>{children}</div>
    </>
  );
}
