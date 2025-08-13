import React from 'react';

const Reviews: React.FC = () => {
  return (
    <div className="bg-neutral-cream rounded-[80px] w-full max-w-7xl mx-auto py-24 px-6">
      <div className="text-black text-center font-caption-handwriting text-4xl md:text-6xl lg:text-7xl font-normal italic mb-16">
        ( what they say about us )
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Review Card 1 */}
        <div className="bg-secondary rounded-[20px] border-2 border-black p-8 md:p-12 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="bg-white rounded-full border-2 border-black py-3 px-8 flex items-center justify-center mb-12 shadow-review">
            <div className="text-black font-dk-keswick text-2xl md:text-3xl font-normal">
              review
            </div>
          </div>
          <div className="mb-12">
            <div className="border-t-2 border-black mb-8"></div>
            <div className="text-black font-figma-hand text-lg md:text-xl lg:text-2xl font-normal leading-relaxed">
              &ldquo;This app makes managing my portfolio so
              <br />
              easy. I love the real-time updates and
              <br />
              seamless transactions. It&apos;s the best crypto
              <br />
              app I&apos;ve ever used!&rdquo;
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white font-awesome-serif text-4xl md:text-6xl font-normal mb-4 md:mb-0">
              ( John Doe )
            </div>
            <div className="text-secondary font-alumni-sans text-2xl md:text-3xl font-medium">
              Developer
            </div>
          </div>
        </div>
        
        {/* Review Card 2 */}
        <div className="bg-accent rounded-[20px] border-2 border-black p-8 md:p-12 transform rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="bg-white rounded-full border-2 border-black py-3 px-8 flex items-center justify-center mb-12 shadow-review">
            <div className="text-black font-caption-handwriting text-3xl md:text-4xl font-normal italic">
              review
            </div>
          </div>
          <div className="mb-12">
            <div className="border-t-2 border-black mb-8"></div>
            <div className="text-black font-figma-hand text-lg md:text-xl lg:text-2xl font-normal leading-relaxed">
              &ldquo;This app makes managing my portfolio so
              <br />
              easy. I love the real-time updates and
              <br />
              seamless transactions. It&apos;s the best crypto
              <br />
              app I&apos;ve ever used!&rdquo;
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white font-awesome-serif text-4xl md:text-6xl font-normal mb-4 md:mb-0">
              ( John Doe )
            </div>
            <div className="text-secondary font-alumni-sans text-2xl md:text-3xl font-medium">
              Developer
            </div>
          </div>
        </div>
        
        {/* Review Card 3 */}
        <div className="bg-primary-light rounded-[20px] border-2 border-black p-8 md:p-12 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="bg-white rounded-full border-2 border-black py-3 px-8 flex items-center justify-center mb-12 shadow-review">
            <div className="text-black font-caption-handwriting text-3xl md:text-4xl font-normal italic">
              review
            </div>
          </div>
          <div className="mb-12">
            <div className="border-t-2 border-black mb-8"></div>
            <div className="text-black font-caption-handwriting text-lg md:text-xl lg:text-2xl font-normal italic leading-relaxed">
              &ldquo;This app makes managing my portfolio so
              <br />
              easy. I love the real-time updates and seamless transactions.
              It&apos;s the best crypto app I&apos;ve ever used!&rdquo;
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white font-awesome-serif text-4xl md:text-6xl font-normal mb-4 md:mb-0">
              ( John Doe )
            </div>
            <div className="text-secondary font-awesome-serif text-2xl md:text-3xl font-normal">
              Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews; 