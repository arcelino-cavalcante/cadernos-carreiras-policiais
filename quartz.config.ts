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
        header: "Inter",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#eff1f1",
          lightgray: "#dcdfdf",
          gray: "#8f9a8f",
          darkgray: "#5a615a",
          dark: "#1c1c1c",
          secondary: "#6c7c66",
          tertiary: "#819479",
          highlight: "rgba(129, 148, 121, 0.16)",
          textHighlight: "#e5f6db",
        },
        darkMode: {
          light: "#121212",
          lightgray: "#2c3032",
          gray: "#8f9a8f",
          darkgray: "#a7a7a7",
          dark: "#f5f5f5",
          secondary: "#a5b99c",
          tertiary: "#b9c9b0",
          highlight: "rgba(165, 185, 156, 0.18)",
          textHighlight: "#3f4a38",
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
