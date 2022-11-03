import { Guid } from "@omnia/fx-models";
import { defineVueWebComponent, useBlockSettingsReader } from "@omnia/fx/ux";
import { EkmanBannerBlockSettings } from "./EkmanBannerSettings";
import { EkmanBannerSettingsFactory } from "./factory/EkmanBannerSettingsFactory";
import { EkmanBannerViewStyles } from "./EkmanBanner.css";

export default defineVueWebComponent({
  props: {
    settingsKey: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const settings = useBlockSettingsReader<EkmanBannerBlockSettings>({
      defaultValue: EkmanBannerSettingsFactory.defaultSettings(),
      editElementManifestId: new Guid("89eec6b3-f950-41ba-a536-1439ac3ac497"),
    });

    return () => (
      <div>
        <a href="about" class={EkmanBannerViewStyles.linkHeaderText}>
          {settings.linkHeader.toUpperCase()}
        </a>

        <h1 class={EkmanBannerViewStyles.headerText}>{settings.header}</h1>

        <p class={EkmanBannerViewStyles.contentText}>
          <i class="far fa-thin fa-horizontal-rule" />
          {settings.content}
        </p>

        <div class={EkmanBannerViewStyles.onHover}>
          <span class={EkmanBannerViewStyles.onHoverArrow}>
            <i class="white--text far fa-arrow-right" />
          </span>
          <span class={EkmanBannerViewStyles.onHoverCircle}>
            <v-btn class="mx-2" depressed fab dark large color="light-blue" />
          </span>
        </div>
      </div>
    );
  },
});
