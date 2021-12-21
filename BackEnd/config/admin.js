module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b36ea7d420dccd09b93b22b0166e55c8'),
  },
});
