import React from "react";
import { User, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  quote: string;
  role?: string;
  imageUrl?: string;
}

interface TestimonialsSectionProps {
  testimonials?: TestimonialProps[];
  title?: string;
  subtitle?: string;
}

const TestimonialsSection = ({
  testimonials = [
    {
      name: "Maria Santos",
      role: "Barangay Resident",
      quote:
        "The online appointment system has saved me so much time. I no longer have to wait in long lines at the health center.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    },
    {
      name: "Juan Dela Cruz",
      role: "Senior Citizen",
      quote:
        "As a senior citizen, I appreciate how easy it is to access my medical records online. The staff also helped me learn how to use the system.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
    },
    {
      name: "Ana Reyes",
      role: "Mother of Three",
      quote:
        "Scheduling vaccinations for my children has never been easier. I get reminders and can see their complete vaccination history.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    },
    {
      name: "Pedro Lim",
      role: "Community Health Worker",
      quote:
        "This system has transformed how we deliver healthcare services. We can now reach more residents and provide better follow-up care.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro",
    },
  ],
  title = "What Our Community Says",
  subtitle = "Hear from residents who have experienced our digital healthcare services",
}: TestimonialsSectionProps) => {
  return (
    <section className="w-full py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col p-6 h-full">
                      <div className="mb-4 text-primary">
                        <Quote size={32} />
                      </div>
                      <p className="text-gray-700 mb-6 flex-grow">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center mt-auto">
                        {testimonial.imageUrl ? (
                          <img
                            src={testimonial.imageUrl}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                            <User className="w-6 h-6 text-primary" />
                          </div>
                        )}
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {testimonial.name}
                          </h4>
                          {testimonial.role && (
                            <p className="text-sm text-gray-500">
                              {testimonial.role}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static translate-y-0 mr-2" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
