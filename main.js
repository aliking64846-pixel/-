// بيانات المواد خلال 30 يوم
const labels = Array.from({length:30}, (_,i)=>`يوم ${i+1}`);
const data = {
  labels: labels,
  datasets: [{
    label: 'كمية المواد',
    backgroundColor: '#3b82f6',
    borderColor: '#2563eb',
    data: Array.from({length:30},()=>Math.floor(Math.random()*150))
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive:true,
    plugins:{
      legend:{display:false}
    }
  }
};

window.addEventListener('DOMContentLoaded', ()=>{
  const ctx = document.getElementById('inventoryChart');
  if(ctx){
    new Chart(ctx, config);
  }
});
