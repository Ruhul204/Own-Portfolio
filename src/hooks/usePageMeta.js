import { useEffect } from "react";

export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = `${title} | Md. Ruhul Amin Shovan`;
    document.title = fullTitle;
    const setMeta = (selector, attribute, value) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
  }, [title, description]);
}
