---
# Front matter to make Jekyll to post-process it via Liquid
---

// Only trigger if service workers are supported in browser.
if ("serviceWorker" in navigator) {
  // Wait until window is loaded before registering.
  window.addEventListener("load", () => {
    // Register the service worker with "/" as it's scope.
    navigator.serviceWorker
      .register("{{ '/service-worker.js' | prepend: site.baseurl | prepend: site.url }}", { scope: "{{ '/' | | prepend: site.baseurl  }}" })
      // Output success/failure of registration.
      .then(() => console.log("SW registered"))
      .catch(() => console.error("SW registration failed"));
  });
}
