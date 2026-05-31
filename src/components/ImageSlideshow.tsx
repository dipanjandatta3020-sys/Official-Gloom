import './ImageSlideshow.css';

export default function ImageSlideshow({ images }: { images: string[] }) {
  const count = images.length;
  // If there's only 1 image, just render it statically
  if (count < 2) {
    return (
      <div className="img-slideshow-container">
        <img src={images[0]} className="img-slideshow-img" style={{ opacity: 1 }} alt="Slideshow" />
      </div>
    );
  }

  const cycleTime = 1.5 * count; // 1.5s per image

  return (
    <div className="img-slideshow-container">
      {images.map((src, i) => {
        const delay = i * 1.5;
        return (
          <img
            key={i}
            src={src}
            className={`img-slideshow-img count-${count} kb-${i % 3}`}
            style={{ 
              animationDelay: `${delay}s`, 
              animationDuration: `${cycleTime}s` 
            }}
            alt={`Slide ${i + 1}`}
            loading="lazy"
          />
        );
      })}
    </div>
  );
}
