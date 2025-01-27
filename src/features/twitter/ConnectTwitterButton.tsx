import { useToast } from '../../hooks';
import { Twitter } from '../../icons/__generated';
import { Button } from '../../ui';
import { setOAuthCookie } from '../auth/oauth';

export const ConnectTwitterButton = () => {
  const { showError } = useToast();

  const setAuthCookie = () => {
    try {
      setOAuthCookie('twitter');
    } catch (e: any) {
      showError(e);
      return false;
    }
    return true;
  };

  const connect = () => {
    if (setAuthCookie()) {
      window.location.href = '/api/twitter/login';
    }
  };

  return (
    <Button onClick={connect}>
      <Twitter /> Connect Twitter
    </Button>
  );
};
