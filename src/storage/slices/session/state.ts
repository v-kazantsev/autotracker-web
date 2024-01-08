export type SessionState = {
  server: any;
  user: any;
  socket: any;
  includeLogs: boolean;
  logs: string[];
  positions: {[key: string]: any};
  history:{[key: string]: any};
  error: string | undefined;
  authPending: boolean;
  token: string;
}