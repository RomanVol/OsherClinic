import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'הקליניקה של אושר | טיפולים הוליסטיים לנשים | השרון הצפוני',
  description:
    'טיפולים הוליסטיים ופיתוח אישי לנשים בלבד בחריש, באזור השרון הצפוני (כולל חדרה ופרדס חנה). לתיאום שיחה: 050-766-0560.',
  alternates: {
    canonical: 'https://osherclinic.co.il/',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
