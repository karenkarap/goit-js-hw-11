import{a as p,S as m,i as n}from"./assets/vendor-CLAh-PDR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const u=o=>p.get("https://pixabay.com/api/",{params:{key:"51377392-58695daed08c65a7357b6e761",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}),l={gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader")},f=new m(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}),g=o=>{const t=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:r,views:i,comments:c,downloads:d})=>`
        <li class="gallery-item">
            <div class="card"> 
                <a class="gallery-link" href="${s}">
                    <img class="gallery-image" src="${a}" alt="${e}" />
                </a>
                <div class="info">
                    <div class="info-row labels">
                        <p>Likes</p>
                        <p>Views</p>
                        <p>Comments</p>
                        <p>Downloads</p>
                    </div>
                    <div class="info-row values">
                        <p>${r}</p>
                        <p>${i}</p>
                        <p>${c}</p>
                        <p>${d}</p>
                    </div>
                </div>
            </div>
        </li>
            `).join("");l.gallery.innerHTML=t,f.refresh()},y=()=>{l.gallery.innerHTML=""},h=()=>{l.loader.classList.remove("is-hidden")},L=()=>{l.loader.classList.add("is-hidden")},v={form:document.querySelector(".form"),gallery:document.querySelector(".gallery")},b=o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){n.warning({title:"Warning",message:"Search field cannot be empty.",position:"topRight"});return}y(),h(),u(t).finally(()=>{L()}).then(a=>{const s=a.data.hits;s.length===0&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),g(s)}).catch(a=>{console.log(a)})};v.form.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
