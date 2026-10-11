// Homepage content, moved out of the mockup's inline script.
// Edit copy here; components in src/components/sections render it.

export const NAV_LINKS = [
  { labelTh: "หน้าแรก", href: "/" },
  { labelTh: "บริการของเรา", href: "/#treatments" },
  { labelTh: "ทีมแพทย์", href: "/#doctors" },
  { labelTh: "รีวิว", href: "/#results" },
  { labelTh: "บทความ", href: "/#articles" },
  { labelTh: "โปรโมชั่น", href: "/#promotions" },
  { labelTh: "ติดต่อเรา", href: "/#contact" },
];

export const FOOTER_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Treatments", href: "/#treatments" },
  { label: "Doctors", href: "/#doctors" },
  { label: "Results", href: "/#results" },
  { label: "Knowledge", href: "/#articles" },
  { label: "Promotions", href: "/#promotions" },
  { label: "Contact", href: "/#contact" },
];

export const CONCERNS = [
  { title: "หน้าหย่อนคล้อย", target: "lift-contour", sub: "กรอบหน้าไม่ชัด", shot: "Jawline & facial contour concern", img: "/images/concern-jawline.png" },
  { title: "ริ้วรอย", target: "lift-contour", sub: "และรูปหน้า", shot: "Fine lines & facial volume concern" },
  { title: "ผิวแห้ง", target: "skin-quality", sub: "ผิวดูโทรม ผิวไม่เรียบเนียน", shot: "Dull, uneven skin texture concern" },
  { title: "สิว", target: "acne-scar", sub: "และปัญหาผิวอุดตัน", shot: "Active acne concern" },
  { title: "รอยสิว", target: "acne-scar", sub: "และหลุมสิว", shot: "Acne scars & post-acne marks concern" },
  { title: "น้ำหนัก", target: "weight-management", sub: "และรูปร่าง", shot: "Weight & body shape concern" },
];

export const EXPERTISE = [
  {
    slug: "lift-contour",
    num: "01", key: "LIFT & CONTOUR",
    titleTh: "ดูแลความหย่อนคล้อย กรอบหน้า และสัดส่วนใบหน้า",
    body: "ออกแบบแผนการดูแลตามโครงสร้างใบหน้าและระดับความหย่อนคล้อยของแต่ละคน เพื่อการดูแลที่พอดีและเป็นธรรมชาติ",
    list: "XERF · New Doublo 2.0 · Botulinum Toxin · Facial Contouring",
    cta: "Explore Lift & Contour",
    shot: "Doctor assessing facial structure with patient, mirror in hand",
  },
  {
    slug: "skin-quality",
    num: "02", key: "SKIN QUALITY",
    titleTh: "งานผิวที่ไม่ได้มองแค่ความฉ่ำ แต่มองสุขภาพผิวในระยะยาว",
    body: "วางแผนดูแลผิวให้เหมาะกับแต่ละคน เพื่อความชุ่มชื้น ความเรียบเนียน และผิวที่ดูสุขภาพดีอย่างเป็นธรรมชาติ",
    list: "PN · Hydrobooster · Skin Quality Treatments",
    cta: "Explore Skin Quality",
    shot: "Close-up of healthy skin texture consultation",
  },
  {
    slug: "acne-scar",
    num: "03", key: "ACNE & SCAR",
    titleTh: "ดูแลสิว รอยสิว และหลุมสิว ด้วยแผนที่แตกต่างตามปัญหา",
    body: "สิวและรอยแผลเป็นแต่ละชนิดตอบสนองต่อการรักษาแตกต่างกัน จึงเริ่มต้นจากการประเมินปัญหาก่อนเลือกวิธีดูแลที่เหมาะสม",
    list: "1450 nm Diode · Microneedling · RF · Acne Scar Procedures",
    cta: "Explore Acne & Scar",
    shot: "Doctor examining acne scarring under clinical light",
  },
  {
    slug: "weight-management",
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
    img: "/images/doctors/juthamas.jpg",
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

export const CLINIC_SHOTS = [
  { label: "Refinehaus reception desk, warm wood & olive tones", span: "lg:col-span-2 lg:row-span-2" },
  { label: "Waiting area with soft natural light", span: "" },
  { label: "Consultation room, doctor's desk", span: "" },
  { label: "Treatment room, calm and clinical", span: "lg:col-span-2" },
  { label: "Coffee & refreshment corner", span: "" },
  { label: "Refinehaus signature cookie", span: "" },
  { label: "Interior detail, light wood texture", span: "" },
  { label: "Refinehaus logo signage", span: "" },
];

// Placeholder offers — replace with the clinic's real promotions.
// Medical service advertising (incl. prices/discounts) needs สบส. approval.
export const PROMOTIONS = [
  { key: "First Visit", title: "ปรึกษาแพทย์ครั้งแรก", detail: "[รายละเอียดโปรโมชั่น / ราคา]", until: "[วันที่สิ้นสุด]", shot: "Consultation room, doctor greeting new patient" },
  { key: "Lift & Contour", title: "โปรแกรมยกกระชับกรอบหน้า", detail: "[รายละเอียดโปรโมชั่น / ราคา]", until: "[วันที่สิ้นสุด]", shot: "Lift & contour treatment setup" },
  { key: "Skin Quality", title: "โปรแกรมดูแลคุณภาพผิว", detail: "[รายละเอียดโปรโมชั่น / ราคา]", until: "[วันที่สิ้นสุด]", shot: "Skin quality treatment, calm treatment room" },
];

export function getDoctor(slug: string) {
  return DOCTORS.find((d) => d.slug === slug);
}
