const $=i=>document.getElementById(i);let t=0,ts=0;
function show(){const q=Q[t],ord=q.o.map((x,i)=>i).sort(()=>Math.random()-.5);$("fb3").classList.remove("open");$("fb3").innerHTML="";$("tn").textContent=q.p+" ("+(t+1)+" of "+Q.length+")";
$("pair2").innerHTML=ord.map(i=>`<button class="opt" type="button" data-i="${i}">${q.o[i]}</button>`).join("")}
$("pair2").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;const q=Q[t],ok=+b.dataset.i===0,last=t===Q.length-1;if(ok)ts++;
[...$("pair2").children].forEach(x=>{x.disabled=true;if(+x.dataset.i===0)x.style.borderColor="var(--ok)"});
$("fb3").innerHTML=`<strong class="${ok?"ok":"no"}">${ok?"Correct.":"Not quite."}</strong><p style="margin:.5rem 0;color:var(--mut)">${q.w}</p>`+(last?`<p><strong>${ts} of ${Q.length}.</strong> ${ts===Q.length?"Perfect.":ts>=Q.length/2?"Good. Review the ones you missed.":"Worth another go."}</p>`:"")+`<button class="nx" id="n3" type="button">${last?"Play again":"Next question"}</button>`;
$("fb3").classList.add("open");$("n3").onclick=()=>{if(last){t=0;ts=0}else t++;show()}});show();