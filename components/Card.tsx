
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import dayjs from "dayjs"
import { Post } from "@/types"
import Link from "@/node_modules/next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react';

export function BlogCard({ item }: { item: Post }) {
  let GetDate = dayjs(item.date).format("DD MMM, YYYY")
  let slug = item.title?.toLowerCase().replaceAll(" ", "-")

  return (
    <Card className="w-full mx-auto my-8 max-w-7xl overflow-hidden border-border">
      <CardContent className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="order-2 lg:order-1 space-y-4">
          <div className="mt-4 flex items-center gap-3 mb-4">
            <Badge className="rounded">
              {item.category[0]}
            </Badge>
            <span className="text-sm text-muted-foreground">{GetDate}</span>
          </div>
          <CardTitle className="text-2xl lg:text-3xl font-bold leading-tight">
            {item.title}
          </CardTitle>
          <CardDescription className="text-md lg:text-xl font-medium text-card-foreground/90">
            {item.description}
          </CardDescription>
          <Button variant="link" className="text-md !mx-0 !px-0 mt-3" asChild>
            <Link href={`/read/${slug}`}><ChevronRight /> Read More </Link>
          </Button>

        </div>

        <div className="order-1 lg:order-2 relative aspect-[6/5] md:aspect-[6/3] overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={item.title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

      </CardContent>
    </Card>
  )
}

