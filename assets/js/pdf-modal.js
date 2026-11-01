// BTechX - Common PDF Viewer Routing & Scroll Position Memory Logic (v17.2)
(function () {
  // 1. Scroll Position Restoration when returning from viewer.html
  function restorePreviousScroll() {
    try {
      const savedScroll = sessionStorage.getItem("btechx_viewer_return_scroll");
      const savedElemId = sessionStorage.getItem("btechx_viewer_return_elem");

      if (savedScroll !== null) {
        const scrollPos = parseInt(savedScroll, 10);
        // Clear saved scroll so normal reloads don't scroll unexpectedly
        sessionStorage.removeItem("btechx_viewer_return_scroll");
        sessionStorage.removeItem("btechx_viewer_return_elem");

        if (isNaN(scrollPos) || scrollPos < 0) return;

        const performScroll = () => {
          if (savedElemId) {
            const el = document.getElementById(savedElemId);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
              // Elegant glow pulse to guide the student's eyes
              const prevTransition = el.style.transition;
              const prevBoxShadow = el.style.boxShadow;
              el.style.transition = "box-shadow 0.4s ease, border-color 0.4s ease";
              el.style.boxShadow = "0 0 0 2px var(--primary, #00f2fe), 0 0 24px rgba(0, 242, 254, 0.28)";
              setTimeout(() => {
                el.style.boxShadow = prevBoxShadow;
                el.style.transition = prevTransition;
              }, 1600);
              return;
            }
          }

          window.scrollTo({
            top: scrollPos,
            behavior: "smooth"
          });
        };

        // Run smoothly after layout calculation
        requestAnimationFrame(() => {
          setTimeout(performScroll, 50);
        });
        // Secondary fallback to guarantee position if fonts or images load slightly later
        setTimeout(performScroll, 220);
      }
    } catch (err) {}
  }

  // Restore on DOMContentLoaded and on pageshow (supports browser bfcache)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", restorePreviousScroll);
  } else {
    restorePreviousScroll();
  }
  window.addEventListener("pageshow", restorePreviousScroll);

  // 2. Click Handling and Position Recording
  document.addEventListener("DOMContentLoaded", () => {
    // Purge any legacy modal leftover in cached DOM
    const legacyModal = document.getElementById("pdfModal");
    if (legacyModal) legacyModal.remove();

    const pdfLinks = document.querySelectorAll(".syl-link, .download-btn, .view-btn, .qna-btn");

    // Determine if a document link has no valid PDF attached or is unavailable
    // Rule: ONLY actual PDF (.pdf) files are supported and clickable.
    function isLinkUnavailable(link) {
      const href = (link.getAttribute("href") || "").trim();
      if (
        !href ||
        href === "#" ||
        href === "" ||
        href.startsWith("javascript:") ||
        link.classList.contains("unavailable") ||
        link.classList.contains("disabled") ||
        link.innerText.includes("Coming Soon")
      ) {
        return true;
      }

      // Allow normal page navigation links (e.g. .html or page anchors)
      if (href.endsWith(".html") || href.includes(".html#") || href.startsWith("#subjects") || href.startsWith("#year-")) {
        return false;
      }

      // Strictly enforce: ONLY PDF files (.pdf) are clickable!
      const cleanHref = href.split("?")[0].split("#")[0].toLowerCase();
      if (!cleanHref.endsWith(".pdf")) {
        return true;
      }

      return false;
    }

    // Pre-process all document links: mark non-PDF / un-uploaded / empty links as unclickable and disabled
    pdfLinks.forEach(link => {
      if (isLinkUnavailable(link)) {
        link.classList.add("disabled", "unavailable");
        link.setAttribute("aria-disabled", "true");
        link.setAttribute("tabindex", "-1");
        if (!link.getAttribute("title")) {
          const href = (link.getAttribute("href") || "").trim().toLowerCase();
          if (href.endsWith(".docx") || href.endsWith(".doc") || href.endsWith(".pptx") || href.endsWith(".ppt") || href.endsWith(".zip")) {
            link.setAttribute("title", "Only PDF files are supported (Unavailable)");
          } else {
            link.setAttribute("title", "PDF not uploaded yet (Unavailable)");
          }
        }
      }
    });

    pdfLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        // If not a PDF or unavailable, make it strictly unclickable
        if (isLinkUnavailable(link)) {
          e.preventDefault();
          e.stopImmediatePropagation();
          return false;
        }

        const href = (link.getAttribute("href") || "").trim();

        // Allow default navigation for HTML pages or in-page anchor jumps
        if (href && (href.endsWith(".html") || href.includes(".html#") || href.startsWith("#subjects") || href.startsWith("#year-"))) {
          return;
        }

        e.preventDefault();

        // Save current scroll position and containing element ID
        const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
        const parentBlock = link.closest(".module-block, tr, .note-card, .subject-card");
        const elemId = (parentBlock && parentBlock.id) ? parentBlock.id : "";

        let title = "Document Viewer";
        const subjectEl = link.closest("tr")?.querySelector(".syl-subject-name") || 
                          link.closest(".module-block")?.querySelector("h3") ||
                          link.closest(".note-card")?.querySelector("h3");
        if (subjectEl) {
          title = subjectEl.innerText.trim();
          if (link.classList.contains("qna-btn") || link.innerText.includes("QNA")) {
            title += " - Question Bank (QNA)";
          }
        }

        // Check current page nesting to route to viewer.html properly
        const currentPath = window.location.pathname;
        const isSubfolder = currentPath.includes("/1stYearSub/") || currentPath.includes("/2ndYearSub/");
        const viewerBase = isSubfolder ? "../viewer.html" : "viewer.html";

        // Save originating page URL and scroll state
        const returnUrl = window.location.href;
        try {
          sessionStorage.setItem("btechx_viewer_return_url", returnUrl);
          sessionStorage.setItem("btechx_viewer_return_scroll", scrollY.toString());
          sessionStorage.setItem("btxLastInternalNav", Date.now().toString());
          if (elemId) {
            sessionStorage.setItem("btechx_viewer_return_elem", elemId);
          } else {
            sessionStorage.removeItem("btechx_viewer_return_elem");
          }
        } catch (err) {}

        // Normalize file path relative to root where viewer.html is located
        let normalizedFile = href;
        if (!normalizedFile.startsWith("http://") && !normalizedFile.startsWith("https://")) {
          normalizedFile = normalizedFile.replace(/^(\.\.\/)+/, "");
        }

        // Navigate to common standalone viewer in the same tab with return reference
        window.location.href = `${viewerBase}?file=${encodeURIComponent(normalizedFile)}&title=${encodeURIComponent(title)}&ref=${encodeURIComponent(returnUrl)}`;
      });
    });
  });
})();
