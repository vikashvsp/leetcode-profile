import https from 'https';
export async function fetchLeetCodeData(username, callback) {
     const query = `
    {
         recentSubmissionList(username: "${username}") {
              title
              titleSlug
              timestamp
              statusDisplay
              lang
          }
          matchedUser(username: "${username}") {
            username
            submitStats: submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
          }
    }
    `;

     const url = 'https://leetcode.com/graphql';

     const options = {
          hostname: 'leetcode.com',
          port: 443,
          path: '/graphql',
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
               'Content-Length': Buffer.byteLength(JSON.stringify({ query }))
          }
     };

     const req = https.request(options, (res) => {
          let data = '';
          res.on('data', (chunk) => {
               data += chunk;
          });
          res.on('end', () => {
               callback(null, data);
          });
     });

     req.on('error', (error) => {
          callback(error, null);
     });

     req.write(JSON.stringify({ query }));
     req.end();
}

