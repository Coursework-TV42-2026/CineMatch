import GoogleIcon from '@/assets/icons/google-icon.svg';
import { Button } from '@/components/ui/button';

type TSocialButtonsProps = {
  onGoogleClick?: () => void;
};

const SocialButtons = ({ onGoogleClick }: TSocialButtonsProps) => {
  return (
    <div className="space-y-3">
      <Button type="button" variant="outline" className="h-fit w-full" onClick={onGoogleClick}>
        <GoogleIcon className="size-5" />
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
};

export default SocialButtons;
