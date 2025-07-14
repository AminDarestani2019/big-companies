/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // برای ساختار App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // اگر از Pages Router استفاده می‌کنی
    "./components/**/*.{js,ts,jsx,tsx}", // تمام کامپوننت‌ها
  ],
  theme: {
    extend: {
      // می‌تونی اینجا رنگ‌ها، ارتفاع‌ها یا فونت‌های سفارشی اضافه کنی
      height: {
        '500': '500px', // برای پشتیبانی از h-[500px] در کد CompanyItem
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // استفاده از پلاگین line-clamp
  ],
}