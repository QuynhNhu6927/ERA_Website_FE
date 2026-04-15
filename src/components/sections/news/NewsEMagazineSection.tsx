import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const magazines = [
  {
    id: 1,
    title: "Báo Cáo Tháng 10.2026",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Báo Cáo Tháng 10.2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Báo Cáo Tháng 10.2026",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80",
  },
];

export function NewsEMagazineSection() {
  return (
    <section className="py-12 bg-white">
      <Container>
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-8">
          <div 
            className="w-1 h-6 rounded-full"
            style={{ backgroundColor: colors.primary.DEFAULT }}
          />
          <h2 
            style={{
              color: colors.primary.DEFAULT,
              fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
            }}
          >
            E-Magazine
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {magazines.map((mag) => (
            <article 
              key={mag.id}
              className="group cursor-pointer"
            >
              {/* Magazine Cover */}
              <div 
                className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
              >
                <Image
                  src={mag.image}
                  alt={mag.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              
              {/* Title */}
              <h3 
                className="font-semibold text-center transition-colors group-hover:text-primary"
                style={{ 
                  color: colors.neutral.foreground,
                  fontFamily: 'var(--font-inter)',
                  fontSize: '16px',
                }}
              >
                {mag.title}
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
