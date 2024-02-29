import{a as S,S as w,i as c}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function f(r,o,s){const a="42469409-3f592d4c2a8b117d2f80b97d4",e=new URLSearchParams({key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s});return(await S.get(`https://pixabay.com/api/?${e}`)).data}function E(r){return r.map(({webformatURL:o,largeImageURL:s,tags:a,likes:e,views:t,comments:n,downloads:C})=>`<li class="gallery-item">
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
                        <p class="gallery-text">${C}</p>
                    </div>
                 </div>   
                </li>`).join("")}const p=document.querySelector("form"),g=document.querySelector(".load-btn"),v=document.querySelector("span"),L=document.querySelector(".gallery"),O={captionsData:"alt",captionDelay:250},h={message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"",messageSize:"25",backgroundColor:"#EF4040",balloon:!0,theme:"light",close:!0,closeOnEscape:!0,closeOnClick:!0,overlay:!0,overlayClose:!0},m={message:"We're sorry, but you've reached the end of search results.",messageColor:"",messageSize:"25",backgroundColor:"#EF4040",balloon:!0,theme:"light",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,overlay:!0,overlayClose:!0,overlayColor:"rgba(0, 0, 0, 0.3)",transitionIn:"fadeInUp"},P=new w(".gallery a",O),d=15,q=2;let i=1,x="";p.addEventListener("submit",B);g.addEventListener("click",$);l();async function B(r){r.preventDefault(),z();const o=r.currentTarget.elements.query.value.trim();if(o)try{const s=await f(o,i,d);if(s.total===0)return y(),l(),c.error(h);if(s.totalHits<d)u(s.hits),l();else return u(s.hits),I(),o}catch{l(),c.error(h)}y()}async function $(){M();try{i+=1;const r=await f(x,i,d),o=Math.ceil(r.totalHits/d);if(i>o)return c.error(m);u(r.hits);const a=document.querySelector(".gallery-image").getBoundingClientRect().height,e=q*a;window.scrollBy(0,e)}catch{b(),c.error(m)}}function u(r){L.insertAdjacentHTML("beforeend",E(r)),b(),P.refresh()}function y(){p.reset()}function z(){L.innerHTML=""}function l(){g.classList.add("is-hidden")}function I(){g.classList.remove("is-hidden")}function M(){v.classList.add("loader")}function b(){v.classList.remove("loader")}
//# sourceMappingURL=commonHelpers.js.map
