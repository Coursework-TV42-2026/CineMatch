import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { UserProvider } from './UserContext';

type TAppProvidersProps = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: TAppProvidersProps) => {
  return (
    <NextIntlClientProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <UserProvider>{children}</UserProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};

export default AppProviders;
