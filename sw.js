self.addEventListener('install', (e) => {
  console.log('[Service Worker] Đã cài đặt');
});
self.addEventListener('fetch', (e) => {
  // Khai báo rỗng để trình duyệt nhận diện đây là PWA hợp lệ
});