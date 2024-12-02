import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import Link from '@/node_modules/next/link'
import React from 'react'

export default function Notfound() {
  return (
    <Card className="border-none shadow-none mt-16">
      <CardContent className="mx-auto flex w-full flex-col items-center text-center">
        <CardTitle className="my-4 text-6xl font-bold md:text-7xl">404 Error</CardTitle>
        <CardDescription className="mx-auto mb-5 text-lg md:mb-6 lg:mb-8"> Commodo, consequat turpis placerat ultrices sapien, tortor tincidunt. Sit quisque est metus auctor sed turpis lectus quis. </CardDescription>
        <Button className="mt-4 rounded-2xl" asChild>
          <Link href="/"> Back Home </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

