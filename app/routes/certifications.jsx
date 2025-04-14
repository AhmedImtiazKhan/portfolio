// app/routes/certifications.jsx
import { Meta } from '@remix-run/react';

export const meta = () => {
  return [{ title: 'Certifications' }];
};

export default function Certifications() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Certifications</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>AWS Certified Solutions Architect</li>
        <li>Google Cloud Associate Engineer</li>
        <li>Certified Kubernetes Administrator</li>
        {/* Add more as needed */}
      </ul>
    </main>
  );
}
