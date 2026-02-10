import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';

type TAppProvidersProps = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: TAppProvidersProps) => {
  return (
    <NextIntlClientProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};

export default AppProviders;
