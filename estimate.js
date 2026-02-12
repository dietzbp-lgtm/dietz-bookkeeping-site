(function(){
  const form=document.getElementById('estimateForm'); if(!form) return;
  const steps=Array.from(document.querySelectorAll('[data-step]'));
  const pill=document.querySelector('.pill>i');
  const stepTitle=document.getElementById('stepTitle');
  const backBtn=document.getElementById('btnBack');
  const nextBtn=document.getElementById('btnNext');
  const submitBtn=document.getElementById('btnSubmit');
  let idx=0;
  function show(i){
    idx=i;
    steps.forEach((s,n)=>s.style.display=(n===idx?'block':'none'));
    const pct=Math.round(((idx+1)/steps.length)*100);
    if(pill) pill.style.width=pct+'%';
    if(stepTitle) stepTitle.textContent=steps[idx].getAttribute('data-title')||'Step';
    backBtn.style.display=idx===0?'none':'inline-flex';
    nextBtn.style.display=idx===steps.length-1?'none':'inline-flex';
    submitBtn.style.display=idx===steps.length-1?'inline-flex':'none';
  }
  function validateCurrent(){
    const current=steps[idx];
    const required=Array.from(current.querySelectorAll('[required]'));
    for(const el of required){ if(!el.value){ el.focus(); return false; } }
    return true;
  }
  backBtn.addEventListener('click',()=>show(Math.max(0,idx-1)));
  nextBtn.addEventListener('click',()=>{ if(!validateCurrent()) return; show(Math.min(steps.length-1,idx+1)); });
  form.addEventListener('submit',(e)=>{ if(!validateCurrent()){e.preventDefault();return;} e.preventDefault(); window.location.href='./thank-you.html'; });
  show(0);
})();