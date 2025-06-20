import { format } from "date-fns";
import { ChevronLeft, FileText, Home, Lightbulb, Tag } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GetAllPosts, GetPost, RelatedPosts } from "@/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import dayjs from "dayjs";

export const generateStaticParams = async () =>
  GetAllPosts().map((post) => ({ slug: post.slug }));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = GetPost(slug);

  if (!post) {
    notFound();
  }

  return { title: post.title };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = GetPost(slug);

  let GetDate = dayjs(post?.date).format("DD MMM, YYYY");
  if (post === undefined) {
    notFound();
  }
  return (
    <section className="mx-auto flex flex-col">
      <div className="container mt-24">
        <Breadcrumb className="mb-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="flex flex-row items-center gap-x-3 capitalize"
                href="/"
              >
                <Home size={12} />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="flex items-center gap-x-2">
                {" "}
                <FileText size={12} /> Blog
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:inline-flex" />
            <BreadcrumbItem className="hidden md:inline-flex">
              <BreadcrumbPage className="capitalize">
                {post.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center gap-4 text-center">
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance md:text-6xl">
            {post.title}
          </h1>

          <h3 className="scroll-m-20 text-lg font-light tracking-tight md:text-xl">
            {post.description}
          </h3>
          <div className="flex items-center gap-3 text-sm md:text-base">
            <Avatar className="h-8 w-8 border">
              <AvatarImage src={"/images/user.png"} />
              <AvatarFallback>{post.author}</AvatarFallback>
            </Avatar>
            <span className="font-medium">{post.author}</span>
            <time title={post.date} className="mx-1">
              on {GetDate}
            </time>
            <Button variant="link" className="px-0 font-bold" asChild>
              <Link
                className="capitalize"
                href={`/tag/${post.tags[0].trim().toLowerCase().replaceAll(" ", "-")}`}
              >
                <Tag size={12} /> {post.tags[0]}
              </Link>
            </Button>
          </div>
          <img
            src={post.image}
            alt="placeholder"
            className="mt-4 mb-8 aspect-video w-full rounded-lg border object-cover"
          />
        </div>
      </div>
      <div className="container">
        <article className="mx-auto prose max-w-3xl px-6 dark:prose-invert">
          <p>
            Cupidatat voluptate deserunt non ea exercitation sit consequat
            ullamco ex nostrud elit magna. Nulla id proident labore pariatur
            pariatur ex ut ad enim et labore.
          </p>
          <h2>
            <a id="Est_do_minim_eiusmod_culpa_2"></a>Est do minim eiusmod culpa.
          </h2>
          <p>
            <a href="https://google.com">
              Culpa laboris aliquip ea consectetur
            </a>{" "}
            mollit ea ipsum sint qui culpa laboris dolor adipisicing proident.
            Et officia consequat do nulla tempor cupidatat elit. Consequat
            proident magna dolor labore et esse aute dolor sit ea.
          </p>
          <p>
            Sint amet deserunt commodo aute consectetur Lorem qui aliqua tempor
            nulla. `Velit non` ea qui aliquip. Qui laborum labore excepteur duis
            velit velit enim enim veniam.
          </p>
          <blockquote>
            <p>
              Pariatur laboris commodo est laboris. In incididunt pariatur
              aliquip ut elit irure magna anim sunt. Anim labore ut sit magna ex
              proident dolor anim cupidatat adipisicing.
            </p>
          </blockquote>
          <h2>
            <a id="5_Things_9"></a>5 Things
          </h2>
          <ul>
            <li>Minim est mollit commodo ad sit quis.</li>
            <li>
              Tempor id magna eu veniam sint et mollit magna laboris
              reprehenderit Lorem proident.
            </li>
            <li>Laborum id sint ex magna nulla est labore non.</li>
            <li>
              Pariatur qui qui ex duis nulla et aute magna incididunt cupidatat
              commodo.
            </li>
            <li>Sint amet deserunt commodo aute consectetur.</li>
          </ul>
          <p>
            Aliquip veniam aliquip nisi non amet pariatur quis. Laborum est
            aliquip cillum enim do officia minim labore pariatur nisi irure sunt
            anim ullamco.
          </p>
          <h2>
            {" "}
            <a id="What_is_Lorem_Ipsum__Meaning_18"></a>What is Lorem Ipsum
            Meaning ?
          </h2>
          <p>
            Sint qui enim non Lorem aliquip nulla sint. Aute laborum tempor
            adipisicing officia magna fugiat sint cupidatat. Enim Lorem officia
            anim cillum ea tempor dolore voluptate:
          </p>
          <ul>
            <li>
              <strong>Excepteur aliqua</strong> minim Lorem officia ullamco
              pariatur.
            </li>
            <li>
              <strong>Fugiat</strong> sint pariatur tempor ullamco sit ea
              excepteur sint ut qui excepteur dolore anim.
            </li>
            <li>
              <strong>Eiusmod</strong> id dolor sit fugiat eu eiusmod tempor
              proident.
            </li>
            <li>
              <strong>Officia enim</strong> dolore excepteur proident incididunt
              et sint. Non laboris veniam nisi adipisicing magna.
            </li>
          </ul>
          <p>
            Nulla ut irure aliqua ex aliquip nisi non amet excepteur ipsum
            laboris voluptate elit. Aliquip proident magna Lorem amet esse
            laborum cillum. Culpa aute laborum velit velit in do. Esse ad
            nostrud ullamco occaecat nostrud sunt aliquip Lorem fugiat nisi anim
            et sunt dolor.
          </p>
          <h2>
            {" "}
            <a id="Voluptate_tempor_28"></a>Voluptate tempor
          </h2>
          <p>
            Nisi ad aliquip minim quis cupidatat eu minim voluptate tempor
            consequat irure eu. Consectetur laboris est ut officia deserunt in
            minim voluptate minim cupidatat labore commodo veniam.
          </p>
          <ul>
            <li>Commodo deserunt cupidatat</li>
            <li>Deserunt commodo est</li>
            <li>Lorem eiusmod proident</li>
            <li>Sunt sit voluptate</li>
          </ul>
          <h2>
            {" "}
            <a id="Conclusion_36"></a>Conclusion
          </h2>
          <p>
            Consectetur aliqua eu veniam consequat eu adipisicing id ullamco
            incididunt. Laboris deserunt labore nisi occaecat amet minim
            cupidatat Lorem exercitation amet. Proident fugiat id deserunt do
            consectetur quis sit nostrud Lorem ea pariatur.
          </p>
          <p>
            {" "}
            Occaecat et esse sunt dolore nisi aliquip et non do sint. Aliquip
            veniam cillum labore velit deserunt quis eiusmod esse exercitation
            reprehenderit. Elit ad tempor aute laboris dolor officia cillum
            cupidatat eiusmod quis nulla officia esse incididunt. Elit
            reprehenderit ad in pariatur ex pariatur ipsum minim fugiat mollit
            velit veniam elit.
          </p>
        </article>
      </div>
    </section>
  );
}
