import Link from "next/link";

interface Footer2Props {
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

export function Footer({
  copyright = "© 2025 Blogify. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "/pages/term-and-conditions" },
    { text: "Privacy Policy", url: "/pages/privacy-policy" },
  ],
}: Footer2Props) {
  return (
    <footer className="container">
      <div className="my-14 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm font-medium sm:flex-row">
        <p>{copyright}</p>
        <ul className="flex gap-4">
          {bottomLinks.map((link, linkIdx) => (
            <li key={linkIdx} className="underline hover:text-primary">
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
