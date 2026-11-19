// Moves keyboard and screen reader focus to an element that is not a control
// (a heading, a section), without scrolling to it. tabindex="-1" makes it
// focusable from script only, so it never becomes a Tab stop.
export const focusElement = (element: HTMLElement) => {
  if (!element.hasAttribute('tabindex')) element.setAttribute('tabindex', '-1')
  element.focus({ preventScroll: true })
}

// The start of the page being read: its <h1>, else <main> itself. Used after a
// navigation and by the skip link, so both land on the same place.
export const focusPageStart = () => {
  const main = document.querySelector('main')
  const start = main?.querySelector<HTMLElement>('h1') ?? main
  if (start) focusElement(start)
}
