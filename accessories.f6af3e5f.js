!function(){var e,t,o;!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),o=document.querySelector("body"),e.addEventListener("click",(function(){var n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),o.classList.toggle("no-scroll")}))}();
//# sourceMappingURL=accessories.f6af3e5f.js.map