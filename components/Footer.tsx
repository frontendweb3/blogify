import Link from '@/node_modules/next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

function Footer() {
  return (
    <footer className="container my-16 flex flex-col justify-center p-6 mx-auto border-t-2 border-border" >
      <Button variant={"link"} className="text-md !mx-0 !px-0 mt-3" asChild>
        <Link className='text-center' target={"_blank"} href={"https://github.com/frontendweb3"}>
          CopyRight By @Frontend web
        </Link>
      </Button>
    </footer>
  );
}

export default Footer;
