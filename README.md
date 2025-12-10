# ☕ CafeFinder - Mobil Harita Uygulaması

Bu proje, **Expo Maps** ve **@gorhom/bottom-sheet** kütüphaneleri kullanılarak geliştirilmiş, harita üzerinde kafe konumlarını gösteren ve tıklanan kafe detaylarını bir kayar alt pencerede (bottom sheet) sunan bir mobil uygulamadır. Platforma özel harita bileşeni (iOS için AppleMaps, Android için GoogleMaps) dinamik olarak seçilmektedir.

---

## 🛠️ Teknolojiler

### Temel Çerçeve ve Geliştirme Ortamı
* **React Native**
* **Expo (SDK 54)**: Yönetilen iş akışı (Managed Workflow)
* **Expo Maps**: Harita entegrasyonu ve platform spesifik harita bileşenleri (iOS AppleMaps, Android GoogleMaps)
* **TypeScript**: Tip güvenli ve ölçeklenebilir kod geliştirme
* **NativeWind (Tailwind CSS)**: Atomik CSS yardımcıları ile hızlı UI geliştirme

#### **Navigasyon**
- **@react-navigation/native**: `^7.1.6` - React Native için navigasyon kütüphanesi.
- **@gorhom/bottom-sheet**: `^5.2.7` - Alt sayfa (bottom sheet) bileşeni.

#### **Expo SDK Modülleri**
- **expo-font**: `~14.0.10` - Yazı tipi yükleme.
- **expo-location**: `~19.0.7` - Konum servisleri.
- **expo-maps**: `~0.12.8` - Harita entegrasyonu.


## 📍 Bağımlılıkları Yüklemek ve Projeyi Çalıştırmak İçin


```npm install``` veya ```pnpm install``` komutu ile bağımlılıkları yükleyin.


```npm run android``` veya ```npx expo run:android``` komutu ile uygulamayı çalıştırın.

---

## 📍 Cafe Listesinin JSON Örneği

Uygulamada harita işaretçileri olarak kullanılan kafe verileri, `Index.tsx` dosyasında aşağıdaki yapıya sahip bir JavaScript/TypeScript dizisi olarak tanımlanmıştır.

```json
[
  {
    "id": "1",
    "displayTitle": "Light Cafe",
    "shortDescription": "Best Cafe in Town",
    "description": "A cozy spot with large windows that flood the space with natural light. Perfect for morning coffee and work sessions. Our signature drink is the Honey Cinnamon Latte, made with locally sourced honey and organic cinnamon.",
    "coordinates": {
      "latitude": 37.7553,
      "longitude": 29.0480
    },
    "image": "[https://images.unsplash.com/photo-](https://images.unsplash.com/photo-)...",
    "tintColor": "#3498db",
    "rating": 4.8,
    "features": [
      { "icon": "☕", "text": "Specialty Coffee" },
      { "icon": "📶", "text": "Free WiFi" }
    ]
  },
  {
    "id": "2",
    "displayTitle": "Dark Cafe",
    "shortDescription": "Cozy dark roast specialist",
    "description": "An intimate, moody space with dim lighting and rich, dark wood interiors. Specializing in single-origin dark roasts and artisanal chocolate pairings. Try our famous Dark Mocha with 85% dark chocolate and a hint of orange zest.",
    "coordinates": {
      "latitude": 37.7770,
      "longitude": 29.0530
    },
    "image": "[https://plus.unsplash.com/premium_photo-](https://plus.unsplash.com/premium_photo-)...",
    "tintColor": "#9b59b6",
    "rating": 4.6,
    "features": [
      { "icon": "🍫", "text": "Artisanal Chocolate" },
      { "icon": "🌙", "text": "Late Night" }
    ]
  }
]
```

