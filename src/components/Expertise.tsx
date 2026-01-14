"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Code2, Cloud, Database } from "lucide-react";
import { getTheme } from "@/lib/constants";

const icons = {
  "Backend Development": Code2,
  "Cloud & DevOps": Cloud,
  "Data & Streaming": Database,
};

export function Expertise() {
  return (
    <Section id="skills" title="Technical Expertise">
      <Card>
        {/* Decorative background blend */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent-blue/10 blur-3xl rounded-full pointer-events-none" />

        <div className="grid gap-8 md:grid-cols-3">
          {portfolio.skills.map((skill, index) => {
            const Icon = icons[skill.category as keyof typeof icons] || Code2;
            const styles = getTheme(skill.category);

            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-2xl border ${styles.border} bg-background/40 p-6 md:max-lg:p-5 transition-all duration-300 ${styles.hover} group`}
              >
                <div className="flex items-center gap-4 md:max-lg:gap-2.5 mb-6">
                  <div
                    className={`inline-flex items-center justify-center rounded-xl ${styles.bg} p-2.5 border ${styles.border}`}
                  >
                    <Icon className={`h-5 w-5 ${styles.text}`} />
                  </div>
                  <h3
                    className={`text-lg md:max-lg:text-base font-bold ${styles.text}`}
                  >
                    {skill.category}
                  </h3>
                </div>

                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm mx-4 text-muted">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center text-sm">
                      <span
                        className={`mr-3 h-1.5 w-1.5 shrink-0 rounded-full ${styles.bullet}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Card>
    </Section>
  );
}
