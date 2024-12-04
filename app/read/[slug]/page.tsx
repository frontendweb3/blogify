import { ReadHeader } from '@/components/PostHeader';
import { Post } from '@/types';
import { Newsletter } from '@/components/Newsletter';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { BlogCard } from '@/components/Card';
import { GetAllPosts, GetPost, RelatedPosts } from '@/data';
import { Asterisk } from 'lucide-react';

export const generateStaticParams = async () => GetAllPosts().map((post) => ({ slug: post.slug }))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {

  const slug = (await params).slug

  const post = GetPost(slug)

  if (!post) {
    notFound()
  }

  return { title: post.title }

}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const post = GetPost(slug)

  if (post === undefined) {
    notFound()
  }

  const getRelatedPosts: Post[] = RelatedPosts(post.tags[0], slug)
  return (
    <>
      {post && <ReadHeader item={post} />}

      {post?.image && <div className="my-10  relative aspect-[4/3] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          className="object-fill"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
      }
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
      {
        getRelatedPosts.length !== 0 && <div className="mt-28 mx-auto container">
          <h1 className="text-3xl font-extrabold lg:text-6xl"> Related Posts </h1>
          {
            getRelatedPosts?.map(
              (item) => {
                return <BlogCard key={item.id} item={item} />
              }
            )
          }
        </div>
      }
    </>
  );
}

