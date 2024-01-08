import { apiInstance } from '@/api/api-instance';
import { TOKEN_EXPIRATION } from '@/config/constants.ts';

type Credentials = {
  email: string;
  password: string;
}

export const auth = {
  generateLoginToken: () => apiInstance().post('session/token', { expiration: TOKEN_EXPIRATION }),
  passwordLogin: (credentials: Credentials, code: string) => {
    const query = `email=${encodeURIComponent(credentials?.email)}&password=${encodeURIComponent(credentials?.password)}`;
    return apiInstance().post('session', new URLSearchParams(code.length ? query + `&code=${code}` : query))
  },
  tokenLogin: (token: string) => apiInstance().get(`session?token=${encodeURIComponent(token)}`),
  logout: () => apiInstance().post('session', {})
}