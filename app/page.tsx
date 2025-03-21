import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarIcon } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">GLAM</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#products" className="text-sm font-medium transition-colors hover:text-primary">
              Products
            </Link>
            <Link href="#benefits" className="text-sm font-medium transition-colors hover:text-primary">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </Link>
          </nav>
          <div>
            <Button size="sm" className="bg-[#D4AF37] hover:bg-[#B8860B] text-white">
              Shop Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFF5F7]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="bg-[#D4AF37] text-white hover:bg-[#B8860B]">The Celebrity Favorite</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Transform Your Beauty in Seconds!
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Professional makeup at your fingertips. Elevate your beauty routine with our premium collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8860B] text-white">
                  Get Yours Now!
                </Button>
                <Button size="lg" variant="outline" className="border-[#D4AF37] text-[#D4AF37]">
                  View Collection
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-[#D4AF37]">Limited-Time Offer!</span>
                <span>Free shipping on orders over $50</span>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/64fb1b42dc907978f6f7885c/1725721865839-Q2HTVON1FKYBJHJ0YODY/7.png"
                alt="Makeup Products"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                Only 5 Left in Stock!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Our Makeup Stands Out</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Experience the difference with our premium formulations and innovative products.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-[#D4AF37]/20">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="p-2 bg-[#FFF5F7] rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-[#D4AF37]"
                    >
                      <path d="M12 22v-5" />
                      <path d="M9 8V2" />
                      <path d="M15 8V2" />
                      <path d="M18 8v4.09a2 2 0 0 1-.59 1.42l-1.71 1.7a2 2 0 0 0-.59 1.42V22" />
                      <path d="M6 8v4.09a2 2 0 0 0 .59 1.42l1.71 1.7a2 2 0 0 1 .59 1.42V22" />
                      <path d="M12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Long-Lasting</h3>
                  <p className="text-muted-foreground">
                    Our formulas are designed to stay perfect for up to 24 hours, no touch-ups needed.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-[#D4AF37]/20">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="p-2 bg-[#FFF5F7] rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-[#D4AF37]"
                    >
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Premium Ingredients</h3>
                  <p className="text-muted-foreground">
                    Cruelty-free, vegan, and made with the highest quality ingredients for your skin.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-[#D4AF37]/20">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="p-2 bg-[#FFF5F7] rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-[#D4AF37]"
                    >
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Professional Finish</h3>
                  <p className="text-muted-foreground">
                    Achieve a flawless, professional look with our easy-to-apply products.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-[#FFF5F7]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Bestselling Products</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover the products that our customers can't get enough of.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                id: 1,
                name: "M·A·C MACximal Soar",
                price: 24.99,
                originalPrice: 34.99,
                rating: 4.9,
                reviews: 120,
                badge: "Bestseller",
                image: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/20062914/01cf662e-3ebe-4087-8057-1867db649d88-20062914-mac-macximal-silky-lipstick-soar-35g.png",
              },
              {
                id: 2,
                name: "Matte Velvet Skin Full Coverage Foundation MAKE UP FOR EVER",
                price: 39.99,
                originalPrice: 49.99,
                rating: 4.8,
                reviews: 95,
                badge: "New Arrival",
                image: "https://images.tcdn.com.br/img/img_prod/697761/base_matte_velvet_skin_full_coverage_foundation_make_up_for_ever_6395_1_7a61f0b753561d5ef6d4e359a56d0b57.jpg",
              },
              {
                id: 3,
                name: "Oceane 4 Eyeshadow Palette Cosmic",
                price: 29.99,
                originalPrice: 42.99,
                rating: 4.7,
                reviews: 78,
                badge: "Limited Edition",
                image: "https://oceane.vtexassets.com/arquivos/ids/205517-1600-1600?v=638418768424230000&width=1600&height=1600&aspect=true",
              },
            ].map((product) => (
              <div key={product.id} className="group relative overflow-hidden rounded-lg border bg-background">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-white">{product.badge}</Badge>
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <div className="flex items-center gap-1 mt-2">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    <Button size="sm" className="bg-[#D4AF37] hover:bg-[#B8860B] text-white">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8860B] text-white">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Real Results</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                See the transformation our products can create.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-[4/3]">
                <Image
                  src="/maquiagem1.PNG"
                  alt="Before"
                  width={500}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                Before
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-[4/3]">
                <Image
                  src="/maquiagem2.PNG"
                  alt="After"
                  width={500}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm">
                After
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-[#FFF5F7]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Don't just take our word for it. Hear from our satisfied customers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Sarah Johnson",
                role: "Makeup Artist",
                quote:
                  "I've been using these products for my clients for over a year now. The quality is unmatched and the results are always stunning.",
              },
              {
                name: "Emily Davis",
                role: "Beauty Influencer",
                quote:
                  "These products have completely transformed my makeup routine. The colors are vibrant and the formula is so easy to work with.",
              },
              {
                name: "Jessica Williams",
                role: "Customer",
                quote:
                  "I've never been good at applying makeup, but these products make it so easy. I get compliments every time I wear them!",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="border-[#D4AF37]/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex items-center gap-1">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <StarIcon key={i} className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                        ))}
                    </div>
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="bg-[#D4AF37] text-white hover:bg-[#B8860B]">Limited Time Offer</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Try for Free for 7 Days!</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Experience the luxury of our products with our 7-day trial kit. No commitment, just beautiful results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8860B] text-white">
                  Shop with a Discount!
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Offer ends in:</span>
                <span className="font-medium text-[#D4AF37]">48 hours, 32 minutes</span>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <Image src="https://t4.ftcdn.net/jpg/02/73/55/33/360_F_273553300_sBBxIPpLSn5iC5vC8FwzFh6BJDKvUeaC.jpg" alt="Special Offer" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFF5F7]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Beauty Community</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Subscribe to our newsletter for exclusive offers, beauty tips, and new product announcements.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit" className="bg-[#D4AF37] hover:bg-[#B8860B] text-white">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Bestsellers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Special Offers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">About</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Ingredients
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Help</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    TikTok
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GLAM Beauty. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

