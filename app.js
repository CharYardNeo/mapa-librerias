const sedes = [
  { id: 1, nombre: "SBN Casa Matriz", tipo: "matriz", lat: 12.14630937, lng: -86.2417581864171, color: "#0B1F3A", dir: "Puente Larreynaga 25vrs Oeste", tel: "2249-8045", wa: "8335-3679", seg: "14K seguidores", cuota: "27.9% Líder", inv: "10 de 10 categorías - RVR, TLA, DHH, Gigante, Niños, Ilustrada", amenaza: "Líder", amenazaClass: "threat-leader", porcentaje: 27.9 },
  { id: 4, nombre: "Tienda Kairos Nica", tipo: "rojo", lat: 12.1361727386399, lng: -86.2499148165872, color: "#1E88E5", dir: "Frente a Cortez Comercial", tel: "8271-0012", wa: "8271-0012", seg: "9,900 seguidores", cuota: "17.4% Cuota", inv: "2 En Vivo por semana - Enfoque redes", amenaza: "Alta", amenazaClass: "threat-high", porcentaje: 17.4 },
  { id: 13, nombre: "Hispamer", tipo: "verde", lat: 12.1283078073628, lng: -86.2676323912619, color: "#64B5F6", dir: "Managua", tel: "Contacto local", wa: "8460-0593", seg: "Base local", cuota: "13.1% Cuota", inv: "Biblias y literatura", amenaza: "Baja", amenazaClass: "threat-low", porcentaje: 13.1 },
  { id: 9, nombre: "Sendas - Tienda Cristiana", tipo: "verde", lat: 12.1265311462599, lng: -86.2544236030965, color: "#90CAF9", dir: "Altamira, Managua", tel: "FB Contact", wa: "8975-9787", seg: "4.9K FB + 2K IG", cuota: "9.8% Cuota", inv: "Biblias, libros y regalos", amenaza: "Media", amenazaClass: "threat-medium", porcentaje: 9.8 },
  { id: 8, nombre: "Librería Auro", tipo: "morado", lat: 12.1195496209242, lng: -86.2731879197791, color: "#BBDEFB", dir: "Pista UNAN, Managua", tel: "7842-3618", wa: "8786-7351", seg: "8K FB + 4.7K IG", cuota: "8.4% Cuota", inv: "Biblias, literatura y música", amenaza: "Media", amenazaClass: "threat-medium", porcentaje: 8.4 },
  { id: 5, nombre: "Diario Bíblico - Plaza Natura", tipo: "amarillo", lat: 12.11310493701322, lng: -86.2755646071141, color: "#FF9800", dir: "Plaza Natura, Carretera Masaya", tel: "IG DM", wa: "8186-9943", seg: "46K IG reales", cuota: "7.4% Cuota", inv: "Biblia + Journaling + papelería creativa", amenaza: "Alta", amenazaClass: "threat-high", porcentaje: 7.4 },
  { id: 10, nombre: "Fuente de Bendición #1", tipo: "gris", lat: 12.13150000, lng: -86.24000000, color: "#FFC107", dir: "Managua", tel: "Contacto local", wa: "5785-4894", seg: "Base local", cuota: "5.8% Cuota", inv: "Biblias RVR1960 básicas", amenaza: "Baja", amenazaClass: "threat-low", porcentaje: 5.8 },
  { id: 12, nombre: "Librería El Faro", tipo: "gris-claro", lat: 12.12700000, lng: -86.23800000, color: "#FFE082", dir: "Plaza Sacuanjoche", tel: "IG Contact", wa: "Por confirmar", seg: "1.3K IG", cuota: "1.7% Cuota", inv: "Biblias y libros devocionales", amenaza: "Por Verificar", amenazaClass: "threat-unknown", porcentaje: 1.7 },
  { id: 2, nombre: "SBN Bello Horizonte", tipo: "sbn", lat: 12.1452985881617, lng: -86.2314436033662, color: "#E0E0E0", dir: "Bello Horizonte, Managua", tel: "2249-8045", wa: "8335-3679", seg: "Red SBN", cuota: "Parte de 27.9%", inv: "8 categorías - respaldo Casa Matriz", amenaza: "Baja", amenazaClass: "threat-leader", porcentaje: 0.1 },
  { id: 3, nombre: "SBN Tenderi", tipo: "sbn", lat: 12.13980000, lng: -86.24750000, color: "#E0E0E0", dir: "Tenderi, Managua", tel: "2249-8045", wa: "8335-3679", seg: "Red SBN", cuota: "Parte de 27.9%", inv: "8 categorías - respaldo Casa Matriz", amenaza: "Baja", amenazaClass: "threat-leader", porcentaje: 0.1 },
  { id: 6, nombre: "Diario Bíblico - Metrocentro", tipo: "amarillo", lat: 12.127622363898984, lng: -86.26512774570104, color: "#E0E0E0", dir: "Metrocentro, Managua", tel: "IG DM", wa: "8186-9943", seg: "46K IG reales", cuota: "Parte de 7.4%", inv: "Diario + Biblias Ilustradas", amenaza: "Alta", amenazaClass: "threat-high", porcentaje: 0.1 },
  { id: 7, nombre: "Diario Bíblico - Galerías", tipo: "amarillo", lat: 12.103603261011465, lng: -86.24946004192199, color: "#E0E0E0", dir: "Galerías Santo Domingo", tel: "IG DM", wa: "8186-9943", seg: "46K IG reales", cuota: "Parte de 7.4%", inv: "Diario + Biblias", amenaza: "Alta", amenazaClass: "threat-high", porcentaje: 0.1 },
  { id: 11, nombre: "Fuente de Bendición #2", tipo: "gris", lat: 12.14599200, lng: -86.25356600, color: "#E0E0E0", dir: "Managua", tel: "Contacto local", wa: "5785-4894", seg: "Base local", cuota: "Parte de 5.8%", inv: "Biblias y literatura", amenaza: "Baja", amenazaClass: "threat-low", porcentaje: 0.1 },
  { id: 14, nombre: "Literatura Monte de Sion", tipo: "gris", lat: 12.1517330647389, lng: -86.0931323298743, color: "#E0E0E0", dir: "Tipitapa-Masaya", tel: "Contacto local", wa: "7772-0101", seg: "Base local", cuota: "Otros 8.5%", inv: "Biblias y literatura", amenaza: "Baja", amenazaClass: "threat-low", porcentaje: 0.1 }
];

sedes.sort((a, b) => b.porcentaje - a.porcentaje);

const map = L.map('map', { center: [12.13, -86.17], zoom: 11 });

// NUEVO PROVEEDOR DE MAPA: Estable para archivos locales (CartoDB Positron)
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
  
  let html = `<div style="width:${tam}px; height:${tam}px; background:${sede.color}; border:${borde}; border-radius:${forma}; display:flex; align-items:center; justify-content:center; font-size:${tam/2}px; font-weight:900; color:${colorTexto}; box-shadow: 0 2px 8px rgba(0,0,0,0.4);">${simbolo}</div>`;
  return L.divIcon({ html: html, className: 'custom-div-icon', iconSize: [tam, tam], iconAnchor: [tam/2, tam/2] });
}

const marcadores = {};
sedes.forEach(sede => {
  const marker = L.marker([sede.lat, sede.lng], { icon: crearIcono(sede) }).addTo(map);
  const popupHtml = `
    <div style="font-family: sans-serif; width: 260px; padding: 10px;">
      <div style="font-weight:900; font-size:14px; margin-bottom:8px; color:${sede.color};">${sede.nombre}</div>
      <div style="font-size:12px; margin-bottom:4px;"><strong>Dirección:</strong> ${sede.dir}</div>
      <div style="font-size:12px; margin-bottom:4px;"><strong>Teléfono:</strong> ${sede.tel} | WA: ${sede.wa}</div>
      <div style="font-size:12px; margin-bottom:4px;"><strong>Inventario:</strong> ${sede.inv}</div>
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
      <div class="text-[10px] text-[#5F6B7A]">${sede.cuota}</div>
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
  amenazaSpan.style.color = sede.color;
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
    <td class="p-3 font-mono text-[10px]">${sede.lat.toFixed(7)}, ${sede.lng.toFixed(7)}</td>
    <td class="p-3">${sede.tel} / ${sede.wa}</td>
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
  map.flyTo([12.13, -86.17], 11, { animate: true });
}
