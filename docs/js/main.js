const t={palette:"",name:"",job:"",photo:"",email:"",phone:"",linkedin:"",github:""},I=document.querySelector(".js_form"),u=document.querySelector(".js_name"),m=document.querySelector(".js_job"),p=document.querySelector(".js_email"),v=document.querySelector(".js_tlf"),L=document.querySelector(".js_linkedin"),_=document.querySelector(".js_github"),F=document.querySelector(".js-preview-reset");document.querySelector(".js-card-border");const c=document.querySelector(".js-card-name"),i=document.querySelector(".js-card-job");document.querySelector(".js-card-image");document.querySelector(".js-card-item");document.querySelector(".js-card-icon");const E=document.querySelector(".js-card-mobile"),b=document.querySelector(".js-card-email"),T=document.querySelector(".js-card-linkedin"),k=document.querySelector(".js-card-github"),M=document.querySelector(".js_dheader"),h=document.querySelector(".js_pantone"),f=document.querySelector(".js_darrow"),A=document.querySelector(".js_fheader"),j=document.querySelector(".js_formlist"),g=document.querySelector(".js_farrow"),H=document.querySelector(".js_sheader"),S=document.querySelector(".js_card"),y=document.querySelector(".js_sarrow");M.addEventListener("click",e=>{j.classList.add("stuffed-hidden"),S.classList.add("share__hidden"),h.classList.remove("desing__hidden"),g.classList.remove("rotate-stuffed"),y.classList.remove("rotate-stuffed"),f.classList.add("desing__rotate")});A.addEventListener("click",e=>{h.classList.add("desing__hidden"),S.classList.add("share__hidden"),j.classList.remove("stuffed-hidden"),y.classList.remove("share__rotate"),f.classList.remove("desing__rotate"),g.classList.add("rotate-stuffed")});H.addEventListener("click",e=>{h.classList.add("desing__hidden"),j.classList.add("stuffed-hidden"),S.classList.remove("share__hidden"),f.classList.remove("desing__rotate"),g.classList.remove("rotate-stuffed"),y.classList.add("share__rotate")});u.addEventListener("input",e=>{t.name=e.currentTarget.value,o()});m.addEventListener("input",e=>{t.job=e.currentTarget.value,o()});p.addEventListener("input",e=>{t.email=e.currentTarget.value,o()});v.addEventListener("input",e=>{t.phone=e.currentTarget.value,o()});L.addEventListener("input",e=>{t.linkedin=e.currentTarget.value,o()});_.addEventListener("input",e=>{t.github=e.currentTarget.value,o()});F.addEventListener("click",e=>{c.innerHTML="Nombre Apellido",i.innerHTML="Front-end developer",E.href="",b.href="",T.href="",k.href="",I.reset()});function o(){t.name===""?c.innerHTML="Nombre Apellido":c.innerHTML=t.name,t.job===""?i.innerHTML="Front-end developer":i.innerHTML=t.job,b.href="mailto:"+t.email,E.href="tel:"+t.phone,T.href="https://"+t.linkedin,k.href="https://"+t.github}const w=document.querySelector(".js_palette1"),N=document.querySelector(".js_palette2"),J=document.querySelector(".js_palette3"),s=document.querySelector(".js__previewCard");w.addEventListener("input",e=>{t.palette=1,s.classList.remove("palette1","palette2","palette3"),s.classList.add("palette1")});N.addEventListener("input",e=>{t.palette=2,s.classList.remove("palette1","palette2","palette3"),s.classList.add("palette2")});J.addEventListener("input",e=>{t.palette=3,s.classList.remove("palette1","palette2","palette3"),s.classList.add("palette3")});w.checked=!0;const a=new FileReader,P=document.querySelector(".js__profile-upload-btn"),q=document.querySelector(".js__profile-image"),O=document.querySelector(".js__profile-preview");function C(e){const d=e.currentTarget.files[0];a.addEventListener("load",D),a.readAsDataURL(d)}function D(){q.style.backgroundImage=`url(${a.result})`,O.style.backgroundImage=`url(${a.result})`,data.photo=a.result}P.addEventListener("change",C);const l=localStorage.getItem("card"),r=JSON.parse(l);l!==null&&(console.log(l),u.value=r.name,m.value=r.job,q.src=r.image,p.value=r.email,v.value=r.phone,L.value=r.linkedin,_.value=r.github);function n(e){console.log(e.currentTarget.id);const d=e.currentTarget.id;t[d]=e.currentTarget.value,localStorage.setItem("card",JSON.stringify(t)),console.log(t)}u.addEventListener("input",n);m.addEventListener("input",n);q.addEventListener("input",n);p.addEventListener("input",n);v.addEventListener("input",n);L.addEventListener("input",n);_.addEventListener("input",n);
//# sourceMappingURL=main.js.map
