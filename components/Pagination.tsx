import React from 'react';
import {
  Pagination as PaginationBox,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Label } from "@/components/ui/label"

export function Pagination() {

  return (
    <div className="my-8 grid gap-5 grid-cols-1 sm:grid-cols-2 items-center mx-auto">

      <Label className="text-sm text-center"> Showing 1 to 10 of 100 Entries </Label>

      <PaginationBox>
        <PaginationContent>

          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>

        </PaginationContent>
      </PaginationBox>

    </div>
  );
}
