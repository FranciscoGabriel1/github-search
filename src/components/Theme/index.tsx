import { createTheme } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";
import shadows from "@mui/material/styles/shadows";

const palette = createPalette({
  primary: {
    main: "#5865F2",
  },
  secondary: {
    main: "#5C6F7E",
  },
  background: {
    default: "#f4f7f9",
  },
  primaryColors: {
    learningDefault: {
      light: "#F37022",
      dark: "#EE145B",
    },
    learningDark: {
      light: "#D9641E",
      dark: "#D41251",
    },
    pagesDefault: {
      light: "#FAA619",
      dark: "#F37022",
    },
    pagesDark: {
      light: "#E09516",
      dark: "#D9641E",
    },
    formsDefault: {
      light: "#FECE47",
      dark: "#FAA619",
    },
    formsDark: {
      light: "#E6BA40",
      dark: "#E09516",
    },
    tasksDefault: {
      light: "#A6CE39",
      dark: "#72BF44",
    },
    tasksDark: {
      light: "#92B532",
      dark: "#63A63B",
    },
    boardsDefault: {
      light: "#00DFCC",
      dark: "#009BDD",
    },
    boardsDark: {
      light: "#00C4B4",
      dark: "#008AC4",
    },
    flowDefault: {
      light: "#14DBC7",
      dark: "#14CCB9",
    },
    flowDark: {
      light: "#13CFBB",
      dark: "#11B3A2",
    },
    connectorDefault: {
      light: "#BA64A7",
      dark: "#9B4088",
    },
    connectorDark: {
      light: "#A15690",
      dark: "#823672",
    },
    collabDefault: {
      light: "#FF7971",
      dark: "#FF4444",
    },
    collabDark: {
      light: "#FF6965",
      dark: "#EE0000",
    },
  },
  secondaryColors: {
    learningDefault: {
      main: "#ED145B",
    },
    learningDark: {
      main: "#D41251",
    },
    pagesDefault: {
      main: "#F37022",
    },
    pagesDark: {
      main: "#D9641E",
    },
    formsDefault: {
      main: "#FAA619",
    },
    formsDark: {
      main: "#E09516",
    },
    tasksDefault: {
      main: "#A6CF38",
    },
    tasksDark: {
      main: "#91B531",
    },
    boardsDefault: {
      main: "#009BDD",
    },
    boardsDark: {
      main: "#008AC4",
    },
    flowDefault: {
      main: "#14CCB9",
    },
    flowDark: {
      main: "#11B3A2",
    },
    connectorDefault: {
      main: "#9B4088",
    },
    connectorDark: {
      main: "#753067",
    },
    collabDefault: {
      main: "#FF4444",
    },
    collabDark: {
      main: "#EE0000",
    },
  },
  shadesOfDark: {
    black: "#292841",
    ultraDark: "#404142",
    dark: "#58595b",
    steel: "#8C8D8F",
    medium: "#AFB0B3",
    light: "#D2D3D6",
    ultraLight: "#E8E9EB",
    background: "#F4F7F9",
    white: "#FFFFFF",
    whiteLight: "#F5F5F5",
  },
  thumbColors: {
    coral: {
      light: "#FF938F",
      main: "#FF6F69",
    },
    orange: {
      light: "#FFBA91",
      main: "#FFA16A",
    },
    yellow: {
      light: "#FAE399",
      main: "#FFCC5C",
    },
    green: {
      light: "#9CEFC6",
      main: "#88D8B0",
    },
  },
  systemColors: {
    caution: {
      light: "#FCD456",
      main: "#E3B420",
      dark: "#BD9108",
    },
    error: {
      light: "#FF8080",
      main: "##FF78B9",
      dark: "#A62121",
    },
    info: {
      light: "#56D5FF",
      main: "#1EAAD9",
      dark: "#088BB8",
    },
    success: {
      light: "#54F87B",
      main: "#1AB83F",
      dark: "#069126",
    },
  },
  tagsAndStatus: {
    0: "#e9f5ea",
    1: "#fff6e0",
    2: "#ffe9ea",
    3: "#58595B",
    4: "#FFF6DE",
    5: "#FFF5F7",
  },
  tagAndStatusText: {
    0: "#56CA00",
    1: "#FFB400",
    2: "#FF4C51",
    3: "#58595B",
    4: "#FFF6DE",
    5: "#FFF5F7",
  },
});

const theme = createTheme({ palette });

export const AppTheme = () =>
  createTheme({
    ...theme,
    typography: {
      fontFamily: ["Segoe UI", "Segoe UIns", "sans-serif"].join(","),
      htmlFontSize: 10,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { fontSize: 10 },
        },
      },
      MuiCard: { defaultProps: { sx: { boxShadow: 1 } } },
      MuiButton: {
        styleOverrides: {
          root: { padding: "1.2rem 2.2rem", fontSize: "1.4rem" },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: { fontSize: "1.4rem" },
        },
      },
    },
    shadows,
  });

interface SimplePaletteColorOptions {
  light?: string;
  dark?: string;
  main?: string;
}

interface PaletteColorOptions {
  learningDefault: SimplePaletteColorOptions;
  learningDark: SimplePaletteColorOptions;

  pagesDefault: SimplePaletteColorOptions;
  pagesDark: SimplePaletteColorOptions;

  formsDefault: SimplePaletteColorOptions;
  formsDark: SimplePaletteColorOptions;

  tasksDefault: SimplePaletteColorOptions;
  tasksDark: SimplePaletteColorOptions;

  boardsDefault: SimplePaletteColorOptions;
  boardsDark: SimplePaletteColorOptions;

  flowDefault: SimplePaletteColorOptions;
  flowDark: SimplePaletteColorOptions;

  connectorDefault: SimplePaletteColorOptions;
  connectorDark: SimplePaletteColorOptions;

  collabDefault: SimplePaletteColorOptions;
  collabDark: SimplePaletteColorOptions;
}

interface ShadesOfDarkPaletteOptions {
  black: string;
  ultraDark: string;
  dark: string;
  steel: string;
  medium: string;
  light: string;
  ultraLight: string;
  background: string;
  white: string;
  whiteLight: string;
}

interface ThumbColorsPaletteOptions {
  coral: SimplePaletteColorOptions;
  orange: SimplePaletteColorOptions;
  yellow: SimplePaletteColorOptions;
  green: SimplePaletteColorOptions;
}

interface SystemColorsPaletteOptions {
  caution: SimplePaletteColorOptions;
  error: SimplePaletteColorOptions;
  info: SimplePaletteColorOptions;
  success: SimplePaletteColorOptions;
}

declare module "@mui/material/styles" {
  interface Palette {
    primaryColors: PaletteColorOptions;
    secondaryColors: PaletteColorOptions;
    shadesOfDark: ShadesOfDarkPaletteOptions;
    thumbColors: ThumbColorsPaletteOptions;
    systemColors: SystemColorsPaletteOptions;
    tagsAndStatus: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    tagAndStatusText: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
  }

  interface PaletteOptions {
    primaryColors: PaletteColorOptions;
    secondaryColors: PaletteColorOptions;
    shadesOfDark: ShadesOfDarkPaletteOptions;
    thumbColors: ThumbColorsPaletteOptions;
    systemColors: SystemColorsPaletteOptions;
    tagsAndStatus?: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    tagAndStatusText: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
  }
}
