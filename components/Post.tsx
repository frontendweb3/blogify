import Link from "next/link";
import Image from 'next/image';
import dayjs from "dayjs";

export default function Post(props: PostProps) {

  let slug = props.title?.toLowerCase().replaceAll(" ", "-")

  return (
    <div
      className={`inline-flex my-24 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center  items-center mx-auto  text-[rgba(35,46,82,1)]  transition-all`}>

      <div className="gap-3 px-0 sm:px-0 md:px-0 lg:px-3  xl:px-3  2xl:px-3  flex flex-col  items-start w-6/6 sm:w-6/6 md:w-[610px] lg:w-[610px] xl:w-[610px] 2xl:w-[610px]  mx-auto">

        <div className="gap-6 flex flex-col justify-center items-start">

          <div className="flex items-start text-center">

            <div className={`rounded-l-md px-3 pt-2 pb-2.5 gap-2.5 flex justify-center items-center font-semibold bg-[rgba(235,242,254,1)] transition-all`}>

              <p className="uppercase m-0 text-[13px] leading-[1.2]">
                {props.tag}
              </p>

            </div>

            <div className="rounded-r-md px-3 pt-2 pb-2.5 bg-white gap-2.5 flex justify-center items-center font-medium ">
              <time dateTime={props.date.toString()} className="uppercase m-0 text-[13px] leading-[1.2]">
                {dayjs(props.date).format("DD MMMM , YYYY")}
              </time>
            </div>
          </div>

          <Link href={`/${slug}`}>
            <p className="font-bold text-left m-0 text-[28px] leading-[1.3]">
              {props.title}
            </p>
          </Link>

        </div>
        <Link href={`/${slug}`}><p className="text-lg font-normal leading-normal text-left m-0"> {props.description}</p> </Link>
      </div>

      <Image src={props.image} width={300} height={210} alt={props.title}
        className={`rounded-lg bg-cover bg-no-repeat bg-center w-full sm:w-full md:w-full  lg:w-[300px] xl:w-[300px] 2xl:w-[300px] h-[210px] transition-all`}
      />

    </div>


  );
}
interface PostProps {
  tag: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

