import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircle, Clock, Stethoscope, Syringe } from "lucide-react";

const AnimalBiteTreatmentPage = () => {
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl bg-white min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Animal Bite Treatment Center
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Providing immediate care and guidance for animal bite incidents in
        Barangay Calumpang
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" /> Immediate Response
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Quick treatment within 24 hours of a bite incident is crucial to
              prevent infection and rabies.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5" /> Professional Care
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Our trained healthcare professionals follow WHO protocols for
              animal bite management.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Syringe className="h-5 w-5" /> Vaccination Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Access to post-exposure prophylaxis and anti-rabies vaccines when
              necessary.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <Alert className="mb-8 bg-amber-50 border-amber-200">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          If you've been bitten by an animal, clean the wound immediately with
          soap and running water for 15 minutes, then visit our center as soon
          as possible.
        </AlertDescription>
      </Alert>

      <h2 className="text-2xl font-bold mb-4">Animal Bite Treatment Guide</h2>
      <Separator className="mb-6" />

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Step 1: Immediate First Aid
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Wash the wound thoroughly with soap and running water for 15
              minutes
            </li>
            <li>If available, apply an antiseptic after washing</li>
            <li>Do not cover the wound immediately unless bleeding heavily</li>
            <li>
              Do not apply herbs, coffee, or other home remedies to the wound
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Step 2: Seek Medical Attention
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visit our Animal Bite Treatment Center as soon as possible</li>
            <li>
              Bring information about the animal if available (type, vaccination
              status)
            </li>
            <li>The sooner you get treatment, the more effective it will be</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Step 3: Medical Assessment
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Healthcare professionals will assess the wound category</li>
            <li>
              They will determine if rabies post-exposure prophylaxis is needed
            </li>
            <li>
              Additional treatments like tetanus shots may be administered
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Step 4: Follow-up Care</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Complete the full course of any prescribed vaccines</li>
            <li>Return for scheduled follow-up visits</li>
            <li>
              Monitor the wound for signs of infection (redness, swelling,
              increased pain)
            </li>
            <li>Keep the wound clean and follow care instructions</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 p-6 bg-slate-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Visit Our Center</h2>
        <p className="mb-4">
          The Animal Bite Treatment Center at Barangay Calumpang Health Center
          is open Monday to Friday, 8:00 AM to 5:00 PM. For emergencies outside
          these hours, please proceed to the nearest hospital emergency room.
        </p>
        <p className="font-medium">For inquiries, call: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default AnimalBiteTreatmentPage;
