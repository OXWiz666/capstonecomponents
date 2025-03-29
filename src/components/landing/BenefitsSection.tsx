import React from "react";
import { Check, Clock, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({
  icon = <Check />,
  title = "Benefit Title",
  description = "Description of the benefit",
}: BenefitCardProps) => {
  return (
    <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits?: BenefitCardProps[];
}

const BenefitsSection = ({
  title = "Benefits of Our Digital Healthcare System",
  subtitle = "Discover how our system improves healthcare access for Barangay Calumpang residents",
  benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Reduced Waiting Times",
      description:
        "Schedule appointments online and minimize your waiting time at the health center.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Medical Records",
      description:
        "Access your medical history securely anytime, ensuring continuity of care.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Better Health Outcomes",
      description:
        "Regular reminders and health monitoring lead to improved overall community health.",
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Easy Access to Services",
      description:
        "Get healthcare services from the comfort of your home through our digital platform.",
    },
  ],
}: BenefitsSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
