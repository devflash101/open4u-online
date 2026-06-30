import Link from "next/link";
import { ArrowLeft, Landmark } from "lucide-react";
import { BANK_PAYMENT } from "@/config/bank-payment";
import { BOOKKEEPER } from "@/config/bookkeeper";
import CopyValue from "@/components/payment/CopyValue";
import { attorneyPaths } from "@/lib/paths";
import type { AttorneyProfile } from "@/types/attorney";

interface BankTransferPageProps {
  attorney: AttorneyProfile;
}

function formatBusinessAddress(attorney: AttorneyProfile): string {
  const { street, city, state, zip } = attorney.address;
  return `${street}, ${city}, ${state} ${zip}`;
}

export default function BankTransferPage({ attorney }: BankTransferPageProps) {
  const p = BANK_PAYMENT;
  const paths = attorneyPaths(attorney.slug);
  const businessAddress = formatBusinessAddress(attorney);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--attorney-bg)]/90 backdrop-blur-md border-b border-[var(--attorney-primary)]/10">
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href={paths.bookkeeper} className="flex items-center gap-2 min-w-0">
            <ArrowLeft className="w-4 h-4 shrink-0 text-[var(--attorney-primary)]/60" />
            <span
              className="font-serif text-lg font-light tracking-wide truncate"
              style={{ color: "var(--attorney-primary)" }}
            >
              Bank Transfer
            </span>
          </Link>
          <Link
            href={paths.profile}
            className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--attorney-primary)]/70 hover:text-[var(--attorney-accent)] transition-colors"
          >
            Attorney
          </Link>
        </nav>
      </header>

      <main className="pt-16">
        <section className="py-16 px-6 md:px-10">
          <div className="max-w-2xl mx-auto">
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6"
              style={{ backgroundColor: `${attorney.theme.primary}12` }}
            >
              <Landmark
                className="w-7 h-7"
                style={{ color: "var(--attorney-accent)" }}
              />
            </div>

            <p
              className="text-[0.7rem] tracking-[0.25em] uppercase mb-3"
              style={{ color: "var(--attorney-accent)" }}
            >
              Payment · {attorney.firm}
            </p>
            <h1
              className="font-serif text-4xl md:text-5xl font-light mb-4"
              style={{ color: "var(--attorney-primary)" }}
            >
              Pay by bank transfer
            </h1>
            <p className="text-[var(--attorney-primary)]/75 leading-relaxed mb-10">
              Use the details below to send payment via ACH or wire transfer. Please include your
              name or invoice reference in the transfer memo. For questions, contact{" "}
              {BOOKKEEPER.name} at{" "}
              <a
                href={`mailto:${BOOKKEEPER.email}`}
                className="underline hover:opacity-80"
                style={{ color: "var(--attorney-accent)" }}
              >
                {BOOKKEEPER.email}
              </a>
              .
            </p>

            <div
              className="rounded-lg border border-[var(--attorney-primary)]/15 bg-[var(--attorney-bg)] px-6 py-2 mb-8"
            >
              <CopyValue label="Account name" value={p.accountName} />
              <CopyValue label="Account number" value={p.accountNumber} />
              <CopyValue label="Bank name" value={p.bankName} />
              <CopyValue label="Routing number" value={p.routingNumber} />
              <CopyValue label="SWIFT / BIC" value={p.swift} />
              <CopyValue label="Business address" value={businessAddress} />
            </div>

            <div
              className="rounded-lg px-6 py-5 text-sm leading-relaxed text-[var(--attorney-primary)]/70"
              style={{ backgroundColor: `${attorney.theme.primary}08` }}
            >
              <p className="mb-3 font-medium text-[var(--attorney-primary)]">Transfer instructions</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Domestic transfers (ACH / wire)</strong> — use the routing number. Typically
                  1–3 business days for ACH.
                </li>
                <li>
                  <strong>International wire transfers</strong> — use the SWIFT / BIC code.
                </li>
                <li>All transfers must be in USD.</li>
                <li>Include your name or invoice number in the payment reference.</li>
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={paths.bookkeeper}
                className="inline-block px-8 py-3 text-[0.7rem] tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--attorney-primary)" }}
              >
                Back to bookkeeper
              </Link>
              <a
                href={`mailto:${BOOKKEEPER.email}?subject=Payment%20inquiry%20-%20${encodeURIComponent(attorney.firm)}`}
                className="inline-block px-8 py-3 border text-[0.7rem] tracking-[0.2em] uppercase transition-colors hover:bg-[var(--attorney-primary)] hover:text-[var(--attorney-bg)]"
                style={{
                  borderColor: "var(--attorney-primary)",
                  color: "var(--attorney-primary)",
                }}
              >
                Email Ronel
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--attorney-primary)]/10 py-10 px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-sm text-[var(--attorney-primary)]/60">
          <p>© {new Date().getFullYear()} {attorney.firm}. Secure bank transfer only — no card payments.</p>
        </div>
      </footer>
    </>
  );
}
