const sedes = [
  // 1. Casa Biblia (24.53%) - Azul Profundo Corporativo
  { id: 1, nombre: "Casa Biblia - Matriz", tipo: "matriz", lat: 12.146309, lng: -86.241758, color: "#0B1F3A", dir: "Larreynaga", tel: "2249-8045", wa: "8335-3679", seg: "16,000", cuota: "24.53% Líder", inv: "10/10 Categorías", amenaza: "Líder", amenazaClass: "threat-leader", porcentaje: 24.53 },
  { id: 2, nombre: "Casa Biblia - Bello Horizonte", tipo: "sbn", lat: 12.1452985, lng: -86.2314436, color: "#0B1F3A", dir: "Bello Horizonte", tel: "2249-8045", wa: "8335-3679", seg: "Parte red", cuota: "Parte de 24.53%", inv: "10/10 Categorías", amenaza: "Líder", amenazaClass: "threat-leader", porcentaje: 24.52 },
  { id: 3, nombre: "Casa Biblia - Tenderí", tipo: "sbn", lat: 12.1398000, lng: -86.2475000, color: "#0B1F3A", dir: "Tenderí", tel: "2249-8045", wa: "8335-3679", seg: "Parte red", cuota: "Parte de 24.53%", inv: "10/10 Categorías", amenaza: "Líder", amenazaClass: "threat-leader", porcentaje: 24.51 },

  // 2. Bible Journaling (22.33%) - Naranja Neón
  { id: 4, nombre: "Bible Journaling - Plaza Natura", tipo: "normal", lat: 12.113271, lng: -86.275644, color: "#FF6D00", dir: "Plaza Natura", tel: "IG DM", wa: "8186-9943", seg: "14,957", cuota: "22.33% Cuota", inv: "6/10 Categorías", amenaza: "Alta", amenazaClass: "threat-high", porcentaje: 22.33 },
  { id: 5, nombre: "Bible Journaling - Metrocentro", tipo: "normal", lat: 12.1276223, lng: -86.2651277, color: "#FF6D00", dir: "Metrocentro", tel: "IG DM", wa: "8186-9943", seg: "Parte red", cuota: "Parte de 22.33%", inv: "6/10 Categorías", amenaza: "Alta", amenazaClass: "threat-high", porcentaje: 22.32 },
  { id: 6, nombre: "Bible Journaling - Galerías", tipo: "normal", lat: 12.1036032, lng: -86.2494600, color: "#FF6D00", dir: "Galerías", tel: "IG DM", wa: "8186-9943", seg: "Parte red", cuota: "Parte de 22.33%", inv: "6/10 Categorías", amenaza: "Alta", amenazaClass: "threat-high", porcentaje: 22.31 },

  // 3. Kairos (15.48%) - Rojo Escarlata
  { id: 7, nombre: "Kairos", tipo: "normal", lat: 12.136172, lng: -86.249914, color: "#D50000", dir: "Frente Cortez Oriental", tel: "8271-0012", wa: "8271-0012", seg: "16,254", cuota: "15.48% Cuota", inv: "6/10 Categorías", amenaza: "Alta", amenazaClass: "threat-high", porcentaje: 15.48 },

  // 4. Fuente (12.35%) - Verde Esmeralda Vibrante
  { id: 8, nombre: "Fuente de Bendición #1", tipo: "normal", lat: 12.144385, lng: -86.256487, color: "#00C853", dir: "BANPRO Ciudad Jardín", tel: "Local", wa: "5785-4894", seg: "1,248", cuota: "12.35% Cuota", inv: "10/10 Categorías", amenaza: "Alta", amenazaClass: "threat-high", porcentaje: 12.35 },
  { id: 9, nombre: "Fuente de Bendición #2", tipo: "normal", lat: 12.1459920, lng: -86.2535660, color: "#00C853", dir: "Managua", tel: "Local", wa: "5785-4894", seg: "Parte red", cuota: "Parte de 12.35%", inv: "10/10 Categorías", amenaza: "Alta", amenazaClass: "threat-high", porcentaje: 12.34 },

  // 5. Auro (7.73%) - Púrpura Intenso
  { id: 10, nombre: "Librería Auro", tipo: "normal", lat: 12.119549, lng: -86.273187, color: "#AA00FF", dir: "Frente Rigoberto López", tel: "7842-3618", wa: "8786-7351", seg: "2,198", cuota: "7.73% Cuota", inv: "5/10 Categorías", amenaza: "Media", amenazaClass: "threat-medium", porcentaje: 7.73 },

  // 6. Sendas (7.38%) - Azul Celeste Vivo
  { id: 11, nombre: "Sendas", tipo: "normal", lat: 12.126531, lng: -86.254223, color: "#00B0FF", dir: "Junior Music 2c N", tel: "FB Contact", wa: "8975-9787", seg: "1,404", cuota: "7.38% Cuota", inv: "6/10 Categorías", amenaza: "Media", amenazaClass: "threat-medium", porcentaje: 7.38 },

  // 7. Hispamer (6.63%) - Amarillo Girasol
  { id: 12, nombre: "Hispamer", tipo: "normal", lat: 12.128307, lng: -86.267632, color: "#FFD600", dir: "Rotonda Metrocentro 25 emp", tel: "Local", wa: "8460-0593", seg: "4,803", cuota: "6.63% Cuota", inv: "1/10 Categorías", amenaza: "Baja", amenazaClass: "threat-low", porcentaje: 6.63 },

  // 8. El Faro (3.58%) - Rosa Fucsia
  { id: 13, nombre: "Librería El Faro", tipo: "normal", lat: 12.146189, lng: -86.285301, color: "#F50057", dir: "Montoya 150m Oeste", tel: "IG Contact", wa: "Por confirmar", seg: "179", cuota: "3.58% Cuota", inv: "3/10 Categorías", amenaza: "Baja", amenazaClass: "threat-low", porcentaje: 3.58 }
];

// Ordenar por porcentaje de cuota (de mayor a menor)
sedes.sort((a, b) => b.porcentaje - a.porcentaje);

const map = L.map('map', { center: [12.13, -86.17], zoom: 11 });

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function crearIcono(sede) {
  let tam = sede.tipo === "matriz" ? 40 : (sede.tipo === "sbn" ? 32 : 28);
  let borde = sede.tipo === "matriz" ? '3px solid #7A5900' : '2px solid white';
  let forma = sede.tipo === "matriz" ? '50% 50% 50% 50% / 60% 60% 40% 40%' : '50%';
  let simbolo = sede.tipo === "matriz" ? '★' : '●';
  let colorTexto = sede.tipo === "matriz" ? '#5D4037' : 'white';
  
  let html = `<div style="width:${tam}px; height:${tam}px; background:${sede.color}; border:${borde}; border-radius:${forma}; display:flex; align-items:center; justify-content:center; font-size:${tam/2}px; font-weight:900; color:${colorTexto}; box-shadow: 0 2px 8px rgba(0,0,0,0.5);">${simbolo}</div>`;
  return L.divIcon({ html: html, className: 'custom-div-icon', iconSize: [tam, tam], iconAnchor: [tam/2, tam/2] });
}

const marcadores = {};
sedes.forEach(sede => {
  const marker = L.marker([sede.lat, sede.lng], { icon: crearIcono(sede) }).addTo(map);
  const popupHtml = `
    <div style="font-family: sans-serif; width: 260px; padding: 10px;">
      <div style="font-weight:900; font-size:14px; margin-bottom:8px; color:${sede.color};">${sede.nombre}</div>
      <div style="font-size:12px; margin-bottom:4px;"><strong>Dirección:</strong> ${sede.dir}</div>
      <div style="font-size:12px; margin-bottom:4px;"><strong>Tel/WA:</strong> ${sede.tel} | ${sede.wa}</div>
      <div style="font-size:12px; margin-bottom:4px;"><strong>Inventario:</strong> ${sede.inv}</div>
      <div style="font-size:12px; margin-bottom:4px;"><strong>Seguidores:</strong> ${sede.seg}</div>
      <div style="font-size:12px; margin-top:8px; background:#f0f0f0; padding:6px; border-radius:6px;">
        <strong>Cuota:</strong> ${sede.cuota} <br>
        <strong>Amenaza:</strong> <span class="font-black" style="color:${sede.color};">${sede.amenaza}</span>
      </div>
    </div>`;
  marker.bindPopup(popupHtml);
  marker.on('click', () => actualizarPanel(sede));
  marcadores[sede.id] = marker;
});

const lista = document.getElementById('stores-list');
sedes.forEach(sede => {
  const item = document.createElement('div');
  item.className = 'flex items-center gap-3 p-2 bg-[#F6F7F9] rounded-xl cursor-pointer hover:bg-[#E5E8EB] transition';
  item.innerHTML = `
    <div style="background:${sede.color}; width:24px; height:24px; border-radius:50%; border:2px solid white; box-shadow:0 1px 3px rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center; font-size:12px; color:${sede.tipo==='matriz'?'#5D4037':'white'}">${sede.tipo==='matriz'?'★':'●'}</div>
    <div class="flex-1">
      <div class="font-bold text-xs">${sede.nombre}</div>
      <div class="text-[10px] text-[#5F6B7A]">${sede.cuota} - ${sede.amenaza}</div>
    </div>
  `;
  item.onclick = () => {
    map.flyTo([sede.lat, sede.lng], 15, { animate: true });
    marcadores[sede.id].openPopup();
    actualizarPanel(sede);
  };
  lista.appendChild(item);
});

function actualizarPanel(sede) {
  document.getElementById('detail-name').textContent = sede.nombre;
  document.getElementById('detail-address').textContent = sede.dir;
  document.getElementById('detail-phone').textContent = `${sede.tel} / ${sede.wa}`;
  document.getElementById('detail-share').textContent = sede.cuota;
  document.getElementById('detail-inventory').textContent = sede.inv;

  const amenazaSpan = document.getElementById('detail-threat');
  amenazaSpan.textContent = sede.amenaza;
  amenazaSpan.className = `px-3 py-1 rounded-full text-xs font-black ${sede.amenazaClass}`;
}

const tbody = document.getElementById('table-body');
sedes.forEach((sede, index) => {
  const tr = document.createElement('tr');
  tr.className = 'border-b border-black/5 hover:bg-gray-50';
  tr.innerHTML = `
    <td class="p-3 font-bold">${index + 1}</td>
    <td class="p-3"><span style="background:${sede.color}; color:${sede.tipo==='matriz'?'#5D4037':'white'};" class="px-2 py-1 rounded-full text-[10px] font-black">${sede.tipo.toUpperCase()}</span></td>
    <td class="p-3 font-bold">${sede.nombre}</td>
    <td class="p-3 text-[#5F6B7A]">${sede.dir}</td>
    <td class="p-3 font-mono text-[10px]">${sede.lat.toFixed(6)}, ${sede.lng.toFixed(6)}</td>
    <td class="p-3">${sede.seg} Seg.</td>
    <td class="p-3 font-black">${sede.cuota}</td>
    <td class="p-3 text-center"><span class="px-3 py-1 rounded-full text-[10px] ${sede.amenazaClass}">${sede.amenaza}</span></td>
  `;
  tbody.appendChild(tr);
});

function centrarSBN() {
  const sbn = sedes[0];
  map.flyTo([sbn.lat, sbn.lng], 17, { animate: true });
  marcadores[sbn.id].openPopup();
  actualizarPanel(sbn);
}

function verTodo() {
  map.flyTo([12.13, -86.17], 12, { animate: true });
}

setTimeout(() => { map.invalidateSize(); }, 500);
