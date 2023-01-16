import React from 'react';
import Header from '../../components/Header';
import Post from '../../components/Post';
import Newsletter from '../../components/Newsletter';
import { useRouter } from 'next/router'
import ReadMore from '../../components/ReadMore';
import posts from '../../data/post';
import dayjs from "dayjs";


function Tag() {

    const { query } = useRouter()

    let item = query?.tag as string

    let slug: string = item?.replaceAll("-", " ")

    function filterPosts(params: { category: string[]; }) {
        return params.category[0].toLowerCase() === slug
    }

    return (

        <>
            <Header title='hidden' tag={`${slug}`} />

            <main className='container mx-auto flex flex-col p-3'>

                {
                    posts.filter(filterPosts).map(
                        item => {

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

export default Tag;