var e,t,o;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),o=document.querySelector("body");e.addEventListener("click",(()=>{const a="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!a),t.classList.toggle("is-open"),o.classList.toggle("no-scroll")}))})(),e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-modal-overlay"),o=document.querySelectorAll(".js-modal-close"),e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal"),a=document.querySelector('.js-modal[data-modal="'+o+'"]');t.classList.add("is-show"),a.classList.add("is-show")}))})),o.forEach((function(e){e.addEventListener("click",(function(){this.parentNode.classList.remove("is-show"),t.classList.remove("is-show")}))}));new Swiper(".swiper",{direction:"vertical",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});
//# sourceMappingURL=accessories.831aa1a5.js.map
