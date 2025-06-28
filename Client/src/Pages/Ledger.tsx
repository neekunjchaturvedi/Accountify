import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LedgerEntry {
  id: number;
  date: string;
  accountDebit: string;
  accountCredit: string;
  amount: number;
  narration: string;
}

export default function Ledger() {
  // Example static data — replace with API data later
  const [entries] = useState<LedgerEntry[]>([
    {
      id: 1,
      date: "2025-06-28",
      accountDebit: "Cash Account",
      accountCredit: "Sales Account",
      amount: 5000,
      narration: "Sale of goods for cash",
    },
    {
      id: 2,
      date: "2025-06-28",
      accountDebit: "Bank Account",
      accountCredit: "Capital Account",
      amount: 10000,
      narration: "Capital introduced",
    },
  ]);

  const [selectedEntry, setSelectedEntry] = useState<LedgerEntry | null>(null);

  return (
    <div className="min-h-screen p-6 ">
      <h1 className="text-2xl font-bold mb-6">Ledger</h1>

      <div className="overflow-x-auto rounded-lg shadow">
        <Table >
          <TableHeader>
            <TableRow className="border-none">
              <TableHead>Date</TableHead>
              <TableHead>Account Debit</TableHead>
              <TableHead>Account Credit</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map((entry) => (
              <TableRow
                key={entry.id}
                className="cursor-pointer hover:bg-gray-100 border-none"
                onClick={() => setSelectedEntry(entry)}
              >
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.accountDebit}</TableCell>
                <TableCell>{entry.accountCredit}</TableCell>
                <TableCell>₹ {entry.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Details Dialog */}
      <Dialog
        open={!!selectedEntry}
        onOpenChange={() => setSelectedEntry(null)}
      >
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Ledger Entry Details</DialogTitle>
            <DialogDescription>
              View detailed information for this transaction.
            </DialogDescription>
          </DialogHeader>
          {selectedEntry && (
            <div className="space-y-3">
              <p>
                <strong>Date:</strong> {selectedEntry.date}
              </p>
              <p>
                <strong>Account Debit:</strong> {selectedEntry.accountDebit}
              </p>
              <p>
                <strong>Account Credit:</strong> {selectedEntry.accountCredit}
              </p>
              <p>
                <strong>Amount:</strong> ₹ {selectedEntry.amount.toFixed(2)}
              </p>
              <p>
                <strong>Narration:</strong> {selectedEntry.narration}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
