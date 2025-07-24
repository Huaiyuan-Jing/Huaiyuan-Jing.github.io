hexo.extend.filter.register("theme_inject", function (injects) {
  injects.header.raw(
    "default",
    '<meta name="google-site-verification" content="LXJ1yIUydqPx39hWuxwWHXx3-aKhuJQL2Ksk1JQVsZM" />'
  );
});
