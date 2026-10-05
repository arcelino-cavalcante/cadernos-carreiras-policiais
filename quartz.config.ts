import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Meu Caderno",
    pageTitleSuffix: "",
    enableSPA: false,
    enablePopovers: true,
    analytics: null,
    locale: "pt-BR",
    baseUrl: "arcelino-cavalcante.github.io/cadernos-carreiras-policiais",
    ignorePatterns: ["private", "templates", ".obsidian", "recursos"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Literata",
        body: "Literata",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf9f6",
          lightgray: "#ebe9e3",
          gray: "#c3c0b8",
          darkgray: "#56534c",
          dark: "#25231f",
          secondary: "#8a5a2b",
          tertiary: "#b07d4a",
          highlight: "rgba(176, 141, 87, 0.14)",
          textHighlight: "#f2e08a66",
        },
        darkMode: {
          light: "#1c1b18",
          lightgray: "#33312c",
          gray: "#6b675d",
          darkgray: "#c9c3b6",
          dark: "#e6e1d6",
          secondary: "#d8b483",
          tertiary: "#e0c090",
          highlight: "rgba(216, 180, 131, 0.2)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
