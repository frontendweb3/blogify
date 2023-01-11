
export default function Blockquote(props: BlockquoteProps) {
    return (
      <div className="gap-2.5 p-4 border-t-4 border-blue-500  rounded-lg text-left font-medium drop-shadow-lg bg-[rgba(235,242,254,1)] text-[rgba(35,46,82,1)]">
        
        <p className="p-2 text-[22px]">
          Design comps, layouts, wireframes will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.
        </p>
        
      </div>
    );
}
  
Blockquote.defaultProps = {};
  
interface BlockquoteProps {}