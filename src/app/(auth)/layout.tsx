import AnimatedAuthSlot from './_components/AnimatedAuthSlot';
import AuthHero from './_components/AuthHero';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-(--auth-gradient-from) to-(--auth-gradient-to)">
      <div className="relative z-10 flex min-h-screen max-lg:justify-center">
        <AnimatedAuthSlot
          slotType="hero"
          className="absolute inset-y-0 left-0 z-0 hidden w-1/2 items-center justify-center p-12 lg:flex"
        >
          <AuthHero />
        </AnimatedAuthSlot>

        <AnimatedAuthSlot
          slotType="form"
          className="relative z-10 flex w-full items-center justify-center p-12 max-lg:p-6 lg:w-1/2"
        >
          {children}
        </AnimatedAuthSlot>
      </div>
    </div>
  );
}
