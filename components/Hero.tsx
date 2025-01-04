export function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="relative">
                <div className="md:-space-x-26 container relative flex flex-col items-start md:flex-row md:items-center">
                    <div className="z-20 shrink-0 pt-32 md:w-1/2 md:pb-32">
                        <div className="flex flex-col items-start text-left">
                            <div className="max-w-lg">
                                <h1 className="my-6 text-pretty text-6xl font-bold lg:text-6xl">
                                    Welcome to Blogify Theme
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-16 pb-8 pt-12 md:py-32">
                            <p className="my-6 text-pretty text-xl font-bold lg:text-2xl">
                                Blogify is a modern nextjs, typescript, and
                                tailwind css based theme featuring captivating
                                page transitions, a unique custom cursor, and a
                                sleek scrollbar, all enhanced with smooth
                                scrolling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
