import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Link from "@/node_modules/next/link";
import { Home } from "lucide-react";
import React from "react";

export default function Notfound() {
  return (
    <Card className="mx-auto mt-16 max-w-7xl border-none shadow-none">
      <CardContent className="mx-auto flex w-full flex-col items-center py-12 text-center">
        <CardTitle className="my-4 text-6xl font-bold md:text-[140px]">
          404
        </CardTitle>
        <CardDescription className="mx-auto mb-5 text-xl md:mb-6 lg:mb-8">
          {" "}
          Something has gone wrong; please return to the Home page.
        </CardDescription>
        <Button className="mt-4 rounded-none" size={"lg"} asChild>
          <Link href="/">
            {" "}
            <Home /> Back to Home{" "}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
