import { Metadata } from "next";
import RegistrationHero from "@/components/Registration/RegistrationHero";
import dynamic from "next/dynamic";
import { Suspense } from "react";
// import Footer from "@/components/Footer/Footer";
// import { socials } from "@/data/socials";
import { metadata as rootMetadata } from "@/app/layout";
import { registrationQuestions,eventConfig } from "../data/userRegistration";

export const metadata: Metadata = {
  ...rootMetadata,
  title: `${eventConfig.title} | EWB, Pulchowk`,
  description: eventConfig.description,
  openGraph: {
    ...rootMetadata.openGraph,
    title: `${eventConfig.title} | EWB, Pulchowk`,
    description: eventConfig.description,
    url: rootMetadata.metadataBase + "register-event",
  },
};

const RegistrationForm = dynamic(
  () => import("@/components/Registration/RegistrationForm"),
  {
    loading: () => <FormSkeleton />,
  }
);

function FormSkeleton() {
  return (
    <div className="container max-w-3xl p-4 pb-12 mx-auto">
      <div className="relative px-2 py-6 border rounded-lg md:p-8 bg-neutralone/95 backdrop-blur-sm border-primary/20 animate-pulse">
        <div className="h-8 mx-auto mb-6 bg-gray-700 rounded w-60"></div>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 rounded-lg bg-gray-700/50"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function EventRegistration() {
  return (
    <>
      <div className="min-h-screen ">
        <RegistrationHero config={eventConfig} />
        <Suspense fallback={<FormSkeleton />}>
          <RegistrationForm />
        </Suspense>
      </div>
      {/* <Footer bg="bg-neutraltwo" socials={socials} /> */}
    </>
  );
}