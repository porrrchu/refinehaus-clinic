// Article index. Body content lives in src/content/articles/<slug>.mdx.
// Medical articles must be written or reviewed by a clinic physician (E-E-A-T).

export interface ArticleMeta {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  time: string;
  shot: string;
  authorSlug: 'duangsamon' | 'juthamas';
  publishedAt: string;
  updatedAt: string;
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: 'hifu-vs-rf',
    cat: 'Lifting',
    title: 'HIFU กับ RF ต่างกันอย่างไร และควรเลือกแบบไหน?',
    excerpt: 'เปรียบเทียบหลักการทำงานของ HIFU และ RF ความเหมาะสมกับปัญหาความหย่อนคล้อยแต่ละแบบ และสิ่งที่ควรรู้ก่อนตัดสินใจ',
    time: '5 นาที',
    shot: 'Editorial illustration comparing lifting technologies',
    authorSlug: 'duangsamon',
    publishedAt: '2026-10-12',
    updatedAt: '2026-10-12',
  },
  {
    slug: 'pn-vs-hydrobooster',
    cat: 'Skin Quality',
    title: 'PN กับ Hydrobooster ต่างกันตรงไหน?',
    excerpt: 'ทำความเข้าใจความแตกต่างของ PN และ Hydrobooster ว่าเหมาะกับสภาพผิวแบบไหน และวางแผนดูแลผิวในระยะยาวอย่างไร',
    time: '4 นาที',
    shot: 'Skin quality treatment consultation',
    authorSlug: 'duangsamon',
    publishedAt: '2026-10-12',
    updatedAt: '2026-10-12',
  },
  {
    slug: 'weight-loss-without-muscle-loss',
    cat: 'Medical Weight',
    title: 'ลดน้ำหนักอย่างไร ไม่ให้กล้ามเนื้อหาย?',
    excerpt: 'แนวทางลดน้ำหนักโดยรักษามวลกล้ามเนื้อ ทั้งเรื่องโปรตีน การออกกำลังกาย และการติดตามผลโดยแพทย์',
    time: '6 นาที',
    shot: 'Doctor explaining nutrition guidance',
    authorSlug: 'juthamas',
    publishedAt: '2026-10-12',
    updatedAt: '2026-10-12',
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
