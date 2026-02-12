(function(){
  const btn=document.getElementById('aiBtn');
  const panel=document.getElementById('aiPanel');
  const closeBtn=document.getElementById('aiClose');
  if(!btn||!panel) return;
  function toggle(open){panel.classList.toggle('open',open);btn.setAttribute('aria-expanded',open?'true':'false');}
  btn.addEventListener('click',()=>toggle(!panel.classList.contains('open')));
  if(closeBtn) closeBtn.addEventListener('click',()=>toggle(false));
  document.addEventListener('keydown',(e)=>{if(e.key==='Escape') toggle(false);});
  document.addEventListener('click',(e)=>{if(!panel.classList.contains('open')) return; const within=panel.contains(e.target)||btn.contains(e.target); if(!within) toggle(false);});
})();