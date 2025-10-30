"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, ChefHat, UtensilsCrossed, MessageCircle, Calendar } from 'lucide-react';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Menu", id: "product" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="SteakHouse"
          button={{
            text: "Make Reservation",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Premium Steaks, Perfectly Grilled"
          description="Experience the finest cuts of beef, expertly prepared and served in an atmosphere of refined elegance. Your table awaits."
          tag="Fine Dining"
          tagIcon={Award}
          buttons={[
            { text: "View Menu", href: "product" },
            { text: "Make Reservation", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Premium grilled steak presentation"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="The Art of Perfect Steaks"
          description="For over three decades, we've mastered the craft of preparing exceptional steaks. Our commitment to quality begins with hand-selected, aged beef and continues through our time-honored cooking techniques."
          tag="Our Story"
          tagIcon={ChefHat}
          bulletPoints={[
            {
              title: "Prime Cuts Only",
              description: "We source only the finest USDA Prime and Choice cuts, dry-aged to perfection for unmatched flavor and tenderness.",
              icon: Award
            },
            {
              title: "Expert Preparation", 
              description: "Our master chefs use traditional techniques and high-temperature grilling to achieve the perfect sear and doneness.",
              icon: "Flame"
            },
            {
              title: "Elegant Atmosphere",
              description: "Dine in sophisticated comfort with attentive service and an ambiance that enhances every memorable meal.",
              icon: "Star"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Premium steakhouse kitchen preparation"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Signature Cuts"
          description="Discover our selection of premium steaks, each cut expertly prepared to your preference"
          tag="Menu"
          tagIcon={UtensilsCrossed}
          products={[
            {
              id: "ribeye",
              brand: "SteakHouse",
              name: "Prime Ribeye",
              price: "$48.00",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Prime ribeye steak"
            },
            {
              id: "filet",
              brand: "SteakHouse",
              name: "Filet Mignon",
              price: "$52.00",
              rating: 5,
              reviewCount: "93",
              imageSrc: "https://images.pexels.com/photos/341048/pexels-photo-341048.png?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Filet mignon steak"
            },
            {
              id: "strip",
              brand: "SteakHouse",
              name: "New York Strip",
              price: "$44.00",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://images.pexels.com/photos/8697542/pexels-photo-8697542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "New York strip steak"
            },
            {
              id: "porterhouse",
              brand: "SteakHouse",
              name: "Porterhouse",
              price: "$56.00",
              rating: 5,
              reviewCount: "84",
              imageSrc: "https://images.pexels.com/photos/18015000/pexels-photo-18015000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Porterhouse steak"
            },
            {
              id: "sirloin",
              brand: "SteakHouse",
              name: "Top Sirloin",
              price: "$38.00",
              rating: 4,
              reviewCount: "201",
              imageSrc: "https://images.pexels.com/photos/8697542/pexels-photo-8697542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Top sirloin steak"
            },
            {
              id: "tomahawk",
              brand: "SteakHouse",
              name: "Tomahawk Ribeye",
              price: "$72.00",
              rating: 5,
              reviewCount: "45",
              imageSrc: "https://images.pexels.com/photos/12884547/pexels-photo-12884547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tomahawk ribeye steak"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Real experiences from steak lovers who've dined with us"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Michael",
              handle: "@michaelr_chef",
              testimonial: "Absolutely incredible. The ribeye was cooked to perfection with a beautiful char and tender inside. This is what a steakhouse should be.",
              imageSrc: "https://images.pexels.com/photos/6481908/pexels-photo-6481908.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael"
            },
            {
              id: "2",
              name: "Sarah",
              handle: "@saraheats",
              testimonial: "Best filet mignon I've ever had. The atmosphere is elegant, service is impeccable, and every bite was pure perfection.",
              imageSrc: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah"
            },
            {
              id: "3",
              name: "David",
              handle: "@davidfoodie",
              testimonial: "The Tomahawk ribeye is a showstopper. Perfectly aged, expertly grilled, and presented beautifully. Worth every penny.",
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David"
            },
            {
              id: "4",
              name: "Jennifer",
              handle: "@jenniferdines",
              testimonial: "From the moment we walked in, we knew this was special. Outstanding steaks, wonderful wine selection, and unforgettable experience.",
              imageSrc: "https://images.pexels.com/photos/20332064/pexels-photo-20332064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Jennifer"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Reserve Your Table"
          description="Experience exceptional dining with us. Make your reservation today and let us prepare an unforgettable evening for you."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email"
          buttonText="Make Reservation"
          termsText="We'll contact you within 24 hours to confirm your reservation details."
          imageSrc="https://images.pexels.com/photos/3822749/pexels-photo-3822749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant restaurant interior"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Signature Steaks", href: "product" },
                { label: "Wine Selection", href: "about" },
                { label: "Appetizers", href: "about" }
              ]
            },
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Reviews", href: "testimonial" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Private Events", href: "contact" },
                { label: "Location", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | SteakHouse - Premium Dining Experience"
        />
      </div>
    </ThemeProvider>
  );
}