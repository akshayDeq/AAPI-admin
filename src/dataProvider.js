import jsonRestDataProvider from "ra-data-fakerest";

import data from "./dummy_data";

const dataProvider = jsonRestDataProvider(data, true);
export default dataProvider;
