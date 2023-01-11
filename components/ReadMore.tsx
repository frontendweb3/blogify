import React from 'react';

function ReadMore(props:ReadMoreComponent) {
    return (
        <div className="px-5 mx-auto py-2.5 w-[150px] my-14 gap-2.5 inline-flex flex-col justify-center items-center rounded-lg text-center font-medium bg-[rgba(235,242,254,1)] text-[rgba(35,46,82,1)]">
            
            <a href='#' className="text-sm m-0">
                {props.title}
            </a>
            
        </div>
    );
}

ReadMore.defaultProps = {
    title:"More articles"
  };
  
  interface ReadMoreComponent {
    title?: string;
  }
export default ReadMore;