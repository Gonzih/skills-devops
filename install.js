import { copyFileSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';

const skillsDir = new URL('./skills/', import.meta.url).pathname;
const targetDir = join(homedir(), '.claude', 'skills');

for (const name of readdirSync(skillsDir)) {
  const dest = join(targetDir, name);
  mkdirSync(dest, { recursive: true });
  copyFileSync(join(skillsDir, name, 'SKILL.md'), join(dest, 'SKILL.md'));
  console.log(`Installed skill: ${name}`);
}
