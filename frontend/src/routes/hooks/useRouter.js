import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export function useRouter() {
  const navigate = useNavigate();

  return useMemo(() => ({
    back: () => navigate(-1),
    forward: () => navigate(1),
    refresh: () => navigate(0),
    push: (href) => navigate(href),
    replace: (href) => navigate(href, { replace: true }),
  }), [navigate]);
}
