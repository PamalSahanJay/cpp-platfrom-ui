const base = {
    // OIDC_AUTHORITY: 'https://external-sso.ppd.wiley.com/auth/realms/wiley',
    OIDC_AUTHORITY: 'https://alm-external-sso-ppd.aws.wiley.com/auth/realms/wiley',
    OIDC_REDIRECT_URI: '/signin-oidc',
    OIDC_REFRESH_URI: '/refreshLogin',
    DOMAIN: window.location.hostname,
    OIDC_CLIENT_ID: '85f37850-b6a0-4dce-b05e-0c3d991e1f5a',
    OIDC_CLIENT_SECRET: '0575223e-adae-4d0e-9faf-3aa2fdbbad95',
  };
  
  export default base;
  