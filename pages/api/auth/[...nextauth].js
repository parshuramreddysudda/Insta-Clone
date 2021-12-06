import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],


  pages: {
    signIn: '/auth/signin',  // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  callbacks: {

    async session({session,token,user}){
      session.user.username=session.user.name
      .split(" ")
      .join("")
      .toLocaleLowerCase();
      session.user.uid=token.sub;
      return session;
    },
    // async redirect({ url, baseUrl }) { return baseUrl },
    // async session({ session, token, user }) { return session },
    // async jwt({ token, user, account, profile, isNewUser }) { return token }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // You can set the theme to 'light', 'dark' or use 'auto' to default to the
  // whatever prefers-color-scheme is set to in the browser. Default is 'auto'
  theme: {
    colorScheme: "light",
  },

  // Enable debug messages in the console if you are having problems
  debug: false,
})
