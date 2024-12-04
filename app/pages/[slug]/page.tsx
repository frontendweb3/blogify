import React from 'react';
import Link from 'next/link';
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Asterisk, ChevronLeft } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Newsletter } from '@/components/Newsletter';

// pages 
const pages = [{ slug: "about" }]

export function generateStaticParams() {
  return pages
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {

  const slug = (await params).slug

  return { title: slug }

}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

  const slug = (await params).slug
  const getTitle = slug?.trim().replaceAll("-", " ");

  return (
    <>
      <Card className="max-w-6xl border-none bg-none shadow-none flex flex-col mx-auto mt-12">
        <CardContent>
          <div className="flex flex-row items-center text-center mb-3">
            <Button className='rounded-2xl' asChild>
              <Link href="/">
                <ChevronLeft /> Back
              </Link>
            </Button>
          </div>

          <CardTitle className="text-3xl font-extrabold lg:text-6xl capitalize">
            {getTitle}
          </CardTitle>
        </CardContent>
      </Card>

      <article className="px-6 container mx-auto max-w-6xl prose dark:prose-invert lg:prose-xl">
        <p>Cupidatat voluptate deserunt non ea exercitation sit consequat ullamco ex nostrud elit magna. Nulla id proident labore pariatur pariatur ex ut ad enim et labore.</p>
        <h2><a id="Est_do_minim_eiusmod_culpa_2"></a>Est do minim eiusmod culpa.</h2>
        <p><a href="https://google.com">Culpa laboris aliquip ea consectetur</a> mollit ea ipsum sint qui culpa laboris dolor adipisicing proident. Et officia consequat do nulla tempor cupidatat elit. Consequat proident magna dolor labore et esse aute dolor sit ea.</p>
        <p>Sint amet deserunt commodo aute consectetur Lorem qui aliqua tempor nulla. `Velit non` ea qui aliquip. Qui laborum labore excepteur duis velit velit enim enim veniam.</p>
        <blockquote>
          <p>Pariatur laboris commodo est laboris. In incididunt pariatur aliquip ut elit irure magna anim sunt. Anim labore ut sit magna ex proident dolor anim cupidatat adipisicing.</p>
        </blockquote>
        <h2><a id="5_Things_9"></a>5 Things</h2 >
        <ul>
          <li>Minim est mollit commodo ad sit quis.</li>
          <li>Tempor id magna eu veniam sint et mollit magna laboris reprehenderit Lorem proident.</li>
          <li>Laborum id sint ex magna nulla est labore non.</li>
          <li>Pariatur qui qui ex duis nulla et aute magna incididunt cupidatat commodo.</li>
          <li>Sint amet deserunt commodo aute consectetur.</li>
        </ul>
        <p>Aliquip veniam aliquip nisi non amet pariatur quis. Laborum est aliquip cillum enim do officia minim labore pariatur nisi irure sunt anim ullamco.</p>
        <h2> <a id="What_is_Lorem_Ipsum__Meaning_18"></a>What is Lorem Ipsum  Meaning ?</h2 >
        <p>Sint qui enim non Lorem aliquip nulla sint. Aute laborum tempor adipisicing officia magna fugiat sint cupidatat. Enim Lorem officia anim cillum ea tempor dolore voluptate:</p>
        <ul>
          <li><strong>Excepteur aliqua</strong> minim Lorem officia ullamco pariatur.</li>
          <li><strong>Fugiat</strong> sint pariatur tempor ullamco sit ea excepteur sint ut qui excepteur dolore anim.</li>
          <li><strong>Eiusmod</strong> id dolor sit fugiat eu eiusmod tempor proident.</li>
          <li><strong>Officia enim</strong> dolore excepteur proident incididunt et sint. Non laboris veniam nisi adipisicing magna.</li>
        </ul>
        <p>Nulla ut irure aliqua ex aliquip nisi non amet excepteur ipsum laboris voluptate elit. Aliquip proident magna Lorem amet esse laborum cillum.  Culpa aute laborum velit velit in do. Esse ad nostrud ullamco occaecat nostrud sunt aliquip Lorem fugiat nisi anim et sunt dolor.</p>
        <h2> <a id="Voluptate_tempor_28"></a>Voluptate tempor</h2 >
        <p>Nisi ad aliquip minim quis cupidatat eu minim voluptate tempor consequat irure eu. Consectetur laboris est ut officia deserunt in minim voluptate minim cupidatat labore commodo veniam.</p>
        <ul>
          <li>Commodo deserunt cupidatat</li>
          <li>Deserunt commodo est</li>
          <li>Lorem eiusmod proident</li>
          <li>Sunt sit voluptate</li>
        </ul>
        <h2> <a id="Conclusion_36"></a>Conclusion</h2>
        <p>Consectetur aliqua eu veniam consequat eu adipisicing id ullamco incididunt. Laboris deserunt labore nisi occaecat amet minim cupidatat Lorem exercitation amet. Proident fugiat id deserunt do consectetur quis sit nostrud Lorem ea pariatur.</p>
        <p> Occaecat et esse sunt dolore nisi aliquip et non do sint. Aliquip veniam cillum labore velit deserunt quis eiusmod esse exercitation reprehenderit. Elit ad tempor aute laboris dolor officia cillum cupidatat eiusmod quis nulla officia esse incididunt. Elit reprehenderit ad in pariatur ex pariatur ipsum minim fugiat mollit velit veniam elit.</p>
      </article>

      <div className="my-10 flex w-full items-center rounded-full">
        <div className="flex-1 border-b border-fd-border"></div>
        <span className=" flex flex-row text-lg font-semibold leading-8 px-8 py-3"> <Asterisk /> <Asterisk /> <Asterisk /> </span>
        <div className="flex-1 border-b border-fd-border"></div>
      </div>

      <Newsletter />

    </>
  );
}
