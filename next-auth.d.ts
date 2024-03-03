import NextAuth, { type DefaultSession } from "next-auth";

// Declare your framework library
declare module "next-auth" {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    username: string;
    password: string;
    phoneNumber: string;
  }

  /**
   * Returned by `useSession`, `auth`, contains information about the active session.
   */
  interface Session {
    user: User & {
      username: string;
      password: string;
      phoneNumber: string;
    };
    token: {
      id: string;
      username: string;
      password: string;
      phoneNumber: string;
    };
  }
}
