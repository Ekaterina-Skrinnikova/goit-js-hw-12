import{a as O,S as P,i as d}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function f(r,o,s){const n="42469409-3f592d4c2a8b117d2f80b97d4",e=new URLSearchParams({key:n,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s});return(await O.get(`https://pixabay.com/api/?${e}`)).data}function q(r){return r.map(({webformatURL:o,largeImageURL:s,tags:n,likes:e,views:t,comments:i,downloads:E})=>`<li class="gallery-item">
                <a class="gallery-link" href="${s}">
                    <img class="gallery-image" src="${o}" alt="${n}"/>
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
                        <p class="gallery-text">${i}</p>
                    </div>
                    <div>
                        <h2 class="gallery-title">Downloads</h2>
                        <p class="gallery-text">${E}</p>
                    </div>
                 </div>   
                </li>`).join("")}const v=document.querySelector("form"),h=document.querySelector(".load-btn"),L=document.querySelector("span"),b=document.querySelector(".gallery"),x={captionsData:"alt",captionDelay:250},m={message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"",messageSize:"25",backgroundColor:"#EF4040",balloon:!0,theme:"light",close:!0,closeOnEscape:!0,closeOnClick:!0,overlay:!0,overlayClose:!0},y={message:"We're sorry, but you've reached the end of search results.",messageColor:"",messageSize:"25",backgroundColor:"#EF4040",balloon:!0,theme:"light",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,overlay:!0,overlayClose:!0,overlayColor:"rgba(0, 0, 0, 0.3)",transitionIn:"fadeInUp"},B=new P(".gallery a",x),u=15;let C,c;v.addEventListener("submit",$);h.addEventListener("click",z);l();async function $(r){r.preventDefault(),w(),I();const o=r.currentTarget.elements.query.value.trim();if(o)try{const s=await f(o,1,u);if(console.log(s),s.total===0)return p(),l(),a(),d.error(m);s.totalHits<=u?(g(s.hits),l(),a()):(g(s.hits),S(),a(),C=o,c=1)}catch{l(),a(),d.error(m)}p(),a()}async function z(){w(),l();try{c+=1;const r=await f(C,c,u),o=Math.ceil(r.totalHits/u);if(c===o)return a(),d.error(y);g(r.hits);const e=2*document.querySelector(".gallery-image").getBoundingClientRect().height;window.scrollBy({top:e,behavior:"smooth"}),a(),S()}catch{a(),d.error(y)}}function g(r){b.insertAdjacentHTML("beforeend",q(r)),a(),B.refresh()}function p(){v.reset()}function I(){b.innerHTML=""}function l(){h.classList.add("is-hidden")}function S(){h.classList.remove("is-hidden")}function w(){L.classList.add("loader")}function a(){L.classList.remove("loader")}
//# sourceMappingURL=commonHelpers.js.map
