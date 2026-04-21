import { Check } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";
import { Card } from "@/components/shared/Card";

type TierCardProps = {
  name: string;
  price: string;
  billingLabel: string;
  description: string;
  features: readonly string[];
  href?: string;
  ctaLabel?: string;
  highlighted?: boolean;
  badge?: string;
};

export function TierCard({
  name,
  price,
  billingLabel,
  description,
  features,
  href = "/demo",
  ctaLabel = "Start Free Trial",
  highlighted = false,
  badge
}: TierCardProps) {
  return (
    <Card
      className={[
        "relative h-full rounded-[28px] border p-7 shadow-sm",
        highlighted
          ? "border-accent bg-[linear-gradient(180deg,#fffaf2_0%,#ffffff_100%)] shadow-xl lg:-translate-y-3"
          : "border-border bg-white"
      ].join(" ")}
    >
      {badge ? (
        <div className="absolute left-7 top-0 -translate-y-1/2">
          <Badge className="bg-accent px-4 py-2 text-white">{badge}</Badge>
        </div>
      ) : null}

      <p className="text-small font-semibold uppercase tracking-[0.18em] text-primary-light">{name}</p>
      <div className="mt-4 flex items-end gap-2">
        <p className="text-4xl font-extrabold tracking-tight text-primary">{price}</p>
        <p className="pb-1 text-small text-text-light">{billingLabel}</p>
      </div>
      <p className="mt-3 min-h-[3rem] text-small text-text-light">{description}</p>

      <div className="mt-6 space-y-3">
        {features.map((feature) => (
          <div className="flex items-start gap-3" key={feature}>
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-success/12 text-success">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-sm text-text">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button className="w-full justify-center" href={href} variant={highlighted ? "primary" : "secondary"}>
          {ctaLabel}
        </Button>
      </div>
    </Card>
  );
}
