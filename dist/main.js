(()=>{"use strict";let e=[];if(null===sessionStorage.getItem("tasks"))e=[{title:"New Project",tasks:[{title:"Low Priority",description:"Description for a test task",dueDate:"2012-12-21",priority:"Low",status:"Open"},{title:"High Priority",description:"Description for a test task",dueDate:"2023-02-23",priority:"High",status:"Closed"},{title:"Med Priority",description:"Description for a test task",dueDate:"2023-06-20",priority:"Medium",status:"Open"}]}];else{const t=JSON.parse(sessionStorage.getItem("tasks"));e=t}const t=document.querySelector("body"),n=()=>{const e=document.querySelector(".expand-arrow"),t=document.querySelector(".new-project-wrapper"),n=document.querySelector(".projects-add");"⇓"==e.textContent?(e.textContent="⇒",t.style.visibility="hidden",n.style.visibility="hidden"):"⇒"==e.textContent&&(e.textContent="⇓",t.style.visibility="visible",n.style.visibility="visible")},a=e=>{document.querySelector(".side-bar-wrapper .category.active")&&(document.querySelector(".side-bar-wrapper .category.active").classList.remove("active"),i(e))},i=e=>{"category"===e.target.parentNode.className?e.target.parentNode.className+=" active":"category"===e.target.className&&(e.target.className+=" active"),d()},o=()=>{const e=document.querySelector(".new-project-wrapper"),t=document.createElement("form");t.classList="new-project-form",e.appendChild(t);const n=document.createElement("div");n.classList="project-name-wrapper",t.appendChild(n);const a=document.createElement("input");a.type="text",a.name="project-name",a.id="project-name",a.maxLength="12",n.appendChild(a);const i=document.createElement("div");i.classList="project-name-buttons-wrapper",n.appendChild(i);const o=document.createElement("button");o.id="add-name",o.textContent="Add",o.addEventListener("click",E),o.addEventListener("click",l),i.appendChild(o);const d=document.createElement("button");d.id="cancel-name",d.textContent="Cancel",d.addEventListener("click",E),d.addEventListener("click",L),i.appendChild(d)},l=t=>{let n=t.target.parentElement.parentElement.children[0].value;L();const i=document.querySelector(".new-project-wrapper"),o=document.createElement("div");o.classList="category",o.id="project-wrapper",o.dataset.project=i.childElementCount,o.addEventListener("click",a),o.addEventListener("click",c),o.addEventListener("click",u),i.appendChild(o);const l=document.createElement("img");l.classList="project-image",l.src="images/project.png",o.appendChild(l);const d=document.createElement("div");d.classList="new-project",""==n&&(n="Project "+i.childElementCount),d.textContent=n,o.appendChild(d),e.push({title:n,tasks:[]}),console.log(e)},d=()=>{const e=document.querySelector(".category-title"),t=document.querySelector(".category.active");e.textContent=t.children[1].textContent},c=()=>{null!=document.querySelector(".add-task-wrapper")&&(document.querySelector(".add-task-wrapper").style.visibility="visible"),null!=document.querySelector("#to-do-form")&&(document.querySelector("#to-do-form").style.visibility="visible")},s=()=>{null!=document.querySelector(".add-task-wrapper")&&(document.querySelector(".add-task-wrapper").style.visibility="hidden"),null!=document.querySelector("#to-do-form")&&(document.querySelector("#to-do-form").style.visibility="hidden")},r=()=>{const e=document.querySelector(".task-container"),t=document.createElement("div");t.classList="add-task-wrapper",t.addEventListener("click",p),e.appendChild(t);const n=document.createElement("div");n.classList="add-task",n.textContent="+ Add Task",t.appendChild(n)},p=()=>{g();const e=document.querySelector(".add-task-wrapper"),t=document.querySelector("#to-do-form");document.querySelector(".task-container").replaceChild(t,e)},m=t=>{if(1==t.target.classList.length){t.target.classList="complete-button checked",t.target.parentNode.parentNode.style.textDecoration="line-through",t.target.parentNode.parentNode.style.opacity="0.5";for(let n=0;n<e.length;n++)for(let a=0;a<e[n].tasks.length;a++){let i=e[n].tasks[a].title,o=t.target.parentNode.parentNode.childNodes[1].textContent;console.log(i),console.log(o),console.log(e),o==i&&(e[n].tasks[a].status="Closed")}}else if(2==t.target.classList.length){t.target.classList="complete-button",t.target.parentNode.parentNode.style.textDecoration="none",t.target.parentNode.parentNode.style.opacity="1";for(let n=0;n<e.length;n++)for(let a=0;a<e[n].tasks.length;a++){let i=e[n].tasks[a].title;t.target.parentNode.parentNode.childNodes[1].textContent==i&&(e[n].tasks[a].status="Open")}}},u=()=>{const t=document.querySelector(".category.active"),n=document.querySelector(".tasks-wrapper");for(;n.childNodes.length>1;)n.removeChild(n.lastChild);if("all-todo-wrapper"==t.id)for(let t=0;t<e.length;t++)for(let n=0;n<e[t].tasks.length;n++){let a=e[t].tasks[n].title,i=e[t].tasks[n].description,o=e[t].tasks[n].dueDate,l=e[t].tasks[n].priority,d=e[t].tasks[n].status;h(a,i,o,l,d)}else if("today-todo-wrapper"==t.id)for(let t=0;t<e.length;t++)for(let n=0;n<e[t].tasks.length;n++){let a=e[t].tasks[n].title,i=e[t].tasks[n].description,o=e[t].tasks[n].dueDate,l=e[t].tasks[n].priority,d=e[t].tasks[n].status;o==b()&&h(a,i,o,l,d)}else if("upcoming-todo-wrapper"==t.id)for(let t=0;t<e.length;t++)for(let n=0;n<e[t].tasks.length;n++){let a=e[t].tasks[n].title,i=e[t].tasks[n].description,o=e[t].tasks[n].dueDate,l=e[t].tasks[n].priority,d=e[t].tasks[n].status;o>=b()&&h(a,i,o,l,d)}else if("project-wrapper"==t.id)for(let n=0;n<e.length;n++)if(t.childNodes[1].textContent==e[n].title)for(let t=0;t<e[n].tasks.length;t++){let a=e[n].tasks[t].title,i=e[n].tasks[t].description,o=e[n].tasks[t].dueDate,l=e[n].tasks[t].priority,d=e[n].tasks[t].status;h(a,i,o,l,d)}},h=(t,n,a,i,o)=>{const l=document.querySelector(".tasks-wrapper"),d=document.createElement("div");d.classList="task-wrapper","High"==i?d.style.border="1px solid rgb(255, 67, 67)":"Medium"==i?d.style.border="1px solid rgb(255, 188, 62)":"Low"==i&&(d.style.border="1px solid rgb(61, 131, 61)"),d.dataset.task=l.childElementCount-1,l.appendChild(d);const c=document.createElement("div");c.classList="complete-button-wrapper",d.appendChild(c);const s=document.createElement("input");s.classList="complete-button",s.id="complete-button"+(l.childElementCount-2),s.setAttribute("type","checkbox"),s.addEventListener("change",m),c.appendChild(s);let r=document.createElement("label");r.setAttribute("for","complete-button"+(l.childElementCount-2)),r.classList="complete-button-label",c.appendChild(r);const p=document.createElement("div");p.classList="task-title",p.textContent=t,d.appendChild(p);const u=document.createElement("div");u.classList="task-description",u.textContent=n,d.appendChild(u);const h=document.createElement("div");h.classList="task-date",h.textContent=a,d.appendChild(h);const g=document.createElement("img");g.classList="task-delete",g.src="images/trash-can.png",g.addEventListener("click",y),d.appendChild(g),"Closed"==o&&(d.children[0].children[0].classList="complete-button checked",d.style.textDecoration="line-through",d.style.opacity="0.5",d.children[0].children[0].checked=!0),sessionStorage.setItem("tasks",JSON.stringify(e))},y=t=>{for(let n=0;n<e.length;n++){for(let a=0;a<e[n].tasks.length;a++){let i=e[n].tasks[a].title;if(t.target.parentNode.childNodes[1].textContent==i){e[n].tasks.splice(a,1),sessionStorage.setItem("tasks",JSON.stringify(e));break}}u()}},g=()=>{let e=document.createElement("form");e.id="to-do-form",document.querySelector(".task-container").appendChild(e);let t=document.createElement("div");t.classList="todo-wrapper",e.appendChild(t);let n=document.createElement("ul");t.appendChild(n);let a=document.createElement("li");n.appendChild(a);let i=document.createElement("li");n.appendChild(i);let o=document.createElement("li");n.appendChild(o);let l=document.createElement("li");n.appendChild(l);let d=document.createElement("label");d.textContent="Title:",a.appendChild(d);let c=document.createElement("input");c.type="text",c.name="title",c.id="title",c.required=!0,c.minLength="1",c.maxLength="30",a.appendChild(c);let s=document.createElement("label");s.textContent="Description:",i.appendChild(s);let r=document.createElement("input");r.type="text",r.name="description",r.id="description",r.maxLength="50",i.appendChild(r);let p=document.createElement("label");p.textContent="Due Date:",o.appendChild(p);let m=document.createElement("input");m.type="date",m.name="due-date",m.id="due-date",o.appendChild(m);let u=document.createElement("div");u.classList="priority-wrapper",l.appendChild(u);let h=document.createElement("div");h.classList="option-wrapper",h.textContent="Priority:",u.appendChild(h);let y=document.createElement("input");y.setAttribute("type","radio"),y.name="priority-option",y.id="high-priority",y.value="High",h.appendChild(y);let g=document.createElement("label");g.setAttribute("for","high-priority"),g.textContent="High",g.classList="option-one-label",h.appendChild(g);let k=document.createElement("input");k.setAttribute("type","radio"),k.name="priority-option",k.id="medium-priority",k.value="Medium",h.appendChild(k);let L=document.createElement("label");L.textContent="Medium",L.setAttribute("for","medium-priority"),L.classList="option-two-label",h.appendChild(L);let b=document.createElement("input");b.setAttribute("type","radio"),b.name="priority-option",b.id="low-priority",b.value="Low",h.appendChild(b);let w=document.createElement("label");w.textContent="Low",w.setAttribute("for","low-priority"),w.classList="option-three-label",h.appendChild(w);let f=document.createElement("div");f.classList="button-wrapper",t.appendChild(f);let x=document.createElement("button");x.id="add-todo",x.textContent="Add",x.addEventListener("click",E),x.addEventListener("click",C),f.appendChild(x);let S=document.createElement("button");S.id="cancel-todo",S.textContent="Cancel",S.addEventListener("click",E),S.addEventListener("click",v),f.appendChild(S)},C=t=>{const n=document.querySelector(".category.active");let a=t.target.parentElement.parentElement.children[0],i=a.children[0].children[1].value,o=a.children[1].children[1].value,l=a.children[2].children[1].value,d=document.querySelector('input[type="radio"]:checked'),c="Open";null==d&&(d=""),console.table(i,o,l,d.value);for(let t=0;t<e.length;t++)e[t].title==n.childNodes[1].textContent&&e[t].tasks.push({title:i,description:o,dueDate:l,priority:d.value,status:c});console.log(e),h(i,o,l,d.value,c),document.querySelector("#title").value="",document.querySelector("#description").value="",document.querySelector("#due-date").value=""},E=e=>{e.preventDefault()},k=e=>{"Enter"===e.key&&e.preventDefault()},v=()=>{r();const e=document.querySelector(".add-task-wrapper"),t=document.querySelector("#to-do-form");document.querySelector(".task-container").replaceChild(e,t),e.style.visibility="visible"},L=e=>{document.querySelector(".new-project-form").remove()},b=()=>{let e=new Date;return new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().split("T")[0]};(()=>{let e=document.createElement("div");e.classList="search-container",document.querySelector("body").appendChild(e);let t=document.createElement("h2");t.classList="title",t.textContent="🗒️ Task-Manager",e.appendChild(t);let n=document.createElement("form");n.id="search-form",e.appendChild(n);let a=document.createElement("div");a.classList="search-bar-wrapper",n.appendChild(a);let i=document.createElement("img");i.classList="magnifying-glass",i.src="images/magnifying-glass.png",a.appendChild(i);let o=document.createElement("input");o.setAttribute("type","text"),o.id="search-todo",o.name="search-todo",o.placeholder=" SEARCH TO-DOs",o.addEventListener("keydown",k),a.appendChild(o)})(),(()=>{const i=document.createElement("div");i.classList="side-bar-wrapper",t.appendChild(i);const l=document.createElement("div");l.classList="category active",l.id="all-todo-wrapper",l.addEventListener("click",a),l.addEventListener("click",s),l.addEventListener("click",u),i.appendChild(l);const d=document.createElement("img");d.classList="all-todo-image",d.src="images/inbox.png",l.appendChild(d);const r=document.createElement("div");r.classList="all-todo-items",r.textContent="All",l.appendChild(r);const p=document.createElement("div");p.classList="category",p.id="today-todo-wrapper",p.addEventListener("click",a),p.addEventListener("click",s),p.addEventListener("click",u),i.appendChild(p);const m=document.createElement("img");m.classList="today-todo-image",m.src="images/today.png",p.appendChild(m);const h=document.createElement("div");h.classList="today-todo-items",h.textContent="Today",p.appendChild(h);const y=document.createElement("div");y.classList="category",y.id="upcoming-todo-wrapper",y.addEventListener("click",a),y.addEventListener("click",s),y.addEventListener("click",u),i.appendChild(y);const g=document.createElement("img");g.classList="upcoming-todo-image",g.src="images/upcoming.png",y.appendChild(g);const C=document.createElement("div");C.classList="upcoming-todo-items",C.textContent="Upcoming",y.appendChild(C);const E=document.createElement("div");E.classList="projects-wrapper",i.appendChild(E);const k=document.createElement("div");k.classList="adjustable-wrapper",k.addEventListener("click",n),E.appendChild(k);const v=document.createElement("div");v.classList="expand-arrow",v.textContent="⇓",k.appendChild(v);const L=document.createElement("img");L.classList="projects-image",L.src="images/projects.png",k.appendChild(L);const b=document.createElement("div");b.classList="projects-items",b.textContent="Projects",k.appendChild(b);const w=document.createElement("div");w.classList="projects-add",w.textContent="+",w.addEventListener("click",o),E.appendChild(w);const f=document.createElement("div");f.classList="new-project-wrapper",i.appendChild(f),(()=>{const t=document.querySelector(".new-project-wrapper");for(let n=0;n<e.length;n++){let i=e[n].title;const o=document.createElement("div");o.classList="category",o.id="project-wrapper",o.dataset.project=n,o.addEventListener("click",a),o.addEventListener("click",c),o.addEventListener("click",u),t.appendChild(o);const l=document.createElement("img");l.classList="project-image",l.src="images/project.png",o.appendChild(l);const d=document.createElement("div");d.classList="new-project",""==i&&(i="Project "+(n+1)),d.textContent=i,o.appendChild(d)}})()})(),(()=>{const e=document.querySelector("body"),t=document.createElement("div");t.classList="task-container",e.appendChild(t);const n=document.createElement("h2");n.classList="category-title",n.textContent="All",t.appendChild(n),(()=>{const e=document.querySelector(".task-container"),t=document.createElement("div");t.classList="tasks-wrapper",e.appendChild(t);const n=document.createElement("div");n.classList="tasks-title",n.textContent="Tasks",t.appendChild(n),u(),r()})()})()})();