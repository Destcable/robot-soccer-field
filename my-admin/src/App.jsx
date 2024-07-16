import { Admin, Resource, fetchUtils } from "react-admin";
import SoccerFieldsList from "./resources/soccer/Fields/SoccerFieldsList";
import { stringify } from 'query-string';
import SoccerFieldsCreate from "./resources/soccer/Fields/SoccerFieldsCreate";

const apiUrl = 'http://127.0.0.1:5000';
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
    getList: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}`).then(({ headers, json }) => {
            return {
                data: json,
                total: json.length,
            };
        });
    },
}


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="soccer/fields" list={SoccerFieldsList} create={SoccerFieldsCreate} options={{ label: 'Футбольные поля' }} />
    </Admin>
);

export default App;