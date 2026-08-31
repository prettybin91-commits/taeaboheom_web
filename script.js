
function submitLead(e){
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
  return false;
}
