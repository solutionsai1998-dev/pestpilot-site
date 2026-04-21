import { Star } from "lucide-react";
import { Card } from "@/components/shared/Card";

type TestimonialCardProps = {
  company: string;
  name: string;
  quote: string;
  rating?: number;
  headshot?: string;
};

export function TestimonialCard({
  company,
  name,
  quote,
  rating = 5,
  headshot
}: TestimonialCardProps) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-h3-mobile font-semibold text-primary">
          {headshot ? (
            <img alt={`${name} headshot`} className="h-full w-full object-cover" src={headshot} />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <p className="m-0 font-semibold text-text">{name}</p>
          <p className="m-0 text-small text-text-light">{company}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-accent" aria-label={`${rating} star rating`}>
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="m-0 text-body-mobile text-text-light">&ldquo;{quote}&rdquo;</blockquote>
    </Card>
  );
}
