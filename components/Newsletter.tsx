import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AtSign, Mail, MailIcon } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export function Newsletter() {
  return (
    <Card className="mx-auto mt-44 w-full rounded-sm bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] px-4 py-16 text-center">
      <CardContent>
        <Image
          src="/images/gmail.svg"
          alt="Gmail Logo"
          height={100}
          width={100}
          className="mx-auto mb-8"
        />
        <CardTitle className="font-weight-700 text-3xl tracking-tight sm:text-4xl">
          Subscribe us
        </CardTitle>
        <CardDescription className="mt-2">
          Subscribe to our newsletter & stay updates
        </CardDescription>
        <div className="mx-auto mt-7 flex w-full max-w-sm flex-col items-center gap-6 bg-blue-950 md:flex-row">
          <Input
            type="email"
            className="rounded-sm bg-black p-2 text-white"
            placeholder="Enter your mail..."
          />
          <Button className="rounded-none" type="submit">
            {" "}
            <Mail /> Subscribe us
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
