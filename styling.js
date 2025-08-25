
document.addEventListener("DOMContentLoaded", () => {

  const copySvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
    </svg>`;

  // const copySvg = `    
  //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-copy-icon lucide-clipboard-copy"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><path d="M16 4h2a2 2 0 0 1 2 2v4"/><path d="M21 14H11"/><path d="m15 10-4 4 4 4"/></svg>` ;
    
  const checkSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6L9 17l-5-5"/>
    </svg>`;

  document.querySelectorAll(".sourceCode").forEach(div => {
    // Only attach button if there is a <pre> with <code> inside
    const pre = div.querySelector("pre");
    if (!pre) return;

    // Avoid duplicate buttons
    if (div.querySelector(".copy-btn")) return;

    const btn = document.createElement("button");
    btn.innerHTML = copySvg; // icon only
    // btn.innerHTML = `${copyIcon}`;
    // btn.innerHTML = `copy ${copyIcon}`;
    btn.className = "copy-btn";
    btn.title = "Copy code";
    
    // const btn = document.createElement("span");
    // btn.innerHTML = copyIcon;   // <-- start with copy icon
    // // btn.textContent = "📋";
    // btn.className = "copy-btn";
    // btn.title = "Copy code";

    btn.addEventListener("click", () => {
      const codeEl = pre.querySelector("code");
      if (!codeEl) return;

      const text = codeEl.innerText; // copy ONLY the code text
      navigator.clipboard.writeText(text).then(() => {
        // btn.textContent = "✅";
        // btn.innerHTML = checkIcon;   // ✅ swap to check icon
        // btn.innerHTML = `copy ${checkIcon}`;   // ✅ swap to check icon
        btn.innerHTML = checkSvg;   // swap icon to check
        // btn.innerHTML = `${checkIcon}`;   // ✅ swap to check icon
        // setTimeout(() => btn.textContent = "📋", 1200);
        // setTimeout(() => btn.innerHTML = `copy ${copyIcon}`, 1200);
        setTimeout(() => btn.innerHTML = copySvg, 1200);
      });
    });

    div.appendChild(btn);
  });
});
