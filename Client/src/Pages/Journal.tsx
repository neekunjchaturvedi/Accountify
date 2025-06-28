import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Journal() {
  const [formData, setFormData] = useState({
    date: "",
    accountDebit: "",
    accountCredit: "",
    amount: "",
    narration: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Journal Entry Submitted:", formData);
    // TODO: Call your API here
  };

  return (
    <div className="flex justify-center items-start min-h-screen p-6 dark:bg-background">
      <Card className="w-full max-w-2xl shadow-md border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Add Journal Entry
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="mb-2" htmlFor="date">
                Date
              </Label>
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="border-gray-100"
              />
            </div>
            <div>
              <Label htmlFor="accountDebit" className="mb-2">
                Account Debit
              </Label>
              <Input
                type="text"
                name="accountDebit"
                placeholder="Enter Debit Account"
                value={formData.accountDebit}
                onChange={handleChange}
                required
                className="border-gray-100"
              />
            </div>
            <div>
              <Label htmlFor="accountCredit" className="mb-2">
                Account Credit
              </Label>
              <Input
                type="text"
                name="accountCredit"
                placeholder="Enter Credit Account"
                value={formData.accountCredit}
                onChange={handleChange}
                required
                className="border-gray-100"
              />
            </div>
            <div>
              <Label htmlFor="amount" className="mb-2">
                Amount
              </Label>
              <Input
                type="number"
                name="amount"
                placeholder="Enter Amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="border-gray-100"
              />
            </div>
            <div>
              <Label htmlFor="narration" className="mb-2">
                Narration
              </Label>
              <Textarea
                name="narration"
                placeholder="Enter Narration"
                value={formData.narration}
                onChange={handleChange}
                rows={3}
                className="border-gray-100"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg- primary text-white cursor-pointer"
            >
              Save Entry
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
