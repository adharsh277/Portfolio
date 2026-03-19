"use client";
import Marquee from 'react-fast-marquee';

type StackItem = {
  label: string;
  slug: string;
  iconPath?: string;
};

const stackPrimary: StackItem[] = [
  { label: "AWS", slug: "amazonwebservices", iconPath: "/stack-logos/aws.svg" },
  { label: "Terraform", slug: "terraform" },
  { label: "Linux", slug: "linux" },
  { label: "Docker", slug: "docker" },
  { label: "Kubernetes", slug: "kubernetes" },
  { label: "Helm", slug: "helm" },
  { label: "Git", slug: "git" },
  { label: "GitHub Actions", slug: "githubactions" },
  { label: "CI/CD", slug: "githubactions" },
  { label: "Prometheus", slug: "prometheus" },
  { label: "Grafana", slug: "grafana" },
  { label: "ELK", slug: "elasticsearch" },
];

const stackSecondary: StackItem[] = [
  { label: "Load Balancing", slug: "nginx" },
  { label: "Ansible", slug: "ansible" },
  { label: "FastAPI", slug: "fastapi" },
  { label: "MLflow", slug: "mlflow" },
  { label: "Airflow", slug: "apacheairflow" },
  { label: "Python", slug: "python" },
  { label: "Azure", slug: "microsoftazure", iconPath: "/stack-logos/azure.svg" },
  { label: "GCP", slug: "googlecloud" },
  { label: "Digital Ocean", slug: "digitalocean" },
  { label: "SAP Cloud", slug: "sap" },
  { label: "Trivy", slug: "trivy" },
];

function StackChip({ item }: { item: StackItem }) {
  return (
    <div className="group relative mx-auto inline-flex w-full min-w-[140px] max-w-[210px] items-center justify-center gap-2.5 overflow-hidden rounded-xl border border-white/18 bg-white/[0.05] px-4 py-3 backdrop-blur-md transition-all duration-200 hover:border-[rgba(243,67,143,0.6)]">
      <span className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-r from-[rgba(243,67,143,0.24)] via-[rgba(201,77,248,0.2)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <img
        src={item.iconPath ?? `https://cdn.simpleicons.org/${item.slug}/f9ecff`}
        alt={`${item.label} logo`}
        width={20}
        height={20}
        loading="lazy"
        className="relative z-10 transition-transform duration-300 group-hover:scale-110"
      />
      <span className="relative z-10 text-sm uppercase tracking-[0.16em] text-[color:var(--text-main)] transition-colors duration-200 group-hover:text-[color:var(--crimson)]">
        {item.label}
      </span>
    </div>
  );
}

export function TechStackInventory() {
  // Split stacks into 3 rows for marquee effect
  const allStacks = [...stackPrimary, ...stackSecondary];
  const rowCount = 3;
  const rows: StackItem[][] = Array.from({ length: rowCount }, (_, i) =>
    allStacks.filter((_, idx) => idx % rowCount === i)
  );

  return (
    <section className="relative mt-10 overflow-hidden py-3 sm:py-6">
      <div className="pointer-events-none absolute -left-14 top-3 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(243,67,143,0.26)_0%,rgba(243,67,143,0)_68%)]" />
      <div className="pointer-events-none absolute -right-14 bottom-1 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(201,77,248,0.24)_0%,rgba(201,77,248,0)_72%)]" />

      <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--text-dim)]">Inventory</p>
      <h3 className="mt-2 bg-gradient-to-r from-[color:var(--text-main)] via-[#ffd9ea] to-[#f4c3ff] bg-clip-text text-3xl font-semibold text-transparent sm:text-5xl">
        The Tech Stack
      </h3>

      <div className="mt-8 flex flex-col gap-7">
        {rows.map((row, i) => (
          <Marquee
            key={i}
            direction={i % 2 === 0 ? 'left' : 'right'}
            pauseOnHover
            speed={30}
            gradient={false}
            className="w-full"
          >
            {row.map((item) => (
              <div key={item.label} className="mx-8 inline-block">
                <StackChip item={item} />
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}