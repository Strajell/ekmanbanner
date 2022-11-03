import { style } from "typestyle";
import EkmanBanner from "./EkmanBanner";
import EkmanBannerSettings, {
  EkmanBannerBlockSettings,
} from "./EkmanBannerSettings";

export const EkmanBannerViewStyles = {
  headertext: (settings: EkmanBannerBlockSettings) => {
    return {
      fontSize: "60px!important",
      fontWeight: "600!important",
      fontFamily: "Georgia",
      letterSpacing: "-0.02em",
      color: settings.textColor,
    };
  },

  /*  headertext: style({
    function(settings: EkmanBannerBlockSettings) {
      return {
        fontSize: "60px!important",
        fontWeight: "600!important",
        fontFamily: "Georgia",
        letterSpacing: "-0.02em",
        color: settings.textColor,
      };
    },
  }),
 */
  headerText: style({
    fontSize: "60px!important",
    fontWeight: "600!important",
    fontFamily: "Georgia",
    letterSpacing: "-0.02em",
    color: "white",
  }),
  contentText: style({
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "400!important",
  }),
  linkHeaderText: style({
    color: "white!important",
    textDecoration: "none",
    $nest: {
      "&:hover": { textDecoration: "underline", cursor: "hand" },
    },
  }),
  onHover: style({
    display: "flex",
    justifyContent: "right",
    maxWidth: "15%",
  }),

  onHoverCircle: style({
    marginLeft: "-30px",
    transition: "all 0.3s",
    $nest: {
      "&:hover": { marginLeft: "-45px!important" },
    },
  }),

  onHoverArrow: style({
    zIndex: 3,
    paddingTop: "20px",
  }),
};
