import React from "react";
import { Calendar, Clock, FileText, Syringe } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  ctaText = "Learn More",
}: ServiceCardProps) => {
  return (
    <Card className="h-full bg-white">
      <CardHeader>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">
          {description}
        </CardDescription>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            if (title === "Online Appointment Booking") {
              window.location.href = "/appointments";
            } else if (title === "Vaccination Schedules") {
              window.location.href = "/services/vaccinations";
            } else if (title === "Animal Bite Treatment") {
              window.location.href = "/services/animal-bite";
            }
          }}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
};

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: ServiceCardProps[];
}

const ServicesSection = ({
  title = "Our Digital Healthcare Services",
  subtitle = "Discover the range of digital services available to Barangay Calumpang residents through our health center management system.",
  services = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Online Appointment Booking",
      description:
        "Schedule medical consultations, check-ups, and other health services online without the need to visit the health center in person.",
      ctaText: "Book Now",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Medical Records Access",
      description:
        "Securely access your personal medical history, test results, prescriptions, and treatment plans through our digital platform.",
      ctaText: "Access Records",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Vaccination Schedules",
      description:
        "View upcoming vaccination campaigns, register for immunizations, and receive reminders for your family's vaccination appointments.",
      ctaText: "View Schedule",
    },
    {
      icon: <Syringe className="w-6 h-6" />,
      title: "Animal Bite Treatment",
      description:
        "Access professional care for animal bites with immediate response, trained healthcare professionals, and post-exposure prophylaxis services.",
      ctaText: "Learn More",
    },
  ],
}: ServicesSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              ctaText={service.ctaText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
