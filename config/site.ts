export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "SpaceSpark Creative",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Service",
      href: "/service",
    }
  ],
  navSubItems: [
    {
      label: "Service 1",
      href: "/services/serivces 1"
    },
    {
      label: "Service 2",
      href: "/services/serivces 2"
    },
    {
      label: "Service 3",
      href: "/services/serivces 3"
    },
    {
      label: "Service 3",
      href: "/services/serivces 4"
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
