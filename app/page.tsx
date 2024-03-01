// Assuming you have multiple images for the hero section
import HeroSection from '@/components/herosection';
import Navbar from '@/components/navbar';
import heroImage1 from '@/public/herosection/hero2.webp';
import heroImage2 from '@/public/herosection/hero3.webp';
import heroImage3 from '@/public/herosection/hero4.webp';
import heroImage4 from '@/public/herosection/hero5.webp';

export default function Home() {
  // Array of images for the carousel
  const heroImages = [heroImage1, heroImage2, heroImage3,heroImage4];

  return (
    <>
      <Navbar />
      <HeroSection
          title="Fuelling Growth through Innovation"
          subtitle="Leveraging new technologies and bringing transformation in Indian real estate."
          buttonText="Discover our Services"
          backgroundImages={heroImages} // Notice the plural here, we're passing an array now
          buttonLink="/services"
        />
    </>
  );
}
