<style>
  .staj-checklist { background: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #ddd; }
  .staj-checklist h3 { margin-top: 0; color: #d32f2f; }
  .staj-checklist h4 { margin-top: 20px; margin-bottom: 10px; border-bottom: 2px solid #eee; padding-bottom: 5px; }
  .staj-label { display: block; margin: 8px 0; cursor: pointer; line-height: 1.5; }
  .staj-label input { margin-right: 10px; transform: scale(1.2); }
  .sub-item { margin-left: 25px; border-left: 3px solid #eee; padding-left: 10px; }
  .warning-box { background: #fff3cd; color: #856404; padding: 15px; border-radius: 5px; margin-bottom: 20px; border: 1px solid #ffeeba; }
</style>

<div class="staj-checklist">
  <h3>⚠️ Soru Sormadan Önce Kontrol Edin</h3>
  
  <div class="warning-box">
    <strong>DİKKAT:</strong> Lütfen staj koordinatörlüğüne evrak teslim etmeden önce aşağıdaki maddelerin <strong>TAMAMINI</strong> kontrol ediniz. Şartları sağlamayan başvurular kabul edilmeyecektir.
  </div>

  <h4>1. Temel Uygunluk ve Tarih</h4>
  <label class="staj-label"><input type="checkbox" id="sc-1-1" onchange="saveState(this)"> <b>Sınıf Durumu:</b> En az 2. sınıfı bitirdim. (En erken 2. sınıf sonu)</label>
  <label class="staj-label"><input type="checkbox" id="sc-1-2" onchange="saveState(this)"> <b>Mezuniyet İstisnası:</b> Sadece stajım kaldıysa yaz dönemini beklemedim.</label>
  <label class="staj-label"><input type="checkbox" id="sc-1-3" onchange="saveState(this)"> <b>Yaz Okulu:</b> Stajım, yaz okulu bittikten sonra başlıyor.</label>
  <label class="staj-label"><input type="checkbox" id="sc-1-4" onchange="saveState(this)"> <b>Süre:</b> Kesintisiz tek seferde en az <b>4 hafta (20 iş günü)</b> sürüyor.</label>
  <label class="staj-label"><input type="checkbox" id="sc-1-5" onchange="saveState(this)"> <b>Tatiller:</b> Resmi/dini tatilleri iş günü sayısından düştüm.</label>

  <h4>2. Şirket Kriterleri</h4>
  <label class="staj-label"><input type="checkbox" id="sc-2-1" onchange="saveState(this)"> <b>Mühendis Şartı:</b> Kurumda en az bir Bilgisayar veya Yazılım Mühendisi çalışıyor.</label>
  <label class="staj-label"><input type="checkbox" id="sc-2-2" onchange="saveState(this)"> <b>Fiziksel Katılım:</b> Online (uzaktan) staj yapmıyorum, ofise gidiyorum.</label>

  <h4>3. Başvuru Evrakları</h4>
  <label class="staj-label"><input type="checkbox" id="sc-3-1" onchange="saveState(this)"> <b>Onay:</b> "Staj Başvuru Formu" şirket yetkilisine onaylatıldı.</label>
  <label class="staj-label"><input type="checkbox" id="sc-3-2" onchange="saveState(this)"> <b>Ek Belgeler Tamamlandı:</b></label>
  
  <div class="sub-item">
    <label class="staj-label"><input type="checkbox" id="sc-3-2-a" onchange="saveState(this)"> Kimlik fotokopisi</label>
    <label class="staj-label"><input type="checkbox" id="sc-3-2-b" onchange="saveState(this)"> Adli sicil kaydı (e-devlet)</label>
    <label class="staj-label"><input type="checkbox" id="sc-3-2-c" onchange="saveState(this)"> İkametgah belgesi (e-devlet)</label>
    <label class="staj-label"><input type="checkbox" id="sc-3-2-d" onchange="saveState(this)"> 1 adet vesikalık fotoğraf</label>
  </div>
  
  <label class="staj-label"><input type="checkbox" id="sc-3-3" onchange="saveState(this)"> <b>Sigorta:</b> Okul yapmayacaksa koordinatöre bildirdim.</label>

  <h4>4. Staj Süreci (Kritik Kurallar!)</h4>
  <label class="staj-label"><input type="checkbox" id="sc-4-1" onchange="saveState(this)"> <b>Rapor/İzin:</b> Raporlu/izinli günleri 20 iş gününe dahil etmedim.</label>
  <label class="staj-label"><input type="checkbox" id="sc-4-2" onchange="saveState(this)"> <b>Disiplin:</b> Kurum kurallarına tam uydum.</label>
  <label class="staj-label"><input type="checkbox" id="sc-4-3" onchange="saveState(this)"> <b>Değişiklik:</b> Komisyon onayı olmadan yer değiştirmedim.</label>

  <h4>5. Rapor Yazımı ve İçerik</h4>
  <label class="staj-label"><input type="checkbox" id="sc-5-1" onchange="saveState(this)"> <b>Dil:</b> Rapor tamamen <b>İNGİLİZCE</b> hazırlandı.</label>
  <label class="staj-label"><input type="checkbox" id="sc-5-2" onchange="saveState(this)"> <b>Format:</b> Times New Roman, 12 punto, 1.5 satır aralığı.</label>
  <label class="staj-label"><input type="checkbox" id="sc-5-3" onchange="saveState(this)"> <b>Sayfa Sayısı:</b> Günlük rapor kısmı en az <b>20 sayfa</b>.</label>
  <label class="staj-label"><input type="checkbox" id="sc-5-4" onchange="saveState(this)"> <b>Mühür/İmza:</b> Defterin <b>her sayfası</b> mühürlü ve imzalı.</label>

  <h4>6. Teslim ve Sonrası</h4>
  <label class="staj-label"><input type="checkbox" id="sc-6-1" onchange="saveState(this)"> <b>Sicil Fişi:</b> Kapalı zarf içinde teslim aldım.</label>
  <label class="staj-label"><input type="checkbox" id="sc-6-2" onchange="saveState(this)"> <b>Zamanlama:</b> Dönem başından en geç 2 hafta sonra teslim edeceğim.</label>
  <label class="staj-label"><input type="checkbox" id="sc-6-3" onchange="saveState(this)"> <b>Düzeltme:</b> Eksik varsa düzelteceğimi biliyorum.</label>
  <label class="staj-label"><input type="checkbox" id="sc-6-4" onchange="saveState(this)"> <b>Geçiş Öğrencisi:</b> Eski stajı saydırmak için belge sundum.</label>
</div>

<script>
  window.addEventListener('load', function() {
    // Tüm checkboxları bul ve hafızadaki durumlarını geri yükle
    const inputs = document.querySelectorAll('.staj-checklist input[type="checkbox"]');
    inputs.forEach(input => {
      const isChecked = localStorage.getItem(input.id) === 'true';
      input.checked = isChecked;
    });
  });

  function saveState(element) {
    // Tıklanan kutunun durumunu tarayıcı hafızasına kaydet
    localStorage.setItem(element.id, element.checked);
  }
</script>
