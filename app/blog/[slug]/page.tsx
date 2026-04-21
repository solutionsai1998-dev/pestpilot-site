import { getBlogSlugs } from "@/lib/blog";

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function BlogPostPage({
  params
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <section className="section-padding">
      <div className="container">
        <h1 className="text-h2-mobile font-bold text-primary md:text-h2-desktop">{params.slug}</h1>
      </div>
    </section>
  );
}
