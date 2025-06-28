import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Constactus() {
  return (
    <>
      <section id="contactus" className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form className="space-y-6">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" rows={5} />
          <Button type="submit">Send Message</Button>
        </form>
      </section>
    </>
  );
}

export default Constactus;
