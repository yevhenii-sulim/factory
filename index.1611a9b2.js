function e(e,t){let i=e.offsetLeft;if(e.offsetLeft>=0)return e.style="\n      opacity:0\n    ",void setTimeout((()=>e.style=`\n      left:${-(e.childElementCount-1)*t.offsetWidth}px;\n      opacity:1\n    `),250);i%t.offsetWidth==0&&(e.style=`\n    left:${i}px;\n      opacity:0\n    `,setTimeout((()=>(i+=t.offsetWidth,e.style=`\n      left:${i}px;\n      opacity:1\n    `)),250)),position=Math.abs(i)/t.offsetWidth}function t(e,t){let i=e.offsetLeft;if(e.offsetLeft<=-(e.childElementCount-1)*t.offsetWidth)return e.style=`\n    left:${i}px;\n    opacity:0;\n    `,void setTimeout((()=>e.style="\n      left:0px;\n      opacity:1\n    "),250);i%t.offsetWidth==0&&(e.style=`\n    left:${i}px;\n    opacity:0;\n    `,setTimeout((()=>{i-=t.offsetWidth,e.style=`\n      left:${i}px;\n      opacity:1\n    `}),250))}function i(e,t,i){const n=Math.abs(t.offsetLeft)/i,o=document.getElementById(`${e[n]?.dataset.atribute}`);o&&(o.style.display="block",setTimeout((()=>o.classList.add("is_open")),100),window.addEventListener("keydown",s))}function s(e){const t=document.querySelector(".backdrop.is_open");t&&"Escape"===e.key&&t.classList.remove("is_open"),window.removeEventListener("keydown",s)}const n=[{id:1,img:"./images/images/feedback.png",link:"https://yevhenii-sulim.github.io/feedback/",tytle:"Feedback",describe:"React, CSS-JS (styled-components). Розраховує відсоток позитивних відгуків"},{id:2,img:"./images/images/movies.png",link:"https://yevhenii-sulim.github.io/movies/",tytle:"Movies",describe:"React, CSS, REST. Кінопошук. За допомогою роутінгу створені 2 сторінки. Перша сторінка відображає найпопулярніші фільми,  друга - пошук за назвою"},{id:3,img:"./images/images/sign-up.png",link:"https://yevhenii-sulim.github.io/registration-user/",tytle:"Registration user",describe:"React, chakra-ui, redux toolkit. Телефонна книга. Авторизуйтесь. Якщо Ви не зареєстровані, будь ласка, зареєструйтесь. "},{id:4,img:"./images/images/zooportal.png",link:"https://yevhenii-sulim.github.io/zooportal/",tytle:"Zooportal",describe:"HTML, CSS, JS. Landing page"},{id:5,img:"./images/images/office.png",link:"https://yevhenii-sulim.github.io/portfolio/",tytle:"Office",describe:"HTML, SCSS, JS. Landing page"},{id:6,img:"./images/images/test-task.png",link:"https://yevhenii-sulim.github.io/test-task/",tytle:"My first test task",describe:"Pug, SCSS JS, JSON. Імітація відображення списку користувачів online чи ofline"},{id:7,img:"./images/images/ice-creame.png",link:"https://yevhenii-sulim.github.io/ice-cream/",tytle:"Ice cream",describe:"HTML, SCSS JS. Landing page"},{id:8,img:"./images/images/images.png",link:"https://yevhenii-sulim.github.io/images/",tytle:"Images",describe:"React, CSS, REST. Пошук картинок за назвою"},{id:9,img:"./images/images/test-task-nike.png",link:"https://yevhenii-sulim.github.io/task-test-react-nike/",tytle:"test-task-nike",describe:"React, React-router-dom, SCSS."},{id:10,img:"./images/images/git.png",link:"https://github.com/yevhenii-sulim",tytle:"My gitHub",describe:" "}];function o(e){return e.map((({id:e,img:t,link:i,tytle:s,describe:n})=>`\n    <li class="project_element" data-project="${e}">\n          <a href="${i}">\n            <img src=${t} alt="${s}" />\n          </a>\n          <div class="about_project">\n            <p class="sign_project">${s}</p>\n            <p class="description">\n              ${n}\n            </p>\n          </div>\n        </li>\n    `)).join("")}let c=0;const a=document.querySelector(".box_project");window.innerWidth,a.insertAdjacentHTML("beforeend",o(n.slice(c,c+3)));const[r,d,l,u,g,m]=['[data-atribute="prev"]','[data-atribute="next"]',".box_technique",".about_technique",".details_product","body"].map((e=>document.querySelector(e))),p=l.children,f=u.offsetWidth;r.addEventListener("click",(()=>e(l,u))),d.addEventListener("click",(()=>t(l,u))),g.addEventListener("click",(()=>i(p,l,f))),m.addEventListener("click",(function(e){if("backdrop"===e.target.classList[0]||"close"===e.target.dataset.atribute){const e=document.querySelector(".backdrop.is_open");e&&(e.classList.remove("is_open"),setTimeout((()=>e.style.display="none"),500))}}));let y={root:null,rootMargin:"10px",threshold:1},h=new IntersectionObserver((function(e,t){e.forEach((e=>{if(e.isIntersecting){const e=document.querySelector(".bread_with_egg "),i=document.querySelector(".bread_with_cheese");e.classList.add("is_loading"),i.classList.add("is_loading"),t.unobserve(b)}}))}),y),b=document.querySelector(".adress_img"),S=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(document.querySelector(".food_product").classList.add("is_loading"),document.querySelector(".book_product").classList.add("is_loading"),t.unobserve(k))}))}),y),k=document.querySelector("#observer_product"),v=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(window.innerWidth>=1200?(c+=3,a.insertAdjacentHTML("beforeend",o(n.slice(c,c+3)))):(c+=1,a.insertAdjacentHTML("beforeend",o(n.slice(c,c+1)))),c>=n.length&&t.unobserve(L))}))}),y),L=document.querySelector("#mark");v.observe(L),h.observe(b),S.observe(k);
//# sourceMappingURL=index.1611a9b2.js.map