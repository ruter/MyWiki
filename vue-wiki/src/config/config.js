let config = {
  repository: {
    name: 'MyWiki',
    owner: 'ruter',
    branch: 'master',
    resource: 'content'
  },
  accessToken: '',
  wiki: {
    name: "TNK WIKI",
    logo: require('../assets/logo.png'),
    description: "Hope you can find something useful :-)",
    nav: [
      {
        title: 'Home',
        path: '/',
        externalLink: false
      },
      {
        title: 'Blog',
        path: 'http://blog.ruterly.com',
        externalLink: true
      }
    ]
  }
};
export default config;