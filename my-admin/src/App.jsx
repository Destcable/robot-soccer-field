import { Admin, Resource, fetchUtils } from "react-admin";
import SoccerFieldsList from "./resources/soccer/Field/SoccerFieldsList";
import { stringify } from 'query-string';
import SoccerFieldsCreate from "./resources/soccer/Field/SoccerFieldsCreate";

const apiUrl = 'http://127.0.0.1:3000';
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
    getList: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}`).then(({ headers, json }) => {
            console.log(json)
            return {
                data: json,
                total: json.length,
            };
        });
    },
    create: async (resource, params) => {
        const { json } = await httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data)
        })
        return { data: json }
    }
}


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="soccer/field" list={SoccerFieldsList} create={SoccerFieldsCreate} options={{ label: 'Футбольные поля' }} />
    </Admin>
);

export default App;