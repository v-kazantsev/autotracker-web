import dayjs from 'dayjs';

export const BASE_URL = 'https://gps.autotracker.group/api/';

export const TOKEN_EXPIRATION = dayjs().add(6, 'months').toISOString();