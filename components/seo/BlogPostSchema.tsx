type BlogPostSchemaProps = {
  title: string;
  description: string;
  date: string;
  author: string;
  url: string;
};

export function BlogPostSchema({ title, description, date, author, url }: BlogPostSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    author: {
      "@type": "Organization",
      name: author
    },
    publisher: {
      "@type": "Organization",
      name: "PestPilot"
    },
    mainEntityOfPage: url,
    url
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      type="application/ld+json"
    />
  );
}
