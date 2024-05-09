import React from 'react'
import { CardContent, Card, CardHeader, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { CiShoppingCart } from 'react-icons/ci'
import { TbShoppingCartPlus } from 'react-icons/tb'
import { Button } from '@/components/ui/button'


export default function Products() {

    const products = [
        {
            id: 1,
            image_url: "/Images/icons/cosmetics.png",
            title: "Best Cosmetics product in low prices",
            category: "Cosmetics",
            price: 200
        }, {
            id: 2,
            image_url: "/Images/icons/jewelry.png",
            title: "Best Jewelry product in low price",
            category: "Jewelry",
            price: 300
        },
        {
            id: 5,
            image_url: "/Images/icons/cosmetics.png",
            title: "Best Cosmetics product in low prices",
            category: "Cosmetics",
            price: 200
        }, {
            id: 6,
            image_url: "/Images/icons/jewelry.png",
            title: "Best Jewelry product in low price",
            category: "Jewelry",
            price: 300
        },
        {
            id: 3,
            image_url: "/Images/icons/cosmetics.png",
            title: "Best Cosmetics product in low prices",
            category: "Cosmetics",
            price: 200
        }, {
            id: 4,
            image_url: "/Images/icons/jewelry.png",
            title: "Best Jewelry product in low price",
            category: "Jewelry",
            price: 300
        },
    ]

    return (
        <section className="py-12 md:py-20 lg:py-28">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-between gap-8 mb-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Products</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-md">
                            Discover our curated selection of the best products for your lifestyle.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6  gap-3 lg:gap-6">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            className="hover:shadow-md dark:hover:shadow-md dark:hover:shadow-neutral-800 transition-all m-auto max-w-full rounded border dark:border-neutral-700"
                        >
                            <CardHeader className="">
                                <Image
                                    src={product.image_url}
                                    width={1000}
                                    height={1000}
                                    alt=""
                                    className="w-full h-full rounded aspect-[6/5]"
                                />
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{product.category}</CardDescription>
                                <CardTitle className="text-pretty text-sm line-clamp-2">
                                    <p>{product.title}</p>
                                </CardTitle>
                            </CardContent>
                            <CardFooter className="font-semibold  flex justify-between items-center">
                                Rs. {product.price}
                                <Button size={'icon'} variant={'ghost'} className=" rounded-full   font-semibold py-2 px-3 focus:outline-none">
                                    <TbShoppingCartPlus size={30} />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    )
}
