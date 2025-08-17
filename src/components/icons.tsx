export function Icons() {
  return (
    <div className="flex gap-4 text-gray-600 dark:text-gray-300 text-2xl">
      {/* X (Twitter) */}
      <a
        href="https://x.com/Finanzly"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
      >
        <svg className="w-6 h-6 hover:text-black dark:hover:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5.22 3h3.31l5.45 7.91 5.1-7.91h3.06l-6.88 10 7.1 11h-3.31l-5.76-8.57L7.72 24H4.67l7.16-10.48L5.22 3z" />
        </svg>
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@Finanzly"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
      >
        <svg className="w-6 h-6 hover:text-black dark:hover:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.5 0v5.8c1.4.9 3.3 1.5 5.2 1.6v3.2c-2.2-.1-4.2-1-5.8-2.4v9.9c0 2.3-1.9 4.2-4.2 4.2S3.5 20.4 3.5 18.1s1.9-4.2 4.2-4.2c.5 0 1 .1 1.5.3v3.3a2.3 2.3 0 0 0-1.5-.6c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3 2.3-1 2.3-2.3V0h2.5z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/Finanzly"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <svg className="w-6 h-6 hover:text-pink-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.3.5.6.3 1 .6 1.4 1.1.4.4.8.8 1.1 1.4.2.5.4 1.1.5 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.5 2.3-.3.6-.6 1-1.1 1.4-.4.4-.8.8-1.4 1.1-.5.2-1.1.4-2.3.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.3-.5a4.6 4.6 0 0 1-1.4-1.1 4.6 4.6 0 0 1-1.1-1.4c-.2-.5-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.8.5-2.3.3-.6.6-1 1.1-1.4.4-.4.8-.8 1.4-1.1.5-.2 1.1-.4 2.3-.5 1.2-.1 1.6-.1 4.8-.1m0-2.2C8.7 0 8.3 0 7.1.1 5.9.2 5 .5 4.2.9a6.6 6.6 0 0 0-2.4 2.4C1.4 4 1.2 4.9 1.1 6.1.9 7.3.9 7.7.9 12s0 4.7.1 5.9c.1 1.2.3 2.1.6 2.8.4.9 1 1.7 1.7 2.4.7.7 1.5 1.3 2.4 1.7.7.3 1.6.5 2.8.6 1.2.1 1.6.1 5.9.1s4.7 0 5.9-.1c1.2-.1 2.1-.3 2.8-.6.9-.4 1.7-1 2.4-1.7.7-.7 1.3-1.5 1.7-2.4.3-.7.5-1.6.6-2.8.1-1.2.1-1.6.1-5.9s0-4.7-.1-5.9c-.1-1.2-.3-2.1-.6-2.8A6.6 6.6 0 0 0 21.8.9 6.6 6.6 0 0 0 19.4.1c-.7-.3-1.6-.5-2.8-.6C15.6 0 15.2 0 12 0z" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="18.4" cy="5.6" r="1.1" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/Finanzly"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <svg className="w-6 h-6 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-2.9h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.3L15.6 15h-2v7A10 10 0 0 0 22 12z" />
        </svg>
      </a>
    </div>
  );
}
