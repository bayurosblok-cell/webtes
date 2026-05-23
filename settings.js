/**
 * settings.js - Centralized configuration
 * All sensitive data is hidden from client endpoints
 */

module.exports = {
  // App Config
  STORE_NAME: "BAYZZ STORE",
  CONTACT_WHATSAPP: "https://wa.me/6283181364952",

  // Links Configuration
  CHANNEL_LINK: "https://whatsapp.com/channel/0029Vb6zxVp3wtb3KKJJWL2X",
  BOT_GROUP_LINK: "https://chat.whatsapp.com/L7uGiB02nlHAqmy73jfGqy",
  STORE_GROUP_LINK: "https://chat.whatsapp.com/FZvr4eLSZL0IP5UGqwjvUb",
  CONTACT_ADMIN: "https://wa.me/6283181364952",

  // Website Assets
  WEBSITE_LOGO: "https://img2.pixhost.to/images/5707/694518103_alip-1770904754646.jpg",
  WEBSITE_BANNER: "https://img2.pixhost.to/images/5830/696633729_media.jpg",

  // Admin password 
  ADMIN_PASSWORD: "wkwkw",

  // Kalo mau whitlist ip bersihin aja // nya

//   ADMIN_WHITELIST_IPS: [
//    "127.0.0.1",
//    "::1",
//    "202.152.203.6" // ganti dengan IP lu
//  ],

  // Panel Prices (per bulan)
  PRICES: {
    PANEL_1GB: 3000,
    PANEL_2GB: 5000,
    PANEL_3GB: 7000,
    PANEL_4GB: 9000,
    PANEL_5GB: 11000,
    PANEL_6GB: 14000,
    PANEL_7GB: 18000,
    PANEL_PREMIUM: 30000
  },

  // Payment Gateway
  PAYMENT: {
    SLUG: "slug project",
    API_KEY: "apikey pakasir"
  },

  // System
  AUTO_DELETE_AFTER_DAYS: 3,
  RESTOCK: true, // Ubah ke true untuk aktifkan

  // GitHub Storage
  GITHUB: {
    TOKEN: "github token classic",
    OWNER: "username github",
    REPO: "nama repo web panelnyal",
    FILE_PATH: "dataserver.json"
  },

  // Pterodactyl Config
  PTERODACTYL: {
    DOMAIN: "https://domain.com",
    API_KEY: "plta---",
    NEST_ID: 5,
    EGG_ID: 15,
    LOCATION_ID: 1
  },

  // Node Server
  NODE: {
    HOST: "ip vps",
    ROOT_PASS: "pw vps"
  }
};