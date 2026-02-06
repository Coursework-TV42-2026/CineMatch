import LogoIcon from '@/assets/icons/logo-icon.svg';

const AuthHero = () => {
  return (
    <div className="flex max-w-md flex-col items-center justify-center gap-6 text-center">
      <div className="size-16 rounded-2xl bg-white/20 p-2 backdrop-blur-sm">
        <LogoIcon className="size-full" />
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-white">Your Universe of Cinema, Connected.</h1>
        <p className="text-lg text-white/90">
          Discover, discuss, and track your favorite movies effortlessly.
        </p>
      </div>
    </div>
  );
};

export default AuthHero;
