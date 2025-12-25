# Staj
<hr>
<h3>✅ Staj Takip Çizelgesi</h3>
<p><i>İşaretlediğiniz maddeler tarayıcınızda otomatik olarak kaydedilir.</i></p>

<div class="custom-checklist">
  <label style="display:block; margin: 5px 0;">
    <input type="checkbox" id="staj-adim-1" onchange="saveState(this)"> 
    1. Staj Başvuru Formu İndirildi
  </label>
  <label style="display:block; margin: 5px 0;">
    <input type="checkbox" id="staj-adim-2" onchange="saveState(this)"> 
    2. Firma Onayı Alındı (İmza/Kaşe)
  </label>
  <label style="display:block; margin: 5px 0;">
    <input type="checkbox" id="staj-adim-3" onchange="saveState(this)"> 
    3. Bölüm Başkanlığına Teslim Edildi
  </label>
  <label style="display:block; margin: 5px 0;">
    <input type="checkbox" id="staj-adim-4" onchange="saveState(this)"> 
    4. SGK Giriş Belgesi Alındı
  </label>
  <label style="display:block; margin: 5px 0;">
    <input type="checkbox" id="staj-adim-5" onchange="saveState(this)"> 
    5. Staj Defteri Dolduruldu
  </label>
</div>

<script>
  // Sayfa açıldığında hafızadan durumu geri yükle
  window.addEventListener('load', function() {
    const inputs = document.querySelectorAll('.custom-checklist input[type="checkbox"]');
    inputs.forEach(input => {
      const isChecked = localStorage.getItem(input.id) === 'true';
      input.checked = isChecked;
    });
  });

  // Her tıklamada durumu hafızaya kaydet
  function saveState(element) {
    localStorage.setItem(element.id, element.checked);
  }
</script>
