/**
 * v0 by Vercel.
 * @see https://v0.dev/t/APPwOHprCFM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 * 
 */
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioItem } from "../components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import Footer from '../components/Footer'

export default function Component() {
  return (
    <>

    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold text-primary" prefetch={false}>
            Myntra
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-600 hover:text-primary" prefetch={false}>
              Women
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary" prefetch={false}>
              Men
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary" prefetch={false}>
              Kids
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary" prefetch={false}>
              Home & Living
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary" prefetch={false}>
              Beauty
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <SearchIcon className="w-5 h-5 mr-2" />
              Search
            </Button>
            <Button variant="outline" size="sm">
              <UserIcon className="w-5 h-5 mr-2" />
              Account
            </Button>
            <Button variant="outline" size="sm">
              <ShoppingCartIcon className="w-5 h-5 mr-2" />
              Cart
            </Button>
          </div>
        </div>
      </header>
      <section className="bg-[#f5f5f6] py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">Discover the Latest Trends</h1>
            <p className="text-gray-600 text-lg">
              Explore our curated collection of fashionable items for every occasion.
            </p>
            <div className="flex space-x-4">
              <Button>Shop Women</Button>
              <Button variant="outline">Shop Men</Button>
            </div>
          </div>
          <div>
            <img
              src="/images/image2.jpg"
              alt="Hero Image"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <Link href="#" className="text-primary hover:underline" prefetch={false}>
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card>
              <img
                src="/images/image12.jpg"
                alt="Product Image"
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Floral Print Dress</h3>
                <p className="text-gray-600 text-sm">₹1,499</p>
                <Button size="sm" className="mt-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/images/image1.jpg"
                alt="Product Image"
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Slim Fit Jeans</h3>
                <p className="text-gray-600 text-sm">₹1,999</p>
                <Button size="sm" className="mt-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/images/image2.jpg"
                alt="Product Image"
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Printed T-Shirt</h3>
                <p className="text-gray-600 text-sm">₹799</p>
                <Button size="sm" className="mt-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/images/image3.jpg"
                alt="Product Image"
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Casual Sneakers</h3>
                <p className="text-gray-600 text-sm">₹2,499</p>
                <Button size="sm" className="mt-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f6] py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Trending Now</h2>
            <Link href="#" className="text-primary hover:underline" prefetch={false}>
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card>
              <img
                src="/images/image4.jpg"
                alt="Product Image"
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Oversized Hoodie</h3>
                <p className="text-gray-600 text-sm">₹1,299</p>
                <Button size="sm" className="mt-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/images/image5.jpg"
                alt="Product Image"
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Pleated Midi Skirt</h3>
                <p className="text-gray-600 text-sm">₹1,799</p>
                <Button size="sm" className="mt-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/images/image3.jpg"
                alt="Product Image"
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Striped Polo Shirt</h3>
                <p className="text-gray-600 text-sm">₹999</p>
                <Button size="sm" className="mt-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/images/image5.jpg"
                alt="Product Image"
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Leather Backpack</h3>
                <p className="text-gray-600 text-sm">₹2,999</p>
                <Button size="sm" className="mt-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">All Products</h2>
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <FilterIcon className="w-5 h-5 mr-2" />
                    Filters
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>
                    <Checkbox />
                    <span>Women</span>
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <Checkbox />
                    <span>Men</span>
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <Checkbox />
                    <span>Kids</span>
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <Checkbox />
                    <span>Home & Living</span>
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <Checkbox />
                    <span>Beauty</span>
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <ListOrderedIcon className="w-5 h-5 mr-2" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="low-to-high">Price: Low to High</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="high-to-low">Price: High to Low</DropdownMenuRadioItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card>
              <img
                src="/images/saree1.jpg"
                alt="Product Image"
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Floral Print Dress</h3>
                <p className="text-gray-600 text-sm">₹1,499</p>
                <Button size="sm" className="mt-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/images/saree2.jpg"
                alt="Product Image"
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Slim Fit Jeans</h3>
                <p className="text-gray-600 text-sm">₹1,999</p>
                <Button size="sm" className="mt-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/images/saree3.jpg"
                alt="Product Image"
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Printed T-Shirt</h3>
                <p className="text-gray-600 text-sm">₹799</p>
                <Button size="sm" className="mt-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/images/she1.jpg"
                alt="Product Image"
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Casual Sneakers</h3>
                <p className="text-gray-600 text-sm">₹2,499</p>
                <Button size="sm" className="mt-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/images/she2.jpg"
                alt="Product Image"
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Oversized Hoodie</h3>
                <p className="text-gray-600 text-sm">₹1,299</p>
                <Button size="sm" className="mt-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/images/she3.jpg"
                alt="Product Image"
                width={300}
                height={400}
                className="w-full h-auto rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Pleated Midi Skirt</h3>
                <p className="text-gray-600 text-sm">₹1,799</p>
                <Button size="sm" className="mt-4">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img src="/images/she4.jpg" alt="Product Image" width={300} height={400} className="" />
            </Card>
          </div>
        </div>
      </section>
    </div>

    {/* the footer section */}
    <Footer/>

    </>
  )
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}