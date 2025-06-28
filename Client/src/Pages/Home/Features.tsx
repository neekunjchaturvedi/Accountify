import { Card, CardContent } from "@/components/ui/card";

function Features() {
  return (
    <>
      <section
        id="features"
        className="py-20 px-4 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Journal Entry",
              desc: "Input transactions with validation and smart suggestions.",
            },
            {
              title: "Automated Ledger",
              desc: "Automatically segregate entries into ledgers accurately.",
            },
            {
              title: "Final Accounts",
              desc: "Generate Trading Account, Profit & Loss, and Balance Sheet instantly.",
            },
          ].map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default Features;
