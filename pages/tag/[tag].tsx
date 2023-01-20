import React from 'react';
import Header from '../../components/Header';
import Post from '../../components/Post';
import Newsletter from '../../components/Newsletter';
import ReadMore from '../../components/ReadMore';
import data from '../../data/post';
import dayjs from "dayjs";

function Tag({posts , tag }:tagPageProps ) {

    return (

        <>
            <Header title='hidden' tag={`${tag}`} />

            <main className='container mx-auto flex flex-col p-3'>

                {
                    posts.map(
                        (item:itemProps) => {

                            let GetDate = dayjs(item.date).format("DD-MMM , YYYY")

                            return <Post key={item.id}
                                tag={item.tags[0]}
                                date={GetDate.toString()}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                            />
                        }
                    )
                }

                <ReadMore />

            </main>

            <Newsletter />
        </>
    );
}

interface tagPageProps {
  tag:string;
  posts:{
      map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
      filter(arg0: (_: any, i: any) => boolean): unknown;
      date: string;
      title: string;
      description: string;
      image:string;
      tags:string[];
      author:string;
      category:string[];
      id:string;
  }
}


interface itemProps {
  date: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  author: string;
  category: string[];
  id: string;
}

export async function getStaticPaths() {
    
    const paths = data.map((item) => ({
        params: { tag: item.category[0].toLowerCase().replaceAll(" ", "-") },
      }))
    
      
    return {
      paths: paths,
      fallback: false,
    }
}
  
export async function getStaticProps(context: { params: { tag: string; }; }) {
  
    const { params: { tag } } = context
  
    const posts = data.filter((item) => item.category[0].toLowerCase().replaceAll(" ", "-") === tag)
  
    return {
      props: { posts ,tag},
    }
}
export default Tag;