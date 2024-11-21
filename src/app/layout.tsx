import React from 'react';

import type { Metadata } from 'next';
import '../styles/globals.css';
import { ThemeProvider } from '@/app/theme-provider';
import { poppins, notoSans, notoSansMono, spaceGrotesk } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Harshavardhan Kona',
  description: 'Harshavardhan Kona\'s Personal Portfolio built with Next.js and deployed on Vercel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${poppins.variable} ${notoSans.variable} 
                                ${notoSansMono.variable} ${spaceGrotesk.variable} 
                                antialiased`} suppressHydrationWarning>
      <body className='bg-zinc-100 dark:bg-zinc-900'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
