import{a as w,S as E,i as c}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function p(r,o,s){const a="42469409-3f592d4c2a8b117d2f80b97d4",e=new URLSearchParams({key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s});return(await w.get(`https://pixabay.com/api/?${e}`)).data}function O(r){return r.map(({webformatURL:o,largeImageURL:s,tags:a,likes:e,views:t,comments:n,downloads:S})=>`<li class="gallery-item">
                <a class="gallery-link" href="${s}">
                    <img class="gallery-image" src="${o}" alt="${a}"/>
                </a>
                <div class="gallery-sign">
                    <div>
                        <h2 class="gallery-title">Likes</h2>
                        <p class="gallery-text">${e}</p>
                    </div>
                    <div>
                        <h2 class="gallery-title">Views</h2>
                        <p class="gallery-text">${t}</p>
                    </div>
                    <div>
                        <h2 class="gallery-title">Comments</h2>
                        <p class="gallery-text">${n}</p>
                    </div>
                    <div>
                        <h2 class="gallery-title">Downloads</h2>
                        <p class="gallery-text">${S}</p>
                    </div>
                 </div>   
                </li>`).join("")}const v=document.querySelector("form"),h=document.querySelector(".load-btn"),L=document.querySelector("span"),b=document.querySelector(".gallery"),P={captionsData:"alt",captionDelay:250},m={message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"",messageSize:"25",backgroundColor:"#EF4040",balloon:!0,theme:"light",close:!0,closeOnEscape:!0,closeOnClick:!0,overlay:!0,overlayClose:!0},y={message:"We're sorry, but you've reached the end of search results.",messageColor:"",messageSize:"25",backgroundColor:"#EF4040",balloon:!0,theme:"light",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,overlay:!0,overlayClose:!0,overlayColor:"rgba(0, 0, 0, 0.3)",transitionIn:"fadeInUp"},q=new E(".gallery a",P),d=15,x=2;let l=1,B="";v.addEventListener("submit",$);h.addEventListener("click",z);i();async function $(r){r.preventDefault(),I();const o=r.currentTarget.elements.query.value.trim();if(o)try{const s=await p(o,l,d);if(s.total===0)return f(),i(),c.error(m);if(s.totalHits<d)u(s.hits),i();else return u(s.hits),C(),o}catch{i(),c.error(m)}f()}async function z(){M(),i();try{l+=1;const r=await p(B,l,d),o=Math.ceil(r.totalHits/d);if(l>o)return c.error(y);u(r.hits);const a=document.querySelector(".gallery-image").getBoundingClientRect().height,e=x*a;window.scrollBy(0,e),g(),C()}catch{g(),c.error(y)}}function u(r){b.insertAdjacentHTML("beforeend",O(r)),g(),q.refresh()}function f(){v.reset()}function I(){b.innerHTML=""}function i(){h.classList.add("is-hidden")}function C(){h.classList.remove("is-hidden")}function M(){L.classList.add("loader")}function g(){L.classList.remove("loader")}
//# sourceMappingURL=commonHelpers.js.map
