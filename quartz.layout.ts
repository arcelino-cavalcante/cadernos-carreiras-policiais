import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzComponent } from "./quartz/components/types"

// Rodapé desativado
const NoFooter: QuartzComponent = () => null

// Menu lateral: 1) "Como usar os cadernos digitais" (link direto)  2) Concursos  3) demais
// Pastas com subitens apenas expandem; pastas-folha (matérias) abrem o caderno.
const explorer = Component.Explorer({
  folderClickBehavior: "collapse",
  sortFn: (a, b) => {
    const sa = (a.slugSegment || "").toLowerCase()
    const sb = (b.slugSegment || "").toLowerCase()
    const ra =
      sa === "como-usar-os-cadernos-digitais" || sa.startsWith("como-usar") || sa === "sobre-o-concurso"
        ? 0
        : sa === "concursos"
          ? 1
          : 2
    const rb =
      sb === "como-usar-os-cadernos-digitais" || sb.startsWith("como-usar") || sb === "sobre-o-concurso"
        ? 0
        : sb === "concursos"
          ? 1
          : 2
    if (ra !== rb) return ra - rb
    const sameType = (!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)
    if (sameType) {
      return (a.displayName || "").localeCompare(b.displayName || "", undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
    return !a.isFolder && b.isFolder ? 1 : -1
  },
})

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: NoFooter,
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    explorer,
  ],
  right: [Component.DesktopOnly(Component.TableOfContents())],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    explorer,
  ],
  right: [],
}
