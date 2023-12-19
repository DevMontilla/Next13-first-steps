import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Generated with love by Daniel Montilla",
};

export default function AboutePage() {
  return (
    <>
      <span className="text-5xl">About Page</span>
    </>
  );
}
