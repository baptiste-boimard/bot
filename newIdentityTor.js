const { execSync } = require('child_process');

function renewTorIdentity(password) {
  const command = `echo -e 'AUTHENTICATE "${password}"\\r\\nSIGNAL NEWNYM\\r\\nQUIT' | nc localhost 9051`;
  try {
    execSync(command);
    console.log('Tor identity renewed');
  } catch (error) {
    console.error('Failed to renew Tor identity:', error);
  }
}
