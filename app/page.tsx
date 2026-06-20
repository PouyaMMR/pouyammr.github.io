import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import JourneyRoute from "@/components/JourneyRoute";
import FieldNotes from "@/components/FieldNotes";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Stack />
        <JourneyRoute />
        <FieldNotes />
      </main>
      <Contact />
    </>
  );
}
