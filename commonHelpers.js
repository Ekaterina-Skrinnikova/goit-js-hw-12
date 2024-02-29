import{a as E,S as O,i as d}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function f(r,o,s){const a="42469409-3f592d4c2a8b117d2f80b97d4",e=new URLSearchParams({key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s});return(await E.get(`https://pixabay.com/api/?${e}`)).data}function P(r){return r.map(({webformatURL:o,largeImageURL:s,tags:a,likes:e,views:t,comments:n,downloads:w})=>`<li class="gallery-item">
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
                        <p class="gallery-text">${w}</p>
                    </div>
                 </div>   
                </li>`).join("")}const v=document.querySelector("form"),h=document.querySelector(".load-btn"),L=document.querySelector("span"),b=document.querySelector(".gallery"),q={captionsData:"alt",captionDelay:250},m={message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"",messageSize:"25",backgroundColor:"#EF4040",balloon:!0,theme:"light",close:!0,closeOnEscape:!0,closeOnClick:!0,overlay:!0,overlayClose:!0},y={message:"We're sorry, but you've reached the end of search results.",messageColor:"",messageSize:"25",backgroundColor:"#EF4040",balloon:!0,theme:"light",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,overlay:!0,overlayClose:!0,overlayColor:"rgba(0, 0, 0, 0.3)",transitionIn:"fadeInUp"},x=new O(".gallery a",q),u=15;let C,l;v.addEventListener("submit",B);h.addEventListener("click",$);i();async function B(r){r.preventDefault(),z();const o=r.currentTarget.elements.query.value.trim();if(o)try{const s=await f(o,1,u);if(console.log(s),s.total===0)return p(),i(),d.error(m);s.totalHits<=u?(g(s.hits),i()):(g(s.hits),S(),C=o,l=1)}catch{i(),d.error(m)}p()}async function $(){I(),i();try{l+=1;const r=await f(C,l,u),o=Math.ceil(r.totalHits/u);if(l===o)return c(),d.error(y);g(r.hits);const e=2*document.querySelector(".gallery-image").getBoundingClientRect().height;window.scrollBy({top:e,behavior:"smooth"}),c(),S()}catch{c(),d.error(y)}}function g(r){b.insertAdjacentHTML("beforeend",P(r)),c(),x.refresh()}function p(){v.reset()}function z(){b.innerHTML=""}function i(){h.classList.add("is-hidden")}function S(){h.classList.remove("is-hidden")}function I(){L.classList.add("loader")}function c(){L.classList.remove("loader")}
//# sourceMappingURL=commonHelpers.js.map
