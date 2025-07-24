// app/about/page.js
import Link from 'next/link'; // Import the Link component

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-center mb-8">This is the about page of our Next.js application.</p>
      <p className="text-lg text-center mb-8">We are learning Next.js!</p>

      {/* Add a link back to the Home page */}
      <div>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
