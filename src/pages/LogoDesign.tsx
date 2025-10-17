import React from "react";


const clientLogos = [
  { name: 'ZaubaCorp', imgSrc: '/logos/zauba.png' },
  { name: 'Logo2', imgSrc: '/logos/logo2.png' },
  { name: 'K-Pra Foods', imgSrc: '/logos/kpra.png' },
  { name: 'Alacla', imgSrc: '/logos/alacla.png' },
  { name: 'JW Metro', imgSrc: '/logos/jwmetro.png' },
];



interface StepProps {
  step: string;
  title: string;
  description: string;
  icon: string;
}

const steps: StepProps[] = [
  {
    step: 'Step 01',
    title: 'Initial Consultation',
    description: 'We discuss your brand vision, goals, and audience to understand your unique requirements.',
    icon: '🗣️',
  },
  {
    step: 'Step 02',
    title: 'Concept Development',
    description: 'Our team brainstorms and creates unique logo concepts that reflect your brand identity.',
    icon: '🎯',
  },
  {
    step: 'Step 03',
    title: 'Design Revisions',
    description: 'Based on feedback, we refine and adjust the logo to meet your expectations precisely.',
    icon: '📝',
  },
  {
    step: 'Step 04',
    title: 'Final Delivery',
    description: 'Receive high-quality logo files in versatile formats, ready for print and digital use.',
    icon: '🚚',
  },
];



const LogoDesign: React.FC = () => {
  return (
    <section
      style={{
        background: "radial-gradient(circle at center, #020617 0%, #000 100%)",
        color: "#fff",
        textAlign: "center",
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Effect */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 30% 40%, rgba(0, 68, 255, 0.3), transparent 60%), radial-gradient(circle at 70% 60%, rgba(0, 102, 255, 0.3), transparent 60%)",
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "900px", margin: "0 auto" }}>
        <p
          style={{
            background: "rgba(0, 68, 255, 0.15)",
            display: "inline-block",
            color: "#66A6FF",
            padding: "6px 18px",
            borderRadius: "30px",
            fontSize: "15px",
            fontWeight: 500,
            letterSpacing: "0.5px",
            marginBottom: "20px",
          }}
        >
          Grow Revenue → with Creative Logo Design
        </p>

        <h1
          style={{
            fontSize: "52px",
            fontWeight: 700,
            lineHeight: "1.2",
            margin: "0 auto 20px",
            color: "#fff",
          }}
        >
          Professional Logo Design<br />Services for Your Brand
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.8)",
            maxWidth: "650px",
            margin: "0 auto 40px",
          }}
        >
          Transform your brand with unique, impactful logos crafted to represent your vision,
          values, and audience connection.
        </p>

        <button
          style={{
            background:
              "linear-gradient(90deg, rgba(0,102,255,1) 0%, rgba(0,153,255,1) 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "40px",
            padding: "14px 40px",
            fontSize: "18px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(90deg, rgba(0,153,255,1) 0%, rgba(0,102,255,1) 100%)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(90deg, rgba(0,102,255,1) 0%, rgba(0,153,255,1) 100%)")
          }
        >
          Book A FREE Strategy Call
        </button>

        {/* Star Rating (optional) */}
        <div style={{ marginTop: "40px" }}>
          {Array(5)
            .fill("⭐")
            .map((star, i) => (
              <span key={i} style={{ fontSize: "22px", color: "#FFD700" }}>
                {star}
              </span>
            ))}
        </div>
      </div>


      <div style={{
      backgroundColor: '#f7f7f7',
      padding: '3rem 1rem',
      textAlign: 'center'
    }}>
      {/* Rating */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#FFB400' }}>
          {'★★★★★'}
        </div>
        <p style={{ fontSize: '1.2rem', fontWeight: 500, color: '#333' }}>
          4.9/5 From 150+ Customers
        </p>
      </div>

      {/* Logos */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {clientLogos.map((logo, index) => (
          <div key={index} style={{
            backgroundColor: '#ffffff',
            borderRadius: '1.5rem',
            padding: '0.75rem 1.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '120px',
            height: '60px'
          }}>
            <img
              src={logo.imgSrc}
              alt={logo.name}
              style={{ maxHeight: '40px', maxWidth: '100%' }}
            />
          </div>
        ))}
      </div>
    </div>


    <div style={{ backgroundColor: '#ffffff', color: '#1a1a1a', padding: '4rem 1rem', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Custom Logo Solutions Section */}
      <section style={{
        textAlign: 'center',
        padding: '3rem 1rem',
        borderRadius: '16px',
        backgroundColor: '#f4f7ff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        marginBottom: '4rem'
      }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
          Custom Logo Solutions to Elevate Your Brand
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#444', maxWidth: '700px', margin: '0 auto' }}>
          Stand out with a logo uniquely crafted to embody your brand’s personality, values, and audience appeal.
        </p>
      </section>

      {/* Process Section */}
      <section style={{ textAlign: 'center' }}>
        {/* "Process" Badge */}
        <span style={{
          display: 'inline-block',
          backgroundColor: '#e0e7ff',
          color: '#1a1a1a',
          fontSize: '0.875rem',
          fontWeight: 600,
          padding: '0.4rem 0.8rem',
          borderRadius: '9999px',
          marginBottom: '1rem'
        }}>
          Process
        </span>

        <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
          Streamlined Logo Design Process for Your Brand
        </h3>

        <p style={{ fontSize: '1rem', color: '#555', maxWidth: '640px', margin: '0 auto' }}>
          Experience a collaborative, efficient journey, ensuring your logo perfectly aligns with brand goals.
        </p>
      </section>

    </div>


<div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        backgroundColor: '#0a0a23',
        padding: '2rem',
      }}
    >
      {steps.map(({ step, title, description, icon }) => (
        <div
          key={step}
          style={{
            backgroundColor: '#10102a',
            borderRadius: '16px',
            padding: '1.5rem',
            position: 'relative',
            color: '#fff',
            boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05)',
          }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{title}</h3>
            <p style={{ fontSize: '0.95rem', opacity: 0.85 }}>{description}</p>
          </div>
          <span
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: '#1a1a40',
              padding: '0.3rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
            }}
          >
            {step}
          </span>
        </div>
      ))}
    </div>


   <section
      style={{
        backgroundColor: '#0a0a23',
        color: '#ffffff',
        fontFamily: 'Inter, sans-serif',
        padding: '4rem 2rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '3rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Left Image */}
      <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e8a6d5c3645" // replace with your actual image
          alt="Designers working"
          style={{
            width: '100%',
            borderRadius: '24px',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Right Content */}
      <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-block',
            backgroundColor: '#1a1a40',
            padding: '0.25rem 1rem',
            borderRadius: '999px',
            fontSize: '0.8rem',
            color: '#c0c0ff',
            marginBottom: '1rem',
          }}
        >
          About Us
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: '1rem',
          }}
        >
          Passionate Designers for Your Brand
        </h2>

        {/* Paragraph */}
        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            color: '#c5c5d2',
            marginBottom: '2rem',
          }}
        >
          We are a team of dedicated, creative professionals committed to crafting unique logo designs that truly
          reflect your brand’s essence. With a strong focus on quality and collaboration, we partner closely with
          clients to bring their vision to life. Our goal is to create memorable logos that help brands stand out
          confidently and effectively in any market.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <button
            style={{
              backgroundColor: '#3f80ff',
              color: '#ffffff',
              border: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '999px',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            Contact Us →
          </button>
          <button
            style={{
              backgroundColor: '#1a1a40',
              color: '#ffffff',
              border: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '999px',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            View Projects →
          </button>
        </div>

        {/* Founder Card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#1a1a40',
            borderRadius: '1rem',
            padding: '0.75rem 1rem',
            maxWidth: '360px',
            boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.05)',
          }}
        >
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Founder"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginRight: '1rem',
            }}
          />
          <div style={{ flexGrow: 1 }}>
            <div style={{ fontWeight: 600, fontSize: '1rem' }}>Shubham Channagire</div>
            <div style={{ fontSize: '0.85rem', color: '#aaa' }}>Founder</div>
          </div>
          <button
            style={{
              background: 'transparent',
              border: '1px solid #2e2e50',
              borderRadius: '999px',
              color: '#aaa',
              fontSize: '1.2rem',
              padding: '0.2rem 0.7rem',
              cursor: 'pointer',
              marginLeft: '1rem',
            }}
          >
            ✕
          </button>
        </div>
      </div>
    </section>

    </section>





    
  );
};

export default LogoDesign;
