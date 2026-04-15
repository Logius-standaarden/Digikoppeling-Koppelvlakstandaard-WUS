import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "name" : "Peter Haasnoot",
        "company" : "Logius",
        "url" : "https://www.logius.nl"
      } ],
  editors: [ 
      { 
        "name" : "Peter Haasnoot",
        "company" : "Logius",
        "url" : "https://www.logius.nl"
      },
      { 
        "name" : "Pieter Hering",
        "company" : "Logius",
        "url" : "https://www.logius.nl"
      }
    ],
  github: "https://github.com/Logius-standaarden/Digikoppeling-Koppelvlakstandaard-WUS",
  previousPublishDate: "2020-10-06",
  previousPublishVersion: "3.8",
  pubDomain: "dk",
  publishDate: "2022-04-11",
  publishVersion: "3.8.1",
  shortName: "wus",
  specStatus: "WV",
  specType: "ST"
});
