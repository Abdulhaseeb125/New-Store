import Link from "next/link"
import "../../../public/css/root.css"
import CategoryBar from "@/components/user/root/categoryBar"
import Products from "@/components/user/root/products"
import Image from "next/image"


export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className=" relative overflow-hidden">

        <div className="  container px-4 md:px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold tracking-tight">Welcome to Acme Ecommerce</h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-md ">
              Discover a world of quality products curated just for you. Shop now and elevate your lifestyle.
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Shop Now
            </Link>
            <Image
              src={'/Images/backgrounds/heroBg.jpg'}
              width={1000}
              height={1000}
              alt=""
              className="absolute -z-50 object-cover overflow-hidden w-full "
            />
          </div>
        </div>
      </section>



      <Products />
      <CategoryBar />
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20 lg:py-28">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center gap-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Elevate Your Lifestyle</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md">
              Discover the perfect products to enhance your daily life. Shop our curated collection now.
            </p>
          </div>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Explore Collection
          </Link>
        </div>
      </section>
    </div>
  )
}