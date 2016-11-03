/**
 * Created by littlestone on 2016/11/2.
 */
export interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
  }
}