import { useI18n } from "@/i18n";
import { SkillCard } from "../SkillCard";
import { SkillContainer } from "../SkillContainer";
import { Card } from "../Card";
import { useMemo } from "react";

export const SkillsSection = () => {
  const { t } = useI18n();

  const skill_categories = useMemo(
    () => [
      {
        name: t.skills.categories.languages,
        skills: [
          {
            name: "TypeScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            url: "https://www.typescriptlang.org/",
          },
          {
            name: "Python",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            url: "https://www.python.org/",
          },
          {
            name: "Rust",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
            url: "https://www.rust-lang.org/",
          },
          {
            name: "Go",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
            url: "https://go.dev/",
          },
          {
            name: "PHP",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg",
            url: "https://www.php.net/",
          },
          {
            name: "HTML5",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            url: "https://html5.org/",
          },
        ],
      },

      {
        name: t.skills.categories.cloud,
        skills: [
          {
            name: "AWS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            url: "https://aws.amazon.com/",
          },
          {
            name: "Scaleway",
            logo: "https://avatars.githubusercontent.com/u/5185491?s=200",
            url: "https://www.scaleway.com/en/",
          },
        ],
      },
      {
        name: t.skills.categories.frameworks,
        skills: [
          {
            name: "React",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            url: "https://react.dev/",
          },
          {
            name: "Nuxt",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg",
            url: "https://nuxt.com/",
          },
          {
            name: "Vue",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
            url: "https://vuejs.org/",
          },
          {
            name: "Electron.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
            url: "https://www.electronjs.org/",
          },
          {
            name: "Express.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
            url: "https://expressjs.com/",
          },
          {
            name: "Fastify",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-plain.svg",
            url: "https://fastify.dev/",
          },
          {
            name: "Nginx",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
            url: "https://nginx.org/",
          },
          {
            name: "Node.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
            url: "https://nodejs.org/en",
          },
          {
            name: "Sass",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
            url: "https://sass-lang.com/",
          },
          {
            name: "TailwindCSS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
            url: "https://tailwindcss.com/",
          },
          {
            name: "tRPC",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trpc/trpc-original.svg",
            url: "https://trpc.io/",
          },
        ],
      },
      {
        name: t.skills.categories.databases,
        skills: [
          {
            name: "MongoDB",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
            url: "https://www.mongodb.com/",
          },
          {
            name: "MySQL",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
            url: "https://www.mysql.com/",
          },
          {
            name: "Redis",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
            url: "https://redis.io/",
          },
          {
            name: "SQLite",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
            url: "https://www.sqlite.org/",
          },
        ],
      },
      {
        name: t.skills.categories.tools,
        skills: [
          {
            name: "DBeaver",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg",
            url: "https://dbeaver.io/",
          },
          {
            name: "NeoVim",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg",
            url: "https://neovim.io/",
          },
          {
            name: "Bash",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-plain.svg",
            url: "https://www.gnu.org/software/bash/",
          },
          {
            name: "Bun",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
            url: "https://bun.sh/",
          },
          {
            name: "D3.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg",
            url: "https://d3js.org/",
          },
          {
            name: "Docker",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
            url: "https://www.docker.com/",
          },
          {
            name: "Git",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
            url: "https://git-scm.com/https://git-scm.com/",
          },
          {
            name: "GitHub",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
            url: "https://github.com/Timmnn/",
          },
          {
            name: "gRPC",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg",
            url: "https://grpc.io/",
          },
          {
            name: "GraphQL",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
            url: "https://graphql.org/",
          },
          {
            name: "Insomnia",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg",
            url: "https://insomnia.rest/",
          },
          {
            name: "Jest",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
            url: "https://jestjs.io/",
          },
          {
            name: "Jira",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
            url: "https://www.atlassian.com/software/jira",
          },
          {
            name: "Pandas",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
            url: "https://pandas.pydata.org/",
          },
          {
            name: "Playwright",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
            url: "https://playwright.dev/",
          },
          {
            name: "PowerShell",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg",
            url: "https://learn.microsoft.com/en-us/powershell/",
          },
        ],
      },
    ],
    [t],
  );

  return (
    <div className="flex min-w-0 flex-col gap-4 items-center">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        {t.skills.title}
      </h2>
      {skill_categories.map((category) => (
        <div key={category.name}>
          <Card className="w-[800px] max-w-full">
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
            <SkillContainer>
              {category.skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  icon={<img src={skill.logo} alt={skill.name} />}
                  label={skill.name}
                  url="https://www.typescriptlang.org/"
                />
              ))}
            </SkillContainer>
          </Card>
        </div>
      ))}
    </div>
  );
};
