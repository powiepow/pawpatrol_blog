import React, { useState, useEffect } from 'react';
import CoverPhoto from '../assets/cover.jpg';
import TourVideo from '../assets/IVET.mp4';
// day1
import d11 from '../assets/travel/day1/1.jpg';
import d12 from '../assets/travel/day1/2.jpg';
import d16 from '../assets/travel/day1/6.jpeg';
// day2
import d21 from '../assets/travel/day2/2.jpeg';
import d22 from '../assets/travel/day2/4.jpg';
import d23 from '../assets/travel/day2/7.jpg';
// day3
import d31 from '../assets/travel/day3/1.jpg';
import d32 from '../assets/travel/day3/2.jpg';
import d33 from '../assets/travel/day3/6.jpg';
// day4
import d41 from '../assets/travel/day4/1.jpg';
import d42 from '../assets/travel/day4/2.jpg';
import d43 from '../assets/travel/day4/3.jpg';
// day5
import d51 from '../assets/travel/day5/1.jpg';
import d52 from '../assets/travel/day5/2.jpg';
import d53 from '../assets/travel/day5/3.jpg';
// day6
import d61 from '../assets/travel/day6/1.jpg';
import d62 from '../assets/travel/day6/2.jpg';
import d63 from '../assets/travel/day6/3.jpg';
// day7
import d71 from '../assets/travel/day7/1.jpg';
import d72 from '../assets/travel/day7/2.jpg';
import d73 from '../assets/travel/day7/3.jpg';
// gallery
import g1 from '../assets/travel/gallery/1.jpg';
import g2 from '../assets/travel/gallery/2.jpg';
import g3 from '../assets/travel/gallery/3.jpg';
import g4 from '../assets/travel/gallery/4.jpg';
import g5 from '../assets/travel/gallery/5.jpg';
import g6 from '../assets/travel/gallery/6.jpg';
import g7 from '../assets/travel/gallery/7.jpg';
import g8 from '../assets/travel/gallery/8.jpg';
import g9 from '../assets/travel/gallery/9.jpg';
import g10 from '../assets/travel/gallery/10.jpg';
import g11 from '../assets/travel/gallery/11.jpg';
import g12 from '../assets/travel/gallery/12.jpg';
import g13 from '../assets/travel/gallery/13.jpg';
import g14 from '../assets/travel/gallery/14.jpg';
import g15 from '../assets/travel/gallery/15.jpg';
import g16 from '../assets/travel/gallery/16.jpg';
import g18 from '../assets/travel/gallery/18.jpg';
import g19 from '../assets/travel/gallery/19.jpg';
import g20 from '../assets/travel/gallery/20.jpg';
import g21 from '../assets/travel/gallery/21.jpg';
import g22 from '../assets/travel/gallery/22.jpg';
import g23 from '../assets/travel/gallery/23.jpg';
import g24 from '../assets/travel/gallery/24.jpg';
import g25 from '../assets/travel/gallery/25.jpg';
import g26 from '../assets/travel/gallery/26.jpg';
import g27 from '../assets/travel/gallery/27.jpg';
import g28 from '../assets/travel/gallery/28.jpg';
import g29 from '../assets/travel/gallery/29.jpg';
import g30 from '../assets/travel/gallery/30.jpg';
import g31 from '../assets/travel/gallery/31.jpg';
import g32 from '../assets/travel/gallery/32.jpg';
import g33 from '../assets/travel/gallery/33.jpg';
import g34 from '../assets/travel/gallery/34.jpg';
import g35 from '../assets/travel/gallery/35.jpg';
import g36 from '../assets/travel/gallery/36.jpg';
import g37 from '../assets/travel/gallery/37.jpg';
import g38 from '../assets/travel/gallery/38.jpg';
import g39 from '../assets/travel/gallery/39.jpg';
import g40 from '../assets/travel/gallery/40.jpeg';
import g41 from '../assets/travel/gallery/41.jpg';
import g42 from '../assets/travel/gallery/42.jpg';
import g43 from '../assets/travel/gallery/43.jpg';
import g44 from '../assets/travel/gallery/44.jpg';

const postsData = {
  post1: {
    title: "Capital Adventures: Exploring Manila’s Heritage and Innovation",
    date: "07 Apr 2025",
    summary: "Day one of educational tour offered a powerful journey through Manila’s rich history and modern innovation, highlighting how technology bridges the past and future.",
    fullDescription: "Our educational tour commenced with enthusiasm as we arrived at Ninoy Aquino International Airport, eager to immerse ourselves in the cultural and historical richness of Manila. Our first destination was Luneta Park, where the monument of Dr. José Rizal stands as a powerful tribute to national identity, intellectual courage, and the importance of preserving history through modern technology. This was followed by an insightful visit to Intramuros, where we explored the architectural majesty of the Manila Cathedral and the historic grounds of Fort Santiago. The experience, particularly within the solemn dungeons, offered a poignant reminder of the nation’s struggle for freedom and the vital role of digital archiving in safeguarding historical truth.",
    secondaryDescription: "In the latter part of the day, we transitioned from the past to the present with a visit to the Mall of Asia—an emblem of contemporary urban development and technological advancement. Beyond its vast retail space, the mall highlighted the integration of information technology in daily life, from digital infrastructure to modern commerce. This first day of our educational journey provided a meaningful reflection on how history and innovation converge, reinforcing the impact of technology in connecting the past, shaping the present, and envisioning the future.",
    images: [d12, d11, d16]
  },
  post2: {
    title: "Smart Systems in Motion: Discovering Innovation and Governance in Subic",
    date: "08 Apr 2025",
    summary: "Day two took us to Subic, where we witnessed how technology, strategic planning, and autonomous governance work together to power a smart, efficient, and self-sustained community.",
    fullDescription: "On the second day of our educational tour, we journeyed to Subic, a model of strategic planning and technological integration. Known for its structured environment and autonomous governance, Subic offered us a unique perspective on how innovation and discipline can shape a progressive community. At the Subic Bay Exhibition and Convention Center, we learned about the area's transformation from a former U.S. naval base into a thriving economic zone—an inspiring example of adaptive reuse and visionary leadership.",
    secondaryDescription: "Our visit continued at the Subic Port Administration, where we observed how digital systems streamline global trade through real-time tracking and automated logistics. At Subic Law Enforcement, we explored the Freeport’s independent legal system and saw how IT supports public safety through surveillance, traffic control, and crime prevention. This experience reinforced the vital role of information technology in maintaining efficiency, security, and sustainability within a modern self-governing city.",
    images: [d21, d22, d23]
  },
  post3: {
    title: "Nature and Nation: Honoring Heritage Through",
    date: "09 Apr 2025",
    summary: "Day three highlighted the power of technology in preserving both our natural biodiversity and the enduring legacy of national leadership.",
    fullDescription: "Our third day was a captivating exploration of the Philippines’ natural heritage and national identity. We began at the National Museum of Natural History, where we encountered the preserved remains of Lolong—the largest crocodile ever recorded. His story, brought to life through interactive exhibits and digital storytelling, emphasized the rich biodiversity of our country and the crucial role of technology in promoting conservation and environmental awareness.",
    secondaryDescription: "In the afternoon, we visited the Quezon City Memorial Circle, a site dedicated to the legacy of former President Manuel Quezon. Standing before his tomb evoked a deep respect for his contributions to the nation. The display of presidential cars and the memorial’s thoughtful, tech-enhanced design offered an immersive experience, showing how innovation can preserve and honor the memory of past leaders while educating future generations.",
    images: [d31, d32, d33]
  },
  post4: {
    title: "Technology and Economy: Driving Innovation in Finance and Industry",
    date: "10 Apr 2025",
    summary: "Day four highlighted how technology underpins both national financial security and industrial innovation, from currency production to smart machinery and data-driven systems.",
    fullDescription: "Our fourth day took us deep into the core of the nation’s economic and technological engines. At the Bangko Sentral ng Pilipinas, we discovered the vital processes behind currency production and gold reserve management. With a tour of its high-tech printing facilities, we learned about the sophisticated security features embedded in each banknote and the role of technology in securing financial stability. The insights into how the BSP stores and manages gold reserves further emphasized the importance of innovation and security in sustaining national economic health.",
    secondaryDescription: "In the afternoon, we visited Hytec Power Incorporated, where technology was showcased as a powerful force across various industries. From virtual simulators for construction training to automated welding systems, Hytec demonstrated how robotics and smart systems enhance safety, precision, and efficiency. Their real-time weather monitoring tools and e-learning platforms highlighted the growing influence of intelligent systems in education, environmental monitoring, and industrial research. Through customized machinery and digital innovation, Hytec underscored how technology provides practical, adaptive solutions that shape the future of global industries.",
    images: [d41, d42, d43]
  },
  post5: {
    title: "Smart Mobility: Behind the Scenes of Urban Transit",
    date: "11 Apr 2025",
    summary: "Day five revealed how IT powers Metro Manila’s urban mobility—from real-time traffic surveillance to the digital systems behind LRT operations—ensuring safety, efficiency, and continuity.",
    fullDescription: "On our fifth day, we explored how information technology supports the complex systems that keep Metro Manila moving efficiently and safely. At the MMDA’s Traffic Engineering Center, we witnessed the power of real-time surveillance and data-driven decision-making through their Metrobase Surveillance Center, where hundreds of CCTV feeds are monitored to manage traffic, respond to incidents, and ensure continuous communication—even during power interruptions.",
    secondaryDescription: "We continued our journey at the Light Rail Transit Authority for LRT Line 2, where we gained firsthand insight into the operation and maintenance of urban rail systems. From riding the train to touring their Central Control Room and maintenance facilities, we saw how rail services rely on precise scheduling, safety protocols, and digital control systems to maintain reliable transit for thousands of daily commuters. It was a powerful reminder of how IT is the backbone of modern urban mobility.",
    images: [d51, d52, d53]
  },
  post6: {
    title: "Highland Reflections: A Day of Culture, Cultivation, and Character in Baguio",
    date: "12 Apr 2025",
    summary: "Day six showcased Baguio City's blend of culture, tradition, and discipline—from sustainable agriculture to spiritual harmony and military leadership.",
    fullDescription: "Our sixth day led us to Baguio City, where culture, nature, and identity converged in a refreshing highland atmosphere. We started at the Strawberry Farm in La Trinidad, where the sight of the expansive fields highlighted the region’s agricultural vitality. Though we didn’t enter the farm itself, it served as a strong symbol of sustainable livelihoods and the powerful blend of tradition, tourism, and community development. Each berry represented the dedication of local farmers and the impact of grassroots industries.",
    secondaryDescription: "From there, we visited the serene Chinese Bell Church, a space that embodied cultural harmony and spiritual reflection through its intricate design and peaceful setting. Our final stop was the Philippine Military Academy, where we witnessed the discipline and honor instilled in the country’s future military leaders. The PMA visit reminded us that integrity and leadership are values that transcend fields—from national defense to technology and beyond.",
    images: [d61, d62, d63]
  },
  post7: {
    title: "A Free Day in Baguio and a Return to Manila",
    date: "13 Apr 2025",
    summary: "Day seven offered a leisurely morning in Baguio, and a return to Manila, marking the end of our educational tour.",
    fullDescription: "On the seventh and final day of our tour, we had a relaxing morning in Baguio City, allowing us to explore at our own pace. The cool highland air and picturesque landscapes provided the perfect backdrop for a leisurely stroll through the city. Whether visiting local markets, savoring fresh strawberries, or simply enjoying the serene atmosphere, it was a well-deserved pause to reflect on the incredible journey we had experienced so far.",
    secondaryDescription: "By noon, we boarded our bus back to Manila, bringing our educational tour to a close. The drive offered one last opportunity to appreciate the beauty of the Philippine countryside as we made our way back to the bustling city. Arriving in Manila marked the end of a week filled with discovery, learning, and growth—experiences that would undoubtedly leave a lasting impression on all of us.",
    images: [d71, d72, d73]
  }
};

const itineraryData = [
  {
    title: "Day 1: Arrival and Manila City Tour",
    description: "Arrive in Manila via Cebu Pacific, check-in at DJM Dormitory. City tour visiting Manila Cathedral, Rizal Park, Intramuros, Fort Santiago, San Agustin Church, and Mall of Asia.",
    date: "07 Apr 2025"
  },
  {
    title: "Day 2: Trip to Subic",
    description: "Breakfast at DJM Dormitory, proceed to Subic. Visit SBMA Customs Department, Law Enforcement, and Vessel Traffic Management System.",
    date: "08 Apr 2025"
  },
  {
    title: "Day 3: Museum Visits",
    description: "Breakfast at DJM Dormitory, proceed to Manuel Quezon Museum and National Museum of Natural History.",
    date: "09 Apr 2025"
  },
  {
    title: "Day 4: Finance and Industry",
    description: "Breakfast at DJM Dormitory, visit Bangko Sentral ng Pilipinas and Hytec Power Inc.",
    date: "10 Apr 2025"
  },
  {
    title: "Day 5: Urban Mobility",
    description: "Breakfast at DJM Dormitory, visit MMDA Traffic Engineering Center and LRT Line 2.",
    date: "11 Apr 2025"
  },
  {
    title: "Day 6: Baguio City Tour",
    description: "Proceed to Baguio City, city tour including Strawberry Farm, Chinese Bell Church, and Philippine Military Academy.",
    date: "12 Apr 2025"
  },
  {
    title: "Day 7: Baguio Exploration and Return",
    description: "Breakfast at Prince Plaza Hotel, visit Maharlika Shopping Center & SM Baguio, back to Manila.",
    date: "13 Apr 2025"
  },
  {
    title: "Day 8: Departure",
    description: "Checkout at DJM Dormitory, proceed to the airport, departure to Zamboanga via Cebu Pacific/PAL.",
    date: "14 Apr 2025"
  }
];

const Hero = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const galleryImages = [
    g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
    g11, g12, g13, g14, g15, g16, g18, g19, g20,
    g21, g22, g23, g24, g25, g26, g27, g28, g29, g30,
    g31, g32, g33, g34, g35, g36, g37, g38, g39, g40,
    g41, g42, g43, g44
  ];
  
  useEffect(() => {
    const sections = document.querySelectorAll('.main-content, .map-section, .gallery, .about, .footer');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const header = document.querySelector('.header');
      if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('scrolled');
      } else if (currentScroll < lastScroll) {
        header.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleReadMore = (postId) => {
    setSelectedPost(postsData[postId]);
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('destinations').classList.add('hidden');
    document.getElementById('gallery').classList.add('hidden');
    document.getElementById('about').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
    const postDetails = document.getElementById('post-details');
    postDetails.style.display = 'block';
    setTimeout(() => postDetails.classList.add('visible'), 10);
  };

  const handleBack = () => {
    const postDetails = document.getElementById('post-details');
    postDetails.classList.remove('visible');
    setTimeout(() => {
      postDetails.style.display = 'none';
      document.getElementById('main-content').classList.remove('hidden');
      document.getElementById('destinations').classList.remove('hidden');
      document.getElementById('gallery').classList.remove('hidden');
      document.getElementById('about').classList.remove('hidden');
      document.getElementById('footer').classList.remove('hidden');
      setSelectedPost(null);
    }, 800);
  };

  const handleImageClick = (image) => {
    setPreviewImage(image);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className="banner" id="home">
        <img src={CoverPhoto} alt="Cover Photo" />
        <div className="banner-content">
          <h2>INDUSTRIAL VISIT & EDUCATIONAL TOUR 2025</h2>
          <p>Join our educational tours!</p>
        </div>
      </div>

      <div className="main-content" id="main-content">
        <div className="posts">
          {Object.keys(postsData).map(postId => (
            <div className="post" key={postId}>
              <img src={postsData[postId].images[0]} alt={postsData[postId].title} />
              <div className="post-content">
                <h3>{postsData[postId].title}</h3>
                <p>{postsData[postId].summary}</p>
                <div className="date">{postsData[postId].date}</div>
                <a className="read-more" onClick={() => handleReadMore(postId)}>READ MORE</a>
              </div>
            </div>
          ))}
        </div>
        <div className="sidebar" id="itinerary">
          <h3>Tour Itinerary</h3>
          {itineraryData.map((item, index) => (
            <div className="itinerary-item" key={index}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className="date">{item.date}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="post-details" id="post-details">
        {selectedPost && (
          <div id="post-content">
            <h2>{selectedPost.title}</h2>
            <p><strong>Date:</strong> {selectedPost.date}</p>
            <p>{selectedPost.fullDescription}</p>
            <div className="images">
              {selectedPost.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${selectedPost.title} Image ${index + 1}`}
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </div>
            {selectedPost.secondaryDescription && (
              <p className="secondary-description">{selectedPost.secondaryDescription}</p>
            )}
          </div>
        )}
        <a className="back-btn" onClick={handleBack}>READ LESS</a>
      </div>

      {previewImage && (
        <div className="preview-modal" onClick={closePreview}>
          <img
            className="preview-image"
            src={previewImage}
            alt="Preview"
          />
          <button
            className="close-preview-btn"
            onClick={closePreview}
          >
            ×
          </button>
        </div>
      )}

      <div className="map-section" id="destinations">
        <h2>Video Highlights</h2>
        <video controls className="tour-video">
          <source src={TourVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="gallery" id="gallery">
        <h2>Photo Gallery</h2>
        <div className="gallery-grid">
          {(showAll ? galleryImages : galleryImages.slice(0, 10)).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery Image ${index + 1}`}
              onClick={() => handleImageClick(img)}
            />
          ))}
        </div>
        <div className="gallery-buttons">
          {!showAll && galleryImages.length > 10 && (
            <button className="show-more-btn" onClick={toggleShowAll}>
              Show More
            </button>
          )}
          {showAll && (
            <button className="show-less-btn" onClick={toggleShowAll}>
              Show Less
            </button>
          )}
        </div>
      </div>

      <div className="about" id="about">
        <div className="about-content">
          <h2>About the Educational Tour & Industrial Visit</h2>
          <p>
            This educational tour and industrial visit is a special initiative organized for the 4th Year Bachelor of Science in Information Technology students of Western Mindanao State University (WMSU), in partnership with DJM Travel and Tours. Designed to enrich academic learning through real-world exposure, the tour bridges the gap between classroom theory and industry practice.
          </p>
          <p>
            Spanning key locations across Luzon, the itinerary includes visits to major tech institutions, government agencies, and cultural landmarks—offering students valuable insights into professional environments, technological innovations, and the broader impact of IT in society. More than a trip, this experience fosters growth, curiosity, and inspiration as students prepare to enter the workforce.
          </p>
          <a href="#contact">Get in Touch to Explore Our Tours</a>
        </div>
        <div className="about-image">
          <img src={d16} />
        </div>
      </div>
    </>
  );
};

export default Hero;