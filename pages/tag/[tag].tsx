import React from 'react';
import Header from '../../components/Header';
import Post from '../../components/Post';
import Newsletter from '../../components/Newsletter';
import { useRouter } from 'next/router'
import ReadMore from '../../components/ReadMore';

// sm: md: lg: xl: 2xl:


function Tag() {


    const {query} = useRouter<{query:{tag:string}}>() 


    let item:string = query?.tag?.replace("-"," ")


    return (

        <>
            <Header tag={`${item}`} />

            <main className='container mx-auto flex flex-col p-3'>

                <p className="text-4xl inline capitalize font-bold text-left ml-0  sm:ml-0 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-24  my-16 leading-[normal] text-[rgba(35,46,82,1)]">
                    {item}
                </p>

                <Post
                    tag="Tutorials"
                    date="August 13, 2021"
                    title="10 Hilarious Cartoons That Depict Real-Life Problems of Programmers"
                    description="Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks."
                    image="https://cdn.pixabay.com/photo/2022/12/16/15/53/island-7660016_960_720.jpg"
                />

                <Post
                    tag="Tutorials"
                    date="August 13, 2021"
                    title="10 Hilarious Cartoons That Depict Real-Life Problems of Programmers"
                    description="Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks."
                    image="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/bd9f13ebb322ac0fa8c3d6174afbcd517a7da2c5.webp"
                />

                <ReadMore />

            </main>

            <Newsletter />
        </>
    );
}

export default Tag;