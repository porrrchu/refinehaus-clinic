// Case studies. NOTE: before/after photos and patient stories for medical
// procedures are regulated by สบส. — get advertising approval and written
// patient consent before publishing real cases. All [bracketed] text is placeholder.

export interface CaseStudy {
  slug: string;
  n: string;
  key: string;
  concern: string;
  approach: string;
  doctorSlug: 'duangsamon' | 'juthamas';
  summary: string;
  assessment: string;
  plan: string[];
  sessions: string;
  followUp: string;
  patientNote: string;
  updatedAt: string;
}

export const CASES: CaseStudy[] = [
  {
    slug: 'lift-contour-case-01',
    n: 'Case 01',
    key: 'Lift & Contour',
    concern: 'กรอบหน้าไม่ชัด / ความหย่อนคล้อย',
    approach: 'Individualized Lift & Contour Plan',
    doctorSlug: 'duangsamon',
    summary: '[สรุปเคสสั้น ๆ: อายุช่วงไหน กังวลเรื่องอะไร ต้องการผลลัพธ์แบบใด]',
    assessment: '[ผลการประเมินของแพทย์: โครงสร้างใบหน้า ระดับความหย่อนคล้อย ตำแหน่งที่ควรดูแล]',
    plan: ['[ทรีตเมนต์ที่ 1 เช่น XERF]', '[ทรีตเมนต์ที่ 2 เช่น New Doublo 2.0]', '[คำแนะนำการดูแลตัวเองหลังทำ]'],
    sessions: '[จำนวนครั้ง]',
    followUp: '[ระยะเวลาติดตามผล เช่น 1 และ 3 เดือน]',
    patientNote: '[ความรู้สึกของคนไข้หลังการดูแล — ใช้เมื่อได้รับความยินยอมเป็นลายลักษณ์อักษรแล้ว]',
    updatedAt: '2026-10-12',
  },
  {
    slug: 'skin-quality-case-02',
    n: 'Case 02',
    key: 'Skin Quality',
    concern: 'ผิวแห้ง / ผิวไม่เรียบเนียน / Skin Quality',
    approach: 'Individualized Skin Quality Plan',
    doctorSlug: 'duangsamon',
    summary: '[สรุปเคสสั้น ๆ: สภาพผิวเริ่มต้น และเป้าหมายของคนไข้]',
    assessment: '[ผลการประเมินของแพทย์: ความชุ่มชื้น texture ความไวต่อการระคายเคือง]',
    plan: ['[ทรีตเมนต์ที่ 1 เช่น PN]', '[ทรีตเมนต์ที่ 2 เช่น Hydrobooster]', '[สกินแคร์ที่แนะนำ]'],
    sessions: '[จำนวนครั้ง]',
    followUp: '[ระยะเวลาติดตามผล]',
    patientNote: '[ความรู้สึกของคนไข้หลังการดูแล — ใช้เมื่อได้รับความยินยอมเป็นลายลักษณ์อักษรแล้ว]',
    updatedAt: '2026-10-12',
  },
  {
    slug: 'acne-scar-case-03',
    n: 'Case 03',
    key: 'Acne & Scar',
    concern: 'รอยสิว / หลุมสิว / Texture',
    approach: 'Individualized Acne & Scar Plan',
    doctorSlug: 'duangsamon',
    summary: '[สรุปเคสสั้น ๆ: ชนิดของสิวหรือหลุมสิว ระยะเวลาที่เป็น]',
    assessment: '[ผลการประเมินของแพทย์: ชนิดหลุมสิว ความลึก การอักเสบ]',
    plan: ['[ทรีตเมนต์ที่ 1 เช่น 1450 nm Diode]', '[ทรีตเมนต์ที่ 2 เช่น EXCEED Microneedling]', '[การดูแลระหว่างคอร์ส]'],
    sessions: '[จำนวนครั้ง]',
    followUp: '[ระยะเวลาติดตามผล]',
    patientNote: '[ความรู้สึกของคนไข้หลังการดูแล — ใช้เมื่อได้รับความยินยอมเป็นลายลักษณ์อักษรแล้ว]',
    updatedAt: '2026-10-12',
  },
];

export function getCase(slug: string) {
  return CASES.find((c) => c.slug === slug);
}
