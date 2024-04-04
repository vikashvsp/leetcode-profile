# Fetch LeetCode Data

This module allows you to fetch recent submission data and user statistics from LeetCode using their GraphQL API.

## Installation

```bash
npm install fetch-leetcode-data
```
## Usage

```javascript
const fetchLeetCodeData = require('fetch-leetcode-data');

fetchLeetCodeData(username, (error, data) => {
    if (error) {
        console.error('Error fetching LeetCode data:', error);
    } else {
        console.log('LeetCode data:', data);
    }
});
```
### Parameters

- `username` (string): The LeetCode username for which you want to fetch data.

- `callback` (function): A callback function that will be called with either an error or the fetched data.

### Description

The `username` parameter specifies the LeetCode username for which you intend to retrieve data. This data might include user-specific information such as submissions, contest history, or profile details.

The `callback` parameter expects a function that will be invoked upon completion of the data-fetching process. This callback function will receive either an error object if there's an issue with the fetching process, or the fetched data itself.


## Example
```javascript
const fetchLeetCodeData = require('fetch-leetcode-data');

const username = 'your_leetcode_username';

fetchLeetCodeData(username, (error, data) => {
    if (error) {
        console.error('Error fetching LeetCode data:', error);
    } else {
        console.log('LeetCode data:', data);
    }
});
```

