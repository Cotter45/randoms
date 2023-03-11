// This file is used to initialize configuration && ENV variables

export const initConfig = async () => {
  // Instantiate all things to add to ctx here

  return {
    ctx: {
      // add all things to use in ctx like db connections or mocks here
    },
    // add any env vars here
    fileServer: true,
    logger: true,
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8000,
    dbUrl: process.env.DATABASE_URL,
  };
};
