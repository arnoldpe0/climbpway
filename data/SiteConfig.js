module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "Climb Pway", // Site title.
  siteTitleAlt: "Climb Pway", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://climbpway.com", // Domain of your website without pathPrefix.
  pathPrefix: "/climbpway", // Prefixes all links. For cases when deployed to .
  siteDescription: "Pawtuckaway Guide Book App", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-112746501-1", // GA tracking ID.
  disqusShortname: "climbpway", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Peter Arnold", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Im to climb some rocks and make a guide book.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/arnoldpe0/climbpway",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:arnoldpe0@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Peter Arnold", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
