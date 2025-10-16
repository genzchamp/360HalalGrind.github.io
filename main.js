// tiny script for nav toggle & year
(function(){
  const nav = document.getElementById('mainNav');
  const tgl = document.getElementById('navToggle');
  if(tgl){
    tgl.addEventListener('click', ()=> {
      if(nav.style.display === 'flex') nav.style.display = 'none';
      else nav.style.display = 'flex';
    });
  }

  // Set year placeholders
  const setYear = id => { const el = document.getElementById(id); if(el) el.textContent = new Date().getFullYear(); };
  ['year','year2','year3','year4','year5','year6'].forEach(setYear);
})();
