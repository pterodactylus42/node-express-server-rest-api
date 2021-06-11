let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
  3: {
    id: '3',
    username: 'ptero',
  },
  4: {
    id: '4',
    username: 'guest',
  },
};

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

let lessons = {
  1: {
    "id": 1,
    "name": "Beginner Group Guitar",
    "frequency": "Weekly",
    "date": "2021-05-24 12:00 Mo",
    "duration": 30,
    "venue": "Rehearsal Room",
  },
  2: {
    "name": "Circular Breathing",
    "frequency": "Weekly",
    "date": "2021-05-25 14:00 Tu",
    "duration": 30,
    "venue": "Escape Room",
    "pupils": null,
    "id": 2
  },
  3: {
    "id": 3,
    "name": "Yoga",
    "frequency": "Weekly",
    "date": "2021-05-26 19:30 We",
    "duration": 30,
    "venue": "Empty Room",
  },
  4: {
    "name": "Coffee Break",
    "frequency": "Weekly",
    "date": "2021-05-27 17:00 Th",
    "duration": 30,
    "venue": "Teachers Room",
    "pupils": null,
    "id": 4
  },
  5: {
    "id": 5,
    "name": "Group reflection",
    "frequency": "weekly",
    "date": "2021-05-28 20:00 Fr",
    "duration": 30,
    "venue": "Arena",
  }
};

let pupils = {
    1: {
      "firstname": "herman",
      "lastname": "melville",
      "created": "2021-05-24T17:54:29.738Z",
      "works": [],
      "id": 1
    },
    2: {
      "firstname": "johann wolfgang",
      "lastname": "mozart",
      "created": "2021-05-24T17:54:43.099Z",
      "works": null,
      "id": 2
    },
    3: {
      "firstname": "amadeus",
      "lastname": "falco",
      "created": "2021-05-24T17:54:51.204Z",
      "works": null,
      "id": 3
    },
    4: {
      "firstname": "karl",
      "lastname": "valentin",
      "created": "2021-05-24T20:25:47.895Z",
      "works": [],
      "id": 4
    },
    5: {
      "firstname": "joan",
      "lastname": "osborne",
      "created": "2021-05-26T12:14:46.585Z",
      "works": [],
      "id": 5
    }
 };

export default {
  users,
  messages,
  lessons,
  pupils
};
