import { createClient, print } from 'redis';

const client = createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

// Open the connection
client.connect().then(() => {
  // Create Hash
  client.hSet('HolbertonSchools', 'Portland', '50', print);
  client.hSet('HolbertonSchools', 'Seattle', '80', print);
  client.hSet('HolbertonSchools', 'New York', '20', print);
  client.hSet('HolbertonSchools', 'Bogota', '20', print);
  client.hSet('HolbertonSchools', 'Cali', '40', print);
  client.hSet('HolbertonSchools', 'Paris', '2', print);

  // Display Hash
  client.hGetAll('HolbertonSchools').then((result) => {
    console.log(result);
    // Close the connection after operations are complete
    client.quit();
  });
}).catch((err) => {
  console.error('Error connecting:', err);
});
