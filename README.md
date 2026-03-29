# BT Maaş Endeksi

Türkiye yazılım sektöründe maaş şeffaflığını artırmak amacıyla geliştirilen bağımsız ve açık kaynaklı bir veri platformu. 5.002 yazılımcının anonim katılımıyla, 37 pozisyon ve 8 yıllık veri üzerinden hazırlanan Türkiye'nin en kapsamlı yazılım maaş analizi.

**Canlı:** [bt-maas-endeksi.pages.dev](https://bt-maas-endeksi.pages.dev)

## İçerik

- [Hakkında](#hakkında)
- [Veri Kaynakları](#veri-kaynakları)
- [Sayfalar](#sayfalar)
- [Teknik Altyapı](#teknik-altyapı)
- [Kurulum](#kurulum)
- [Dosya Yapısı](#dosya-yapısı)
- [Katkı](#katkı)
- [Lisans](#lisans)

## Hakkında

BT Maaş Endeksi, Türkiye'deki yazılım sektöründe çalışan geliştiricilerin maaş verilerini görselleştirir ve analiz eder. Platform aşağıdaki sorulara yanıt aramayı amaçlar:

- Türkiye'de bir yazılımcı hangi pozisyonda, hangi seviyede, ne kadar kazanıyor?
- Son 8 yılda maaşlar nasıl değişti? Enflasyona yetişebildi mi?
- Cinsiyet maaş farkı ne durumda? Diğer sektörlerle karşılaştırıldığında nerede?
- Vergi yükü uluslararası karşılaştırmada nasıl görünüyor?
- Hangi şirket türleri en yüksek maaşı ödüyor?

Tüm veriler halka açık kaynaklardan derlenmiştir. Platform herhangi bir şirketin, ajansın veya istihdam platformunun reklam aracı değildir.

## Veri Kaynakları

### Ana Kaynaklar

| Kaynak | Açıklama | Dönem |
|--------|----------|-------|
| [önceki yazılımcı](https://github.com/oncekiyazilimci) | Yazılım sektörü maaş anketi, 5.002 katılımcı | 2018-2026 |
| [Levels.fyi](https://www.levels.fyi) | 10 ülke yazılım mühendisi toplam ücret verileri, 64.000+ beyan | 2025 |
| [Numbeo](https://www.numbeo.com) | Tüm sektörler ortalama maaş ve yaşam maliyeti | 2025-2026 |
| [ENAG](https://enagrup.org) | Bağımsız enflasyon verileri | 2020-2025 |
| [TÜİK](https://tuik.gov.tr) | Resmi istihdam ve ücret istatistikleri | 2023-2025 |

### Ek Kaynaklar

| Kaynak | Kapsam |
|--------|--------|
| [The Economist](https://www.economist.com/big-mac-index) | Big Mac Endeksi |
| [PwC Tax Summaries](https://taxsummaries.pwc.com) | Efektif vergi oranları |
| [OECD](https://www.oecd.org/tax/) | Vergilendirme karşılaştırması |
| [ILO/TURKSTAT](https://ilostat.ilo.org) | Kazanç Yapısı Araştırması |
| [World Bank](https://data.worldbank.org) | Kadın işgücüne katılım oranları |
| [Cambridge Core](https://doi.org/10.1017/S1474747224000088) | Cinsiyet maaş farkı araştırması (14 milyon veri) |
| [GİB](https://www.gib.gov.tr) | Türkiye vergi mevzuatı |

## Sayfalar

| Sayfa | Yol | Açıklama |
|-------|-----|----------|
| Rapor | `/` | 10 interaktif grafik, kategori filtreleme, cross-highlight |
| Dağılım | `/dagilim/` | 5.002 yazılımcının deneyim-maaş saçılım grafiği |
| Cinsiyet Farkı | `/cinsiyet/` | Cinsiyet maaş farkı analizi, sektör karşılaştırması |
| Enflasyon | `/enflasyon/` | Tantuni Endeksi, vergi yükü, kira/maaş |

### Rapor sayfasındaki grafikler

- **Maaş trendi (2018-2026):** Junior/Mid/Senior/Asgari Ücret, logaritmik ölçek
- **Pozisyon sıralaması:** 27 pozisyon, kategori filtreleme, cross-highlight
- **Yapay zeka araç kullanımı:** Türkiye vs dünya karşılaştırması
- **Şirket türüne göre maaş:** Bahis, banka, startup vb. karşılaştırma
- **Pozisyon sıralama değişimi:** 14 rolün 2020-2026 bump chart'ı
- **20 ülke toplam ücret karşılaştırması:** Levels.fyi P25/P50/P75 verileri
- **Veri kaynakları arası tutarlılık analizi:** önceki yazılımcı vs Levels.fyi
- **Uluslararası karşılaştırma:** Türkiye vs ABD vs Almanya radar grafiği

## Teknik Altyapı

| Teknoloji | Kullanım |
|-----------|----------|
| [Astro 6](https://astro.build) | Statik site üretici, View Transitions |
| [React 19](https://react.dev) | İnteraktif grafik bileşenleri |
| [Nivo](https://nivo.rocks) | Line, Bump, Radar grafikleri |
| [Recharts](https://recharts.org) | Saçılım grafiği |
| [Tailwind CSS 4](https://tailwindcss.com) | Tasarım sistemi |
| [Framer Motion](https://www.framer.com/motion/) | Scroll-triggered animasyonlar |

## Kurulum

**Gereksinimler:** Node.js >= 22.12.0

```bash
# Depoyu klonlayın
git clone https://github.com/alpozcan/bt-maas-endeksi.git
cd bt-maas-endeksi

# Bağımlılıkları kurun
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcıda `http://localhost:4321` adresini açın.

### Diğer komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusu (localhost:4321) |
| `npm run build` | Üretim için derle (`./dist/`) |
| `npm run preview` | Derlenmiş siteyi önizle |

## Dosya Yapısı

```
bt-maas-endeksi/
├── public/
│   └── data/
│       └── survey-2025.json          # önceki yazılımcı anket verisi (380KB)
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx             # Ana rapor bileşeni (React)
│   │   ├── Hero.tsx                  # Başlık ve KPI kartları
│   │   ├── TrendChart.tsx            # 8 yıllık maaş trendi (Nivo Line)
│   │   ├── RoleBar.tsx               # Pozisyon sıralaması
│   │   ├── AIAdoption.tsx            # Yapay zeka araç kullanımı
│   │   ├── CompanyTypeSalary.tsx     # Şirket türüne göre maaş
│   │   ├── RoleBump.tsx              # Pozisyon sıralama değişimi (Nivo Bump)
│   │   ├── GlobalSalaryComparison.tsx # 20 ülke Levels.fyi karşılaştırması
│   │   ├── DataIntegrity.tsx         # Veri kaynakları tutarlılık analizi
│   │   ├── RoleRadar.tsx             # Uluslararası karşılaştırma (Nivo Radar)
│   │   ├── SalaryScatter.tsx         # Deneyim-maaş saçılım grafiği (Recharts)
│   │   ├── HighlightContext.tsx      # Cross-chart highlight state
│   │   ├── CategoryFilter.tsx        # Kategori filtreleme
│   │   ├── FadeIn.tsx                # Scroll-triggered animasyon
│   │   ├── Nav.astro                 # Sticky navigasyon
│   │   ├── Footer.astro              # 3 kolonlu footer + kaynaklar
│   │   ├── Editorial.astro           # "Maaş Verisi Neden Önemli?" bölümü
│   │   └── IznimvarBanner.astro      # iznimvar.com yönlendirmesi
│   ├── data/
│   │   └── salaries.ts               # Tüm maaş, trend ve kategori verileri
│   ├── layouts/
│   │   └── Layout.astro              # Sayfa şablonu + View Transitions
│   ├── pages/
│   │   ├── index.astro               # Ana rapor sayfası
│   │   ├── dagilim/index.astro       # Saçılım grafiği sayfası
│   │   ├── cinsiyet/index.astro      # Cinsiyet farkı analizi
│   │   └── enflasyon/index.astro     # Enflasyon ve vergi analizi
│   └── styles/
│       └── global.css                # Tailwind + tasarım tokenleri
├── package.json
├── astro.config.mjs
├── LICENSE                           # MIT
└── README.md
```

## Katkı

Katkıda bulunmak istiyorsanız:

- Veri hatalarını bildirmek için bir issue açın
- Yeni grafik veya analiz önerileri için tartışma başlatın
- Türkçe dilbilgisi düzeltmeleri her zaman memnuniyetle karşılanır
- Pull request göndermeden önce `npm run build` ile derlemenin başarılı olduğundan emin olun

Yan hakları karşılaştırmak için [iznimvar.com](https://iznimvar.com) adresini ziyaret edebilirsiniz.

## Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.

---

Veriler yaklaşık olup yalnızca bilgilendirme amacıdır. TR verileri net (vergi sonrası), küresel veriler brüt yıllıktır.
