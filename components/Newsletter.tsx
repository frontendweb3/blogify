import React from 'react'

export function Newsletter() {
  return (
    <section>
      <div className="my-16 mx-auto bg-secondary w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="bg-red-300 grid justify-items-center gap-4 p-8 sm:p-10 lg:grid-cols-[1.5fr_1fr] lg:justify-items-start lg:p-16">
          <div className="text-center md:text-start">
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">
                 Get the latest Article Update in your inbox.
            </h2>
            <p className="max-w-md text-sm sm:test-base">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="max-w-md sm:max-w-full w-full">
            <form
              name="email-form"
              method="get"
              className="relative mx-auto mb-4 flex w-full flex-col items-center justify-center sm:flex-row"
            >
              <input
                type="email"
                className="h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-foreground"
                placeholder="Enter your email"
              />
              <input
                type="submit"
                value="Notify me"
                className="relative right-0 w-full cursor-pointer rounded-md bg-black px-3 py-2 text-sm font-semibold text-white top-2 sm:top-auto sm:absolute sm:right-2 sm:w-24 lg:w-28 lg:text-base"
              />
            </form>
            <p className="text-sm sm:text-base">
              Join a community of over <span>5000+ Webflow Developers</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

