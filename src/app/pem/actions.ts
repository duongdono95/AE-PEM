import { createAction } from '@reduxjs/toolkit';

export const pemActions = {
  connect: createAction('pem/connect'),
  connected: createAction<Record<string, unknown>>('pem/connected'),
  disconnect: createAction('pem/disconnect'),
};

export type PEMActions = (typeof pemActions)[keyof typeof pemActions];
