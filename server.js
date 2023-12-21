const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
 
const jsonData = {
 rewards : {[
  {
    certificationName: 'Salesforce Advanced Course',
    domain: 'Salesforce',
    rewardValue: '300'
  },
  {
    certificationName: 'Apex Triggers Beginner',
    domain: 'Apex',
    rewardValue: '100'
  },
  {
    certificationName: 'MS Dynamic Advanced Course',
    domain: 'MS Dynamics',
    rewardValue: '200'
  },
 {
    certificationName: 'Mulesoft Advanced API Course',
    domain: 'Mulesoft',
    rewardValue: '200'
  },

 {
    certificationName: 'Back-End Advanced Course',
    domain: 'Web Development',
    rewardValue: '150'
  },

 {
    certificationName: 'CSS Advanced Course',
    domain: 'Web Development',
    rewardValue: '50'
  },

 {
    certificationName: 'JavaScript Advanced Course',
    domain: 'JavaScript',
    rewardValue: '300'
  }
 
]}
};
 
app.get('/api/data', (req, res) => {
  res.json(jsonData);
});
 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
