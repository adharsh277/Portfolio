import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const LOGOS = [
  "aws",
  "github",
  "oracle",
  "docker",
  "kuberents",
  "ansible",
  "helm",
  "azure"
];

// Repeat logos to ensure enough for groups of 3
const LOGOS_REPEAT = Array(12).fill(0).map((_, i) => LOGOS[i % LOGOS.length]);

function getLogoSrc(name: string) {
  return `/stack-logos/${name}.svg`;
}

export function RecognizedLogoRotator() {
  const [groups, setGroups] = useState<string[][]>([]);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Group logos in threes
  useEffect(() => {
    const result: string[][] = [];
    for (let i = 0; i < LOGOS_REPEAT.length; i += 3) {
      result.push(LOGOS_REPEAT.slice(i, i + 3));
    }
    setGroups(result);
    setActiveIndexes(result.map(() => 1)); // Start with middle logo active
  }, []);

  // Animation logic
  useEffect(() => {
    if (!groups.length) return;
    timerRef.current = setInterval(() => {
      setActiveIndexes((prev) =>
        prev.map((idx) => (idx + 1) % 3)
      );
    }, 5600);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [groups]);

  return (
    <div className="logos">
      {groups.map((group, groupIdx) => (
        <div className="logo-group" key={groupIdx}>
          {group.map((logo, idx) => {
            let className = "logo";
            if (idx === activeIndexes[groupIdx]) className += " active";
            else if ((idx + 1) % 3 === activeIndexes[groupIdx]) className += " to-bottom";
            else if ((idx + 2) % 3 === activeIndexes[groupIdx]) className += " to-top";
            else className += " hide";
            return (
              <div className={className} key={logo}>
                <div className="logo-shell">
                  <Image
                    src={getLogoSrc(logo)}
                    alt={logo}
                    width={220}
                    height={90}
                    className="logo-image"
                  />
                </div>
              </div>
            );
          })}
        </div>
      ))}
      <style jsx>{`
        .logos {
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          width: 100%;
          gap: 1rem;
        }
        .logo-group {
          position: relative;
          width: 126px;
          height: 54px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .logo {
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1);
          will-change: transform, opacity;
          max-width: 220px;
          max-height: 90px;
          width: 100%;
          height: auto;
          background: none;
          box-shadow: none;
          border: none;
        }
        .logo-shell {
          display: grid;
          place-items: center;
          width: 100%;
          min-height: 54px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.06));
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.22);
          padding: 6px;
        }
        .logo-image {
          width: 100%;
          height: auto;
          max-width: 94px;
          max-height: 30px;
          object-fit: contain;
          filter: contrast(1.1) saturate(1.06) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.35));
        }
        .logo.active {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }
        .logo.to-top, .logo.to-bottom {
          opacity: 0;
          transform: scale(0.8);
          z-index: 1;
        }
        .logo.hide {
          opacity: 0;
          pointer-events: none;
        }
        @media (max-width: 845px) {
          .logo-group {
            width: 96px;
            height: 52px;
          }
          .logo {
            max-width: 96px;
          }
          .logo-shell {
            min-height: 50px;
            padding: 5px;
          }
          .logo-image {
            max-width: 74px;
            max-height: 28px;
          }
        }
        @media (max-width: 400px) {
          .logo-group {
            width: 70px;
            height: 48px;
          }
          .logo {
            max-width: 70px;
          }
          .logo-shell {
            min-height: 46px;
            padding: 4px;
            border-radius: 9px;
          }
          .logo-image {
            max-width: 54px;
            max-height: 24px;
          }
        }
      `}</style>
    </div>
  );
}
