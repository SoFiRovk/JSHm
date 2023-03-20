const users = `
{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Parth",
        "last": "Chiplunkar"
      },
      "location": {
        "street": {
          "number": 8134,
          "name": "Kazimar St"
        },
        "city": "Thane",
        "state": "Meghalaya",
        "country": "India",
        "postcode": 50968,
        "coordinates": {
          "latitude": "7.5660",
          "longitude": "-39.3355"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "parth.chiplunkar@example.com",
      "login": {
        "uuid": "b3ed6ea7-5cbc-408f-bdd3-bb0c8edde08a",
        "username": "ticklishelephant726",
        "password": "spiker",
        "salt": "vXRXdF0B",
        "md5": "e3cd7e211f2245c46fae67b4fcfe10c9",
        "sha1": "00d8ac5432efceb17957b09790c83153f39229b8",
        "sha256": "f402dc25d698733b4f8d3d306c5c674ba2e935bc0962cc3256f20f8b5fbc583d"
      },
      "dob": {
        "date": "1983-10-24T01:41:38.309Z",
        "age": 39
      },
      "registered": {
        "date": "2003-06-17T10:07:53.872Z",
        "age": 19
      },
      "phone": "8888805606",
      "cell": "7057663831",
      "id": {
        "name": "UIDAI",
        "value": "135858443433"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "IN"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Isabelle",
        "last": "Bryant"
      },
      "location": {
        "street": {
          "number": 4889,
          "name": "Stanley Road"
        },
        "city": "Stevenage",
        "state": "Powys",
        "country": "United Kingdom",
        "postcode": "VB3 5TG",
        "coordinates": {
          "latitude": "-81.8287",
          "longitude": "52.6120"
        },
        "timezone": {
          "offset": "+3:00",
          "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "email": "isabelle.bryant@example.com",
      "login": {
        "uuid": "118ca94d-5224-48d9-a775-7556e61187cc",
        "username": "blackmouse408",
        "password": "miller1",
        "salt": "A7ZPtFua",
        "md5": "473b78227a2a5aca4dabb425c06f6fb4",
        "sha1": "f0d1b362d5be0a13ce45a33c1191ca33437d4c7a",
        "sha256": "4cdd27551df575b093a87cc0e90f815d4034e6248d0237fd52f1ab53f4fe6c3a"
      },
      "dob": {
        "date": "1978-09-25T03:57:16.807Z",
        "age": 44
      },
      "registered": {
        "date": "2010-08-20T18:50:57.568Z",
        "age": 12
      },
      "phone": "015242 07029",
      "cell": "07552 975443",
      "id": {
        "name": "NINO",
        "value": "SA 90 62 76 S"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/65.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/65.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/65.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Bachittar",
        "last": "Manjunath"
      },
      "location": {
        "street": {
          "number": 9056,
          "name": "Sitabuldi Main Rd"
        },
        "city": "Tirunelveli",
        "state": "Karnataka",
        "country": "India",
        "postcode": 67808,
        "coordinates": {
          "latitude": "43.5894",
          "longitude": "154.9828"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "bachittar.manjunath@example.com",
      "login": {
        "uuid": "6fda4850-92a5-496a-b8ec-0f2b9d13e100",
        "username": "tinydog511",
        "password": "torres",
        "salt": "qSSUzP8o",
        "md5": "80c176dcc4d9fd140ea430fba81f22db",
        "sha1": "0b54b9f99c5567721fb7b65c3c926e94a4aced42",
        "sha256": "64f0eff22e8a95ed4feae2be6547f2b2ab08a88a61ea8bd8d157b2a2d0b4390b"
      },
      "dob": {
        "date": "1982-12-05T16:39:26.372Z",
        "age": 40
      },
      "registered": {
        "date": "2012-12-27T13:11:14.370Z",
        "age": 10
      },
      "phone": "8845828842",
      "cell": "7994587231",
      "id": {
        "name": "UIDAI",
        "value": "812177690339"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/78.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/78.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/78.jpg"
      },
      "nat": "IN"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Débora",
        "last": "Robledo"
      },
      "location": {
        "street": {
          "number": 575,
          "name": "Viaducto Tirado"
        },
        "city": "San Bartolomé Cuahuixmatlac",
        "state": "Jalisco",
        "country": "Mexico",
        "postcode": 39160,
        "coordinates": {
          "latitude": "-41.2731",
          "longitude": "66.6097"
        },
        "timezone": {
          "offset": "-12:00",
          "description": "Eniwetok, Kwajalein"
        }
      },
      "email": "debora.robledo@example.com",
      "login": {
        "uuid": "08018a46-2d2e-4601-96ff-07330c04f522",
        "username": "beautifulduck339",
        "password": "erotica",
        "salt": "yWy0498B",
        "md5": "d7abf8270bcc21ff8764dd483089af63",
        "sha1": "4ad264696b3c56f2f457c1587273c4a5ffad481f",
        "sha256": "a40f46b78faa37c1b867e2baa73b79d7b3797e2310f7e6edc037ba4fae73ddcd"
      },
      "dob": {
        "date": "1989-02-05T17:30:22.791Z",
        "age": 34
      },
      "registered": {
        "date": "2014-11-10T16:30:48.015Z",
        "age": 8
      },
      "phone": "(661) 608 1137",
      "cell": "(626) 747 4579",
      "id": {
        "name": "NSS",
        "value": "26 35 11 2235 4"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/81.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/81.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/81.jpg"
      },
      "nat": "MX"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Faustine",
        "last": "Fabre"
      },
      "location": {
        "street": {
          "number": 4732,
          "name": "Rue du Bon-Pasteur"
        },
        "city": "Boulogne-Billancourt",
        "state": "Gers",
        "country": "France",
        "postcode": 35977,
        "coordinates": {
          "latitude": "46.0347",
          "longitude": "42.4801"
        },
        "timezone": {
          "offset": "+3:00",
          "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "email": "faustine.fabre@example.com",
      "login": {
        "uuid": "7eabdbe6-5862-4ccb-a190-526b6301f170",
        "username": "crazykoala525",
        "password": "control",
        "salt": "Gff7IYgZ",
        "md5": "c951df7eebf1cbd4dc5e228f94182026",
        "sha1": "0c0992975b5c0ac5573fdbe24e3af6f7bd5a3e78",
        "sha256": "64552ae3db712920e9a3378d4586861801739ef4805880a57360c16a816f5021"
      },
      "dob": {
        "date": "1985-10-28T12:58:22.179Z",
        "age": 37
      },
      "registered": {
        "date": "2003-03-23T05:04:29.024Z",
        "age": 19
      },
      "phone": "02-60-77-63-42",
      "cell": "06-42-60-76-62",
      "id": {
        "name": "INSEE",
        "value": "2850937125570 66"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/4.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
      },
      "nat": "FR"
    }
  ],
  "info": {
    "seed": "ace00929b38b658a",
    "results": 5,
    "page": 1,
    "version": "1.4"
  }
}`;
