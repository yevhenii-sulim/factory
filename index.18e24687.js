function e(e,t){let o=e.offsetLeft;if(e.offsetLeft>=0)return e.style="\n      opacity:0\n    ",void setTimeout((()=>e.style=`\n      left:${-(e.childElementCount-1)*t.offsetWidth}px;\n      opacity:1\n    `),250);o%t.offsetWidth==0&&(e.style=`\n    left:${o}px;\n      opacity:0\n    `,setTimeout((()=>(o+=t.offsetWidth,e.style=`\n      left:${o}px;\n      opacity:1\n    `)),250)),position=Math.abs(o)/t.offsetWidth}function t(e,t){let o=e.offsetLeft;if(e.offsetLeft<=-(e.childElementCount-1)*t.offsetWidth)return e.style=`\n    left:${o}px;\n    opacity:0;\n    `,void setTimeout((()=>e.style="\n      left:0px;\n      opacity:1\n    "),250);o%t.offsetWidth==0&&(e.style=`\n    left:${o}px;\n    opacity:0;\n    `,setTimeout((()=>{o-=t.offsetWidth,e.style=`\n      left:${o}px;\n      opacity:1\n    `}),250))}function o(e,t,o){const s=Math.abs(t.offsetLeft)/o,i=document.getElementById(`${e[s]?.dataset.atribute}`);i&&(i.style.display="block",setTimeout((()=>i.classList.add("is_open")),100),window.addEventListener("keydown",n))}function n(e){const t=document.querySelector(".backdrop.is_open");t&&"Escape"===e.key&&t.classList.remove("is_open"),window.removeEventListener("keydown",n)}const[s,i,c,r,d,a]=['[data-atribute="prev"]','[data-atribute="next"]',".box_technique",".about_technique",".details_product","body"].map((e=>document.querySelector(e))),l=c.children,u=r.offsetWidth;s.addEventListener("click",(()=>e(c,r))),i.addEventListener("click",(()=>t(c,r))),d.addEventListener("click",(()=>o(l,c,u))),a.addEventListener("click",(function(e){if("backdrop"===e.target.classList[0]||"close"===e.target.dataset.atribute){const e=document.querySelector(".backdrop.is_open");e&&(e.classList.remove("is_open"),setTimeout((()=>e.style.display="none"),500))}}));let f={root:null,rootMargin:"200px",threshold:1},y=new IntersectionObserver((function(e,t){e.forEach((e=>{if(e.isIntersecting){const e=document.querySelector(".bread_with_egg "),o=document.querySelector(".bread_with_cheese");e.classList.add("is_loading"),o.classList.add("is_loading"),t.unobserve(p)}}))}),f),p=document.querySelector(".adress_img"),b=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(document.querySelector(".wood ").classList.add("is_loading"),t.unobserve(m))}))}),f),m=document.querySelector(".box_our_benefits"),_=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(document.querySelector(".food_product").classList.add("is_loading"),document.querySelector(".book_product").classList.add("is_loading"),t.unobserve(v))}))}),f),v=document.querySelector("#observer_product"),g=new IntersectionObserver((function(e,t){e.forEach((e=>{if(e.isIntersecting){const e=document.querySelector(".man_greeting"),o=document.querySelector(".girl_greeting");e.classList.add("is_loading"),o.classList.add("is_loading"),t.unobserve(h)}}))}),f),h=document.querySelector('[data-atrebute="myRootGreeting"]');y.observe(p),b.observe(m),_.observe(v),g.observe(h);
//# sourceMappingURL=index.18e24687.js.map