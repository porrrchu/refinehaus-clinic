// Homepage content, moved out of the mockup's inline script.
// Edit copy here; components in src/components/sections render it.

export const NAV_LINKS = [
  { labelTh: "หน้าแรก", href: "#top" },
  { labelTh: "ทีมแพทย์", href: "#doctors" },
  { labelTh: "บริการของเรา", href: "#expertise" },
  { labelTh: "รีวิว", href: "#results" },
  { labelTh: "โปรโมชั่น", href: "#knowledge" },
  { labelTh: "ติดต่อเรา", href: "#contact" },
];

export const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#expertise" },
  { label: "Doctors", href: "#doctors" },
  { label: "Results", href: "#results" },
  { label: "Knowledge", href: "#knowledge" },
  { label: "Contact", href: "#contact" },
];

export const CONCERNS = [
  { title: "หน้าหย่อนคล้อย", sub: "กรอบหน้าไม่ชัด", shot: "Jawline & facial contour concern", img: "/images/concern-jawline.png" },
  { title: "ริ้วรอย", sub: "และรูปหน้า", shot: "Fine lines & facial volume concern" },
  { title: "ผิวแห้ง", sub: "ผิวดูโทรม ผิวไม่เรียบเนียน", shot: "Dull, uneven skin texture concern" },
  { title: "สิว", sub: "และปัญหาผิวอุดตัน", shot: "Active acne concern" },
  { title: "รอยสิว", sub: "และหลุมสิว", shot: "Acne scars & post-acne marks concern" },
  { title: "น้ำหนัก", sub: "และรูปร่าง", shot: "Weight & body shape concern" },
];

export const EXPERTISE = [
  {
    num: "01", key: "LIFT & CONTOUR",
    titleTh: "ดูแลความหย่อนคล้อย กรอบหน้า และสัดส่วนใบหน้า",
    body: "ออกแบบแผนการดูแลตามโครงสร้างใบหน้าและระดับความหย่อนคล้อยของแต่ละคน เพื่อการดูแลที่พอดีและเป็นธรรมชาติ",
    list: "XERF · New Doublo 2.0 · Botulinum Toxin · Facial Contouring",
    cta: "Explore Lift & Contour",
    shot: "Doctor assessing facial structure with patient, mirror in hand",
  },
  {
    num: "02", key: "SKIN QUALITY",
    titleTh: "งานผิวที่ไม่ได้มองแค่ความฉ่ำ แต่มองสุขภาพผิวในระยะยาว",
    body: "วางแผนดูแลผิวให้เหมาะกับแต่ละคน เพื่อความชุ่มชื้น ความเรียบเนียน และผิวที่ดูสุขภาพดีอย่างเป็นธรรมชาติ",
    list: "PN · Hydrobooster · Skin Quality Treatments",
    cta: "Explore Skin Quality",
    shot: "Close-up of healthy skin texture consultation",
  },
  {
    num: "03", key: "ACNE & SCAR",
    titleTh: "ดูแลสิว รอยสิว และหลุมสิว ด้วยแผนที่แตกต่างตามปัญหา",
    body: "สิวและรอยแผลเป็นแต่ละชนิดตอบสนองต่อการรักษาแตกต่างกัน จึงเริ่มต้นจากการประเมินปัญหาก่อนเลือกวิธีดูแลที่เหมาะสม",
    list: "1450 nm Diode · Microneedling · RF · Acne Scar Procedures",
    cta: "Explore Acne & Scar",
    shot: "Doctor examining acne scarring under clinical light",
  },
  {
    num: "04", key: "MEDICAL WEIGHT MANAGEMENT",
    titleTh: "โปรแกรมดูแลน้ำหนักโดยแพทย์ พร้อมการติดตามผลอย่างเป็นระบบ",
    body: "ประเมินเบื้องต้น ติดตามน้ำหนัก และสัดส่วน พร้อมคำแนะนำด้านโภชนาการและการดูแลมวลกล้ามเนื้อ เพื่อการดูแลที่เหมาะสมกับแต่ละคน",
    list: "Assessment · Weight Tracking · Nutrition Guidance · Follow-up",
    cta: "Explore Weight Management",
    shot: "Doctor reviewing body composition chart with patient",
  },
];

export const TECH = [
  { primary: "XERF", secondary: "Monopolar RF", desc: "เทคโนโลยีที่ใช้ประกอบการวางแผนดูแลความหย่อนคล้อยและกรอบหน้า" },
  { primary: "New Doublo 2.0", secondary: "Focused Ultrasound", desc: "อีกหนึ่งทางเลือกสำหรับการวางแผนดูแลความหย่อนคล้อยตามความเหมาะสม" },
  { primary: "1450 nm Diode", secondary: "Acne Technology", desc: "เทคโนโลยีที่ใช้ประกอบการดูแลปัญหาสิวตามการประเมินของแพทย์" },
  { primary: "EXCEED", secondary: "Microneedling", desc: "อีกหนึ่งทางเลือกในการวางแผนดูแล texture ผิวและปัญหาหลุมสิว" },
];

export const DOCTORS = [
  {
    slug: "duangsamon",
    name: "พญ. ดวงสมณญ์ ธนกิจมานะชัย",
    license: "ว. 55713",
    role: "แพทย์ผู้เชี่ยวชาญสาขาเวชศาสตร์ฉุกเฉิน",
    roleEn: "Emergency Medicine",
    focus: "LIFT & CONTOUR · SKIN QUALITY",
    quote: "เราอยากให้คนไข้เข้าใจก่อนว่า ปัญหาของตัวเองคืออะไร อะไรที่เหมาะสม และอะไรที่อาจยังไม่จำเป็น ก่อนตัดสินใจเข้ารับการดูแล",
    shot: "Doctor portrait, warm natural light, clinic consultation room",
  },
  {
    slug: "juthamas",
    name: "พญ. จุฑามาส ธนกิจมานะชัย",
    license: "",
    role: "แพทย์ผู้เชี่ยวชาญอายุรศาสตร์โรคต่อมไร้ท่อและเมแทบอลิซึม",
    roleEn: "Endocrinology and Metabolism",
    focus: "MEDICAL WEIGHT MANAGEMENT · WELLNESS & AESTHETIC CARE",
    quote: "การดูแลที่ดีไม่ใช่การทำให้มากที่สุด แต่คือการเลือกสิ่งที่เหมาะกับคนไข้แต่ละคนจริง ๆ",
    shot: "Doctor portrait, natural consultation with patient",
  },
];

export const STEPS = [
  { n: "01", key: "LISTEN", th: "ฟังสิ่งที่คุณกังวล" },
  { n: "02", key: "ASSESS", th: "ประเมินปัญหา โครงสร้างใบหน้า ผิว หรือสุขภาพ" },
  { n: "03", key: "DESIGN", th: "ออกแบบแผนการดูแลเฉพาะบุคคล" },
  { n: "04", key: "TREAT", th: "เลือกการรักษาที่เหมาะสมและจำเป็น" },
  { n: "05", key: "FOLLOW", th: "ติดตามผลหลังการดูแล" },
];

export const CASES = [
  { n: "Case 01", key: "Lift & Contour", concern: "กรอบหน้าไม่ชัด / ความหย่อนคล้อย", approach: "Individualized Lift & Contour Plan" },
  { n: "Case 02", key: "Skin Quality", concern: "ผิวแห้ง / ผิวไม่เรียบเนียน / Skin Quality", approach: "Individualized Skin Quality Plan" },
  { n: "Case 03", key: "Acne & Scar", concern: "รอยสิว / หลุมสิว / Texture", approach: "Individualized Acne & Scar Plan" },
];

export const ARTICLES = [
  { cat: "Lifting", title: "HIFU กับ RF ต่างกันอย่างไร และควรเลือกแบบไหน?", time: "5 นาที", shot: "Editorial illustration comparing lifting technologies" },
  { cat: "Skin Quality", title: "PN กับ Hydrobooster ต่างกันตรงไหน?", time: "4 นาที", shot: "Skin quality treatment consultation" },
  { cat: "Medical Weight", title: "ลดน้ำหนักอย่างไร ไม่ให้กล้ามเนื้อหาย?", time: "6 นาที", shot: "Doctor explaining nutrition guidance" },
];

export const CLINIC_SHOTS = [
  { label: "Refinehaus reception desk, warm wood & olive tones", span: "lg:col-span-2 lg:row-span-2", ratio: "1 / 1" },
  { label: "Waiting area with soft natural light", span: "", ratio: "4 / 5" },
  { label: "Consultation room, doctor's desk", span: "", ratio: "4 / 5" },
  { label: "Treatment room, calm and clinical", span: "lg:col-span-2", ratio: "16 / 9" },
  { label: "Coffee & refreshment corner", span: "", ratio: "4 / 5" },
  { label: "Refinehaus signature cookie", span: "", ratio: "4 / 5" },
  { label: "Interior detail, light wood texture", span: "", ratio: "4 / 5" },
  { label: "Refinehaus logo signage", span: "", ratio: "4 / 5" },
];
