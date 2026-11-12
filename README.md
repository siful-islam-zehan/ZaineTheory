# 🚀 Full-Stack Website Architecture & Starter Kit

এই প্রজেক্টটিতে একটি আধুনিক ওয়েবসাইটের জন্য প্রয়োজনীয় সকল লেয়ারের ফাইল ও ফোল্ডার এক সাথে নিখুঁতভাবে তৈরি করে সাজানো হয়েছে:
**Frontend, Backend, Database, REST API, Photos, Favicon, JavaScript, PHP, এবং CSS।**

---

## 📁 প্রজেক্ট স্ট্রাকচার (Directory Tree)

```text
├── index.html                 # সরাসরি ব্রাউজারে ডাবল-ক্লিক করে দেখার জন্য Static Frontend UI
├── index.php                  # মূল ডায়নামিক PHP Router ও Front-Controller
├── .htaccess                  # Apache Rewrite & Security Rules
├── .env.example               # Environment Variables টেমপ্লেট
├── README.md                  # ডকুমেন্টেশন
│
├── api/                       # 🔌 REST API Endpoints (JSON)
│   ├── index.php              # API Gateway
│   ├── status.php             # সার্ভার ও ডাটাবেজ হেলথ চেক
│   ├── users.php              # Users CRUD API (GET, POST, DELETE)
│   └── posts.php              # Posts/Articles API (GET, POST)
│
├── assets/                    # 🎨 স্ট্যাটিক এসেটস (CSS, JS, Images, Favicon)
│   ├── css/
│   │   ├── style.css          # মূল রেসপন্সিভ সিএসএস (Theme, Grid, Variables)
│   │   └── components.css     # বাটন, কার্ড, ফর্ম, টেবিল, মডাল
│   ├── js/
│   │   ├── api.js             # REST API Fetch Client (Asynchronous)
│   │   └── main.js            # ডার্ক/লাইট মোড, মোবাইল মেনু, UI লজিক
│   ├── images/
│   │   ├── logo.svg           # প্রজেক্ট লোগো
│   │   ├── banner.svg         # ব্যানার ও ইলাস্ট্রেশন
│   │   ├── avatar-placeholder.svg # ইউজার অবতার
│   │   ├── feature-frontend.svg
│   │   ├── feature-backend.svg
│   │   └── feature-database.svg
│   └── favicon/
│       ├── favicon.ico        # স্ট্যান্ডার্ড ব্রাউজার ফেভিকন
│       ├── favicon.svg        # আধুনিক ভেক্টর ফেভিকন
│       └── site.webmanifest   # PWA ও ব্রাউজার কনফিগ
│
├── backend/                   # ⚙️ ব্যাকএন্ড আর্কিটেকচার (PHP)
│   ├── controllers/
│   │   └── UserController.php # ইউজার সংক্রান্ত লজিক কন্ট্রোলার
│   ├── models/
│   │   ├── User.php           # ইউজার ডাটাবেজ মডেল (CRUD)
│   │   └── Post.php           # পোস্ট ডাটাবেজ মডেল (CRUD)
│   └── helpers/
│       └── functions.php      # স্যানিটাইজেশন, রেসপন্স হেল্পার
│
├── config/                    # 🛠️ সিস্টেম কনফিগারেশন
│   ├── config.php             # অ্যাপ কনস্ট্যান্টস, রুট পাথ, টাইমজোন
│   └── database.php           # PDO ডাটাবেজ কানেকশন (MySQL + SQLite ফলব্যাক)
│
├── database/                  # 🗄️ ডাটাবেজ স্কিমা ও মাইগ্রেশন
│   ├── schema.sql             # MySQL / SQLite স্কিমা (users, posts, categories টেবিল ও সীড ডাটা)
│   └── setup.php              # এক ক্লিকে টেবিল তৈরি করার স্ক্রিপ্ট
│
└── views/                     # 🖥️ ফ্রন্টএন্ড টেমপ্লেটস (PHP Views)
    ├── home.php               # হোমপেজ ভিউ
    ├── about.php              # এবাউট ভিউ
    ├── contact.php            # কন্টাক্ট ফর্ম ভিউ
    ├── 404.php                # নট ফাউন্ড ভিউ
    └── partials/
        ├── header.php         # গ্লোবাল হেডার ও নেভিগেশন
        └── footer.php         # গ্লোবাল ফুটার ও স্ক্রিপ্ট লিংক
```

---

## 🎯 ফাইলগুলোর কাজ ও সুবিধা

1. **Frontend (HTML/CSS/JS):**
   - আধুনিক রেসপন্সিভ ডিজাইন, ডার্ক মোড / লাইট মোড টগল।
   - সম্পূর্ণ পিওর Vanilla JavaScript (কোনো অপ্রয়োজনীয় হেভি ফ্রেমওয়ার্ক ছাড়াই দ্রুত কাজ করে)।
2. **Backend (PHP):**
   - MVC-রীতিতে সাজানো (Controllers, Models, Views)।
   - নিরাপদ PDO Prepared Statements (SQL Injection মুক্ত)।
3. **Database (SQL):**
   - `database/schema.sql`-এ প্রয়োজনীয় সব প্রাথমিক টেবিল এবং ডামি ডাটা যোগ করা আছে।
4. **REST API:**
   - যেকোনো মোবাইল অ্যাপ বা ফ্রন্টএন্ড থেকে কল করার উপযোগী JSON API।
5. **Assets (Photos & Favicons):**
   - ক্রিস্প ভেক্টর এসভিজি ছবি এবং `.ico` ফেভিকন যুক্ত করা।

## 🌐 Wikipedia Dynamic Data Engine (Python + SQLite + REST API)

প্রজেক্টটিতে এখন **`wikipedia-api` (Python 3.12)** ব্যবহার করে সম্পূর্ণ ডায়নামিক ব্যাকএন্ড ইন্টিগ্রেট করা হয়েছে:

### ১. লাইব্রেরি ও সিঙ্ক স্ক্রিপ্ট:
- `pip install wikipedia-api`
- সিঙ্ক স্ক্রিপ্ট: **`backend/wiki_sync.py`**
  - উইকিপিডিয়া থেকে রিয়েল-টাইম ডাটা ফেচ করে SQLite ডাটাবেজ (`database/app.sqlite`) এবং ক্যাশ ফাইল (`assets/data/wiki_data.json`)-এ সেভ করে।
  - বিজ্ঞানীদের জীবনী, আবিষ্কারের সারসংক্ষেপ, সূত্র/সমীকরণ, এবং বইয়ের চ্যাপ্টার ও আউটলাইন ডাটাবেজে স্টোর করে।

```bash
python backend/wiki_sync.py
```

### ২. পাইথন ব্যাকএন্ড মাইক্রোসার্ভিস:
- স্ক্রিপ্ট: **`backend/server.py`**
- স্ট্যান্ডঅ্যালোন REST API সার্ভার:
```bash
python backend/server.py 8000
```
- **Endpoints:**
  - `GET /api/theorists` — বিজ্ঞানীদের ডাটা
  - `GET /api/researches` — পেপার ও আবিষ্কারসমূহ
  - `GET /api/books` — ১০টি জনপ্রিয় বিজ্ঞান বই
  - `GET /api/subjects` — ডিসিপ্লিনসমূহ
  - `GET /api/wiki/search?q=...` — লাইভ উইকিপিডিয়া সার্চ
  - `GET /api/status` — সিস্টেম স্ট্যাটাস

### ৩. পিএইচপি REST API এন্ডপয়েন্টস:
- `api/theorists.php`
- `api/researches.php`
- `api/books.php`
- `api/wiki.php?q=...` (অন-ডিমান্ড লাইভ উইকিপিডিয়া প্রক্সি ও লোকাল ক্যাশ লুকআপ)
- `api/status.php`

### ৪. ফ্রন্টএন্ড লাইভ উইকিপিডিয়া লুকআপ:
- রিডার মডালে একটি সার্বক্ষণিক লাইভ সার্চ বার যুক্ত করা হয়েছে। যে কোনো তত্ত্ব বা বিজ্ঞানীর নাম লিখে এন্টার দিলে উইকিপিডিয়া থেকে রিয়েল-টাইম তথ্য ও সারাংশ ফেচ করে মডালে ডাইনামিকালি প্রদর্শন করবে!

---

## 🏃‍♂️ কীভাবে চালাবেন (How to Run)

### অপশন ১: সরাসরি স্ট্যাটিক ফ্রন্টএন্ড প্রিভিউ দেখতে
- সরাসরি ফোল্ডারে থাকা **`index.html`** ফাইলে ডাবল-ক্লিক করলেই ব্রাউজারে সুন্দর ডিজাইন ও স্ট্যাক দেখতে পাবেন।

### অপশন ২: পিএইচপি লোকাল সার্ভারে সম্পূর্ণ ব্যাকএন্ডসহ চালাতে
যেকোনো টার্মিনাল বা কমান্ড প্রম্পটে প্রজেক্ট ফোল্ডারে গিয়ে টাইপ করুন:
```bash
php -S localhost:8000
```
এরপর ব্রাউজারে ওপেন করুন:
👉 **`http://localhost:8000`**

### অপশন ৩: XAMPP / Laragon ব্যবহার করলে
- পুরো ফোল্ডারটি আপনার XAMPP এর `htdocs` ফোল্ডারে কপি করে Apache ও MySQL চালু করুন।
- ডাটাবেজ টেবিল অটোমেটিক তৈরি করতে ব্রাউজারে চালান: `http://localhost/setup.php` অথবা `database/schema.sql` ফাইলটি phpMyAdmin এ Import করুন।

---

## 🚀 পরবর্তী ধাপ (Next Steps)
স্ট্রাকচার সম্পূর্ণ প্রস্তুত। এবার আপনি যা বানাতে চান (যেমন: কোনো নির্দিষ্ট ইকমার্স ওয়েবসাইট, ব্লগ, পোর্টফোলিও, ইউজার অথেন্টিকেশন, ড্যাশবোর্ড ইত্যাদি)—আমাকে বললে আমরা সেই অনুযায়ী পরবর্তী কাজ শুরু করতে পারব!
