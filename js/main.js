document.addEventListener('DOMContentLoaded',function(){
  const hamburger=document.getElementById('hamburger');
  const navLinks=document.getElementById('nav-links');
  if(hamburger){ hamburger.addEventListener('click',()=>{ navLinks.classList.toggle('open'); hamburger.classList.toggle('is-active'); }); }
  (function(){ const links=document.querySelectorAll('.nav-links a'); const current=location.pathname.split('/').pop()||'index.html'; links.forEach(a=>{ const href=(a.getAttribute('href')||'').split('/').pop(); if(href===current) a.classList.add('active'); else a.classList.remove('active'); }); })();
  const form=document.getElementById('contact-form'); const status=document.getElementById('form-status');
  if(form){ form.addEventListener('submit',e=>{ e.preventDefault(); const mail=form.dataset.mailto||'info@example.com'; const name=(form.querySelector('[name=\"name\"]')||{}).value||''; const email=(form.querySelector('[name=\"email\"]')||{}).value||''; const message=(form.querySelector('[name=\"message\"]')||{}).value||''; const subject=Contact from Ghillie site; const body=Name: %0D%0AEmail: %0D%0A%0D%0A; window.location.href=mailto:?subject=&body=; if(status) status.textContent='Opening mail client…'; setTimeout(()=>{ if(status) status.textContent='If your mail client did not open, email ' + mail; },1500); }); }
});
