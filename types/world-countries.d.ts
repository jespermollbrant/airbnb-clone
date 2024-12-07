declare module "world-countries" {
    interface OfficialAndCommon {
      official: string;
      common: string;
    }
  
    interface Demonyms {
      f: string;
      m: string;
    }
  
    interface Country {
      name: {
        common: string;
        official: string;
        nativeName: { [key: string]: OfficialAndCommon };
      };
      tld: string[];
      cca2: string;
      ccn3: string;
      cca3: string;
      cioc: string;
      independent: boolean;
      status: string;
      unMember: boolean;
      currencies: { [key: string]: { name: string; symbol: string } };
      idd: { root: string; suffixes: string[] };
      capital: string[];
      altSpellings: string[];
      region: string;
      subregion: string;
      languages: { [key: string]: string };
      translations: { [key: string]: OfficialAndCommon };
      latlng: [number, number];
      demonyms: { [key: string]: Demonyms };
      landlocked: boolean;
      borders: string[];
      area: number;
      flag: string;
    }
  
    const countries: Country[];
    export default countries;
  }