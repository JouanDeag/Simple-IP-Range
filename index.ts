const fs = require('fs');
const ip = '12.13.14.';
let ips = [] as string[];

for (let i = 0; i < 255; i++) {
  const url = ip + i;
  ips.push(url);
}

fs.writeFileSync('ips.txt', ips.join('\n'), 'utf8');
