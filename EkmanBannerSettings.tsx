import { useBlockSettingsWriter, defineVueWebComponent } from "@omnia/fx/ux";

import { reactive } from "vue";
import { EkmanBanner } from "./model/EkmanBanner";
import { EkmanBannerSettingsFactory } from "./factory/EkmanBannerSettingsFactory";

export interface EkmanBannerBlockSettings {
  linkHeader: string;
  linkUrl: string;
  header: string;
  content: string;
  onHover: string;
  textColor: string;
}

export default defineVueWebComponent({
  setup(props) {
    const settings = useBlockSettingsWriter<EkmanBannerBlockSettings>({
      disableAutoSync: false,
    });
    //const { theming } = useTheme();
    const currentState = reactive({
      linkHeader: settings.linkHeader,
      linkUrl: settings.linkUrl,
      header: settings.header,
      content: settings.content,
      onHover: settings.onHover,
      textColor: settings.textColor,
    });

    //const loc = useLocalize<OmniaUxLocalization>(OmniaUxLocalizationNamespace);

    return () => (
      <div>
        <v-text-field label="Link Header" v-model={currentState.linkHeader} />
        <v-text-field
          label="Internal Link URL"
          v-model={currentState.linkUrl}
        />
        <v-text-field label="Header" v-model={currentState.header} />
        <v-textarea label="Content" v-model={currentState.content} />
        <v-text-field label="Text color" v-model={currentState.textColor} />
        <v-btn
          onClick={() => {
            Object.assign(settings, currentState);

            settings.save();
          }}
        >
          Set block
        </v-btn>
      </div>
    );
  },
});
