"use client";
import React from "react";
import { BackgroundBeams } from "@/components/global/background-beams";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="relative z-10 text-xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Create your automations with ease
        </h1>
        <p className="text-neutral-500 max-w-xl mx-auto my-2 text-lg text-center relative z-10">
          Head over to Workflows to create your first automation. You can use
          notion, discord, slack and many more apps to create your automations.
          Experience
        </p>
        <div className="flex justify-center items-center">
          <Button className="mt-4 z-50" onClick={() => router.push('/workflows')}>
            Workflows
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}