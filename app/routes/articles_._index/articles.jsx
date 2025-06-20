import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from '~/hooks';
import { Link as RouterLink, useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { formatDate } from '~/utils/date';
import { classes, cssProps } from '~/utils/style';
import styles from './articles.module.css';

const articles = [
  {
    title: 'Adding Authentication to Your Next.js App with NextAuth.js',
    abstract: 'A step-by-step guide to implementing secure authentication in Next.js applications using NextAuth.js, covering setup, configuration, and best practices.',
    date: '2024-03-20',
    url: 'https://medium.com/@ahmed.imtiaz2000/adding-authentication-to-your-next-js-app-with-nextauth-js-a-step-by-step-guide-4e8057d2e099',
    featured: true
  },
  {
    title: 'How to Run DeepSeek Locally Using Ollama',
    abstract: 'A comprehensive step-by-step guide to setting up and running DeepSeek locally with Ollama, exploring the process of local AI model deployment and usage.',
    date: '2024-03-20',
    url: 'https://medium.com/@ahmed.imtiaz2000/how-to-run-deepseek-locally-using-ollama-a-step-by-step-guide-14cd7b3feec5',
    featured: false,
    order: 1
  },
  {
    title: 'Unlocking the Power of Server Actions in Next.js',
    abstract: 'A comprehensive guide to implementing Server Actions in Next.js for simplified full-stack development, exploring how to leverage this powerful feature for better performance and developer experience.',
    date: '2024-03-20',
    url: 'https://medium.com/@ahmed.imtiaz2000/unlocking-the-power-of-server-actions-in-next-js-simplified-full-stack-development-b41fd393b3de',
    featured: false,
    order: 2
  }
];

function ArticleCard({ article }) {
  const { title, abstract, date, url, featured } = article;
  const formattedDate = formatDate(date);

  return (
    <article className={styles.articleCard} data-featured={featured}>
      <div className={styles.articleContent}>
        <div className={styles.articleHeader}>
          <Divider notchWidth="64px" notchHeight="8px" />
          <Text size="s">{formattedDate}</Text>
        </div>
        
        <Heading as="h2" level={featured ? 2 : 4}>
          {title}
        </Heading>
        
        <Text size={featured ? 'l' : 's'} as="p">
          {abstract}
        </Text>

        <Button
          secondary
          iconHoverShift
          icon="chevron-right"
          as="a"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read on Medium
        </Button>
      </div>
    </article>
  );
}

export function Articles() {
  const { width } = useWindowSize();
  const isSingleColumn = width <= 1190;

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles
    .filter(article => !article.featured)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <article className={styles.articles}>
      <Section className={styles.content}>
        <header className={styles.header}>
          <Heading className={styles.heading} level={5} as="h1">
            <DecoderText text="Latest articles" />
          </Heading>
        </header>

        <div className={styles.grid}>
          {featuredArticle && <ArticleCard article={featuredArticle} />}
          <div className={styles.articleList}>
            {regularArticles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </article>
  );
}

function Barcode({ className }) {
  return (
    <svg
      className={className}
      width="153"
      height="20"
      fill="currentColor"
      viewBox="0 0 153 20"
    >
      <path
        fillOpacity=".6"
        d="M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"
      />
    </svg>
  );
}
