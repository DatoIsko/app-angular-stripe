import { stripePubKey } from "../helpers/config";

export const environment = {
  production: true,
  stripe: {
    pubKey: stripePubKey
  }
};
