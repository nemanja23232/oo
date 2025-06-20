# Comment Time Display Chrome Extension

هذه الإضافة مخصّصة لموقع فيسبوك وتعرض وقت نشر التعليقات بدقة الساعات والدقائق والثواني.

## خطوات التثبيت
1. افتح صفحة الإضافات في كروم من خلال `chrome://extensions`.
2. فعّل وضع المطور (Developer Mode).
3. اختر **Load unpacked** ثم حدد مجلد `comment-time-extension` داخل المشروع.

الامتداد يعمل فقط على نطاق `facebook.com` وسيقوم بتعديل العناصر التي تحتوي على خصائص `datetime`, `data-utime` أو `data-time` لتعرض الوقت بصيغة `HH:MM:SS`.
