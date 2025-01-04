import Link from '@/node_modules/next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

function Footer() {
    return (
        <footer className="container mx-auto my-16 flex flex-col justify-center border-t-2 border-border p-6">
            <Button
                variant={'link'}
                className="text-md !mx-0 mt-3 !px-0"
                asChild
            >
                <Link
                    className="text-center"
                    target={'_blank'}
                    href={'https://github.com/frontendweb3'}
                >
                    CopyRight By @Frontend web
                </Link>
            </Button>
        </footer>
    )
}

export default Footer
