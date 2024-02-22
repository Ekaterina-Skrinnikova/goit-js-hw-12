import{S as f,i}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function y(r){const l=`https://pixabay.com/api/?key=42469409-3f592d4c2a8b117d2f80b97d4&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(l).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function g(r){return r.map(({webformatURL:o,largeImageURL:s,tags:l,likes:e,views:t,comments:a,downloads:d})=>`<li class="gallery-item">
                <a class="gallery-link" href="${s}">
                    <img class="gallery-image" src="${o}" alt="${l}"/>
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
                        <p class="gallery-text">${a}</p>
                    </div>
                    <div>
                        <h2 class="gallery-title">Downloads</h2>
                        <p class="gallery-text">${d}</p>
                    </div>
                 </div>   
                </li>`).join("")}const c=document.querySelector("form"),u=document.querySelector("span"),m=document.querySelector(".gallery"),h={captionsData:"alt",captionDelay:250},n={message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"",messageSize:"25",backgroundColor:"#EF4040",balloon:!0,theme:"light",close:!0,closeOnEscape:!0,closeOnClick:!0,overlay:!0,overlayClose:!0},p=new f(".gallery a",h);c.addEventListener("submit",v);function v(r){r.preventDefault();const o=r.currentTarget.elements.query.value;o&&(u.classList.add("loader"),y(o).then(s=>{s.total===0&&i.error(n),L(s.hits)}).catch(s=>i.error(n))),b()}function L(r){m.innerHTML=g(r),u.classList.remove("loader"),p.refresh()}function b(){c.reset()}
//# sourceMappingURL=commonHelpers.js.map
