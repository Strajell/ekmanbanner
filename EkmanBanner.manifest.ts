import { Composer } from "@omnia/tooling/composers";
import { Guid } from "@omnia/fx/models";
import { FontAwesomeIcon } from "@omnia/fx-models";

Composer.registerManifest(
  new Guid("5562dcd3-0125-4610-9790-94789c48133b"),
  "EkmanBanner"
)
  .registerWebComponent({
    elementName: "fa-ekman-block",
    entryPoint: "./EkmanBanner.tsx",
  })
  .withDefinition({
    title: "Ekman Block",
    description: "EkmanBlock with links",
    icon: new FontAwesomeIcon("far fa-spinner"),
  })
  .registerOmniaBlock({
    category: "Page Content",
  });

Composer.registerManifest(
  new Guid("89eec6b3-f950-41ba-a536-1439ac3ac497"),
  "EkmanBanner.settings"
).registerWebComponent({
  elementName: "fa-ekman-block-settings",
  entryPoint: "./EkmanBannerSettings.tsx",
});
