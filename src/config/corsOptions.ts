import { CorsOptions, CorsOptionsDelegate } from "cors";

const whitelist = [
  "http://localhost:5173",
  "https://localhost:5173",
  //   --> New Urls here <--
];

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin!) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS!"));
    }
  },
  optionsSuccessStatus: 200,
};

export default corsOptions;
