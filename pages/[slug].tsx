import Post from "../components/Post";
import BLOCKQUOTE from "../components/Blockquote";
import PostHeader from "../components/PostHeader";
import Image from 'next/image';


// bg-[rgba(35,46,82,1)]

// FaAngleLeft

// https://source.unsplash.com/random/100x100



export default function ReadingPage(props: ReadingPageProps) {

    return (
        <>
            <PostHeader
                title="10 Hilarious Cartoons That Depict Real-Life Problems of Programmers"
                tag="Tutorials"
                date="August 13, 2021"
                authorName="Rajdeep Singh"
            />

            <div className="my-10 mx-auto">
                <Image
                    height="250" width="500"
                    src="https://source.unsplash.com/random/500x150"
                    alt="hello"
                    className="mx-auto h-[72%] w-[1424px]"
                />
            </div>

            <div className="my-12 prose prose-stone lg:prose-lg mx-auto">

                <p className="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                <p className="font-light text-gray-500 dark:text-gray-400">
                    Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>


                <p className="mb-3 font-light text-gray-500 dark:text-gray-400 ">
                    Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.

                    Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.

                    The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread?
                </p>

                <div className="py-3.5 text-left font-normal rounded-bl-[10px] rounded-br-[10px] bg-[rgba(235,242,254,1)] text-[rgba(35,46,82,1)]">
                    <img 
                        height="324px"
                        width="1424px" 
                        className="cover"
                        alt="Alt for images"
                        src="https://source.unsplash.com/random/100x100"
                    />
                    <p className="text-xs leading-normal text-center uppercase">
                        Image caption or credit
                    </p>
                </div>

                <p className="font-light text-gray-500 dark:text-gray-400" >
                    The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.
                    Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.
                </p>

                <BLOCKQUOTE />

                <p className="font-light text-gray-500 dark:text-gray-400">
                    Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.
                    The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration. Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.esign comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.
                </p>
            </div>
          
            <div className="container my-20 flex flex-col justify-center mx-auto">
                <h2 className="text-3xl font-light  text-gray-500 dark:text-gray-400">
                    Other interesting posts
                </h2>

                <Post
                    tag="Tutorials"
                    date="AUGust 13, 2021"
                    title="10 Hilarious Cartoons That Depict Real-Life Problems of Programmers"
                    description="Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks."
                    image="https://cdn.pixabay.com/photo/2022/12/16/15/53/island-7660016_960_720.jpg"
                />


            </div>


        </>
    );


}

ReadingPage.defaultProps = {};

interface ReadingPageProps {}
