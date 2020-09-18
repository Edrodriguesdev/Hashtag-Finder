//componentDidMount() {
var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keynmzEKs3B99kRBy" }).base(
  "appVIbIe3dgo7JRR8"
);

const table = base("Login");

const getRecords = async () => {
  const records = await table
    .select({ fields: ["Email", "Senha"] })
    .firstPage();
  console.log(records);
};

getRecords();
//}
