# BT Maas Endeksi

Turkiye yazilim sektorunde maas seffafligini artirmak amaciyla gelistirilen bagimsiz ve acik kaynakli bir veri platformu. 5.002 yazilimcinin anonim katilimiyla, 37 pozisyon ve 8 yillik veri uzerinden hazirlanan Turkiye'nin en kapsamli yazilim maas analizi.

**Canli:** [btmaas.com](https://btmaas.com)

## Icerik

- [Hakkinda](#hakkinda)
- [Veri Kaynaklari](#veri-kaynaklari)
- [Sayfalar](#sayfalar)
- [Teknik Altyapi](#teknik-altyapi)
- [Kurulum](#kurulum)
- [Dosya Yapisi](#dosya-yapisi)
- [Katki](#katki)
- [Lisans](#lisans)

## Hakkinda

BT Maas Endeksi, Turkiye'deki yazilim sektorunde calisan gelistiricilerin maas verilerini gorsellestirir ve analiz eder. Platform asagidaki sorulara yanit aramayi amaclar:

- Turkiye'de bir yazilimci hangi pozisyonda, hangi seviyede, ne kadar kazaniyor?
- Son 8 yilda maaslar nasil degisti? Enflasyona yetisebildi mi?
- Cinsiyet maas farki ne durumda? Diger sektorlerle karsilastirildiginda nerede?
- Vergi yuku uluslararasi karsilastirmada nasil gorunuyor?
- Hangi sirket turleri en yuksek maasi oduyor?

Tum veriler halka acik kaynaklardan derlenmistir. Platform herhangi bir sirketin, ajansun veya istihdam platformunun reklam araci degildir.

## Veri Kaynaklari

### Ana Kaynaklar

| Kaynak | Aciklama | Donem |
|--------|----------|-------|
| [onceki yazilimci](https://github.com/oncekiyazilimci) | Yazilim sektoru maas anketi, 5.002 katilimci | 2018-2026 |
| [Levels.fyi](https://www.levels.fyi) | 10 ulke yazilim muhendisi TC verileri, 64.000+ beyan | 2025 |
| [Numbeo](https://www.numbeo.com) | Tum sektorler ortalama maas ve yasam maliyeti | 2025-2026 |
| [ENAG](https://enagrup.org) | Bagimsiz enflasyon verileri | 2020-2025 |
| [TUIK](https://tuik.gov.tr) | Resmi istihdam ve ucret istatistikleri | 2023-2025 |

### Ek Kaynaklar

| Kaynak | Kapsam |
|--------|--------|
| [The Economist](https://www.economist.com/big-mac-index) | Big Mac Endeksi |
| [PwC Tax Summaries](https://taxsummaries.pwc.com) | Efektif vergi oranlari |
| [OECD](https://www.oecd.org/tax/) | Vergilendirme karsilastirmasi |
| [ILO/TURKSTAT](https://ilostat.ilo.org) | Kazanc Yapisi Arastirmasi |
| [World Bank](https://data.worldbank.org) | Kadin isgucune katilim oranlari |
| [Cambridge Core](https://doi.org/10.1017/S1474747224000088) | Cinsiyet maas farki arastirmasi (14M veri) |
| [GIB](https://www.gib.gov.tr) | Turkiye vergi mevzuati |

## Sayfalar

| Sayfa | Yol | Aciklama |
|-------|-----|----------|
| Rapor | `/` | 8 interaktif grafik, kategori filtreleme, cross-highlight |
| Dagilim | `/dagilim/` | 5.002 yazilimcinin deneyim-maas sacilim grafigi |
| Cinsiyet Farki | `/cinsiyet/` | Cinsiyet maas farki analizi, sektor karsilastirmasi |
| Enflasyon | `/enflasyon/` | Tantuni Endeksi, vergi yuku, kira/maas |

### Rapor sayfasindaki grafikler

- **Maas trendi (2018-2026):** Junior/Mid/Senior/Asgari Ucret, logaritmik olcek
- **Pozisyon siralamasi:** 27 pozisyon, kategori filtreleme, cross-highlight
- **Yapay zeka arac kullanimi:** Turkiye vs dunya karsilastirmasi
- **Sirket turune gore maas:** Bahis, banka, startup vb. karsilastirma
- **Pozisyon siralama degisimi:** 14 rolun 2020-2026 bump chart'i
- **Uluslararasi karsilastirma:** Turkiye vs ABD vs Almanya radar grafigi

## Teknik Altyapi

| Teknoloji | Kullanim |
|-----------|----------|
| [Astro 6](https://astro.build) | Statik site uretici, View Transitions |
| [React 19](https://react.dev) | Interaktif grafik bilesenleri |
| [Nivo](https://nivo.rocks) | Line, Bump, Radar grafikleri |
| [Recharts](https://recharts.org) | Sacilim grafigi |
| [Tailwind CSS 4](https://tailwindcss.com) | Tasarim sistemi |
| [Framer Motion](https://www.framer.com/motion/) | Scroll-triggered animasyonlar |
| [Playwright](https://playwright.dev) | Gorsel regresyon testleri |
| [Vitest](https://vitest.dev) | Veri butunlugu testleri |

## Kurulum

**Gereksinimler:** Node.js >= 22.12.0

```bash
# Depoyu klonla
git clone https://github.com/alpozcan/bt-maas-endeksi.git
cd bt-maas-endeksi

# Bagimliliklari kur
npm install

# Gelistirme sunucusunu baslat
npm run dev
```

Tarayicida `http://localhost:4321` adresini ac.

### Diger komutlar

| Komut | Aciklama |
|-------|----------|
| `npm run dev` | Gelistirme sunucusu (localhost:4321) |
| `npm run build` | Uretim icin derle (`./dist/`) |
| `npm run preview` | Derlenmis siteyi onizle |
| `npx vitest run` | Veri butunlugu testlerini calistir |
| `npx playwright test` | Gorsel regresyon testleri |

## Dosya Yapisi

```
bt-maas-endeksi/
├── public/
│   └── data/
│       └── survey-2025.json          # onceki yazilimci anket verisi (380KB)
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx             # Ana rapor bileseni (React)
│   │   ├── Hero.tsx                  # Baslik ve KPI kartlari
│   │   ├── TrendChart.tsx            # 8 yillik maas trendi (Nivo Line)
│   │   ├── RoleBar.tsx               # Pozisyon siralamasi
│   │   ├── AIAdoption.tsx            # Yapay zeka arac kullanimi
│   │   ├── CompanyTypeSalary.tsx     # Sirket turune gore maas
│   │   ├── RoleBump.tsx              # Pozisyon siralama degisimi (Nivo Bump)
│   │   ├── RoleRadar.tsx             # Uluslararasi karsilastirma (Nivo Radar)
│   │   ├── SalaryScatter.tsx         # Deneyim-maas sacilim grafigi (Recharts)
│   │   ├── HighlightContext.tsx      # Cross-chart highlight state
│   │   ├── CategoryFilter.tsx        # Kategori filtreleme
│   │   ├── FadeIn.tsx                # Scroll-triggered animasyon
│   │   ├── Nav.astro                 # Sticky navigasyon
│   │   ├── Footer.astro              # 3 kolonlu footer + kaynaklar
│   │   ├── Editorial.astro           # "Maas Verisi Neden Onemli?" bolumu
│   │   └── IznimvarBanner.astro      # iznimvar.com yonlendirmesi
│   ├── data/
│   │   └── salaries.ts               # Tum maas, trend ve kategori verileri
│   ├── layouts/
│   │   └── Layout.astro              # Sayfa sablonu + View Transitions
│   ├── pages/
│   │   ├── index.astro               # Ana rapor sayfasi
│   │   ├── dagilim/index.astro       # Sacilim grafigi sayfasi
│   │   ├── cinsiyet/index.astro      # Cinsiyet farki analizi
│   │   └── enflasyon/index.astro     # Enflasyon ve vergi analizi
│   └── styles/
│       └── global.css                # Tailwind + tasarim tokenlari
├── tests/
│   ├── data.test.ts                  # Veri butunlugu (Vitest)
│   └── visual.spec.ts               # Gorsel regresyon (Playwright)
├── package.json
├── astro.config.mjs
├── LICENSE                           # MIT
└── README.md
```

## Katki

Katkida bulunmak istiyorsaniz:

- Veri hatalarini bildirmek icin bir issue acin
- Yeni grafik veya analiz onerileri icin tartisma baslatin
- Turkce dilbilgisi duzeltmeleri her zaman memnuniyetle karsilanir
- Pull request gondermeden once `npm run build` ile derlemenin basarili oldugundan emin olun

Yan haklari karsilastirmak icin [iznimvar.com](https://iznimvar.com) adresini ziyaret edebilirsiniz.

## Lisans

Bu proje [MIT Lisansi](LICENSE) ile lisanslanmistir.

---

Veriler yaklasik olup yalnizca bilgilendirme amacidir. TR verileri net (vergi sonrasi), kuresel veriler brut yilliktir.
