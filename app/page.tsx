import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { MantineProvider } from '@mantine/core';
import { ContactUs } from "@/components/landing/ContactUs";
import { Footer } from "@/components/Footer";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col items-center bg-slate-400">
      <MantineProvider>
        <Navbar />
        <Hero />
        <About />
        <ContactUs />
        <Footer />
      </MantineProvider>
    </div>
  );
}
