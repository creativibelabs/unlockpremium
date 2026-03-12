import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { getBlogBySlug, blogs, type ContentBlock } from "../../data/blogs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | TheEliteAccess Blog`,
    description: blog.metaDescription,
    keywords: blog.tags.join(", "),
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      type: "article",
      publishedTime: blog.date,
      tags: blog.tags,
    },
  };
}

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={idx}
          className="mt-10 mb-4 text-xl font-bold text-white sm:text-2xl"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={idx}
          className="mt-7 mb-3 text-base font-bold text-violet-300 sm:text-lg"
        >
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={idx} className="leading-8 text-zinc-400">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={idx} className="my-4 space-y-2 pl-5">
          {block.items.map((item, i) => (
            <li key={i} className="relative pl-4 text-zinc-400 leading-7">
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-violet-500" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={idx} className="my-4 space-y-2 pl-5 list-decimal marker:text-violet-400">
          {block.items.map((item, i) => (
            <li key={i} className="pl-2 text-zinc-400 leading-7">
              {item}
            </li>
          ))}
        </ol>
      );
    case "highlight":
      return (
        <div
          key={idx}
          className="my-6 rounded-xl border border-violet-500/30 bg-violet-500/8 px-6 py-4"
        >
          <p className="text-sm font-medium text-violet-200 leading-7">{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const currentIndex = blogs.findIndex((b) => b.slug === slug);
  const related = blogs.filter((_, i) => i !== currentIndex).slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-200 mb-10"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      {/* Hero cover image */}
      <div className="relative mb-10 overflow-hidden rounded-2xl w-full h-64 sm:h-80">
        {blog.coverImage ? (
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-linear-to-br ${blog.coverGradient}`}
          >
            <div className="absolute inset-0 flex items-end p-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                <Tag className="h-3 w-3" /> {blog.category}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
            <Tag className="h-3 w-3" /> {blog.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-zinc-500">
            <Clock className="h-3.5 w-3.5" /> {blog.readTime}
          </span>
          <span className="text-xs text-zinc-600">{blog.date}</span>
        </div>

        <div id="container-f06590fa33eb95f0637019443f6107ab"></div>
        
        <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          {blog.title}
        </h1>
        <p className="mt-4 text-base text-zinc-400 leading-7">{blog.excerpt}</p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mb-10 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* Article Body */}
      <article className="prose-custom space-y-5">
        {blog.content.map((block, i) => renderBlock(block, i))}
      </article>

      {/* Divider */}
      <div className="mt-14 mb-10 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* CTA */}
      <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-7 text-center">
        <h3 className="text-lg font-bold text-white">
          Ready to get free access?
        </h3>
        <p className="mt-2 text-sm text-zinc-400">
          TheEliteAccess has daily-refreshed credentials for all the tools you need.
        </p>
        <Link
          href="/#tools"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-600/30 transition-all hover:bg-violet-500"
        >
          Browse Free Tools on TheEliteAccess
        </Link>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="mt-16">
          <h3 className="text-lg font-bold text-white mb-6">More from the Blog</h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {related.map((b) => (
              <Link
                key={b.slug}
                href={`/blog/${b.slug}`}
                className="group flex flex-col rounded-2xl border border-white/8 bg-[#111118] overflow-hidden transition-all hover:border-violet-500/30"
              >
                {/* Related thumbnail */}
                <div className="relative h-32 w-full shrink-0 overflow-hidden">
                  {b.coverImage ? (
                    <Image
                      src={b.coverImage}
                      alt={b.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${b.coverGradient} opacity-80`}
                    />
                  )}
                </div>
                <div className="p-4">
                  <span className="text-xs text-violet-400 font-medium">{b.category}</span>
                  <h4 className="mt-1.5 text-sm font-bold text-white leading-snug group-hover:text-violet-300 transition-colors line-clamp-2">
                    {b.title}
                  </h4>
                  <p className="mt-1 text-xs text-zinc-500 line-clamp-2">{b.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
