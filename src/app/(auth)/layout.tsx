import AnimatedAuthSlot from './_components/AnimatedAuthSlot';
import AuthHero from './_components/AuthHero';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-(--auth-gradient-from) to-(--auth-gradient-to)">
        <div
          className="absolute inset-0 backdrop-blur-3xl"
          style={{
            background:
              'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          }}
        />
      </div>

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
