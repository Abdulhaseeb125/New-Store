import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryBar() {

    const categories = [{
        id: 1,
        image_url: "/Images/icons/cosmetics.png",
        name: "Cosmetics"
    }, {
        id: 2,
        image_url: "/Images/icons/jewelry.png",
        name: "Jewelry"
    }]

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-100 dark:bg-gray-800">
            <div className="container">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
                    <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Shop by Category</h2>
                        <p className="text-gray-500 md:text-xl dark:text-gray-400">
                            Discover products tailored to your specific needs.
                        </p>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {categories.map(c =>
                        <Link key={c.id}
                            className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                            href="#"
                        >
                            <Image
                                alt="Category 1"
                                className="h-12 w-12 object-contain"
                                height={64}
                                src={c.image_url}
                                style={{
                                    aspectRatio: "64/64",
                                    objectFit: "cover",
                                }}
                                width={64}
                            />
                            <h3 className="text-sm font-medium group-hover:underline">{c.name}</h3>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}
