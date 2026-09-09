// 홈 화면 설치(PWA) 가능 조건을 충족시키기 위한 최소 서비스워커입니다.
// 별도의 캐싱/오프라인 처리는 하지 않고 모든 요청을 그대로 네트워크로 통과시킵니다.
self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', (event) => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', () => {});
