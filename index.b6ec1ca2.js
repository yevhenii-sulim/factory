function e(e){return e&&e.__esModule?e.default:e}function t(e,t){let i=e.offsetLeft;if(e.offsetLeft>=0)return e.style="\n      opacity:0\n    ",void setTimeout((()=>e.style=`\n      left:${-(e.childElementCount-1)*t.offsetWidth}px;\n      opacity:1\n    `),250);i%t.offsetWidth==0&&(e.style=`\n    left:${i}px;\n      opacity:0\n    `,setTimeout((()=>(i+=t.offsetWidth,e.style=`\n      left:${i}px;\n      opacity:1\n    `)),250)),position=Math.abs(i)/t.offsetWidth}function i(e,t){let i=e.offsetLeft;if(e.offsetLeft<=-(e.childElementCount-1)*t.offsetWidth)return e.style=`\n    left:${i}px;\n    opacity:0;\n    `,void setTimeout((()=>e.style="\n      left:0px;\n      opacity:1\n    "),250);i%t.offsetWidth==0&&(e.style=`\n    left:${i}px;\n    opacity:0;\n    `,setTimeout((()=>{i-=t.offsetWidth,e.style=`\n      left:${i}px;\n      opacity:1\n    `}),250))}function s(e,t,i){const s=Math.abs(t.offsetLeft)/i,o=document.getElementById(`${e[s]?.dataset.atribute}`);o&&(o.style.display="block",setTimeout((()=>o.classList.add("is_open")),100),window.addEventListener("keydown",n))}function n(e){const t=document.querySelector(".backdrop.is_open");t&&"Escape"===e.key&&t.classList.remove("is_open"),window.removeEventListener("keydown",n)}var o;function c(e){return e.map((({id:e,img:t,link:i,tytle:s,describe:n})=>`\n    <li class="project_element" data-project="${e}">\n          <a href="${i}">\n            <img src=${t} alt="${s}" />\n          </a>\n          <div class="about_project">\n            <p class="sign_project">${s}</p>\n            <p class="description">\n              ${n}\n            </p>\n          </div>\n        </li>\n    `)).join("")}o=JSON.parse('[{"id":1,"img":"/factory/src/images/images/feedback.png","link":"https://yevhenii-sulim.github.io/feedback/","tytle":"Feedback","describe":"React, CSS-JS (styled-components). Розраховує відсоток позитивних відгуків"},{"id":2,"img":"./images/images/movies.png","link":"https://yevhenii-sulim.github.io/movies/","tytle":"Movies","describe":"React, CSS, REST. Кінопошук. За допомогою роутінгу створені 2 сторінки. Перша сторінка відображає найпопулярніші фільми,  друга - пошук за назвою"},{"id":3,"img":"./images/images/sign-up.png","link":"https://yevhenii-sulim.github.io/registration-user/","tytle":"Registration user","describe":"React, chakra-ui, redux toolkit. Телефонна книга. Авторизуйтесь. Якщо Ви не зареєстровані, будь ласка, зареєструйтесь. "},{"id":4,"img":"./images/images/zooportal.png","link":"https://yevhenii-sulim.github.io/zooportal/","tytle":"Zooportal","describe":"HTML, CSS, JS. Landing page"},{"id":5,"img":"./images/images/office.png","link":"https://yevhenii-sulim.github.io/portfolio/","tytle":"Office","describe":"HTML, SCSS, JS. Landing page"},{"id":6,"img":"./images/images/test-task.png","link":"https://yevhenii-sulim.github.io/test-task/","tytle":"My first test task","describe":"Pug, SCSS JS, JSON. Імітація відображення списку користувачів online чи ofline"},{"id":7,"img":"./images/images/ice-creame.png","link":"https://yevhenii-sulim.github.io/ice-cream/","tytle":"Ice cream","describe":"HTML, SCSS JS. Landing page"},{"id":8,"img":"./images/images/images.png","link":"https://yevhenii-sulim.github.io/images/","tytle":"Images","describe":"React, CSS, REST. Пошук картинок за назвою"},{"id":9,"img":"./images/images/test-task-nike.png","link":"https://yevhenii-sulim.github.io/task-test-react-nike/","tytle":"test-task-nike","describe":"React, React-router-dom, SCSS."},{"id":10,"img":"./images/images/git.png","link":"https://github.com/yevhenii-sulim","tytle":"My gitHub","describe":" "}]');let a=0;const r=document.querySelector(".box_project");window.innerWidth,r.insertAdjacentHTML("beforeend",c(e(o).slice(a,a+3)));const[d,l,u,g,m,p]=['[data-atribute="prev"]','[data-atribute="next"]',".box_technique",".about_technique",".details_product","body"].map((e=>document.querySelector(e))),f=u.children,y=g.offsetWidth;d.addEventListener("click",(()=>t(u,g))),l.addEventListener("click",(()=>i(u,g))),m.addEventListener("click",(()=>s(f,u,y))),p.addEventListener("click",(function(e){if("backdrop"===e.target.classList[0]||"close"===e.target.dataset.atribute){const e=document.querySelector(".backdrop.is_open");e&&(e.classList.remove("is_open"),setTimeout((()=>e.style.display="none"),500))}}));let h={root:null,rootMargin:"10px",threshold:1},b=new IntersectionObserver((function(e,t){e.forEach((e=>{if(e.isIntersecting){const e=document.querySelector(".bread_with_egg "),i=document.querySelector(".bread_with_cheese");e.classList.add("is_loading"),i.classList.add("is_loading"),t.unobserve(S)}}))}),h),S=document.querySelector(".adress_img"),k=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(document.querySelector(".food_product").classList.add("is_loading"),document.querySelector(".book_product").classList.add("is_loading"),t.unobserve(v))}))}),h),v=document.querySelector("#observer_product"),L=new IntersectionObserver((function(t,i){t.forEach((t=>{t.isIntersecting&&(window.innerWidth>=1200?(a+=3,r.insertAdjacentHTML("beforeend",c(e(o).slice(a,a+3)))):(a+=1,r.insertAdjacentHTML("beforeend",c(e(o).slice(a,a+1)))),a>=e(o).length&&i.unobserve(_))}))}),h),_=document.querySelector("#mark");L.observe(_),b.observe(S),k.observe(v);
//# sourceMappingURL=index.b6ec1ca2.js.map
