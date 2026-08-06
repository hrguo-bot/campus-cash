{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const CACHE = 'campus-cash-v1';\
const FILES = [\
  './',\
  './index.html',\
  './manifest.json'\
];\
\
// Install \'97 cache all files\
self.addEventListener('install', e => \{\
  e.waitUntil(\
    caches.open(CACHE).then(cache => cache.addAll(FILES))\
  );\
  self.skipWaiting();\
\});\
\
// Activate \'97 clean old caches\
self.addEventListener('activate', e => \{\
  e.waitUntil(\
    caches.keys().then(keys =>\
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))\
    )\
  );\
  self.clients.claim();\
\});\
\
// Fetch \'97 serve from cache, fallback to network\
self.addEventListener('fetch', e => \{\
  e.respondWith(\
    caches.match(e.request).then(cached => cached || fetch(e.request))\
  );\
\});}
