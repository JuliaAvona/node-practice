const fs = require('fs');

fs.writeFile('my-node/01-event-loop-events/text.txt', 'hello node.js', () => console.log('file written'));