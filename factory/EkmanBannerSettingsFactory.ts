import { EkmanBannerBlockSettings } from "../EkmanBannerSettings";

export const EkmanBannerSettingsFactory = {
  defaultSettings(): EkmanBannerBlockSettings {
    return {
      linkHeader: "link",
      linkUrl: "about",
      header: "header",
      content: "content",
      onHover: "hover effect",
      textColor: "white",
    };
  },
};
