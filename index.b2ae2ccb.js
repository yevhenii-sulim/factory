!function(){const e=250;function t(t,n){let o=t.offsetLeft;if(t.offsetLeft>=0)return t.style="\n      opacity:0\n    ",void setTimeout((()=>t.style=`\n      left:${-(t.childElementCount-1)*n.offsetWidth}px;\n      opacity:1\n    `),e);o%n.offsetWidth==0&&(t.style=`\n    left:${o}px;\n      opacity:0\n    `,setTimeout((()=>(o+=n.offsetWidth,t.style=`\n      left:${o}px;\n      opacity:1\n    `)),e)),position=Math.abs(o)/n.offsetWidth}function n(t,n){let o=t.offsetLeft;if(t.offsetLeft<=-(t.childElementCount-1)*n.offsetWidth)return t.style=`\n    left:${o}px;\n    opacity:0;\n    `,void setTimeout((()=>t.style="\n      left:0px;\n      opacity:1\n    "),e);o%n.offsetWidth==0&&(t.style=`\n    left:${o}px;\n    opacity:0;\n    `,setTimeout((()=>{o-=n.offsetWidth,t.style=`\n      left:${o}px;\n      opacity:1\n    `}),e))}function o(e,t,n){const o=Math.abs(t.offsetLeft)/n,i=document.getElementById(`${e[o]?.dataset.atribute}`);i&&(i.style.display="block",setTimeout((()=>i.classList.add("is_open")),100),window.addEventListener("keydown",s))}function s(e){const t=document.querySelector(".backdrop.is_open");t&&"Escape"===e.key&&t.classList.remove("is_open"),window.removeEventListener("keydown",s)}let i=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(document.querySelector(".book_product").classList.add("is_loading"),t.unobserve(r))}))}),{root:null,threshold:.1}),r=document.querySelector(".box_product");let c=new IntersectionObserver((function(e,t){e.forEach((e=>{if(e.isIntersecting){const e=document.querySelector(".bread_with_egg "),n=document.querySelector(".bread_with_cheese");e.classList.add("is_loading"),n.classList.add("is_loading"),t.unobserve(d)}}))}),{root:null,rootMargin:"10px",threshold:1}),d=document.querySelector(".adress_img");let l=0,a=new IntersectionObserver((function(e,t){e.forEach((e=>{if(e.isIntersecting){if(window.innerWidth>=1200)return l+=3,_.append(...Array.from(v).slice(l,v.length)),void t.unobserve(f);l+=1,_.append(...Array.from(v).slice(l,l+1)),l>=v.length&&t.unobserve(f)}}))}),{root:null,rootMargin:"0px",threshold:1}),f=document.querySelector("#mark");const[u,p,y,m,h,b]=['[data-atribute="prev"]','[data-atribute="next"]',".box_technique",".about_technique",".details_product","body"].map((e=>document.querySelector(e))),v=document.querySelectorAll(".project_element"),_=document.querySelector(".box_project");_.innerHTML="",window.innerWidth>=1200?_.append(...Array.from(v).slice(0,3)):_.append(...Array.from(v).slice(0,1));const L=y.children,g=m.offsetWidth;u.addEventListener("click",(()=>t(y,m))),p.addEventListener("click",(()=>n(y,m))),h.addEventListener("click",(()=>o(L,y,g))),b.addEventListener("click",(function(e){if("backdrop"===e.target.classList[0]||"close"===e.target.dataset.atribute){const e=document.querySelector(".backdrop.is_open");e&&(e.classList.remove("is_open"),setTimeout((()=>e.style.display="none"),500))}})),c.observe(d),a.observe(f),i.observe(r)}();
//# sourceMappingURL=index.b2ae2ccb.js.map
