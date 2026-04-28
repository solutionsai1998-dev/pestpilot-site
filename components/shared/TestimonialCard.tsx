import { Card } from "@/components/shared/Card";

type TestimonialCardProps = {
  body: string;
  title: string;
};

export function TestimonialCard({ body, title }: TestimonialCardProps) {
  return (
    <Card className="flex h-full flex-col gap-3">
      <p className="text-lg font-semibold text-primary">{title}</p>
      <p className="m-0 text-body-mobile text-text-light">{body}</p>
    </Card>
  );
}
