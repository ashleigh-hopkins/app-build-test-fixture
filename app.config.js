module.exports = ({ config }) => {
  // When OTA_BASE_URL is set (during native builds), use it for updates.url.
  // This allows each platform to bake in its own manifest URL.
  const updatesUrl = process.env.OTA_BASE_URL || config.updates?.url;

  return {
    ...config,
    updates: {
      ...config.updates,
      url: updatesUrl,
    },
  };
};
