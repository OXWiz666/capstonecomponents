import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  imageUrl?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Welcome to Barangay Calumpang Health Center",
  description = "Your community healthcare partner providing accessible and quality medical services for all residents. Our digital healthcare system makes it easier than ever to manage your health needs.",
  ctaText = "Schedule an Appointment",
  imageUrl = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  onCtaClick = () => (window.location.href = "/appointments"),
}: HeroSectionProps) => {
  return (
    <section className="w-full h-[600px] bg-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={imageUrl}
          alt="Barangay Calumpang Health Center"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">{description}</p>
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6 py-3 text-base"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Optional decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
