import { createSlice } from '@reduxjs/toolkit';
import { SessionState } from './state';
import { tokenLogin, passwordLogin } from './actions'

type Position = {
  deviceId: string;
  longitude: string;
  latitude: string;
}

const initialState: SessionState = {
  server: null,
  user: null,
  socket: null,
  includeLogs: false,
  logs: [],
  positions: {},
  history: {},
  error: undefined,
  authPending: false,
  token: '',
};

const { reducer, actions } = createSlice({
  name: 'session',
  initialState,
  reducers: {
    updateServer(state, action) {
      state.server = action.payload;
    },
    updateUser(state, action) {
      state.user = action.payload;
    },
    updateSocket(state, action) {
      state.socket = action.payload;
    },
    enableLogs(state, action) {
      state.includeLogs = action.payload;
      if (!action.payload) {
        state.logs = [];
      }
    },
    updateLogs(state, action) {
      state.logs.push(...action.payload);
    },
    updatePositions(state, action) {
      const liveRoutes = state.user.attributes.mapLiveRoutes || state.server.attributes.mapLiveRoutes || 'none';
      const liveRoutesLimit = state.user.attributes['web.liveRouteLength'] || state.server.attributes['web.liveRouteLength'] || 10;
      action.payload.forEach((position: Position) => {
        state.positions[position.deviceId] = position;
        if (liveRoutes !== 'none') {
          const route = state.history[position.deviceId] || [];
          const last = route.at(-1);
          if (!last || (last[0] !== position.longitude && last[1] !== position.latitude)) {
            state.history[position.deviceId] = [...route.slice(1 - liveRoutesLimit), [position.longitude, position.latitude]];
          }
        } else {
          state.history = {};
        }
      });
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getToken.pending, () => ({ ...initialState, authPending: true, error: undefined }));
    // builder.addCase(getToken.fulfilled, (state, action) => {
    //   state.authPending = false;
    //   state.token = action.payload;
    // });
    // builder.addCase(getToken.rejected, (state, action) => {
    //   state.authPending = false;
    //   state.error = action.payload as string;
    // });
    builder.addCase(passwordLogin.pending, () => ({ ...initialState, authPending: true, error: undefined }));
    builder.addCase(passwordLogin.fulfilled, (state, action) => {
      state.authPending = false;
      state.user = action.payload;
    });
    builder.addCase(passwordLogin.rejected, (state, action) => {
      state.authPending = false;
      state.error = action.payload as string;
    });
    builder.addCase(tokenLogin.pending, () => ({ ...initialState, authPending: true, error: undefined }));
    builder.addCase(tokenLogin.fulfilled, (state, action) => {
      state.authPending = false;
      state.user = action.payload;
    });
    builder.addCase(tokenLogin.rejected, (state, action) => {
      state.authPending = false;
      state.error = action.payload as string;
    })
  }
});

export { actions as sessionActions };
export { reducer as sessionReducer };
