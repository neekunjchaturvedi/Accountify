import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-red-500 to-pink-500 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Automate Your Accounting
        </h1>
        <p className="max-w-xl mb-6 text-lg">
          Easily convert your Journal entries into Ledgers and Final Accounts
          with LedgerPro.
        </p>
        <Button variant="secondary" size="lg">
          Get Started
        </Button>
      </section>
    </>
  );
}

export default Hero;
